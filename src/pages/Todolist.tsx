import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonButton, IonIcon, IonButtons, IonBackButton } from '@ionic/react';
import './Todolist.css';
import { trash, create } from 'ionicons/icons';

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number>(-1);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index: number) => {
    setEditIndex(index);
    setNewTodo(todos[index]);
  };

  const updateTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setNewTodo('');
    }
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setNewTodo('');
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodos[index].startsWith('✅ ') ? updatedTodos[index].slice(2) : '✅ ' + updatedTodos[index];
    setTodos(updatedTodos);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonButton href='/Home'> Back</IonButton>
          </IonButtons>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonInput placeholder="New Todo" value={newTodo} onIonChange={(e) => setNewTodo(e.detail.value!)} />
            <IonButton slot="end" color="dark" onClick={addTodo}>Add</IonButton>
          </IonItem>

          {todos.map((todo, index) => (
            <IonItem key={index}>
              <IonCheckbox slot="start" />
              <IonLabel>{todo}</IonLabel>
              <IonButton slot="end" color="light" onClick={() => removeTodo(index)}>
                <IonIcon icon={trash} />
              </IonButton>
              <IonButton slot="end" color="light" onClick={() => editTodo(index)}>
                <IonIcon icon={create} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
