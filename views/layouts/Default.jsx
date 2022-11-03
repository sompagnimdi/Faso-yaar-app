const React = require('react')

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
          <nav>
            <a href='/items'>Go to Home Page For items</a>
            <a href='/items/new'>Create a New item</a>
            {item ? <a href={`/items/${item._id}/edit`}> {item.name} Edit Page </a> : ''}
            {item ? <a href={`/items/${item._id}`}>{item.name} Show Page</a> : ''}
          </nav>
          <h1>
            {title}
          </h1>

          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
