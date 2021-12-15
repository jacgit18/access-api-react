import React, { Component, useState, useEffect,  } from "react";
import "./App.css";
import axios from "axios";
// import gitHubSlicer from "./component/Api/gitHubSlicer";

const gitHubUrl = "https://api.github.com/users/jacgit18";

function ApiCaller() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // getGitHubUserWithFetch2();
    getGiHubUserWithAxios();

  }, []);

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
  };

// promise then
  const getGitHubUserWithFetch = async () => {
      const response = await fetch(gitHubUrl);
  const jsonData = await response.json();
  setUserData(jsonData);
  };

  // dont work
  const getGitHubUserWithFetch2 = () => {
    const response =  fetch(gitHubUrl)
    .then(response => response.json());
    setUserData(response);
};

  return (
      
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // name: false
      name: "props",
      location: "props",
      blog: "props",
      company: "props"

    };
  }
  

  //  getGitHubUserWithFetch = async () => {
  //     const response = await fetch(gitHubUrl);
  // const jsonData = await response.json();
  // setUserData(jsonData);
  // };

  async componentDidMount() {
    const gitHubUrl = "https://api.github.com/users/jacgit18";

    // const response = await axios.get(gitHubUrl);
    const response = await fetch(gitHubUrl);

    const data = await response.json();
    this.setState({name: data })
    // this.setState({location: data})
    // this.setState({blog: data})
    // this.setState({company: data})



  }


  
  render() {
  //  const name=this.props.name;
    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }

    // if (!this.state.name) {
    //   return <div>didn't get a person</div>;
    // }
    return (
      <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
        <ApiCaller />
       {/* <h5 className="info-item">{name}</h5> */}
       {/* <h5 className="info-item">{ this.props.name }</h5> */}
       {/* <h5 className="info-item">{ this.state.props.name }</h5> */}
         {/* <h5 className="info-item">{this.state.props.location}</h5>
        <h5 className="info-item">{this.state.props.blog}</h5>
        <h5 className="info-item">{this.state.props.company}</h5> */}
       
    </div>
   );
}

}



export default App;