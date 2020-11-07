import Axios from 'axios';
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };

    this.getGenres = this.getGenres.bind(this)
  }

  componentDidMount() {
    this.getGenres()
  }

  getGenres() {
    Axios.get('/genres')
    .then((allGenres) => {this.setState({genres: allGenres.data.genres})})
    .catch((error) => {console.log('Error with GET request: ', error)});
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          {this.state.genres.map((genres) => {
            return <option key={`${genres.id}`} value={`${genres.id}`}>{`${genres.name}`}</option>
          })}
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;