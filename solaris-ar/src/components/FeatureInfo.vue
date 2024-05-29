<template>
  <div v-if="featureInfo" class="feature-info">
    <ion-header>
      <ion-toolbar>
        <ion-title>Feature Info</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeFeatureInfo">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-if="featureInfo">
        <h3>Fea Info</h3>
        <p v-for="(value, key) in featureInfo" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </p>
      </div>
    </ion-content>
  </div>
</template>

<script>
import { IonCard, IonContent, IonRow, IonCol } from "@ionic/vue";
export default {
  props: {
    featureInfo: Object,
    isOpen: Boolean,
  },
  data() {
    return {};
  },
  components: {
    IonCard,
    IonContent,
    IonRow,
    IonCol,
  },
  methods: {
    closeFeatureInfo() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.feature-info {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 20vh;
  overflow-y: auto;
  background-color: white;
  z-index: 999; /* Ensure it appears above other elements */
  border-top: 1px solid #ccc;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
</style>
