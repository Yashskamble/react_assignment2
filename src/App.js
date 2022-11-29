
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Accounts from './components/Accounts';
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Errror from './components/Error';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route  path ='/' end element={<Registration/>}/>
      <Route  path = '/account' element= {<Accounts/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route  path = '*' element={<Errror/>}/>
      

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
