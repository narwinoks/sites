import "./App.css";
import { AppRoutes } from "./router/routes";
import LoadingBarComponent from "./utils/LoadingBar";

function App() {
  return (
    <>
      <LoadingBarComponent></LoadingBarComponent>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
