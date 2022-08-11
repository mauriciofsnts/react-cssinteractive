import { useRoutes } from 'react-router-dom'
import routes from './routes'

export function App() {
  const content = useRoutes(routes)

  return <div>{content}</div>
}
