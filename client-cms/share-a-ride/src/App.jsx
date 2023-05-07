import { Provider } from "react-redux";
// import store from "./store";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // <Provider>
     
    //   <ToastContainer />
    // </Provider>
    <RouterProvider router={router} />
  );
}

export default App;
