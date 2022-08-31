import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

const rootElem = document.querySelector('#root');

store.dispatch(addUser('Tom', 1));
store.dispatch(addUser('Jack', 2));

store.dispatch(deleteUser(1));

store.subscribe(() => {
  console.log(store.getState())
});

// console.log(store.getState());
