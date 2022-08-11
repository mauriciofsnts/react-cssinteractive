import { Navigate } from 'react-router-dom'
import AppLayout from './layouts/app'
import * as Pages from './pages'

const routes = [
  {
    path: '',
    element: <AppLayout />,
    children: [
      { path: 'border-radius', element: <Pages.BorderRadius /> },
      { path: 'box-shadow', element: <Pages.BoxShadow /> },
      { path: 'flex-box', element: <Pages.FlexBox /> },
      { path: 'text-shadow', element: <Pages.TextShadow /> },
      { path: '*', element: <Navigate to="/border-radius" /> },
    ],
  },
]

export default routes
