import { Collection } from './models/Collection';
import { UserList } from './views/UserList';
import { UserProps, User } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);
users.on('change', () => {
  const root = document.querySelector('#root');
  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();
