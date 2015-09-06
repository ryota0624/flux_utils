import { ReduceStore } from "flux/utils";
import Dispatcher from "../Dispatcher.js";
import constants from "../constants";
import Immutable from "immutable-store";

class UserStore extends ReduceStore {
  constructor( props, context ) {
    super( props, context )
  }
  getInitialState() {
    return Immutable( {
      "users": [ { id: 0, name: "ryota" } ],
      "listName": "name"
    });
  }
  reduce( state, action ) {
    switch ( action.type ) {
      case constants.addUser:
        action.user.id = state.users.length;
        var newState = state.users.push( action.user );
        return state.set( "users", newState.users );

      case constants.editUser:
        var id  = action.id,
          name = action.name;
          //immutableオブジェクト内配列の１要素のあるプロパティを書き換えた新しいオブジェクトを生成？
        return state.set( "users", newUsers );

      case constants.removeUser:
        var id = action.id,
          newState = state.users.splice( id,1 );
        return state.set( "users", newState.users );
      default:
        return state;
    }
  }
}

const instance = new UserStore( Dispatcher );

export default instance