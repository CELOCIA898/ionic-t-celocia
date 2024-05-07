import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonAlert } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Import the Firestore instance

const QuoteGenerator: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [quotes, setQuotes] = useState<{ id: number; message: string; }[]>([]);

  const fetchQuotes = async () => {
    const quotesCollection = collection(db, 'quotes');
    const snapshot = await getDocs(quotesCollection);
    const fetchedQuotes = snapshot.docs.map(doc => doc.data());
    setQuotes(fetchedQuotes);
  };

  const generateRandomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  const renderRandomMessage = () => {
    const index = generateRandomIndex();
    return quotes[index]?.message || '';
  };

  const handleOpenAlert = () => {
    fetchQuotes(); // Fetch quotes from Firestore when the button is clicked
    setShowAlert(true);
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quote Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <img alt="Silhouette of mountains" src="/src/assets/sm.png" />
        <IonGrid>
          <IonRow>
            <IonCol size="" push="">
              <IonButton id="present-alert" color="warning" expand="full" onClick={handleOpenAlert}>Click me</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={handleAlertDismiss}
          header="Rizz"
          subHeader=""
          message={renderRandomMessage()}
          buttons={['Close']}
        />
      </IonContent>
    </IonPage>
  );
};

export default QuoteGenerator;