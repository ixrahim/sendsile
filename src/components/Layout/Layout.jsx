import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import "../Layout/layout.css";
import useMediaQuery from "../../utils/hooks/useMedia";

function Layout() {
  const isMobile = useMediaQuery("(max-width: 425px)");
  console.log(isMobile);

  return (
    <div className="main">
      <Header isMobile={isMobile} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet context={isMobile} />
        </Suspense>
      </main>
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default Layout;
