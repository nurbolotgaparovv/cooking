import './App.css';
import './index.css';
import Header from "./comment/Header"
import Hero from "./comment/Hero"
import Section from "./comment/Section"
import Dom from "./comment/Dom";
import Script from "./comment/Script";
import Caring from "./comment/Caring";
import Menu from "./comment/Menu";
import Happy from "./comment/Happy";
import Follow from "./comment/Follow";
import Footer from "./comment/Footer";
import {Routes, Route} from 'react-router-dom'
import AppDesk from "./comment/AppDesk";
import Index from "./pages";
function App(){
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<AppDesk/>}/>
            <Route path={'/Hero'} element={<Hero/>}/>
            <Route path={'/Dom'} element={<Dom/>}/>
            <Route path={'/Section'} element={<Section/>}/>
            <Route path={'/menu'} element={<Menu/>}/>
            <Route path={'/script'} element={<Script/>}/>
            <Route path={'/Caring'} element={<Caring/>}/>
            <Route path={'/Happy'} element={<Happy/>}/>
            <Route path={'/Follow'} element={<Follow/>}/>
            <Route path={'/Footer'} element={<Footer/>}/>
            <Route path={'/product'} element={<Index/>}/>
        </Routes>

    </div>
  );
}
export default App;