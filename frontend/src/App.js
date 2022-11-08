
import {BrowserRouter} from "react-router-dom"
import MainRoutes from './routes/index';
import "./App.css";

const App =()=> {
  return (
    <BrowserRouter>

    <MainRoutes/>
    </BrowserRouter>
  );
}

export default App;
