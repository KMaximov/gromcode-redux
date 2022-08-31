import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({name: 'Tom', id: 1}));
store.dispatch(addUser({name: 'Jack', id: 2}));

store.dispatch(deleteUser(1));

store.subscribe(() => {
  console.log(store.getState())
});

// console.log(store.getState());
