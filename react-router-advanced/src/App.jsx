import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
import PostsComponent from "./components/PostsComponent";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();
const isAuthenticated = false; // simulated auth

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Form routes */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/formik-register" element={<FormikForm />} />

          {/* React Query */}
          <Route path="/posts" element={<PostsComponent />} />

          {/* Nested & Protected Profile routes */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic blog route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
