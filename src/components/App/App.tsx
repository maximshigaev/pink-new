import { FC, memo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Components
import { MainPage } from '../';

// Constants
import { ROUTES } from '../../constants';

export const App: FC = memo(() => {
  return (
    <Router>
      <Switch>
        <Route
          path={ROUTES.mainPage}
          component={MainPage}
          exact
        />
        <Redirect to={ROUTES.mainPage} />
      </Switch>
    </Router>
  );
});
