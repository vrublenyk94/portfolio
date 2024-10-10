import { useMemo } from "react";
import { RouteObject } from "react-router-dom";
import { ROUTES_WITH_NAVIGATION } from "../constants/routing/routes";
import SuspenseLoading from "../components/common/SuspenceLoading";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";

export const useRoutesConfig = (): RouteObject[] => {
  return useMemo(
    () => [
      {
        element: (
          <Layout>
            <SuspenseLoading>
              <Outlet />
            </SuspenseLoading>
          </Layout>
        ),
        children: ROUTES_WITH_NAVIGATION.map((route) => ({
          path: route.path,
          element: <route.element />,
        })),
      },
      {
        path: "*",
        element: <Navigate to="/home" replace />,
      },
    ],
    []
  );
};
