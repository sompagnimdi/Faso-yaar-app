const React = require('react')

class Edit extends React.Component {
  render () {
    const { name, _id, price, isCheaper } = this.props.faso-yaar
    return (
      <>
        <h1>Edit This Faso-yaar</h1>
        <nav>
          <a href='/faso-yaars'> Go Back To Faso-yaars Home</a>
        </nav>
        <form method='POST' action={`/faso-yaars/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Price: <input type='text' name='price' defaultValue={price} /><br />
          Is Cheaperer: <input type='checkbox' name='isCheaperer' defaultChecked={ischeaper} /> <br />
          <input type='submit' value='Edit Faso-yaar' />
        </form>
      </>
    )
  }
}

module.exports = Edit

