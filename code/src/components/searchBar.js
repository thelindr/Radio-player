import React from "react"

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <input
          placeholder="Filter stations"
          type="search"
          onChange={this.props.onChange} />
      </div>
    )
  }
}

export default SearchBar
