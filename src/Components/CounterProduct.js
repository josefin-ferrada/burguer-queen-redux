import React, { Component } from 'react';


class CounterProduct extends Component {
    styleButtons = {
      backgroundColor: '#F1AE27',
      border: 'solid 0.5px',
      borderRadius: '5px',
      width: '25px',
      height: '25px',

    }
    

    constructor(props) {
      super(props);
      this.state = {
        name : this.props.name,
        value: this.props.value,
        cant : this.props.id,
        total : ""
      };
      this.IncrementItem =this.IncrementItem.bind(this);
    }

  IncrementItem = (e) => {
    console.log(this.state)
  /*   //console.log(this.props.id)
   //this.setState({ clicks: this.state.clicks + 1});
    let exists = false;
    const productid = this.props.id
    /* this.state.orden.forEach(function(element){
      if(element.id === productid){
        exists = true;
      }
    }); 
    for(let i =0; i <this.jsonorden.orden.length; i++){
      if(this.jsonorden.orden[i].id === productid){
        exists= true;
      }
    }
    
    if(!exists){
      this.jsonorden.orden.push({ "id" : productid})
      //this.jsonorden.orden= [...this.jsonorden.orden, { "id" : productid}]
      //this.jsonorden.orden.push({"id": productid})
      /* let actual = this.state
      
      actual["orden"].concat({"id": productid});
      //actual.orden.push({id: productid})
      this.setState(actual) */

    /*   this.setState(prevState =>({
        orden: [...prevState.orden, {"id": productid}]
      })) 
      //this.setState({orden: [...this.state.orden, { "id" : productid}]})

    }else{
      //let actual = this.state
      //this.setState(actual)
      console.log("existe")
    }
    console.log(this.jsonorden) */
  }

  DecreaseItem = () => {
    if (this.state.clicks > 0) {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  }


  render() {
    return (
      <div>
        <button style={this.styleButtons} onClick={this.DecreaseItem}>-</button>
        { this.state.show ? <label id="cant">{ this.state.clicks }</label> : '' }
        <button style={this.styleButtons} onClick={this.IncrementItem}>+</button>

      </div>
    );
  }
}

export default CounterProduct;
