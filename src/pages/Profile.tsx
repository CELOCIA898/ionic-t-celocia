import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <img alt="Silhouette of mountains" src="./assets/celocia.jpg" />
        <IonCardHeader>
          <IonCardTitle>Quicel Joy Celocia</IonCardTitle>
          <IonCardSubtitle>Student</IonCardSubtitle>
        </IonCardHeader>
  
        <IonCardContent>Don't be trapped in someone else's dream</IonCardContent>
        <IonButton id="present-alert" expand='full'>Click Me</IonButton>
  
  
      </IonCard><IonAlert
          header="Alert!"
          trigger="present-alert"
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Alert canceled');
              },
            },
            {
              text: 'OK',
              role: 'confirm',
              handler: () => {
                console.log('Alert confirmed');
              },
            },
          ]}
          onDidDismiss={({ detail }) => console.log('Dismissed with role: ${detail.role}')}
        ></IonAlert>
        
      </IonContent>
    </IonPage>
  );
};

export default Profile;