import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

// Define card data array
const cardData = [
  {
    title: 'Clickcounter',
    subtitle: 'Applet #1',
    link: '/ionic-t-celocia/home/clickcounter',
    img: '/assets/click.png',
  },
  {
    title: 'Calculator',
    subtitle: 'Applet #2',
    link: '/ionic-t-celocia/home/calculator',
    img: '/assets/calculator.png',
  },
  {
    title: 'Todo List',
    subtitle: 'Applet #3',
    link: '/ionic-t-celocia/home/todolist',
    img: '/assets/todo.png',
  },
  {
    title: 'Quote generator',
    subtitle: 'Applet #4',
    link: '/ionic-t-celocia/home/quotegenerator',
    img: '/assets/qt.png',
  },
  {
    title: 'Notes',
    subtitle: 'Applet #5',
    link: '/ionic-t-celocia/home/notes',
    img: '/assets/nt.png',
  }
];

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  // Access the history object to navigate between routes
  const history = useHistory();

  const handleCardClick = (link: string) => {
    history.push(link);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to My Applications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Search bar to handle search term input */}
        <IonSearchbar
          value={search}
          onIonChange={(e) => setSearch(e.detail.value ?? '')}
          placeholder="Search applications"
        />
        {/* Render the filtered list of applet cards */}
        <IonList>
          {cardData
            // Filter card data based on the search term (case-insensitive comparison)
            .filter((card) =>
              card.title.toLowerCase().includes(search.toLowerCase())
            )
            // Map filtered card data to IonItem components
            .map((card, index) => (
              <IonItem
                key={index}
                button
                onClick={() => handleCardClick(card.link)}
              >
                {/* Display the applet's image */}
                <IonThumbnail slot="start">
                  <img src={card.img} alt={card.title} />
                </IonThumbnail>
                {/* Display the applet's title and subtitle */}
                <IonLabel>
                  <h2>{card.title}</h2>
                  <p>{card.subtitle}</p>
                </IonLabel>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Home;