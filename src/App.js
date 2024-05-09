import "./App.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/home";

import {} from "./pages/general/index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {/* <Route path={ROUTE.companyIncomeTax} element={<CompanyIncomeTax />} /> */}
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
