import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonList,
  IonCard,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardContent
} from "@ionic/react";

export default function PetPictures(props) {
  const { params } = props.match;
  const [petPictures, setPetPictures] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.the${params.petType}api.com/v1/images/search?breed_ids=${params.categoryId}&limit=10`
    )
      .then(res => res.json())
      .then(result => {
        setPetPictures(result);
      });
  }, [params.petType, params.categoryId]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select a category</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {petPictures.map(picture => (
            <IonCard key={picture.id}>
              <IonCardContent>
                <img src={picture.url} />
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
