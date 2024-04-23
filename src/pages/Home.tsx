import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { arrowBack } from 'ionicons/icons'; // Importing the arrow back icon from ionicons

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"> {/* Adding slot="start" to position the button at the start of the toolbar */}
            <IonButton routerLink="/other-page"> {/* Adding a button with a routerLink to navigate to another page */}
              <IonIcon icon={arrowBack} /> {/* Using the arrow back icon */}
            </IonButton>
          </IonButtons>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
