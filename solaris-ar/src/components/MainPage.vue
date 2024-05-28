<template>
  <ion-page>
    <ion-toolbar>
      <ion-img
        class="imgsize"
        src="../src/assets/img/SOLARISLogo.png"
        alt="Solaris"
      ></ion-img
    ></ion-toolbar>
    <ion-content>
      <ion-card>
        <ion-row>
          <ion-col>
            <div class="ion-text-center">
              <ion-text>
                <h1>SOIL AND LAND RESOURCE INFORMATION SYSTEM</h1>
              </ion-text>
              <ion-text>
                <h3>
                  Natural Resources Inventory for Micro-Level Agricultural
                  Planning (NRIMAP)
                </h3>
              </ion-text>
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <div>
              <object
                type="image/svg+xml"
                data="../src/assets/img/out3.svg"
                class="svg-content"
              ></object>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text class="ion-text-justify">
              <h6>
                Arunachal Pradesh, the largest hilly state of the North Eastern
                area of India has a geographical area of 83,743 sq.km ranging
                between 26 o 28’ to 29 o 28’ N and 91 o 35’ to 97 o 27’ E, is
                bestowed with exclusive physiographic conditions and an
                abundance of plant genetic variation. It has large climatic
                variations including sub-tropical to temperate and alpine. Thus,
                the State possesses the inherent potential to promote the
                cultivation largely due to the availability of large areas with
                a temperate climate. The State is an agrarian where more than 70
                percent population is dependent on agriculture fortheir
                livelihood. The State is gifted with enormous natural resources
                and suitable agro-climaticzones. Arunachal Pradesh Space
                Applications Centre (APSAC), Itanagar, Arunachal Pradesh is the
                nodalagency for all Remote Sensing and GIS Applications in the
                State. Realizing the importance on proper agriculturalpractices
                and the geographic setting of Arunachal Pradesh, APSAC has
                initiated to generate a comprehensive resource atlas on 1:10000
                scale and develop the action plans for micro level agricultural
                planning,and also sustainable action plans for land and water
                resources management in the State.The project namely “Natural
                Resources Inventory for Micro-level Agricultural Planning
                (NRIMAP)” aims at identifying suitable areas for various staple
                and commercial crops based on soil resources inventory. Further,
                based on field observations and scientific analysis, locale-
                specific resource action plans are developed for sustainable
                development of the land and water resources. A holisticWebGIS
                and Mobileapplication is developed as part of NRIMAP for
                providing the geo-tagged information to Planners and
                cultivators, thus providing the experience of sharing
                information in Geo-spatial Context.
              </h6>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-card>
      <ion-card>
          <ion-row>
            <ion-col>
                <div class="image-container">
                  <ion-img src="../src/assets/img/NSGRAD.jpg" />
                  <div class="overlay-text">Namsai</div>
                </div>
            </ion-col>
            <ion-col>
                <div class="image-container">
                  <ion-img src="../src/assets/img/LSGRAD.jpg" />
                  <div class="overlay-text">Lower Subansari</div>
                </div>
            </ion-col>
            <ion-col>
                <div class="image-container">
                  <ion-img src="../src/assets/img/TWGRAD.jpg" />
                  <div class="overlay-text">Tawang</div>
                </div>
            </ion-col>
          </ion-row>
      </ion-card>
      <ion-grid>
      <ion-row>
        <ion-col size="3">
      <ion-card class="smallCardSize">
        <div class="ion-text-center">
        <ion-img src="../src/assets/img/Map_Console_Logo.png"></ion-img>
        <ion-text>Namsai</ion-text>
      </div>
      </ion-card>
    </ion-col>
    <ion-col size="9">
      <ion-card class="dataCardSize">
        <ion-row>
          <ion-col>
            <ion-text>Tawang</ion-text>
          </ion-col>
          <ion-col class="ion-text-end">
            <ion-text>Head Quarters</ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text>District</ion-text>
          </ion-col>
          <ion-col class="ion-text-end">
            <ion-text>Tawang</ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text>Population : 49977</ion-text>
          </ion-col>
        </ion-row>
        <ion-row class="custom-line"></ion-row>
        <ion-row>
          <ion-col>
          <ion-text>Area : 2571.89 Sq Km</ion-text>
        </ion-col>
        <ion-col class="ion-text-end">
          <ion-text>Circle 11</ion-text>
        </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text>
              Revenue Villages : 218
            </ion-text>
          </ion-col>
          <ion-col class="ion-text-end">
            <ion-text>Block 6</ion-text>
          </ion-col>
        </ion-row>
      </ion-card> 
    </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card class="cardSize">
          <ion-img class="imgSize" src="../src/assets/img/BaseMap.png"></ion-img>
          <ion-row class="custom-line"></ion-row>
         <ion-card-subtitle class="ion-text-center ion-padding">Base Map</ion-card-subtitle>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card class="cardSize">
          <ion-img class="imgSize" src="../src/assets/img/LULC.png"></ion-img>
          <ion-row class="custom-line"></ion-row>
          <ion-card-subtitle class="ion-text-center ion-padding">Land Use Land Cover</ion-card-subtitle>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card class="cardSize">
        <ion-img class="imgSize" src="../src/assets/img/SlopeInformation.png"></ion-img>
        <ion-row class="custom-line"></ion-row>
        <ion-card-subtitle class="ion-text-center ion-padding">Slope Information</ion-card-subtitle>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card class="cardSize">
          <ion-img class="imgSize" src="../src/assets/img/Hydrogeomorphology.png"></ion-img>
          <ion-row class="custom-line"></ion-row>
          <ion-card-subtitle class="ion-text-center ion-padding">Hydrogeo Morphology</ion-card-subtitle>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card class="cardSize">
        <ion-img class="imgSize" src="../src/assets/img/Soil.png"></ion-img>
        <ion-row class="custom-line"></ion-row>
        <ion-card-subtitle class="ion-text-center ion-padding">Soil Information</ion-card-subtitle>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card class="cardSize">
        <ion-img class="imgSize" src="../src/assets/img/LandDegredation.png"></ion-img>
        <ion-row class="custom-line"></ion-row>
        <ion-card-subtitle class="ion-text-center ion-padding">Land Degradation</ion-card-subtitle>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card class="cardSize">
         <ion-img class="imgSize" src="../src/assets/img/LandCapability.png"></ion-img>
         <ion-row class="custom-line"></ion-row>
         <ion-card-subtitle class="ion-text-center ion-padding">Land Capability</ion-card-subtitle>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card class="cardSize">
         <ion-img class="imgSize" src="../src/assets/img/LandIrrigability.png"></ion-img>
         <ion-row class="custom-line"></ion-row>
         <ion-card-subtitle class="ion-text-center ion-padding">Land Irrigability</ion-card-subtitle>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card class="cardSize">
       <ion-img class="imgSize" src="../src/assets/img/ActionPlan.png"></ion-img>
       <ion-row class="custom-line"></ion-row>
       <ion-card-subtitle class="ion-text-center ion-padding">Action Plan</ion-card-subtitle>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card class="cardSize">
          <ion-img class="imgSize" src="../src/assets/img/CropSuitability.png"></ion-img>
          <ion-row class="custom-line"></ion-row>
          <ion-card-subtitle class="ion-text-center ion-padding">Crop Suitability</ion-card-subtitle>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonRow,
  IonCol,
  IonCard,
} from "@ionic/vue";
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonRow,
    IonCol,
    IonCard,
  },
};
</script>
<style scoped>
.svg-content {
  width: 95vw;
  height: 22vh;
}
.imgsize {
  display: block;
  width: 48%;
  height: 100%;
  object-fit: inherit;
  object-position: inherit;
}
object path:hover {
  fill: red;
}
.cardLength{
  width: 26vh;
  height:13vh
}
.smallCardLength{
  width: 10vh;
  height:6vh
}
.image-container {
  position: relative;
  display: inline-block;
  border-radius: 1vh;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto;
}

.overlay-text {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  /* background-color: rgba(
    0,
    0,
    0,
    0.5
  ); */
  padding: 10px;
  border-radius: 5px;
}

.custom-line {
  border-width: thin;
  border: inset;
}

.cardSize{
  height: 19vh;
  width:17vh
}
.imgSize{
  height: 13vh;
  width:17vh
}
.dataCardSize{
  height: 13vh;
  width:30vh
}
.smallCardSize{
  height: 13vh;
  width:10vh
}
</style>
