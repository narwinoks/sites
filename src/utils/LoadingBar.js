import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const LoadingBarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loadingBarRef = useRef(null);
  const [isPageReloading, setIsPageReloading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsPageReloading(true);
      loadingBarRef.current && loadingBarRef.current.staticStart();
    };

    const handleRouteChangeComplete = () => {
      setIsPageReloading(false);
      loadingBarRef.current && loadingBarRef.current.complete();
    };

    handleRouteChange();

    return () => {
      handleRouteChangeComplete();
    };
  }, [navigate, location.pathname]);

  return (
    <>
      {isPageReloading && <LoadingBar ref={loadingBarRef} color="#3498db" />}{" "}
      {/* Set the color to blue (#3498db) */}
      <Outlet />
    </>
  );
};

export default LoadingBarComponent;
