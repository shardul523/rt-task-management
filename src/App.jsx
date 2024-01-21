import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthenticationRoute from "./routes/AuthenticationRoute";
import HomeRoute from "./routes/HomeRoute";
import Auth from "./pages/Auth";
import MainLayout from "./components/layouts/MainLayout";
import NewTaskForm from "./pages/NewTaskForm";
import Home from "./pages/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="auth" element={<AuthenticationRoute />}>
          <Route path="sign-in" element={<Auth />} />
          <Route path="sign-up" element={<Auth purpose="sign-up" />} />
        </Route>
        <Route path="/" element={<HomeRoute />}>
          <Route path="new-task" element={<NewTaskForm />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
