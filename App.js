import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonText, IonApp, IonPopover, IonButton, IonContent } from '@ionic/react';

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
import './components/popover.css';

let formFilled = false;

const invoiceData = [
  {
    "companyName": "",
    "buyerName": "",
    "streetAddress": "",
    "zipCodeTown": "",
    "invoiceNumber": "",
    "referenceNumber": "",
    "invoiceDate": "",
    "dueDate": "",
    "shippingDate": "",
    "shippingMethod": "",
    "paymentCondition": "",
    "ourReference": "",
    "yourReference": "",
    "buyerOrderNumber": "",
    "interestOfLatePayment": "",
    "timeOfComplaint": "",
  },
]

const saveInvoiceData = () => {

  invoiceData['companyName'] = document.getElementById('companyName').value;
  invoiceData['buyerName'] = document.getElementById('buyerName').value;
  invoiceData['streetAddress'] = document.getElementById('streetAddress').value;
  invoiceData['zipCodeTown'] = document.getElementById('zipCodeTown').value;
  invoiceData['invoiceNumber'] = document.getElementById('invoiceNumber').value;
  invoiceData['referenceNumber'] = document.getElementById('referenceNumber').value;
  invoiceData['invoiceDate'] = document.getElementById('invoiceDate').value;
  invoiceData['dueDate'] = document.getElementById('dueDate').value;
  invoiceData['shippingDate'] = document.getElementById('shippingDate').value;
  invoiceData['shippingMethod'] = document.getElementById('shippingMethod').value;
  invoiceData['paymentCondition'] = document.getElementById('paymentCondition').value;
  invoiceData['ourReference'] = document.getElementById('ourReference').value;
  invoiceData['yourReference'] = document.getElementById('yourReference').value;
  invoiceData['buyerOrderNumber'] = document.getElementById('buyerOrderNumber').value;
  invoiceData['interestOfLatePayment'] = document.getElementById('interestOfLatePayment').value;
  invoiceData['timeOfComplaint'] = document.getElementById('timeOfComplaint').value;
  console.log(invoiceData);


  console.log("valittu pvm " + invoiceData['invoiceDate']);
  var x;
  formFilled = true;
  for (x in invoiceData) {
    if (invoiceData[x] === "") {
      formFilled = false;
    }
  }

  if (!formFilled) {
    // setShowAlert1(true);
    return;
  }

  // tallenna laskun tiedot tässä
  console.log('tallennettu');

  return null;
}

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
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonText color="primary">
                  Ostajan tiedot
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem>
            <IonLabel position="floating">Yrityksen nimi</IonLabel>
            <IonInput id="companyName" required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Yhteyshenkilö</IonLabel>
            <IonInput id="buyerName"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Katuosoite</IonLabel>
            <IonInput id="streetAddress"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Postinumero ja -toimipaikka</IonLabel>
            <IonInput id="zipCodeTown"></IonInput>
          </IonItem>
          <IonText color="primary"></IonText>

          <IonRow><IonCol></IonCol></IonRow>
          <IonRow>
            <IonCol>
              <IonText color="primary">
                Laskun tiedot
                </IonText>
            </IonCol>
          </IonRow>



          <IonItem>
            <IonLabel position="floating">Laskun numero</IonLabel>
            <IonInput id="invoiceNumber"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viitenumero</IonLabel>
            <IonInput id="referenceNumber"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Laskun pvm</IonLabel>
            <IonInput id="invoiceDate"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Eräpäivä</IonLabel>
            <IonInput id="dueDate"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Toimituspvm</IonLabel>
            <IonInput id="shippingDate"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Toimitustapa</IonLabel>
            <IonInput id="shippingMethod"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Maksuehto</IonLabel>
            <IonInput id="paymentCondition"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viitteemme</IonLabel>
            <IonInput id="ourReference"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viitteenne</IonLabel>
            <IonInput id="yourReference"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Ostajan tilausnumero</IonLabel>
            <IonInput id="buyerOrderNumber"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Viivästyskorko</IonLabel>
            <IonInput id="interestOfLatePayment"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Huomautusaika</IonLabel>
            <IonInput id="timeOfComplaint"></IonInput>
          </IonItem>
          <IonButton onClick={() => {
            saveInvoiceData();
            if (formFilled) {
              setShowPopover(false);
            } else {
              setShowPopover(true);
            };
          }}>
            Tallenna lasku
          </IonButton>
          <IonButton onclick={() => setShowPopover(false)}>Poistu tallentamatta</IonButton>
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
