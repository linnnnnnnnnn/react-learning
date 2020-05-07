import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = index => {
    let newCharacters = this.state.characters.filter((item, i) => {
      return index !== i;
    })
    this.setState({
      characters: newCharacters
    })

  }

  addCharacter = character => {
    let newCharacters = [...this.state.characters, character];
    this.setState({
      characters: newCharacters
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  
  render() {
    return (
      <div className="container">
        <Table dataCharacter={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} addCharacter={this.addCharacter} />
      </div>
    )
  }
}

// class App extends Component {
//   state = {
//       characters: []
//   };

//   removeCharacter = index => {
//       const { characters } = this.state;
  
//       this.setState({
//           characters: characters.filter((character, i) => { 
//               return i !== index;
//           })
//       });
//   }

//   handleSubmit = character => {
//       this.setState({characters: [...this.state.characters, character]});
//   }

//   render() {
//       const { characters } = this.state;
      
//       return (
//           <div className="container">
//               <h1>React Tutorial</h1>
//               <p>Add a character with a name and a job to the table.</p>
//               <Table
//                   dataCharacter={characters}
//                   removeCharacter={this.removeCharacter}
//               />
//               <h3>Add New</h3>
//               <Form handleSubmit={this.handleSubmit} />
//           </div>
//       );
//   }
// }
  
export default App