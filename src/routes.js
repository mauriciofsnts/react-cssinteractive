import * as ROUTE from './constants/routes';

import HomePage from './pages/Home';
import BoxShadowPage from './pages/BoxShadow';

const routes = [
  { path: ROUTE.HOME, component: HomePage, exact: true },
  { path: ROUTE.BOXSHADOW, component: BoxShadowPage, exact: true },
];

export default routes;
