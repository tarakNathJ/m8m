import React, { useCallback, useMemo, useEffect } from "react"; // ⭐ ADDED useEffect
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import otpGenerator from "otp-generator";

import {
  addNode,
  updateNode,
  addEdge as addEdgeRedux,
  setSelectedNodeId,
  loadWorkflow, // ⭐ ADDED
} from "../../store/editorSlice.js";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  Handle,
  Position,
  type Node as RFNode,
  type Edge as RFEdge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  type NodeProps,
  type NodeTypes,
  type EdgeTypes,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import CustomEdge from "./Edge";

export interface Node {
  id: string;
  type: string;
  x: number;
  y: number;
  label: string;
  data: Record<string, any>;
}

export interface Edge {
  id: string;
  from: string;
  to: string;
}

export interface Workflow {
  id: string;
  name: string;
  nodes: Record<string, Node>;
  edges: Edge[];
}

/* ======================================================
   Custom Node
====================================================== */
const NodeComponent: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div
      style={{
        padding: 12,
        borderRadius: 8,
        border: selected ? "2px solid #60a5fa" : "1px solid #ccc",
        background: "#1f2937",
        color: "white",
        minWidth: 140,
        textAlign: "center",
      }}
    >
      <Handle type="target" position={Position.Top} />
      {data.label as string}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

/* ======================================================
   Node & Edge Types
====================================================== */
const nodeTypes: NodeTypes = {
  customNode: NodeComponent,
};

const edgeTypes: EdgeTypes = {
  customEdge: CustomEdge as React.ComponentType<any>,
};

/* ======================================================
   Helpers
====================================================== */
function mapNodes(
  nodes: Record<string, any>,
  selectedNodeId: string | null
): RFNode[] {
  return Object.values(nodes).map((n: any) => ({
    id: n.id,
    type: "customNode",
    position: { x: n.x ?? 0, y: n.y ?? 0 },
    selected: n.id === selectedNodeId,
    data: {
      label: n.label ?? n.type ?? "Node",
      id: n.id,
    },
  }));
}

function mapEdges(edges: any[]): RFEdge[] {
  return edges.map((e) => ({
    id: `${e.from} : ${e.to}`,
    source: e.from,
    target: e.to,
  }));
}

/* ======================================================
   Workflow Canvas
====================================================== */
const WorkflowCanvas: React.FC = () => {
  const dispatch = useDispatch();

  const { nodes, edges, selectedNodeId } = useSelector(
    (state: RootState) => state.editor
  );

  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  useEffect(() => {
    const raw = sessionStorage.getItem("user_privious_step");
    if (!raw) return;

    const storedNodes: any[] = JSON.parse(raw);

    const nodesMap: Record<string, Node> = {};
    const edges: Edge[] = [];

    storedNodes.forEach((item: any, index: number) => {
      const id = String(item.id);

      nodesMap[id] = {
        id,
        type: item.name,
        label: item.name,
        x: 100 * index,
        y: 200 * index,
        data: item.meta_data ?? {},
      };

      if (index > 0) {
        edges.push({
          id: `${storedNodes[index - 1].id} : ${id}`,
          from: String(storedNodes[index - 1].id),
          to: id,
        });
      }
    });

    const workflow: Workflow = {
      id: "session-workflow",
      name: "Session Workflow",
      nodes: nodesMap,
      edges,
    };

    // @ts-ignore
    dispatch(loadWorkflow(workflow));
  }, [dispatch]);

  const rfNodes = useMemo(() =>mapNodes(nodes, selectedNodeId), [nodes, selectedNodeId]);

  const rfEdges = useMemo(() => mapEdges(edges), [edges]);

  const onPaneClick = useCallback(() => {
    dispatch(setSelectedNodeId(null));
  }, [dispatch]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      changes.forEach((change) => {
        if (change.type === "position" && change.position) {
          dispatch(
            updateNode({
              id: change.id,
              data: {
                x: change.position.x,
                y: change.position.y,
              },
              ...nodeDefaults,
            })
          );
        }

        if (change.type === "select") {
          dispatch(setSelectedNodeId(change.selected ? change.id : null));
        }
      });
    },
    [dispatch]
  );

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    console.log("Edge changes:", changes);
  }, []);

  const onConnect = useCallback(
    (connection: Connection) => {
      if (!connection.source || !connection.target) return;

      dispatch(
        addEdgeRedux({
          from: connection.source,
          to: connection.target,
        })
      );
    },
    [dispatch]
  );

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const bounds = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      dispatch(addNode({ type, x, y } as any));
    },
    [dispatch]
  );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: RFNode) => {
      dispatch(setSelectedNodeId(node.id));
    },
    [dispatch]
  );

  console.log(nodes)
  console.log(edges)

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={onNodeClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            if (node.type === "customNode") return "#60a5fa"; // blue
            return "#999";
          }}
          nodeStrokeColor={(node) => {
            return node.selected ? "#22c55e" : "#1f2937"; // green / dark
          }}
          nodeStrokeWidth={2}
          maskColor="rgba(0, 0, 0, 0.6)" // background overlay
          style={{
            backgroundColor: "#111827", // minimap background
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
