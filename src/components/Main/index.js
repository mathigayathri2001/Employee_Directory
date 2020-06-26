import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import SearchForm from "../../components/SearchForm";
import Table from "../../components/Table";
import Container from "../../components/Container";

//setting the component's initial state
class Main extends Component {
  state = {
    result: [],
    search: "",
    sortOrder: "",
  };
  // initialization function which extracts the employees directory from randomuser API when page is first loaded
  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  }
  //function that handles the employee firstname search 
  handleInputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
// function to sort firstnamne in ascending order
  sortByAscName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return -1;
      }

      return 0;
    });

    if (this.state.sortOrder === "ASC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "DESC" });
    } else {
      this.setState({ results: sortedEmployees });
    }
  };
  // function to sort lastnamne in desending order
  sortByDscName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ results: sortedEmployees });
    }
  };
  // function ti sort by age
  sortByAscAge = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (a.dob.age > b.dob.age) {
        return -1;
      }

      return 0;
    });

    if (this.state.sortOrder === "ASC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "DESC" });
    } else {
      this.setState({ results: sortedEmployees });
    }
  };
  // function to sort age by decending
  sortByDscAge = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.dob.age > a.dob.age) {
        return -1;
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ results: sortedEmployees });
    }
  };

  

  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <Container>
          <table className=" col-12 text-center">
            <thead>
              <tr>
                <th>Image</th>
                <th>
                  Name{" "}
                  <i
                    class="fas fa-long-arrow-alt-down"
                    onClick={this.sortByAscName}
                  ></i>
                  <i
                    class="fas fa-long-arrow-alt-up"
                    onClick={this.sortByDscName}
                  ></i>{" "}
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>
                  Age{" "}
                  <i
                    class="fas fa-long-arrow-alt-down"
                    onClick={this.sortByAscAge}
                  ></i>
                  <i
                    class="fas fa-long-arrow-alt-up"
                    onClick={this.sortByDscAge}
                  ></i>{" "}
                </th>               
                <th>City, State, Country </th>
              </tr>
            </thead>
            <tbody>
              {this.state.results &&
                this.state.results.map((item) =>
                  item.name.first.toLowerCase().includes(this.state.search) ? (
                    <Table
                      key={item.login.uuid}
                      image={item.picture.thumbnail}
                      name={`${item.name.first} ${item.name.last}`}
                      number={item.cell}
                      email={item.email}
                      age={item.dob.age}
                      location={`${item.location.city} , ${item.location.state} , ${item.nat}`}
                    />
                  ) : null
                )}
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}
export default Main;
