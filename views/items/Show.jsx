const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, price, image, isOnSalle, _id } = this.props.item
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <>
        <h1> {capName} Show Page </h1>
        <nav>
          <a href='/items'>Back To Faso-yaar Home</a>
          <a href={`/items/${_id}/edit`}>{`Edit the ${capName}`}</a>
        </nav>
        <p>{capName} is {price} and {isOnSalle ? 'it\'s on Salle' : 'it\'s on Salle'}</p>
        {
          image? <img src={image}/>: ''
        }
      </>
    )
  }
}

module.exports = Show
