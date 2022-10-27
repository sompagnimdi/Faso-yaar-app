const React = require('react')

class Default extends React.Component {
  render () {
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>Faso-yaar</title>
        </head>
        <body>
          <nav>
            <a href='/faso-yaars'>Go to Home Page For Faso-yaars</a>
            <a href='/faso-yaars/new'>Create a New Faso-yaar</a>
          </nav>
          <h1>
            {this.props.title}
          </h1>

          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default

