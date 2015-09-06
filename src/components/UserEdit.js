import React from "react";

class UserEdit extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      editName: props.defaultName
    }
  }
  handleChange( e ) {
    this.setState( { editName: e.target.value })
  }
  handleBlur() {
    var changeName = this.state.editName;
    if( changeName !== "" && changeName !== this.props.defaultName ) {
      this.props.commitEdit( this.state.editName );
      console.log("change");
    };
    this.props.toggleMode();
  }
  render() {
    return(
      <span>
        <input type = "text"
               autoFocus = "true"
               onBlur = {this.handleBlur.bind(this)}
               value = {this.state.editName}
               onChange={this.handleChange.bind(this)}></input>
      </span>
    )
  }
}

export default UserEdit;