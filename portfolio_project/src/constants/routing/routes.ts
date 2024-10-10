import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/Contact";

import { ROUTES } from "./urls";

export const ROUTES_WITH_NAVIGATION = [
  {
    path: ROUTES.HOME,
    element: Home,
    exact: true,
  },
  {
    path: ROUTES.ABOUT,
    element: About,
  },
  {
    path: ROUTES.PROJECTS,
    element: Projects,
  },
  {
    path: ROUTES.CONTACT,
    element: Contact,
  },
];
