import React, { Component } from 'react';

class ResumeTable extends Component {
  render() {
    return (
      <table className="table table-sm table-dark">
        <thead>
          <tr>
            <th scope="col">Cant</th>
            <th scope="col">Detalle</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>

          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>

          </tr>
        </tbody>
      </table>
    );
  }
}

export default ResumeTable;
