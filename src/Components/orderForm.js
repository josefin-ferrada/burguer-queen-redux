import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Container, Row, Col } from 'react-grid-system';
import { desayuno, almuerzocena} from "./menu.json";
import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import store from './../Store'

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
    /* let exists = false;
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
     
    } */
   
    store.dispatch({ type: 'ADD_TO_RESUME',   name})
    console.log(this.state);
  };

  DecreaseItem = () => {
    if (this.state.clicks > 0) {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  };

  render() {
    
    const menu = desayuno.map((single, i) => {
      return (
        <React.Fragment key={i}>
          <p >
            <Fab  size="small" color="primary" aria-label="Add" className={this.fab}>
              <AddIcon  onClick={() => this.IncrementItem(single.id, single.name, single.value)} />
            </Fab> {single.name}</p>
        </React.Fragment>
      );
    })
    const menuAlm = almuerzocena.map((single, i) => {
      return (
        <React.Fragment key={i}>
          <p>
            <Fab  size="small" color="primary" aria-label="Add" className={this.fab}>
              <AddIcon  onClick={() => this.IncrementItem(single.id, single.name, single.value)} />
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
            value={this.state.nameClient}
            onChange={this.handleChange}
            
          />
          <h3>DESAYUNO</h3>
          {menu}
          <h3>ALMUERZO CENA</h3>
          {menuAlm}
          </Col>
          <Col debug>
          <h2>RESUMEN</h2>
          </Col>
        </Row>
      </Container>
    
    )
  }
}
export default Breakfast;

