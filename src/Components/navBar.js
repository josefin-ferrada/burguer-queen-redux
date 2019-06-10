import React, { Component } from "react";
import OrderForm from "./orderForm";
import ButtonNavBar from "./GenericButton";
import KitchenTemplate from "./kitchenTemplate"


class NavbarBurger extends Component {
  navbar= {
    justifyContent: "normal",
    padding: "0.6rem 0.5rem"
  }
  state= {
    view: "",

  }
  styleButtonMenu = {
    marginLeft : "10px",

  }
  render() {
    return (
      
        <React.Fragment>
          <nav className="navbar navbar-dark bg-dark" style={this.navbar}>
            
            
          </nav>
        </React.Fragment>
    );
  }
}

export default NavbarBurger;
