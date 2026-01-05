// 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node, Edge, NodeType, Workflow } from "../types";
import { generateId } from "../utils/id";

export interface EditorState {
  workflowId: string | null;
  workflowName: string;
  nodes: Record<string, Node>;
  edges: Edge[];
  source: string;
  type: string;
  selectedNodeId: string | null;
  connectMode: { fromNodeId: string } | null;
  nodeIdCounter: number;
}

const initialState: EditorState = {
  workflowId: null,
  workflowName: "Untitled Workflow",
  nodes: {},
  edges: [],
  selectedNodeId: null,
  connectMode: null,
  source: "",
  type: "",
  nodeIdCounter: 0,
};

const editorSlice = createSlice({
  name: "editor",
  // @ts-ignore
  initialState,
  reducers: {
    loadWorkflow: (state, action: PayloadAction<Workflow>) => {
      state.workflowId = action.payload.id;
      state.workflowName = action.payload.name;
      state.nodes = action.payload.nodes;
      state.edges = action.payload.edges;
      state.selectedNodeId = null;
      state.connectMode = null;

      const nodeIds = Object.keys(action.payload.nodes)
        .map((id) => parseInt(id, 10))
        .filter((id) => !isNaN(id));
      const maxId = nodeIds.length > 0 ? Math.max(...nodeIds) : -1;
      state.nodeIdCounter = maxId + 1;
    },

    setWorkflowName: (state, action: PayloadAction<string>) => {
      state.workflowName = action.payload;
    },

    addNode: (
      state,
      action: PayloadAction<{ type: NodeType; x: number; y: number }>
    ) => {
      const id = String(state.nodeIdCounter);
      state.nodeIdCounter++;
      state.nodes[id] = {
        id,
        type: action.payload.type,
        x: action.payload.x,
        y: action.payload.y,
        label: `${action.payload.type} Node`,
        data: {},
      };
    },

    updateNode: (
      state,
      action: PayloadAction<{ id: string; data: Partial<Node> }>
    ) => {
      if (state.nodes[action.payload.id]) {
        state.nodes[action.payload.id] = {
          ...state.nodes[action.payload.id],
          ...action.payload.data,
        };
      }
    },

    deleteNode: (state, action: PayloadAction<string>) => {
      const nodeId = action.payload;
      delete state.nodes[nodeId];
      state.edges = state.edges.filter(
        (edge) => edge.from !== nodeId && edge.to !== nodeId
      );
      if (state.selectedNodeId === nodeId) {
        state.selectedNodeId = null;
      }
    },

    moveNode: (
      state,
      action: PayloadAction<{ id: string; x: number; y: number }>
    ) => {
      if (state.nodes[action.payload.id]) {
        state.nodes[action.payload.id].x = action.payload.x;
        state.nodes[action.payload.id].y = action.payload.y;
      }
    },

    setSelectedNodeId: (state, action: PayloadAction<string | null>) => {
      state.selectedNodeId = action.payload;
      state.connectMode = null;
    },

    startConnect: (state, action: PayloadAction<string>) => {
      state.connectMode = { fromNodeId: action.payload };
      state.selectedNodeId = null;
    },

    completeConnect: (state, action: PayloadAction<string>) => {
      if (state.connectMode) {
        const { fromNodeId } = state.connectMode;
        const toNodeId = action.payload;

        const isSelfConnection = fromNodeId === toNodeId;
        const edgeExists = state.edges.some(
          (edge) => edge.from === fromNodeId && edge.to === toNodeId
        );

        if (!isSelfConnection && !edgeExists) {
          const id = generateId();
          state.edges.push({ id, from: fromNodeId, to: toNodeId });
        }
        state.connectMode = null;
      }
    },

    cancelConnect: (state) => {
      state.connectMode = null;
    },

    deleteEdge: (state, action: PayloadAction<string>) => {
      state.edges = state.edges.filter((edge) => edge.id !== action.payload);
    },

    addEdge: (
      state,
      action: PayloadAction<{ id?: string; from: string; to: string }>
    ) => {
      const { from, to, id } = action.payload;

      if (from === to) return;

      const edgeExists = state.edges.some(
        (edge) => edge.from === from && edge.to === to
      );

      if (!edgeExists) {
        state.edges.push({
          id: id ?? generateId(),
          from,
          to,
        });
      }
    },
  },
});

export const {
  loadWorkflow,
  setWorkflowName,
  addNode,
  updateNode,
  deleteNode,
  moveNode,
  setSelectedNodeId,
  startConnect,
  completeConnect,
  cancelConnect,
  deleteEdge,
  addEdge,
} = editorSlice.actions;

export default editorSlice.reducer;
