import React, { Component } from 'react';
import './ResearchTab.css';

class ResearchTab extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      searchResults: [],
      isAcademic: false, // Initially non-academic
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
    // Fetch data from academic or non-academic sources accordingly
  };

  render() {
    return (
      <div className="research-tab">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for academic or non-academic material"
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
          />
          <label>
            Academic
            <input
              type="checkbox"
              checked={this.state.isAcademic}
              onChange={this.handleToggleChange}
            />
          </label>
          <button onClick={this.handleSearch}>Search</button>
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

export default ResearchTab;
