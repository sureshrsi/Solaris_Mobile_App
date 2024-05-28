<template>
  <div>
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">This is the menu content.</ion-content>
    </ion-menu>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title
            >SOIL AND LAND RESOURCES INFORMATION SYSTEM ARUNACHAL
            PRADESH</ion-title
          >
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div id="map" class="map"></div>
      </ion-content>
    </ion-page>
  </div>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import LayerGroup from "ol/layer/Group";
import LayerSwitcher from "ol-layerswitcher";
import "ol-layerswitcher/dist/ol-layerswitcher.css";

export default {
  data() {
    return {};
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const baseLayer = new TileLayer({
        title: "OpenStreetMap",
        type: "base",
        visible: true,
        source: new OSM(),
      });

      const goServerLayer = new TileLayer({
        title: "GoServer Tiles",
        type: "base",
        visible: false,
        source: new XYZ({
          url: "URL_TO_YOUR_GOSERVER_TILES/{z}/{x}/{y}.png", // Replace with your GoServer URL
        }),
      });

      const layerGroup = new LayerGroup({
        title: "Base maps",
        layers: [baseLayer, goServerLayer],
      });

      const map = new Map({
        target: "map",
        layers: [layerGroup],
        view: new View({
          center: [0, 0], // Replace with your desired center coordinates
          zoom: 2, // Replace with your desired zoom level
        }),
      });

      const layerSwitcher = new LayerSwitcher({
        activationMode: "click",
        startActive: false,
        tipLabel: "Layers", // Optional label for button
        groupSelectStyle: "children", // Can be 'children' [default], 'group' or 'none'
      });

      map.addControl(layerSwitcher);
    },
  },
};
</script>

<style scoped>
ion-menu::part(backdrop) {
  background-color: rgba(255, 0, 255, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;
  box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
}

.map {
  height: 100%;
  width: 100%;
}
</style>
