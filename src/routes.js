import * as ROUTE from './constants/routes';

import HomePage from './pages/Home';
import BoxShadowPage from './pages/BoxShadow';
import BorderRadiusPage from './pages/BorderRadius';
import TextShadowPage from './pages/TextShadow';
import FlexboxPage from './pages/FlexBox';

const routes = [
  { path: ROUTE.HOME, component: HomePage, exact: true },
  { path: ROUTE.BOXSHADOW, component: BoxShadowPage, exact: true },
  { path: ROUTE.BORDERRADIUS, component: BorderRadiusPage, exact: true },
  { path: ROUTE.TEXTSHADOW, component: TextShadowPage, exact: true },
  { path: ROUTE.FLEXBOX, component: FlexboxPage, exact: true },
];

export default routes;
