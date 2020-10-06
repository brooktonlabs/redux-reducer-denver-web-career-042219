export function manageFriends(state, action){
  switch (action.type) {
  case 'ADD_FRIEND':
      friend: {
        name: state.name,
        homewtown: state.hometown,
        id: state.id
      },
    return {friends: state.friends ...friend}
  case 'REMOVE_FRIEND':
    return {count: state.count - 1}
  default:
    return state;
}
}
