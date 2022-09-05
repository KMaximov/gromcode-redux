import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './langruage.actions';
import { setUser, removeUser } from './user.actions';


store.subscribe(() => console.log(store.getState()))

store.dispatch(addProduct({ id: 76, name: 'milk'}));
store.dispatch(addProduct({ id: 75, name: 'coffe'}));
store.dispatch(addProduct({ id: 74, name: 'tea'}));
store.dispatch(removeProduct(75));

store.dispatch(setLanguage('ua'));

store.dispatch(setUser({ name: 'TOM' }));
store.dispatch(setUser({ name: 'CARL', age: 20, }));
store.dispatch(removeUser());
