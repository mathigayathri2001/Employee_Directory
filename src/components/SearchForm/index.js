import React from 'react'
import './style.css'


function SearchForm (props) {
    return (
       <form>
        <div className=' col-12 form-group'>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name='search'
            type='text'
            placeholder='Search here ...'
            id='search'
          />
        </div>
      </form> 
    )
  }
  
  export default SearchForm