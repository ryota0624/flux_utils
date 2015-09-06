import React from "react";

const ENTRKEY = 13;
class UserListForm extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      newUser: { name: "" }
    }
  }
  handleChange( e ){
    var user = this.state.newUser;
    user.name = e.target.value;
    console.log(this.state.newUser);
    this.setState( { newUser: user } );
  }
  handleSubmit(){
    if ( this.state.newUser.name !=="" ) {
      this.props.addUser(this.state.newUser);
      this.setState( { newUser: { name: "" } } );
    }
  }
  handleKeyDown( e ){
    if ( e.which === ENTRKEY ) {
      this.handleSubmit();
    }

  }
  render(){
    var user = { name: "ry" }
    return(
      <p>
        <input type = "text" value = { this.state.newUser.name }
               onChange = { this.handleChange.bind( this ) }
               onKeyDown = { this.handleKeyDown.bind( this ) }/>
        <input type = "button" value = "追加"
               onClick = { this.handleSubmit.bind( this ) } />
      </p>
    )
  }
}

export default UserListForm