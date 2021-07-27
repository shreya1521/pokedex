import React,{Suspense, lazy} from "react";
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Tabbar from "./components/Tabbar";
import './components/Searchbar.css';


const Mainpage=lazy(()=> import ('./components/Mainpage'))
const Pokemondata=lazy(()=> import ('./components/Pokemondata'))
const Moves=lazy(()=> import ('./components/Moves'))

function App() {
  return (
    <BrowserRouter>
    <div>
      <Tabbar />
     <Switch>
     <Suspense fallback = {<div className="pleasewait"> Please wait... </div>}>
       <Route path="/" exact component={Mainpage} />
       <Route path="/pokemondata/:name" component={Pokemondata} />
       <Route path="/moves/:name" component={Moves} />
       </Suspense>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
