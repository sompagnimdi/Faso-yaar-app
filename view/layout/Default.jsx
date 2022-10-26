const React = require('react')

class Default extends React.Component {
  render () {
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>Pokemon</title>
        </head>
        <body>
          <nav>
            <a href='/pokemons'>Go to Home Page For Pokemons</a>
            <a href='/pokemons/new'>Create a New Pokemon</a>
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
