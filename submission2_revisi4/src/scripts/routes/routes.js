import list from '../views/pages/list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': list, // default page
  '/list': list,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
