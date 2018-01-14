import React from "react"

class Radio extends React.Component {
  render() {
    return (
      <div className="contentBox" style={{ backgroundColor: `#${this.props.color}` }}>
        <div className="rightColumn">
          <h1>{this.props.name}</h1>
          <audio controls>
            <track kind="captions" {...this.props} />
            <source src={this.props.url} type="audio/mpeg" />
          </audio>
        </div>
        <div className="leftColumn">
          <img src={this.props.image} alt="Bild" />
        </div>
      </div>
    )
  }

}

export default Radio
