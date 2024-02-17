import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      image: "https://picsum.photos/200",
      userInfo: {
        name: "Dummy",
        location: "default",
        // avatar_url: "https://picsum.photos/200"
      },
    };
  }

  //   calling api
  async componentDidMount() {
    // same as use effect
    // loads after whole component is mounted
    const data = await fetch("https://api.github.com/users/gopesh3652");
    const json = await data.json();
    // console.log(json);
    const { name, public_repos } = data;
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrement
        </button> */}
        <img src={this.state.image}></img>
        <h2>Name: {name}</h2>
        <h3>Place: {location}</h3>
        <h4>Contact: @gopesh3652</h4>
      </div>
    );
  }
}

export default UserClass;
