import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

import {
  HomePage,
  NotFoundPage,
  ReducerPage,
  StatePage
} from 'pages';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/state" component={StatePage} />
        <Route path="/reducers" component={ReducerPage} />
        <Route path="/" component={HomePage} exact />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
