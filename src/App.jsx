import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

export default App;