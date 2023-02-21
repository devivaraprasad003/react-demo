import logo from './logo.svg';
import './App.css';
import Classcomponent from './Classcomponent'

import {BrowserRouter,Routes,Routes}from 'reacat-router-dom'
import home from './home'
import about from './about'
import contact from './contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<home/>}/>
        <Route path="/" element={<about/>}/>
        <Route path="/" element={<contact/>}/>
        </Routes>
        </BrowserRouter>
     {/*<Classcomponent/>*/}
    </div>
  );
}

export default App;
