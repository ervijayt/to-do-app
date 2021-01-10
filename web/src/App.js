import ToDO from './components/ToDo'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Provider } from 'react-redux'; 
import {createStore } from 'redux';  
import Reducer from '../src/store/reducer';  

const store = createStore(Reducer);

export default function App(){
  return(
    <Router>      
            <Switch>
                {/* <Route path="/" exact component={ToDO}/> */}
                <Provider store={store}><Route path="/" exact component={ToDO}/></Provider>
            </Switch>
    </Router>
  );
}



//import logo from './logo.svg';
//import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
