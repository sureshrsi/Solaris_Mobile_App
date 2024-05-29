<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title><ion-img src="../src/assets/img/SOLARISLogo.png">
            </ion-img></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
      <div  class="bgColor">
      <ion-row>
  <ion-col class="ion-text-center">
    <ion-card>
      <ion-text><h4>Tawang District</h4></ion-text>
      <hr/>
      <ion-list>
    <ion-item>
      <ion-select aria-label="Fruit" interface="popover" placeholder="Select fruit" fill="outline">
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Select Circle"
                      label-placement="floating"
                      placeholder="Select Circle"
                      fill="outline"
                    >
                      <ion-select-option value="circle1">Circle 1</ion-select-option>
                      <ion-select-option value="circle2">Circle 2</ion-select-option>                      
                    </ion-select>
                    <ion-buttons class="ion-margin-top" >
                      <ion-button size="medium" expand="block" fill="solid" color="primary">Grid No</ion-button>
                      <ion-button size="medium" expand="block" fill="solid" color="primary">Village</ion-button>
                      <ion-button size="medium" expand="block" fill="solid" color="primary">Watershed</ion-button>
                    </ion-buttons>
                    <ion-select
                    class="ion-margin-top"
                      interface="popover"
                      label="Select Grid No"
                      label-placement="floating"
                      placeholder="Select Grid No"
                      fill="outline"
                    >
                      <ion-select-option value="circle1">Circle 1</ion-select-option>
                      <ion-select-option value="circle2">Circle 2</ion-select-option>                      
                    </ion-select>
    </ion-card>
    <ion-card class="cardSize">
      <ion-text><h4>Layer Control</h4></ion-text>
    </ion-card>
    <ion-card class="cardSize">
      <ion-text><h4>Legend</h4></ion-text>
      <ion-card-contents>Click on Map to View Legend</ion-card-contents>
    </ion-card>
  </ion-col>
</ion-row>
</div>   
</ion-list>
</ion-content>
  </ion-menu>
</template>
<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
export default {
  data() {
    return {};
  },
  components: {
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonList,
    IonItem

  }
};
</script>
<style>
.cardSize{
  padding-top: 1vh;
  height:26vh;
  width :31vh
}
.bgColor{
  background-color: #3C457C;
}
</style>