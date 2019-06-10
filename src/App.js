import React from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom'
import KitchenTemplate from "./Components/kitchenTemplate"
import OrderForm from "./Components/orderForm"
import Dashboard from "./Components/dashboard"
import Lunch from "./Components/lunch"
import BreakFast from "./Components/BreakFast"




function App() {
  return (
    <BrowserRouter>
    <React.Fragment>

      <Route path="/" component={Dashboard}/>
      <Route path="/cocina" component={KitchenTemplate}/>
      <Route path="/mesero" component={OrderForm}/>
      <Route path="/desayuno" component={BreakFast}/>
      <Route path="/almuerzo" component={Lunch}/>
    
    
    </React.Fragment>
    </BrowserRouter>);
}

export default App;
