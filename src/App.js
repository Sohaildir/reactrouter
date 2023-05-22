
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>home page</div>}/>
      <Route path='/about' element={<div>this is about page</div>}/>
      <Route path='/contact' element={<div>this is contact page</div>}/>

     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
