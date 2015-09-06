import React from "react";
import UserEdit from "./UserEdit.js"
import UserAction from "../UserList/UserAction.js"

class UserListItem extends React.Component {
  constructor( props, context ){
    super( props,context );
    this.state = {
      editMode: false
    }
  }
  toggleMode() {
    this.setState( { editMode: !this.state.editMode } )
  }
  editUserName( name ) {
    UserAction.editUser( this.props.user.id, name )
    console.log(name)
  }
  handleDelete() {
    UserAction.removeUser( this.props.user.id );
  }
  render() {
    return(
      <div>
        <span>
          {console.log(this.state.editMode)}
          <label >{ this.props.user.id }</label>
          {this.state.editMode?
            <UserEdit toggleMode = { this.toggleMode.bind( this ) }
                      defaultName = { this.props.user.name }
                      commitEdit = { this.editUserName.bind( this ) }/> :
            <label onClick = {this.toggleMode.bind(this)}>
              { this.props.user.name }
            </label>
          }
          <button onClick={this.handleDelete.bind(this)}>削除</button>
        </span>
      </div>
    )
  }
}

export default UserListItem;