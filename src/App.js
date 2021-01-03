import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: [],
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
      .then((res) => res.json())
      .then((data) => this.setState({ shoe: data }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.shoe.map((p) => (
            <li>
              <p>ID: {p.id}</p>
              <p>Size: {p.size}</p> <p>Brand Name: {p.brand_name}</p>
              <p>Manufacturer: {p.manufacturer}</p> <p>Color: {p.color}</p>{' '}
              <p>Material: {p.material}</p>
              <p>Shoe Type: {p.shoe_type}</p>{' '}
              <p>Fasten Type: {p.fasten_type}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
