import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import EditorPage from "./pages/EditorPage";
import WorkflowsPage from "./pages/WorkflowsPage";
import { setAuthFromLocalStorage } from "./store/authSlice";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { view, currentWorkflowId } = useSelector(
    (state: RootState) => state.navigation
  );
  
  useEffect(() => {
    dispatch(setAuthFromLocalStorage());
  }, [dispatch]);

  

  return (
    <div className="min-h-screen">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/editor/:workflowId" element={<EditorPage  key={`editor-${currentWorkflowId}`} workflowId={currentWorkflowId!} />} />
          <Route path="/workflows" element={<WorkflowsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
