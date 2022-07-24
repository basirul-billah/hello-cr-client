import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import RequireAuth from './Components/RequireAuth';
import Forum from './Pages/Forum';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Scheduler from './Pages/Scheduler';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path="/scheduler" element={
          <RequireAuth>
            <Scheduler />
          </RequireAuth>
        }/>
        <Route path="/forum" element={
          <RequireAuth>
            <Forum />
          </RequireAuth>
        }/>
        <Route path="/announcement" element={
          <RequireAuth>
            <Scheduler />
          </RequireAuth>
        }/>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
