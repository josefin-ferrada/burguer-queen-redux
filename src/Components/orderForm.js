import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Container, Row, Col } from 'react-grid-system';
import { desayuno, almuerzocena} from "./menu.json";
import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import store from './../Store'; 
import { setResume } from './../actions/waiter';
import {connect} from 'react-redux'

class Breakfast extends Component {
 
useStyles = {
    root: {
      width: '100%',
      marginTop: "10px",
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    fab: {
      margin: "10px",
    },
    textField: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  };
  
  state = {
    orden: [],
    nameClient: ""
  };
  

   IncrementItem = (id, name, value, nameClient) => {
    /*let exists = false;
    let position = null;
    let actual = this.state;
    for (let i = 0; i < this.state.orden.length; i++) {
      if (this.state.orden[i].id === id) {
        exists = true;
        position = i;
      }
    }
    if (!exists) { 
      actual.orden.push({ id: id, cantidad: 1, name: name, valor: value, nameClient: nameClient});
      this.setState(actual);
    } else {
      let actual = this.state;
      actual.orden[position].cantidad += 1;
      console.log("existe");
     
    } 
   
    store.dispatch({ type: 'SET_TO_RESUME',   name, id, value, nameClient})*/
    
    
  };

  DecreaseItem = () => {
    if (this.state.clicks > 0) {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  };
  
  updateInput = input => {
    this.setState({ input });
  };

  render() {
    
    const menu = desayuno.map((single, i) => {
      return (
        <React.Fragment key={i}>
          <p >
            <Fab  size="small" color="primary" aria-label="Add" className={this.fab}>
              <AddIcon  onClick={() => this.props.resume(single.name,single.id,single.value)} />
            </Fab> {single.name}</p>
        </React.Fragment>
      );
    })
    const menuAlm = almuerzocena.map((single, i) => {
      return (
        <React.Fragment key={i}>
          <p>
            <Fab  size="small" color="primary" aria-label="Add" className={this.fab}>
              <AddIcon  onClick={() => this.props.resume(single.name,single.id,single.value)} />
            </Fab> {single.name}</p>
        </React.Fragment>
      );
    })
    
    return (
      <Container fluid style={{ lineHeight: '32px' }}>
        <Row debug>
          <Col debug>
          <h2>MENÚ</h2>
          <TextField
            id="outlined-name"
            label="Nombre Cliente"
            className={this.textField}
            margin="normal"
            variant="outlined"
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            
          />
          <h3>DESAYUNO</h3>
          {menu}
          <h3>ALMUERZO CENA</h3>
          {menuAlm}
          </Col>
          <Col debug>
          <h2>RESUMEN</h2>
          <p>hola aqui debe ir el nombre del producto</p>
          </Col>
        </Row>
      </Container>
    
    )
  }
}

 const mapStateToProps = (state)=>{
  return {
    ...state
  };
}
const mapDispatchToProps = (dispatch) => {
  console.log(store.getState())
  return {
    resume:  setResume(dispatch) ,
    
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Breakfast);


