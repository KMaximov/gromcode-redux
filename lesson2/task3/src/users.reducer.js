const usersReducer = (state = { usersList: [] }, { type, userData }) => {
  switch(type) {
    case 'USER/ADD': {
      return {
        ...state,
        usersList: state.usersList.concat(userData),
      }
    }
    case 'USER/DELETE': {
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== userData.id),
      }
    }
    default: 
      return state;
  }
};

export default usersReducer;
