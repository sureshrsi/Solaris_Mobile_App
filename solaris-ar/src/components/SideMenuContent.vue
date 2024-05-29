<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title
          ><ion-img src="../src/assets/img/SOLARISLogo.png"> </ion-img
        ></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <div class="bgColor">
          <ion-row>
            <ion-col class="ion-text-center">
              <ion-card>
                <ion-text><h4>Tawang District</h4></ion-text>
                <hr />
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Select Circle"
                  label-placement="floating"
                  placeholder="Select Circle"
                  fill="outline"
                >
                  <ion-select-option value="circle1"
                    >Circle 1</ion-select-option
                  >
                  <ion-select-option value="circle2"
                    >Circle 2</ion-select-option
                  >
                </ion-select>
                <ion-buttons class="ion-margin-top">
                  <ion-button
                    size="medium"
                    expand="block"
                    fill="solid"
                    color="primary"
                    >Grid No</ion-button
                  >
                  <ion-button
                    size="medium"
                    expand="block"
                    fill="solid"
                    color="primary"
                    >Village</ion-button
                  >
                  <ion-button
                    size="medium"
                    expand="block"
                    fill="solid"
                    color="primary"
                    >Watershed</ion-button
                  >
                </ion-buttons>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Select Grid No"
                  label-placement="floating"
                  placeholder="Select Grid No"
                  fill="outline"
                >
                  <ion-select-option value="circle1"
                    >Circle 1</ion-select-option
                  >
                  <ion-select-option value="circle2"
                    >Circle 2</ion-select-option
                  >
                </ion-select>
              </ion-card>
              <ion-card class="cardSize">
                <ion-text><h4>Layer Control</h4></ion-text>
                <ion-card>
                  <ion-list>
                    <ion-item v-for="layer in layers" :key="layer.get('title')">
                      <ion-label>{{ layer.get("title") }}</ion-label>
                      <ion-toggle
                        :checked="layer.getVisible()"
                        @ionChange="toggleLayer(layer)"
                      >
                      </ion-toggle>
                    </ion-item>
                  </ion-list>
                </ion-card>
              </ion-card>
              <ion-card class="cardSize">
                <ion-text><h4>Legend</h4></ion-text>
                <ion-card-contents>
                  <div v-if="legendUrl" class="legend">
                    <img :src="legendUrl" alt="Legend Image" /></div
                ></ion-card-contents>
              </ion-card>
            </ion-col>
          </ion-row>
        </div>
      </ion-list>
    </ion-content>
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
                    <ion-segment value="buttons" color="primary">
    <ion-segment-button value="gridno">
      <ion-label>Grid No</ion-label>
    </ion-segment-button>
    <ion-segment-button value="village">
      <ion-label>Village</ion-label>
    </ion-segment-button>
    <ion-segment-button value="watershed">
      <ion-label>Watershed</ion-label>
    </ion-segment-button>
  </ion-segment>
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
  IonSelect,
  IonSelectOption,
  IonToolbar,
  IonCard,
  IonLabel,
  IonToggle,
} from "@ionic/vue";
export default {
  props: {
    layers: Array,
    legendUrl: String,
  },
  components: {
    IonToolbar,
    IonContent,
    IonHeader,
    IonMenu,
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonList,
    IonItem,
    IonCard,
    IonLabel,
    IonToggle,
  },
  methods: {
    toggleLayer(layer) {
      layer.setVisible(!layer.getVisible());
    },
  },
};
</script>
<style>
.cardSize {
  overflow: scroll;
  padding-top: 1vh;
  height: 26vh;
  width: 31vh;
}
.bgColor {
  background-color: #3c457c;
}
hr {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
  .segment-button-checked.ios::part(native) {
    color: #ffffff;
  }
  ion-segment-button.ios::part(native) {
    color: #000000;
  }
</style>
