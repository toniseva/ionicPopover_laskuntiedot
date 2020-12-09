import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonItem, IonBackdrop, IonLabel, IonInput, IonText, IonApp, IonPopover, IonButton, IonRouterOutlet, IonContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// import './components/popover.css'; 

const saveInvoiceData = () => {
  console.log('hep');
  return null;
}

export const Backdrop = () => (
  <IonContent>
    <IonBackdrop tappable={false} />
  </IonContent>
);

export const PopoverExample = () => {
  const [showPopover, setShowPopover] = useState(false);


  return (
    <>
      <IonPopover
        isOpen={showPopover}
        cssClass='my-custom-class'
        showBackdrop='true'
        backdropDismiss='false'
        onDidDismiss={e => setShowPopover(false)}
      >
        <IonContent className="ion-padding">
          <IonText color="primary">
            Ostajan tiedot
          </IonText>
          <IonItem>
            <IonLabel position="floating">Yrityksen nimi</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Yhteyshenkilö</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Katuosoite</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Postinumero ja -toimipaikka</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonText color="primary" className="ion-margin">
            Laskun tiedot
          </IonText>
          <IonItem>
            <IonLabel position="floating">Laskun numero</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viitenumero</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Laskun pvm</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Eräpäivä</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Toimituspvm</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Toimitustapa</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Maksuehto</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viitteemme</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viitteenne</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Ostajan tilausnumero</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viivästyskorko</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Huomautusaika</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton onClick={() => {
            saveInvoiceData();
            setShowPopover(false);
          }}>

            Tallenna lasku
          </IonButton>
        </IonContent>
      </IonPopover >
      <IonButton onClick={() => setShowPopover(true)}>Syötä laskun tiedot</IonButton>
    </>
  );
};

const App = () => (
  <IonApp>
    <IonContent>
      <PopoverExample />
    </IonContent>
  </IonApp>
);

export default App;
