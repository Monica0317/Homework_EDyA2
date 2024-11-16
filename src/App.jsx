import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./paginas/HomePage";
import AboutPage from "./paginas/AboutPage";
import LoginPage from "./paginas/LoginPage";
import PrivatePage from "./paginas/PrivatePage";
import NavComponent from "./components/ComponenteNav";

import PrivateRoute from "./util/PrivateRoutes";
import { useAuth } from "./Context/AuthContext";

const App = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/private" element={<PrivatePage />} />
        </Route>
      </Routes>
    </>
  );
};

const AppWithRouter = () => {
  const location = useLocation();
  const { dispatch } = useAuth();

  useEffect(() => {
    if (location.pathname !== "/login") {
      dispatch({ type: "SET_LAST_PAGE", payload: location.pathname });
      return;
    }
  }, [location.pathname, dispatch]);

  return <App />;
};

const MainApp = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default MainApp;