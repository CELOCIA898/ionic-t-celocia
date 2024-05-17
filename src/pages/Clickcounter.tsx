import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Clickcounter.css';

const Clickcounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const history = useHistory();

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleResetClick = () => {
    setClickCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
           </IonButtons>
          <IonTitle>/ionic-t-celocia/home/Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="tab2-container">
          <p className="tab2-click-count">/ionic-t-celocia/home/Click Count: {clickCount}</p>
          <button className="tab2-button" onClick={handleButtonClick}>Click me</button>
          <button className="tab2-reset-button" onClick={handleResetClick}>Reset</button>
        </div>
      </IonContent> 
    </IonPage>
  );
};

export default Clickcounter;
