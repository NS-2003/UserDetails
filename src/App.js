// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUserDetails/AddUser';
import UpdateUserDetails from './components/UpdateUserDetails/UpdateUserDetails';
// import Fetch from './components/get/Fetch';
// import FetchDetails from './components/FetchDetails';
import UserDetails from './components/UserDetails/UserDetails';
import ViewUserDetails from './components/ViewUserDetails/ViewUserDetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      {/* <UserDetails /> */}
      <Route path='/' element={<UserDetails />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/:id' element={<ViewUserDetails />} />
      <Route path='/update/:id' element={<UpdateUserDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
