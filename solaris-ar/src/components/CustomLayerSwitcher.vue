<template>
  <ion-list>
    <ion-item v-for="layer in layers" :key="layer.get('title')">
      <ion-label>{{ layer.get("title") }}</ion-label>
      <ion-toggle :checked="layer.getVisible()" @ionChange="toggleLayer(layer)">
      </ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonItem, IonLabel, IonList, IonToggle } from "@ionic/vue";

export default {
  props: {
    layers: Array,
  },
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonToggle,
  },
  methods: {
    toggleLayer(layer) {
      layer.setVisible(!layer.getVisible());
    },
  },
};
</script>
