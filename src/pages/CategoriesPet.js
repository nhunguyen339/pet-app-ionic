import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from "@ionic/react";

export default function PetCategories(props) {
  const { params } = props.match;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://api.the${params.petType}api.com/v1/breeds`)
      .then(res => res.json())
      .then(result => {
        setCategories(result);
      });
  }, [params.petType]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select a category</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {categories.map(category => (
            <IonItem
              key={category.id}
              onClick={() =>
                props.history.push(`/${params.petType}/pictures/${category.id}`)
              }
            >
              <IonLabel>{category.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
