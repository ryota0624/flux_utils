import React from "react";
import {Container} from "flux/utils";
import UserAction from "../UserList/UserAction.js"
import UserStore from "../UserList/UserStore.js"
import UserListItem from "./UserListItem.js"
import UserListForm from "./UserListForm.js"

function addUser( user ) {
  UserAction.addUser( user )
}
function removeUser( id ) {
  UserAction.removeUser( id )
}

class UserList extends React.Component {
  constructor( props, context ) {
    super( props, context );
  }
  static getStores() {
    return [ UserStore ];
  }
  static calculateState( prevState ) {
    return {
      users: UserStore.getState().users,
      listName: UserStore.getState().listName,
    };
  }
  handleChange( e ) {
    var newUser = {};
    newUser.name = e.target.value;
    this.setState( { newUser: newUser } );
  }
  handleSubmit( user ) {
    addUser( user );
  }
  render() {
    var newUser = {};
    var userList = this.state.users.map( user => {
        return ( <UserListItem user={ user } /> )
      });
    return (
      <div>
        <h1>LISt utils</h1>
        <UserListForm addUser={ this.handleSubmit.bind( this ) } />
        { userList }
      </div>
    );
  }
}
export default Container.create( UserList );