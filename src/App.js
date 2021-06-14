import './App.css';

import {HomePage} from './pages/HomePage/HomePage'
import {SingersPage} from './pages/SingersPage/SingersPage'
import SingerForm from './pages/SingersPage/SingerEdit'
import SingerEdit from './pages/SingersPage/SingerEdit'
import TrackForm from './pages/TracksPage/TrackEdit'
import TrackEdit from './pages/TracksPage/TrackEdit'
import {TracksPage} from './pages/TracksPage/TracksPage'
import SingerDetail from './pages/SingersPage/DetailPage'
import TrackDetail from './pages/TracksPage/TrackDetail'
import TranslationsPage from './pages/TranslationsPage/TranslationsPage'
import TranslationDetail from './pages/TranslationsPage/TranslationDetail'
import TranslationForm from "./pages/TranslationsPage/TranslationEdit";
import {AuthenticationPage} from "./pages/RegistrationPage/AuthenticationPage";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import TranslationEdit from "./pages/TranslationsPage/TranslationEdit";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className=" p-0 m-0 bg_app">
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Switch>
        <Route exact path="/singers" component={SingersPage}/>
        <Route exact path="/singers/:id" component={SingerDetail}/>
      </Switch>
      <Switch>
        <Route exact path="/tracks" component={TracksPage} />
        <Route exact path="/tracks/:id" component={TrackDetail} />
        <Route exact path ="/tracks/:id/translations" component={TranslationsPage}/>
        <Route exact path ="/tracks/:id/translations/:transl_id" component={TranslationDetail}/>
     </Switch>
     <Switch>
        <Route path="/addTrack" component={TrackForm} />
     </Switch>
     <Switch>
        <Route path="/addSinger" component={SingerForm} />
     </Switch>
     <Switch>
        <Route path="/editSinger" component={SingerEdit} />
     </Switch>
     <Switch>
        <Route path="/editTrack" component={TrackEdit} />
     </Switch>
     <Switch>
        <Route path="/editTranslation" component={TranslationEdit} />
     </Switch>
     <Switch>
        <Route path="/addTranslation" component={TranslationForm} />
     </Switch>
     <Switch>
         <Route path ="/sign_in" component={AuthenticationPage}/>
     </Switch>
     <Switch>
         <Route path ="/sign_up" component={RegistrationPage}/>
     </Switch>

    </div>
    </Router>
  );
}

export default App;
