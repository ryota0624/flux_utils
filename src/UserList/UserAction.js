import constants from "../constants";
import Dispatcher from "../Dispatcher"

export default class UserAction {
  static addUser( user ) {
    Dispatcher.dispatch ( {
      type: constants.addUser,
      user
    } );
  }
  static removeUser( id ) {
    Dispatcher.dispatch ( {
      type: constants.removeUser,
      id
    } );
  }
  static editUser( id, name ) {
    Dispatcher.dispatch ( {
      type: constants.editUser,
      id,
      name
    })
  }
}