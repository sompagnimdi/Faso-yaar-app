const React = require('react')
const Header = require('../items/Header')

class Default extends React.Component {
  render () {
    const { item, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav className='nav'>
            <a className='nav-link' href='/items'>Go to Home Page For items</a>
            <a className='nav-link' href='/items/new'>Create a New item</a>
            {item ? <a className='nav-link' href={`/items/${item._id}/edit`}> {item.name} Edit Page </a> : ''}
            {item ? <a className='nav-link' href={`/items/${item._id}`}>{item.name} Show Page</a> : ''}
            <span className='box-right'>
            <a className='signup' href='/user/signup'>Sign Up</a>
            <a className='login' href='/user/login'>Login</a>
            </span>

          </nav>
          <div id='box-page'>
          <h1 id='page-title'>
            {title}
          </h1>
          </div>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
