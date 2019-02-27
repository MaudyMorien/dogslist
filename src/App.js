import React, { Component } from 'react'
import './App.css'
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>I wanna know what code is</div>
          <div>I want you to show me</div>
        </header>
        <main>
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;
