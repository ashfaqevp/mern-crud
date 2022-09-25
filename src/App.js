import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CreateExersice from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";
import EditExersise from "./components/edit-exercises.component";
import ExersisesList from "./components/exersises-list.component";
import Navbar from "./components/navabar.component";
//import './App.css';

function App() {
  return (
    <div className="container">

      
      <Router>
        <Navbar />
        <br/>
        <Routes>
        <Route path="/" exact element={<ExersisesList/>}/>
        <Route path="/edit/:id"  element={<EditExersise/>}/>
        <Route path="/create"  element={<CreateExersice/>}/>
        <Route path="/user"  element={<CreateUser/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
