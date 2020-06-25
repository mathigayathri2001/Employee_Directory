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

    sortByName = () => {
      const sortedEmployees = this.state.results.sort((a, b) => {
        if (b.name.first > a.name.first) {
          return -1
        }
        if (a.name.first > b.name.first) {
          return 1
        }
        return 0;
      });
  
      if (this.state.sortOrder === "DESC") {
        sortedEmployees.reverse();
        this.setState({ sortOrder: "ASC" });
      } else {
        this.setState({ sortOrder: "DESC" });
      }
      this.setState({ results: sortedEmployees })
    }


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
              <th>Name  <span className="downArrow" onClick={this.sortByName}></span></th>
              <th>Phone</th>
              <th>Email</th>
              <th>City, State, Country <span className="downArrow" onClick={this.sortByName}></span></th>
            </tr>
          </thead>
          <tbody>
            {  this.state.results && this.state.results.map((item) =>
               item.name.first.toLowerCase().includes(this.state.search) ?(
                <Table
                  key={item.login.uuid}
                  image={item.picture.thumbnail}
                  name={`${item.name.first} ${item.name.last}`}
                  number={item.cell}
                  email={item.email}
                  location={`${item.location.city} , ${item.location.state} , ${item.nat}`}
                  
                />
              )  : null
            )}
          </tbody>                                                  
        </table>
        </Container>
        
      </div>
    );
  }
}
export default Main;