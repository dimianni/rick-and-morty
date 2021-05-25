import { Component } from 'react';
import './App.css';

import Title from '../Components/Title'
import List from '../Components/List'
import axios from 'axios';



let pageNumber = 1;



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: null
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    //https://medium.com/swlh/fetch-or-axios-2d0dfabe7d27

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    // Using Axios:
    axios.get(api)
      .then(res => {
        this.setState((prev) => {
          if (prev.characters){
            return { characters: prev.characters.concat(res.data.results) }
          } else {
            return { characters: res.data.results }
          }
        })
      })

    // Using Fetch API:
    // fetch(api)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       characters: data.results
    //     })
    //   })

    pageNumber++;

    console.log(api);
  }


  render() {

    let list = 'Loading...'
    let moreButton = null;

    if (this.state.characters) {
      list = <List characters={this.state.characters} />
    }

    if (true) {
      moreButton = <button onClick={this.getData} type="button">Load more</button>
    }

    return (
      <main className="Main">
        <div className="Container">
          <Title title="Rick and Morty" />
          {list}
          {moreButton}
        </div>
      </main>
    );
  }
}

export default App;
