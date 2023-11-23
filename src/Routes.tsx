import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Colors = React.lazy(() => import("pages/Colors"));
const TypographyStyles = React.lazy(() => import("pages/TypographyStyles"));
const Components = React.lazy(() => import("pages/Components"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/components" element={<Components />} />
          <Route path="/typographystyles" element={<TypographyStyles />} />
          <Route path="/colors" element={<Colors />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
