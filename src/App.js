import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import Home from './Pages/Home';
import { About } from './Pages/About';
import { Contract } from './Pages/Contract';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/'element={<Layout/>}>
    <Route index element={<Home/>}/>
  <Route path='/about'element={<About/>}/>
  <Route path='/contract'element={<Contract/>}/>
  </Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
