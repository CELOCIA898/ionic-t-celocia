import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonBadge
} from '@ionic/react';

//Custom CSS
import './Home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil, chatbubble, readerOutline, logoIonic,logoFirebase, logoReact} from 'ionicons/icons';

const cardData = [
  {
    img:'data:image/jpeg;base64,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',
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/ionic-t-celocia/Home/Clickcounter',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }

  },
  {
    img:'https://imgs.search.brave.com/PyomqpdNDne_X2Fw216Ikpt8C35FKkRRhG0WEaow7kQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMjQxOTc1/Ny81NzgyL3YvNDUw/L2RlcG9zaXRwaG90/b3NfNTc4MjY1NzEt/c3RvY2staWxsdXN0/cmF0aW9uLWNhbGN1/bGF0b3ItZmxhdC1j/b25jZXB0LWljb24u/anBn',
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/ionic-t-celocia/Home/Calculator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    img:'https://imgs.search.brave.com/GFPd77Kya5yvmNq1CvPnduoXUjVHPc1zjIr5gOiPd3s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90b2Rv/LWxpc3QtaWNvbi12/ZWN0b3ItaWxsdXN0/cmF0aW9uLTI2MjYx/MjU5MS5qcGc',
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/ionic-t-celocia/Home/TodoList',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    img:'https://imgs.search.brave.com/JtPG2zWiOBvw7nbwEXjFjtZhJqcO7yoa4moT3PPEIMs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTQzMjQw/NS83MjUxL3YvNDUw/L2RlcG9zaXRwaG90/b3NfNzI1MTg3Njct/c3RvY2staWxsdXN0/cmF0aW9uLXNxdWFy/ZS10ZXh0LW1lc3Nh/Z2UtaWNvbi5qcGc',
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/ionic-t-celocia/Home/QuoteGenerator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    img:'https://imgs.search.brave.com/QrlYNTX6k6iyH6KKhhJ-WHHOjDe4kSQu6BXc8SSQSmQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/NC8xNy8wOS8wMi9j/aGlsZC0zMzI2OTYw/XzY0MC5wbmc',
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/ionic-t-celocia/Home/Notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact, 
      tag3: logoFirebase 
    }
  }
  
];

const Home: React.FC = () => {
  {/*Dynamic Search*/}
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <IonPage>       
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>         
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/*Dynamic Search*/}
        <IonSearchbar 
          value={searchTerm} 
          onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
        />
        
        <IonGrid>
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .reduce((rows: JSX.Element[][], card, index) => { // Explicitly specify the type of rows variable
              const rowIndex = Math.floor(index / 2); // Calculate the row index
              if (!rows[rowIndex]) {
                rows[rowIndex] = []; // Initialize the row if it doesn't exist
              }
              rows[rowIndex].push( // Push the card into the appropriate row
                <IonCol size="2" key={index}>
                  <IonCard routerLink={card.link} routerDirection='forward'>
                  <img alt="Silhouette of mountains" src={card.img} />
                    <IonCardHeader>
                      <IonCardTitle>
                        <div className="home-card-title">{card.title}</div>
                        <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                        {card.tags && Object.entries(card.tags).map(([key, icon], i) => (
                          <IonIcon
                            key={i}
                            className="home-card-subicon"
                            icon={icon}
                            color="primary" // Set color as needed
                          />
                        ))}
                      </IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              );
              return rows;
            }, [])
            .map((row, index) => (
              <IonRow key={index}>
                {row}
              </IonRow>
            ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Home; // Add the missing closing curly brace here