import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="countries">
          <Route path="australia" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
