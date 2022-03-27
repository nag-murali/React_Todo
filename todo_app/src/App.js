import logo from './logo.svg';
import './App.css';
import {Todo} from "./components/todo.jsx";
import {store} from "./redux/store.js";
import {Provider as ReduxProvider} from "react-redux";

function App() {
  return (
    <ReduxProvider store = {store}>
    <div className="App">
     
      <Todo/>
    </div>
    </ReduxProvider>
  );
}

export default App;
