import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import { Scheduler, MonthView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
// import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';
// import { MonthView } from '@devexpress/dx-react-scheduler';




function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
      <header>
        <NavBar />
      </header>
      <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        <Scheduler
    data={[
      { startDate: '2018-10-31 10:00', endDate: '2018-10-31 11:00', title: 'Meeting' },
      { startDate: '2018-11-01 18:00', endDate: '2018-11-01 19:30', title: 'Go to a gym' },
    ]}
  >
    <MonthView />
    <Appointments />
  </Scheduler>
      </Router>
    </div>
  );
}

// New - import the React Router components, and the Profile page component



      

export default App;

