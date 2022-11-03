const React = require('react')

class New extends React.Component {
  render () {
    return (
      <>

        <h1>Create A New Faso-yaar</h1>
        <nav>
          <a href='/items'> Go Back To Faso-Yaar Home Page</a>
        </nav>
        <form method='POST' action='/items'>
          Name: <input type='text' name='name' placeholder='name of New Item Here' /><br />
          Price: <input type='text' name='price' placeholder='name of New Item Here' /><br />
          Images: <input type='text' name='image' placeholder='link to new Item' /><br />
          Is On Salle: <input type='checkbox' name='isOnSalle' /><br />
          <input type='submit' value='Submit Item' />
        </form>
      </>
    )
  }
}

module.exports = New
