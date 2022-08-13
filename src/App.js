import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
