<template>
  <MainPage />
</template>
<script>
import MainPage from "../components/MainPage.vue";
import { defineComponent, onMounted, onUnmounted } from "vue";
import { App } from "@capacitor/app";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const handleBackButton = () => {
      if (router.currentRoute.value.path === "/main") {
        App.exitApp();
      } else {
        router.back();
      }
    };

    onMounted(() => {
      App.addListener("backButton", handleBackButton);
    });

    onUnmounted(() => {
      App.removeListener("backButton", handleBackButton);
    });

    // Listen for Ionic's ionBackButton event to handle swipe back gesture
    document.addEventListener("ionBackButton", (ev) => {
      ev.detail.register(10, (processNextHandler) => {
        handleBackButton();
        processNextHandler();
      });
    });
  },
  components: {
    MainPage,
  },
};
</script>
