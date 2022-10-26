const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { pokemons } = this.props
    return (
      <Default title='Pokemons Index Page'>
        <ul>
          {
                        pokemons.map((pokemon) => {
                          const { name, strength, isStronger, _id } = pokemon
                          return (
                            <li key={_id}>
                              <a href={`/logs/${_id}`}>
                                {name}
                              </a> is {strength}

                              <br />
                              {
                                        isStronger
                                          ? 'It\'s stronger'
                                          : 'It\'s not stronger'
                                    }
                              <br />
                              <form method='POST' action={`/pokemons/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${strength} ${name}`} />
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
