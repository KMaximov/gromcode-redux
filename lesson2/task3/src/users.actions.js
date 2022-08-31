export const addUser = ({ name, id }) => {
  return {
    type: 'USER/ADD',
    userData: {
      name,
      id,
    }
  }
};

export const deleteUser = (id) => {
  return {
    type: 'USER/DELETE',
    userData: {
      id,
    }
  }
};
