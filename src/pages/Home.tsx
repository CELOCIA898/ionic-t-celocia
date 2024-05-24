
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
    img:'https://imgs.search.brave.com/IOU-nklNUAWi0JWEwlGAZi2ExYlrjCDRT4_cug4LKaA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8wOS82My9j/bGljay12ZWN0b3It/MzIyOTA5NjMuanBn',
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
    link: '/ion/Home/Notes',
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
