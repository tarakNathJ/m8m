import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { motion, AnimatePresence, number } from "framer-motion";
import { updateNode, deleteNode } from "../../store/editorSlice";
import { Trash2, Save } from "lucide-react";
import { Node } from "../../types";
import { api_init } from "@/hooks/api";
import { toast } from "sonner";

const Inspector: React.FC = () => {
  const dispatch = useDispatch();

  const [node, setNode] = useState(0);
  const [type_of__step, setType_of_step] = useState({});

  const { selectedNodeId, nodes } = useSelector(
    (state: RootState) => state.editor
  );

  const selectedNode = selectedNodeId ? nodes[selectedNodeId] : null;

  const type_of_step = "type_of_step";

  const raw = sessionStorage.getItem(type_of_step);
  let data: any[] = [];

  try {
    data = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Invalid JSON in sessionStorage[type_of_step]");
  }

  const appName = selectedNode?.label?.split(" ")[0] ?? "";
  const found = data.find((item) => item.app === appName);

  let metadataArray: any[] = [];

  if (Array.isArray(found?.meta_data)) {
    metadataArray = found.meta_data;
  } else if (
    found?.meta_data &&
    typeof found.meta_data === "object" &&
    !Array.isArray(found.meta_data)
  ) {
    metadataArray = Object.entries(found.meta_data).map(([key, value]) => ({
      label: key,
      value,
    }));
  }

  const [fieldValues, setFieldValues] = useState<Record<string, any>>({});

  useEffect(() => {
    if (selectedNode) {
      const initialValues: Record<string, any> = {};

      metadataArray.forEach((m) => {
        // Prioritize node metadata, then session storage default, then empty string
        initialValues[m.label] =
          selectedNode.metadata?.[m.label] ?? m.value ?? "";
      });
      setFieldValues(initialValues);
    } else {
      setFieldValues({});
    }
  }, [selectedNodeId, selectedNode]);

  const handleFieldChange = (label: string, value: string) => {
    setType_of_step(found);
    setFieldValues((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const handleSave = async () => {
    if (!selectedNodeId) return;

    const updatedNodeData = {
      metadata: fieldValues,
    };

    try {
      const responce = await api_init.post("/api/workflow/create-step", {
        name: found.name,
        index: parseInt(selectedNode.id),
        workflow_id: JSON.parse(sessionStorage.getItem("workflow_id")),
        typeofstap_id: found.id,
        meta_data: fieldValues,
      });

      if (responce.data.success) {
        toast(`save node : ${(type_of__step as any).name}`, {
          description: responce.data.message,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast(`node save failed : ${(type_of__step as any).name}`, {
        description: error.message,
      });
    }
  };

  const handleDelete = async () => {
    if (selectedNodeId) {
      // console.log("Deleting node with ID:", selectedNodeId);

      const responce = await api_init.delete(
        `/api/workflow/delete-step/${selectedNodeId}/${JSON.parse(
          sessionStorage.getItem("workflow_id") || "null"
        )}`
      );
      if (responce.data.success) {
        toast(`delete node : ${(type_of__step as any).name}`, {
          description: responce.data.message,
        });
        dispatch(deleteNode(selectedNodeId));
      }
    }
  };

  // ✅ The return is now AFTER hooks → FIXED
  if (!selectedNode) {
    return <div className="p-4 text-gray-400">No node selected</div>;
  }

  const sortedNodeIds = Object.keys(nodes).sort(
    (a, b) => parseInt(a, 10) - parseInt(b, 10)
  );
  const nodeIndex = selectedNodeId ? sortedNodeIds.indexOf(selectedNodeId) : -1;

  return (
    <AnimatePresence>
      {selectedNode && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-80 bg-gray-900/50 p-4 border-l border-white/10 flex flex-col z-20"
        >
          <h2 className="text-xl font-bold text-white mb-6">Inspector</h2>

          <div className="flex-grow space-y-4">
            <div className=" hidden ">
              <label className="text-sm font-medium text-gray-400 block mb-1">
                Node ID
              </label>

              <input
                type="number"
                name="node"
                id="node-id"
                placeholder="enter node index every start from 0"
                onChange={(e) => setNode(parseInt(selectedNode.id))}
                className="w-full text-xs text-gray-500 bg-gray-800 p-2 rounded"
              />
            </div>

            {metadataArray.map((item: any, index: number) => {
              return (
                <InputField
                  key={index}
                  label={item.label}
                  value={fieldValues[item.label] ?? ""}
                  //@ts-ignore
                  workflow_id={JSON.parse(
                    sessionStorage.getItem("workflow_id")
                  )}
                  user_id={JSON.parse(sessionStorage.getItem("user_id"))}
                  onChange={(v) => handleFieldChange(item.label, v)}
                />
              );
            })}

            <div>
              <label className="text-sm font-medium text-gray-400 block mb-1">
                Type
              </label>
              <p className="text-sm text-white bg-gray-800 p-2 rounded">
                {selectedNode.type}
              </p>
            </div>
          </div>

          <motion.button
            onClick={handleSave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 mt-4 py-2 bg-green-500/80 hover:bg-green-500 text-white font-semibold rounded-lg"
          >
            <Save className="w-4 h-4" />
            Save Node
          </motion.button>

          <motion.button
            onClick={handleDelete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 mt-4 py-2 bg-red-500/80 hover:bg-red-500 text-white font-semibold rounded-lg"
          >
            <Trash2 className="w-4 h-4" />
            Delete Node
          </motion.button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

const InputField = ({
  label,
  value,
  // @ts-ignore
  workflow_id,
  // @ts-ignore
  user_id,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) => {

  console.log("Rendering InputField:", { label, value });
  
  return (
    <div>
      <label className="text-sm font-medium text-gray-400 block mb-1">
        {label}
      </label>

      <input
        type={label === "email" ? "email" : "text"}
        placeholder={value ?? ""} // <= always a string
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4295f1]"
      />
    </div>
  );
};

export default Inspector;
