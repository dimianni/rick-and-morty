import { Component } from 'react';
import './App.scss';

import axios from 'axios';
import { Title, List, Search } from '../Components';

let pageNumber = 1;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      characters: null
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    //https://medium.com/swlh/fetch-or-axios-2d0dfabe7d27

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    // Using Axios:
    axios.get(api)
      .then(res => {
        this.setState((prev) => {
          if (prev.characters) {
            return { characters: prev.characters.concat(res.data.results) }
          } else {
            return { characters: res.data.results }
          }
        })
      })

    pageNumber++;

  }

  onSearchChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }


  render() {

    let moreButton = null, filteredCharacters = [];

    let { characters, searchInput } = this.state;

    if (!characters) {

      return <p>Loading...</p>

    } else {

      moreButton = <button onClick={this.getData}>Load More</button>

      filteredCharacters = characters.filter(char => {
        return char.name.toLowerCase().includes(searchInput.toLowerCase())
      })

      return (
        <main className="Main">
          <header>
            <div className="Container">
              <Title title="Rick and Morty" />
              <Search onSearchChange={this.onSearchChange} />
            </div>
          </header>
          <section>
            <div className="Container">
              <List characters={filteredCharacters} />
              {moreButton}
            </div>
          </section>
        </main>
      );
    }

  }
}

export default App;
