const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, isOnSalle } = this.props.item
    return (
      <Default title={`${name} Edit Page`} item={this.props.item}>
        <form method='POST' action={`/items/${_id}?_method=PUT`}>
          Name: <input type='text' name='price' defaultValue={price} /><br />
          Color: <input type='text' name='color' defaultValue={color} /><br />
          Is On Salle: <input type='checkbox' name='isOnSale' defaultChecked={isOnSale} /> <br />
          <input type='submit' value='Edit Item' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
