import type { RouteObject } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Technology from "./pages/Technology";
import Dashboard from "./pages/Dashboard";
import DeviceMonitor from "./pages/DeviceMonitor";
import Manual from "./pages/Manual";
import Purchase from "./pages/Purchase";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

export const appRoutes: RouteObject[] = [
  ...(["ja", "en"] as const).map((locale) => ({
    path: `/${locale}`,
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "technology", Component: Technology },
      { path: "dashboard", Component: Dashboard },
      { path: "device-screen", Component: DeviceMonitor },
      { path: "manual", Component: Manual },
      { path: "purchase", Component: Purchase },
      { path: "support", Component: Support },
      { path: "*", Component: NotFound },
    ],
  })),
  {
    path: "/", Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "technology", Component: Technology },
      { path: "dashboard", Component: Dashboard },
      { path: "device-screen", Component: DeviceMonitor },
      { path: "manual", Component: Manual },
      { path: "purchase", Component: Purchase },
      { path: "support", Component: Support },
      { path: "*", Component: NotFound },
    ],
  },
];
