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
    link: '/clickcounter',
    img: 'src/assets/click.png', // Adjusted image path
  },
  {
    title: 'Calculator',
    subtitle: 'Applet #2',
    link: '/calculator',
    img: 'src/assets/calcu.jpg', // Adjusted image path
  },
  {
    title: 'Todo List',
    subtitle: 'Applet #3',
    link: '/todolist',
    img: 'src/assets/todo.png', // Adjusted image path
  },
  {
    title: 'Quote Generator',
    subtitle: 'Applet #4',
    link: '/quotegenerator', // Fixed typo in link
    img: 'src/assets/quotes.png', // Adjusted image path
  }
];

function Home() {
  // Initialize state for search term
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  // Function to handle card click events
  const handleCardClick = (link) => {
    history.push(link); // Navigate to the specified route when a card is clicked
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
          value={searchTerm}
          onIonChange={(e) => setSearchTerm(e.detail.value ?? '')}
          placeholder="Search applications"
        />
        {/* Render the filtered list of applet cards */}
        <IonList>
          {cardData
            // Filter card data based on the search term (case-insensitive comparison)
            .filter((card) =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            // Map filtered card data to IonItem components
            .map((card, index) => (
              <IonItem
                key={index}
                button
                onClick={() => handleCardClick(card.link)} // Trigger handleCardClick function with the card's link when clicked
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
