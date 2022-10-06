import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { Home } from './components/Home';
import { Apies } from './components/Apies';
import { Description } from './components/Description';
import { Species } from './components/Species';
import { FlavorText } from './components/FlavorText';
 
function App() {
  return (
    <>
    <div className="App">
      <h1><Link to="/home">Hello to API's</Link></h1>

      <nav style={{display:"inline-block"}}>
        <ul style={{display: "flex"}}>
          <li style={{padding:20, textDecoration:"none"}}><Link style={{color:"black", textDecoration:"none", fontWeight:600}} to="home">Home</Link></li>
          <li  style={{padding:20, textDecoration:"none"}}><Link to="apis"style={{color:"black", textDecoration:"none", fontWeight:600}}>API's</Link></li>
          <li  style={{padding:20, textDecoration:"none"}}><Link to="/"style={{color:"black", textDecoration:"none", fontWeight:600}}>Docs</Link></li>
        </ul>
      </nav>
    </div>
    
    {/* *** Create Routes from Components *** */}
    <Routes>
      <Route path="/" element={<Species/>}></Route>
      <Route path="home" element={<Home/>}></Route>
      <Route path="apis" element={<Apies/>}></Route>
      <Route path="/apis/description/:id" element={<Description/>}></Route>
      <Route path="*" element={<div style={{textAlign:"center"}}><h2 style={{paddingTop:90}}>ERROR 404 | Page not found</h2></div>}></Route>
      <Route path="flavortext/:id" element={<FlavorText/>}></Route>
    </Routes>

    </>
  );
}

export default App;
