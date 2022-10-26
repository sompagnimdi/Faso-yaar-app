const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, strength, image, isStronger, _id } = this.props.pokemon
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <>
        <h1> {capName} Show Page </h1>
        <nav>
          <a href='/pokemons'>Back To Pokemons Home</a>
          <a href={`/pokemons/${_id}/edit`}>{`Edit the ${capName}`}</a>
        </nav>
        <p>{capName} is {strength} and {isStronger ? 'it\'s stronger' : 'it\'s stronger'}</p>
        {
          image? <img src={image}/>: ''
        }
      </>
    )
  }
}

module.exports = Show
