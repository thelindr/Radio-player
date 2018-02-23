import React from "react"
import Radio from "./radio"
import Loading from "./loading"
import SearchBar from "./searchBar"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioChannels: [],
      visibleChannels: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioChannels: json.channels,
        visibleChannels: json.channels,
        isLoading: false
      })
    })
  }

  handleChannelSearch = (event) => {
    const visibleChannels = this.state.radioChannels.filter((station) => {
      return station.name.match(new RegExp(event.target.value, "ig"))
    })

    this.setState({
      visibleChannels
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <Loading />
        </div>
      )
    } else {
      return (
        <div className="radioChannels">
          <SearchBar onChange={this.handleChannelSearch} />

          {this.state.visibleChannels.map((channel) => {
            return <Radio
              key={channel.id}
              name={channel.name}
              image={channel.image}
              color={channel.color}
              url={channel.liveaudio.url} />
          })}
        </div>
      )
    }
  }
}

export default App
