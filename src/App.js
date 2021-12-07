import logo from './logo.svg';
import './App.css';
import Cvbody from './Container/Body/Cvbody';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Cvbody/>
    </div>
    </BrowserRouter>
  );
}

export default App;
