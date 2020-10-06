export function manageFriends(state, action){
  switch (action.type) {
  case 'ADD_FRIEND':
        friend: {
        name: action.name,
        homewtown: action.hometown,
        id: action.id
      },
    return {friends: state.friends ...friend}
  case 'REMOVE_FRIEND':
    return {count: state.count - 1}
  default:
    return state;
}
}
