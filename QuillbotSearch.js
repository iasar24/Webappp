/*import React, { Component } from 'react';
import './QuillbotSearch.css';

class QuillbotSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      searchResults: [],
      isAcademic: false,
    };
  }

  handleSearchInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleToggleChange = () => {
    this.setState((prevState) => ({ isAcademic: !prevState.isAcademic }));
  };

  handleSearch = () => {
    // Implement your search logic here based on the isAcademic state
    // You may need to fetch data from Quillbot's API or other sources
  };

  render() {
    return (
      <div className="quillbot-search-container">
        <div className="search-animation"></div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search on Quillbot"
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
          />
          <label className="toggle-label">
            Academic
            <input
              type="checkbox"
              checked={this.state.isAcademic}
              onChange={this.handleToggleChange}
              className="toggle-checkbox"
            />
            Non-Academic
          </label>
          <button className="search-button" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <div className="search-results">
          {this.state.searchResults.map((result, index) => (
            <div key={index}>{result.title}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default QuillbotSearch;
*/
import React, { Component } from 'react';
import './QuillbotSearch.css';
import axios from 'axios';

class QuillbotSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'climate change', // Default search term
      searchResults: [],
      isAcademic: false,
    };
  }

  handleSearchInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleToggleChange = () => {
    this.setState((prevState) => ({ isAcademic: !prevState.isAcademic }));
  };

  handleSearch = () => {
    const { searchTerm, isAcademic } = this.state;

    // Define the Wikipedia API endpoint
    const apiUrl = 'AIzaSyC0YsMagIGdAJrP_6jtT22Qbn_o0iTTVIg';

    // Define the parameters for the API request
    const params = {
      action: 'query',
      list: 'search',
      format: 'json',
      srsearch: searchTerm,
      srlimit: 10, // You can adjust the number of results
      srinfo: isAcademic ? 'suggestion' : '', // For non-academic searches, we disable suggestions
    };

    // Make a GET request to the Wikipedia API
    axios
      .get(apiUrl, { params })
      .then((response) => {
        const results = response.data.query.search;
        this.setState({ searchResults: results });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="quillbot-search-container">
        <div className="search-animation"></div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search on Quillbot"
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
          />
          <div className="toggle-switch">
            <label className="toggle-label">
              Academic
              <input
                type="checkbox"
                checked={this.state.isAcademic}
                onChange={this.handleToggleChange}
                className="toggle-checkbox"
              />
              Non-Academic
            </label>
          </div>
          <button className="search-button" onClick={this.handleSerarch}>
            Search
          </button>
        </div>
        <div className="search-results">
          {this.state.searchResults.map((result) => (
            <div key={result.pageid}>
              <h3>{result.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default QuillbotSearch;
