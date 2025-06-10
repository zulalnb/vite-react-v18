import { Route, Routes } from "react-router";

import NotFound from "./NotFound";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
