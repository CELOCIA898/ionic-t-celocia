import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonAlert } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Import the Firestore instance

const QuoteGenerator: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [quotes, setQuotes] = useState<{ id: number; message: string; }[]>([]);


  interface Quote {
    id: number;
    message: string;
  }

  const fetchQuotes = async () => {
    const quotesCollection = collection(db, 'quotes');
    const snapshot = await getDocs(quotesCollection);
    const fetchedQuotes: Quote[] = snapshot.docs.map(doc => doc.data() as Quote);
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

        <img alt="Silhouette of mountains" src="data:image/jpeg;base64,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" />
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