const React = require('react')

class Edit extends React.Component {
  render () {
    const { name, _id, strength, isStronger } = this.props.pokemon
    return (
      <>
        <h1>Edit This Pokemon</h1>
        <nav>
          <a href='/pokemons'> Go Back To Pokemons Home</a>
        </nav>
        <form method='POST' action={`/pokemons/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Strength: <input type='text' name='strength' defaultValue={strength} /><br />
          Is Stronger: <input type='checkbox' name='isStronger' defaultChecked={isStronger} /> <br />
          <input type='submit' value='Edit Pokemon' />
        </form>
      </>
    )
  }
}

module.exports = Edit
