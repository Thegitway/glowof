import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
  }

  componentDidMount() {
    this.populate();
  }

  static renderForecastsTable(data) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price (DH)</th>
            <th>Quantite</th>
          </tr>
        </thead>
        <tbody>
          {data.map(forecast =>
            <tr key={forecast.id}>
              <td>{forecast.name}</td>
              <td>{forecast.description}</td>
              <td>{forecast.price}</td>
              <td>{forecast.stock}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.data);

    return (
      <div>
        <h1 id="tabelLabel" >Glowof Product</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populate() {
    const response = await fetch('http://20.101.92.75/product');
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }
}
