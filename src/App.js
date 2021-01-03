import React from 'react';
import './App.css';
// article referenced: https://github.com/adamchainz/django-cors-headers
// article referenced: https://reactjs.org/docs/faq-ajax.html
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
        <h1>Shoe store</h1>
        <ul>
          {this.state.shoe.map((shoe) => (
            <li>
              <p>ID: {shoe.id}</p>
              <p>Size: {shoe.size}</p> <p>Brand Name: {shoe.brand_name}</p>
              <p>Manufacturer: {shoe.manufacturer}</p>{' '}
              <p>Color: {shoe.color}</p> <p>Material: {shoe.material}</p>
              <p>Shoe Type: {shoe.shoe_type}</p>{' '}
              <p>Fasten Type: {shoe.fasten_type}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
