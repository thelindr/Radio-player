import React from "react"

class Loading extends React.Component {
  render() {
    return (
      <div>
        <div className="contentBox" id="loading">
          <div className="loadinganimation" />
        </div>
        <div className="contentBox" id="loading">
          <div className="loadinganimation" />
        </div>
        <div className="contentBox" id="loading">
          <div className="loadinganimation" />
        </div>
        <div className="contentBox" id="loading">
          <div className="loadinganimation" />
        </div>
      </div>
    )
  }

}

export default Loading
