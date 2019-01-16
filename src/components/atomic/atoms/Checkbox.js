import React, { Component } from 'react'
// <input type='checkbox' onClick={this.handleChange} checked={this.props.recipe.selected} />

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked:false };
  }

  handleChange (e) {
    this.setState({isChecked: e.target.checked});
    
    // if(this.isChecked == true){
    //   this.removeFromPlan();
    // }
    // else if(this.isChecked == false){
    //   this.addToPlan();
    // }
    // console.log(this.isChecked)
  }
  addToPlan(){

  }
  removeFromPlan(){

  }
  render () {

    return (
      <input
        type='checkbox'
        onClick={this.handleChange.bind(this)}
        value={this.props.itemID}
      />
    )
  }
}

export default Checkbox
