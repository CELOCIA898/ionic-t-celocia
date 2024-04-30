import React, { useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/react';

import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const items = [
    { id: 1, label: 'Clickcounter', thumbnail: '../src/assets/click.png', href: 'clickcounter' },
    { id: 2, label: 'Calculator', thumbnail: '../src/assets/calcu.jpg', href: '/Calculator' },
    { id: 3, label: 'TodoList', thumbnail: '../src/assets/todo.png', href: '/TodoList' },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle className="app-title">Welcome to my Application</IonCardTitle>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent className="card-content">
        <IonList className="centered-list">
          <IonItem>
          <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="centered-input"
          />
          </IonItem>
          {filteredItems.map((item) => (
            <IonItem key={item.id}>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src={item.thumbnail} />
              </IonThumbnail>
              <IonButton href={item.href}>{item.label}</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}

export default Home;