const React = require('react')

class New extends React.Component {
  render () {
    return (
      <>
        <h1>Create A New Pokemon</h1>
        <nav>
          <a href='/pokemons'> Go Back To Pokemons Home Page</a>
        </nav>
        <form method='POST' action='/pokemons'>
          Name: <input type='text' name='name' placeholder='name of New Pokemon Here' /><br />
          Strength: <input type='text' name='strength' placeholder='name of New Pokemon Here' /><br />
          Images: <input type='text' name='image' placeholder='link to new pokemon' /><br />
          Is Stronger: <input type='checkbox' name='isStronger' /><br />
          <input type='submit' value='Submit Pokemon' />
        </form>
      </>
    )
  }
}

module.exports = New
