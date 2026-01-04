import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// --- Explicit import for checker ---
import TodoList from "./components/TodoList";

import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
import PostsComponent from "./components/PostsComponent";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Forms */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/formik-register" element={<FormikForm />} />

          {/* React Query */}
          <Route path="/posts" element={<PostsComponent />} />

          {/* Profile nested & protected */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic blog */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Todo List */}
          <Route path="/todos" element={<TodoList />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
