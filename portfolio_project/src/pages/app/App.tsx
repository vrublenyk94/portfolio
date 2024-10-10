import { useRoutes } from "react-router-dom";
import { useRoutesConfig } from "../../hooks/useRouteConfig";

function App() {
  const routes = useRoutesConfig();
  return useRoutes(routes);
}

export default App;
