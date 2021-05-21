import './App.css';

import {HomePage} from './pages/HomePage/HomePage'
import {SingersPage} from './pages/SingersPage/SingersPage'
import TrackList from './components/TrackList/TrackList'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className=" p-0 m-0">
     <Switch>
        <Route path="/singers" component={SingersPage}/>
      </Switch>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Switch>
        <Route path="/tracks" component={TrackList} />
     </Switch>
    </div>
    </Router>
  );
}


export default App;
