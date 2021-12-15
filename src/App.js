import React, { Component, useState, useEffect, setState  } from "react";
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
  // const getGitHubUserWithFetch = async () => {
  //     const response = await fetch(gitHubUrl);
  // const jsonData = await response.json();
  // setUserData(jsonData);
  // };

  // dont work
//   const getGitHubUserWithFetch2 = () => {
//     const response =  fetch(gitHubUrl)
//     .then(response => response.json());
//     setUserData(response);
// };

  return (
      
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>
  );
}

function ApiCallerPropper({name, location, blog, company}) {

  return (
      
      <div className="user-container">
        <h5 className="info-item">{name}</h5>
        <h5 className="info-item">{location}</h5>
        <h5 className="info-item">{blog}</h5>
        <h5 className="info-item">{company}</h5>
      </div>
  );
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: [],
      isLoaded: false
    }

  }
  

  //  getGitHubUserWithFetch = async () => {
  //     const response = await fetch(gitHubUrl);
  // const jsonData = await response.json();
  // setUserData(jsonData);
  // };

   componentDidMount() {
    const gitHubUrl = "https://api.github.com/users/jacgit18";

   fetch(gitHubUrl)
   .then(response=>response.json()
   .then(json=>{
    this.setState({
      name:json,
      isLoaded: true,

    })
   }));

    // this.setState(props.name= data );
    // this.setState({location: data})
    // this.setState({blog: data})
    // this.setState({company: data})



  }


  render() {
    const { name, location, blog, company  } = this.props;
    // const { name, isLoaded } = this.state;

    // const {data} = this.state.data;
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
      {/* <ApiCallerPropper name={this.props.name}  /> */}

        <ApiCaller />
        {/* <ul className="">
          {name.map(names=>{
            <li key={name.id}>{names.location}</li>

          })}
        </ul> */}

       {/* <h5 className="info-item">{name}</h5> */}
         {/* <h5 className="info-item">{location}</h5>
        <h5 className="info-item">{blog}</h5>
        <h5 className="info-item">{company}</h5> */}
       
    </div>
   );
}

}



export default App;