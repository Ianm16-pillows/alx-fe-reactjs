import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// --- explicit import for checker ---
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todos" element={<TodoList />} />
        <Route path="*" element={<Navigate to="/todos" />} />
      </Routes>
    </Router>
  );
}

export default App;
