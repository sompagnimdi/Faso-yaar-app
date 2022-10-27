const React = require('react')

class New extends React.Component {
  render () {
    return (
      <>
        <h1>Create A New Faso-yaar</h1>
        <nav>
          <a href='/faso-yaars'> Go Back To Faso-yaars Home Page</a>
        </nav>
        <form method='POST' action='/faso-yaars'>
          Name: <input type='text' name='name' placeholder='name of New Faso-yaar Here' /><br />
          Price: <input type='text' name='price' placeholder='name of New Faso-yaar Here' /><br />
          Images: <input type='text' name='image' placeholder='link to new Faso-yaar' /><br />
          Is Cheaperer: <input type='checkbox' name='isCheaper' /><br />
          <input type='submit' value='Submit Faso-yaar' />
        </form>
      </>
    )
  }
}

module.exports = New
