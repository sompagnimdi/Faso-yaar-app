const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { faso-yaars } = this.props
    return (
      <Default title='Faso-yaars Index Page'>
        <ul>
          {
                        faso-yaars.map((faso-yaar) => {
                          const { name, price, isCheaper, _id } = faso-yaar
                          return (
                            <li key={_id}>
                              <a href={`/faso-yaars/${_id}`}>
                                {name}
                              </a> is {price}

                              <br />
                              {
                                        isCheaper
                                          ? 'It\'s cheaper'
                                          : 'It\'s not cheaper'
                                    }
                              <br />
                              <form method='POST' action={`/faso-yaars/${_id}?_method=DELETE`}>
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

