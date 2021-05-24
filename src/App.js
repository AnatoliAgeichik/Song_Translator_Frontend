import './App.css';

import {HomePage} from './pages/HomePage/HomePage'
import {SingersPage} from './pages/SingersPage/SingersPage'
import SingerForm from './pages/SingersPage/SingerForm'
import TrackForm from './pages/TracksPage/TrackForm'
import {TracksPage} from './pages/TracksPage/TracksPage'


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
        <Route path="/tracks" component={TracksPage} />
     </Switch>
     <Switch>
        <Route path="/addTrack" component={TrackForm} />
     </Switch>
     <Switch>
        <Route path="/addSinger" component={SingerForm} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
