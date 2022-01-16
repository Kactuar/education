import React, { Component, useState, useEffect } from 'react'
import List from './List';

class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colMod: props.collection,
      inputValue: ''
    }
  }

  handleFilter = () => {
    this.setState((prevState) => ({
      colMod: prevState.colMod.filter((elem) => {
        return elem.includes(prevState.inputValue)
      })
    }))
  }

  handleChange = (event) => {
    this.setState(() => ({
      inputValue: event.target.value
    }))
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} value={this.inputValue}/>
        <List collectionMod={this.colMod} />
      </>)
    }
}

// const FilterList = ({ collection }) => {
//   const [colMod, setColMod] = useState(collection)
//   const [inputValue, setInputValue] = useState('')
//
//   const handleFilter = () => {
//     setColMod(collection.filter((elem) => {
//       return elem.includes(inputValue)
//     }))
//   }
//
//   useEffect(()=> {
//     handleFilter()
//   }, [inputValue])
//
//   const handleChange = (event) => {
//     setInputValue(event.target.value)
//   }
//
//   return (
//     <>
//       <input type="text" onChange={handleChange} value={inputValue}/>
//       <List collectionMod={colMod} />
//     </>)
// }

export default FilterList;
