import React from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom'
import KitchenTemplate from "./Components/kitchenTemplate"
import OrderForm from "./Components/orderForm"
import Dashboard from "./Components/dashboard"






function App() {
  return (
    <BrowserRouter>
    

      <Route path="/" component={Dashboard}/>
      <Route path="/cocina" component={KitchenTemplate}/>
      <Route path="/mesero" component={OrderForm}/>
      
    
    
    
    </BrowserRouter>);
}

export default App;
