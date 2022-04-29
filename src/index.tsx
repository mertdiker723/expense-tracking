import { render } from "react-dom";
import App from "./App";
import "./style/app.css";
import 'react-toastify/dist/ReactToastify.css';

const root = document.querySelector("#root");

render(<App />, root);
