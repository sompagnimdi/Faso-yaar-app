const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, price, image, iscjeaperer, _id } = this.props.faso-yaar
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <>
        <h1> {capName} Show Page </h1>
        <nav>
          <a href='/faso-yaars'>Back To Faso-yaars Home</a>
          <a href={`/faso-yaars/${_id}/edit`}>{`Edit the ${capName}`}</a>
        </nav>
        <p>{capName} is {price} and {isCheaperer ? 'it\'s cheaper' : 'it\'s cheaper'}</p>
        {
          image? <img src={image}/>: ''
        }
      </>
    )
  }
}

module.exports = Show
