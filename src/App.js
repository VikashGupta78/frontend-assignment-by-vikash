import './App.css';
import Onboarding1 from './pages/Onboarding1';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostLogin from './pages/PostLogin';
import Tracking from './pages/Tracking';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/onboarding1' element= <Onboarding1/> />
        <Route path='/onboarding2' element= <Onboarding2/> />
        <Route path='/onboarding3' element= <Onboarding3/> />
        <Route path='/login' element= <Login/> />
        <Route path='/signup' element= <Signup/> />
        <Route path='/postLogin' element= <PostLogin/> />
        <Route path='/tracking' element= <Tracking/> />
      </Routes>
    </div>
  );
}

export default App;
