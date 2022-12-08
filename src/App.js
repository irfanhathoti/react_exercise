import './App.css';
import StudentList from './Components/Crud/StudentList';
import NoteApp from './Components/NoteApp';
import Counter from './Components/Counter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Routers/Home';
import AddBook from './Components/Routers/AddBook';
import Header from './Components/Routers/Header';
import Contact from './Components/Routers/Contact';
import About from './Components/Routers/About';
import Validation from './Components/Validation';
import DashBoard from './Components/Axios/DashBoard';
import AddData from './Components/Axios/AddData';
import Navbar from './Components/Axios/Navbar';
import Languages from './Components/Languages';

function App() {

  return (
    <div>
      <Validation />
      {/* <Languages /> */}
      {/* <DashBoard />
      <AddData/> */}
      {/* <Validation /> */}
      {/* <Counter/> */}
      {/* <NoteApp/> */}
      {/* <StudentList /> */}
      {/* <Router>
         <Navbar />
        <Switch>
        <Route path="/AddData" exact component={
            () => {
              return (<AddData />)
            }} />
          <Route path="/" exact component={
            () => {
              return (<DashBoard />)
            }} /> */}
            {/* <Route path="/AddData" exact component={
            () => {
              return (<AddData />)
            }} /> */}
             {/* <Route path="/Contact" exact component={
            () => {
              return (<Contact />)
            }} />
            <Route path="/About" exact component={
            () => {
              return (<About />)
            }} /> */}
        {/* </Switch>

      </Router> */}
    </div>
  );
}

export default App;
