import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeOutline, ellipse, homeOutline, personCircleOutline, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Clickcounter from './pages/Clickcounter';
import Calculator from './pages/calculator';
import Todolist from './pages/Todolist/Todolist';
import Quotegenerator from './pages/quote/quotegenerator';
import Notes from './pages/Notes/Notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

         
        { /* Home Router */}
        <Route exact path="/Home">
            <Home />
          </Route>
        
          <Route exact path="/Profile">
            <Profile />
          </Route>
          
          <Route exact path="/Clickcounter">
            <Clickcounter />
          </Route>
          
          <Route path="/Calculator">
            <Calculator />
          </Route>

          <Route exact path="/todolist">
            <Todolist/>
          </Route>

          <Route path="/quotegenerator">
            <Quotegenerator />
          </Route>
          
          <Route path="/notes">
            <Notes />
          </Route>
          

          {/* Application default router */}
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">

        <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="blank" href="/ blank">
            <IonIcon aria-hidden="true" icon={closeOutline} />
            <IonLabel>blank</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
