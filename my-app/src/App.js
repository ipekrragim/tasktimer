import './App.css';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer'
import { Routes, Route, NavLink } from 'react-router-dom';
import { StopwatchProvider } from './components/StopwatchContext';

function App() {
  return (
    <StopwatchProvider> 
      <div className="App">
        <div className="link">
          <NavLink to="/Clock" className={({ isActive }) => (isActive ? 'active-link' : "")}>Clock</NavLink>
          <NavLink to="/stopwatch" className={({ isActive }) => (isActive ? 'active-link' : "")}>Stopwatch</NavLink>
          <NavLink to="/timer" className={({ isActive }) => (isActive ? 'active-link' : "")}>Timer</NavLink>
        </div>
        <Routes>
        <Route path="/" element={<Clock />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </StopwatchProvider>
  );
}

export default App;