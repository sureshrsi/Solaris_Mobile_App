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
                <ion-text
                  ><h4>{{ pageTitle }}</h4></ion-text
                >
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

                <ion-segment
                  v-model="selectedSegment"
                  color="primary"
                  mode="ios"
                >
                  <ion-segment-button value="segment1">
                    <ion-label>Grid No</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="segment2">
                    <ion-label>Village</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="segment3">
                    <ion-label>Watershed</ion-label>
                  </ion-segment-button>
                </ion-segment>

                <div v-if="selectedSegment === 'segment1'">
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
                </div>
                <div v-if="selectedSegment === 'segment2'">
                  <ion-select
                    class="ion-margin-top"
                    interface="popover"
                    label="Select Village"
                    label-placement="floating"
                    placeholder="Select Village"
                    fill="outline"
                  >
                    <ion-select-option value="circle1"
                      >Circle 1</ion-select-option
                    >
                    <ion-select-option value="circle2"
                      >Circle 2</ion-select-option
                    >
                  </ion-select>
                </div>
                <div v-if="selectedSegment === 'segment3'">
                  <ion-select
                    class="ion-margin-top"
                    interface="popover"
                    label="Select Watershed"
                    label-placement="floating"
                    placeholder="Select Watershed"
                    fill="outline"
                  >
                    <ion-select-option value="circle1"
                      >Circle 1</ion-select-option
                    >
                    <ion-select-option value="circle2"
                      >Circle 2</ion-select-option
                    >
                  </ion-select>
                </div>
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
                <ion-card-content>
                  <div v-if="legendUrl" class="legend">
                    <img :src="legendUrl" alt="Legend Image" /></div
                ></ion-card-content>
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
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonImg,
  IonText,
  IonRow,
  IonCol,
  IonCardContent,
} from "@ionic/vue";
import { useRoute } from "vue-router";
export default {
  props: {
    layers: Array,
    legendUrl: String,
  },
  data() {
    return {
      selectedSegment: "segment1",
    };
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
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonImg,
    IonText,
    IonRow,
    IonCol,
    IonCardContent,
  },
  computed: {
    pageTitle() {
      return this.getPageTitle();
    },
  },
  methods: {
    toggleLayer(layer) {
      layer.setVisible(!layer.getVisible());
    },
    getPageTitle() {
      const route = useRoute();

      switch (route.path) {
        case "/":
          return "Home";
        case "/namsaimapconsole":
          return "Namsai";
        case "/lsmapconsole":
          return "Lower Subansari";
        case "/twmapconsole":
          return "Tawang";
        // Add more cases for other routes
        default:
          return "Default Title";
      }
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
