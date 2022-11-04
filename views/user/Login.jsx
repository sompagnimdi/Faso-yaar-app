const React = require('react')
const Default = require('../layouts/Default')


class Login extends React.Component {
  render () {
    return (
      <Default title="Login to Faso Yaar Account">
        <form action='/user/login' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <button id='logIn-btn' type='submit'>login</button>
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = Login
