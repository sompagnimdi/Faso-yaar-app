const React = require('react')
const Default = require('../layouts/Default')


class SignUp extends React.Component {
  render () {
    return (
      <Default title="Sign Up For Faso Yaar">
        <form action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <button id='signup-btn' type='submit'>SignUp</button>
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = SignUp
