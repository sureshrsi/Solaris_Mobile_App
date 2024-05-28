<template>
  <div>
    <!-- <SideMenuContent /> -->
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <CustomLayerSwitcher :layers="layers" />
      </ion-content>
      <!-- <div id="layer-switcher-panel" class="layer-switcher-panel">
          <h2>Layers</h2>
          <div id="layer-switcher"></div>
        </div> -->
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
        <div v-if="featureInfo" class="feature-info">
          <h3>Feature Info</h3>
          <ion-pre>
            <h6>{{ featureInfo.soil_code }}</h6>
            <h6>{{ featureInfo.action_pla }}</h6>
          </ion-pre>
        </div>
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
import TileWMS from "ol/source/TileWMS";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import LayerGroup from "ol/layer/Group";
// import LayerSwitcher from "ol-layerswitcher";
import { transform } from "ol/proj";
import "ol-layerswitcher/dist/ol-layerswitcher.css";
// import CustomLayerSwitcherControl from "./CustomLayerSwitcherControl";
import CustomLayerSwitcher from "./CustomLayerSwitcher.vue";
// import SideMenuContent from "./SideMenuContent.vue";
export default {
  data() {
    return { layers: [], map: null, overlay: null, featureInfo: null };
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
    CustomLayerSwitcher,
    // SideMenuContent,
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      let base_url = "https://solaris-ar.com:8085/geoserver";

      const baseLayer = new TileLayer({
        title: "OpenStreetMap",
        type: "base",
        visible: true,
        source: new OSM(),
      });

      const CropSuitabilityLayer = new TileLayer({
        title: "Crop Suitability",
        name: "namsai_crop_suitability",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_crop_suitability",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const ActionPlaneLayer = new TileLayer({
        title: "Action Plan",
        name: "namsai_land_and_water_action_plan",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_land_and_water_action_plan",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const gridLayer = new TileLayer({
        title: "Grid",
        name: "namsai_grid_10k",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_grid_10k",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const LandCapLayer = new TileLayer({
        title: "Land Capability",
        name: "namsai_land_capability",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_land_capability",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });
      const LandDegradationLayer = new TileLayer({
        title: "Land Degradation",
        name: "namsai_land_degradation",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_land_degradation",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });
      const SoilInfoLayer = new TileLayer({
        title: "Soil Information",
        name: "soil_1_new",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:soil_1_new",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const HgeomLayer = new TileLayer({
        title: "Hydrogeomorphology",
        name: "namsai_hgeom",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_hgeom",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const LineamentLayer = new TileLayer({
        title: "Lineament",
        name: "namsai_lineament",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_lineament",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const SlopeLayer = new TileLayer({
        title: "Slope Information",
        name: "namsai_slope_new",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_slope_new",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const LulcLayer = new TileLayer({
        title: "Land Use Land Cover",
        name: "namsai_lulc_1_new",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_lulc_1_new",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });
      const WatershedLayer = new TileLayer({
        title: "Watershed",
        name: "namsai_watershed_union",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_watershed_union",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const DrainPLayer = new TileLayer({
        title: "DrainP",
        name: "namsai_drainp",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_drainp",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const DrainLLayer = new TileLayer({
        title: "DrainL",
        name: "namsai_drainl_new",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:namsai_drainl_new",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const BasemapLayer = new TileLayer({
        title: "Base Map",
        name: "BaseLayer",
        visible: true,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:BaseLayer",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const CircleLayer = new TileLayer({
        title: "Circle",
        name: "circle_boundary",
        visible: false,
        source: new TileWMS({
          url: base_url + "/wms", // Replace with your GeoServer WMS URL
          params: {
            LAYERS: "APWS:circle_boundary",
            TILED: true,
          },
          serverType: "geoserver",
          transition: 0,
        }),
      });

      const layerGroup = new LayerGroup({
        title: "All Layers",
        layers: [
          baseLayer,
          gridLayer,
          ActionPlaneLayer,
          CropSuitabilityLayer,
          LandCapLayer,
          LandDegradationLayer,
          SoilInfoLayer,
          HgeomLayer,
          LineamentLayer,
          SlopeLayer,
          LulcLayer,
          WatershedLayer,
          DrainPLayer,
          DrainLLayer,
          BasemapLayer,
          CircleLayer,
        ],
      });

      const view = new View({
        center: transform([95.97135, 27.66894], "EPSG:4326", "EPSG:3857"),
        zoom: 9.5,
        // minZoom: 10.5,
        maxZoom: 18,
      });

      this.map = new Map({
        target: "map",
        layers: [layerGroup],
        view: view,
      });

      // Save the layers to data for passing to the custom layer switcher
      this.layers = [
        baseLayer,
        gridLayer,
        ActionPlaneLayer,
        CropSuitabilityLayer,
        LandCapLayer,
        LandDegradationLayer,
        SoilInfoLayer,
        HgeomLayer,
        LineamentLayer,
        SlopeLayer,
        LulcLayer,
        WatershedLayer,
        DrainPLayer,
        DrainLLayer,
        BasemapLayer,
        CircleLayer,
      ];

      // Add click event listener to the map
      this.map.on("singleclick", this.handleMapClick);
      // const layerSwitcher = new LayerSwitcher({
      //   activationMode: "click",
      //   startActive: false,
      //   tipLabel: "Layers", // Optional label for button
      //   groupSelectStyle: "children", // Can be 'children' [default], 'group' or 'none'
      //   target: document.getElementById("layer-switcher"),
      // });

      // map.addControl(layerSwitcher);

      // const customControl = new CustomLayerSwitcherControl({
      //   target: document.getElementById("layer-switcher"),
      // });

      // map.addControl(customControl);
    },
    handleMapClick(event) {
      const view = this.map.getView();
      const viewResolution = view.getResolution();
      const source = this.layers[2].getSource(); // Assuming the WMS layer is the third layer

      const url = source.getFeatureInfoUrl(
        event.coordinate,
        viewResolution,
        view.getProjection(),
        { INFO_FORMAT: "application/json" }
      );

      if (url) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (data.features && data.features.length > 0) {
              const feature = data.features[0];
              this.featureInfo = {
                soil_code: feature.properties.soil_code,
                action_pla: feature.properties.action_pla,
              };
            } else {
              this.featureInfo = null;
            }
          })
          .catch((error) => {
            console.error("Error fetching feature info:", error);
          });
      }
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
.feature-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 10px;
  border: 1px solid black;
  max-height: 200px;
  overflow-y: auto;
}
/* .layer-switcher-panel {
  display: none;
}

.layer-switcher-panel.open {
  display: block;
} */
</style>
