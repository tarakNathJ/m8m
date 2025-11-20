
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Workflow } from '../types';
import { getWorkflows, saveWorkflows } from '../utils/localStorage';
import { StoreData , LoadState , RemoveData } from './session_storage';
import { generateId } from '../utils/id';

interface WorkflowsState {
  workflows: Workflow[];
}



const workflowsSlice = createSlice({
  name: 'workflows',
      initialState:{
        data:JSON.parse(localStorage.getItem("workflows")) || [],     
    },
  reducers: {
    loadWorkflows(state) {
      state.data = getWorkflows();
    },
    createWorkflow(state, action: PayloadAction<{ name: string }>) {

     
      const newWorkflow: Workflow = {
        id: generateId(),
        name: action.payload.name,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        nodes: {},
        edges: [],
      };
      
      // state.workflows.push(newWorkflow);
      state.data = action.payload;
      // @ts-ignore
      saveWorkflows(action.payload);
    },
    updateWorkflow(state, action: PayloadAction<Workflow>) {
        const index = state.data.findIndex(w => w.id === action.payload.id);
        if (index !== -1) {
            state.data[index] = {
                ...action.payload,
                updated: new Date().toISOString(),
            };
            saveWorkflows(state.data);
        }
    },
    deleteWorkflow(state, action: PayloadAction<string>) {
        state.data = state.data.filter(w => w.id !== action.payload);
        saveWorkflows(state.data);
    },
    duplicateWorkflow(state, action: PayloadAction<string>) {
        const original = state.data.find(w => w.id === action.payload);
        if (original) {
            const newWorkflow: Workflow = {
                ...original,
                id: generateId(),
                name: `${original.name} (Copy)`,
                created: new Date().toISOString(),
                updated: new Date().toISOString(),
            };
            state.data.push(newWorkflow);
            saveWorkflows(state.data);
        }
    }
  },
});

export const { loadWorkflows, createWorkflow, updateWorkflow, deleteWorkflow, duplicateWorkflow } = workflowsSlice.actions;
export default workflowsSlice.reducer;
