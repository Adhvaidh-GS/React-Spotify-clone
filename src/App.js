import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Premium from './components/Premium/Premium';
import Support from './components/Support/Support';
import Download from './components/Download/Download';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
          <Route path ="/premium">
          <Premium />
          </Route>
          <Route path ="/support">
          <Support />
          </Route>
          <Route path ="/download">
          <Download />
          </Route>
          <Route path="/">
          <Main/>
          </Route>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}



export default App;
