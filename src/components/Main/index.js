import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css'
import SearchForm from "../../components/SearchForm";
import Table from "../../components/Table";
import Container from "../../components/Container"


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
      handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
          [name]: value
        })
    };


render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
         <Container>
        <table className=" col-10 text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name  </th>
              <th>Phone</th>
              <th>Email</th>
              <th>City,State,Country</th>
            </tr>
          </thead>
          <tbody>
            {  this.state.results && this.state.results.map((item) =>
               (
                <Table
                  key={item.login.uuid}
                  image={item.picture.thumbnail}
                  name={`${item.name.first} ${item.name.last}`}
                  number={item.cell}
                  email={item.email}
                  location={`${item.location.city} , ${item.location.state} , ${item.nat}`}
                  
                />
              ) 
            )}
          </tbody>                                                  
        </table>
        </Container>
        
      </div>
    );
  }
}
export default Main;