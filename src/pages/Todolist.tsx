import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonButton } from '@ionic/react';

const Todolist: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = tasks[index].startsWith('✓') ? tasks[index].substring(2) : `✓ ${tasks[index]}`;
    setTasks(updatedTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todolist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {tasks.map((task, index) => (
            <IonItem key={index}>
              <IonCheckbox slot="start" checked={task.startsWith('✓')} onIonChange={() => handleToggleTask(index)} />
              <IonLabel>{task}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            placeholder="Add a new task"
            value={newTask}
            onIonChange={(e) => setNewTask(e.detail.value!)}
          ></IonInput>
          <IonButton slot="end" onClick={handleAddTask}>Add</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
