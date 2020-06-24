import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css'
// import SearchForm from "../../components/SearchForm";
// import Table from "../../components/Table";
// import Container from "../../components/Container"


class Main extends Component {
    state = {
      result: [],
      search: "",
      sortOrder:""
  
    };
    componentDidMount() {
        API.search()
          .then((res) => {
            this.setState({ results: res.data.results });
            console.log(this.state.results);
          })
          .catch((err) => console.log(err));
      }


render() {
    return (
      <div>
        
        
      </div>
    );
  }
}
export default Main;