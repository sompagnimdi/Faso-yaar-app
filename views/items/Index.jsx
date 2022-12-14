const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { items } = this.props
    console.log(items)
    return (
      <Default title='Items Index Page'>
        <ul>
          {
                        items.map((item) => {
                          const { name, price, isOnSalle, _id } = item
                          return (
                            <li key={_id}>
                              <a href={`/items/${_id}`}>
                                {name}
                              </a> is {price}

                              <br/>
                              {
                                        isOnSalle
                                          ? 'It\'s on salle'
                                          : 'It\'s not on salle'
                                    }
                              <br />
                              <form method='POST' action={`/items/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${price} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index

