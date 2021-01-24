import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Container from './pages/Container';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))}
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
