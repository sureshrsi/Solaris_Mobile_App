<template>
  <ion-page>
    <ion-toolbar>
      <ion-img
        class="imgsize"
        src="../../assets/img/SOLARISLogo.png"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      ></ion-img
    ></ion-toolbar>
    <ion-content>
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
              data="../../public/assets/img/out3.svg"
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
              bestowed with exclusive physiographic conditions and an abundance
              of plant genetic variation. It has large climatic variations
              including sub-tropical to temperate and alpine. Thus, the State
              possesses the inherent potential to promote the cultivation
              largely due to the availability of large areas with a temperate
              climate. The State is an agrarian where more than 70 percent
              population is dependent on agriculture fortheir livelihood. The
              State is gifted with enormous natural resources and suitable
              agro-climaticzones. Arunachal Pradesh Space Applications Centre
              (APSAC), Itanagar, Arunachal Pradesh is the nodalagency for all
              Remote Sensing and GIS Applications in the State. Realizing the
              importance on proper agriculturalpractices and the geographic
              setting of Arunachal Pradesh, APSAC has initiated to generate a
              comprehensive resource atlas on 1:10000 scale and develop the
              action plans for micro level agricultural planning,and also
              sustainable action plans for land and water resources management
              in the State.The project namely “Natural Resources Inventory for
              Micro-level Agricultural Planning (NRIMAP)” aims at identifying
              suitable areas for various staple and commercial crops based on
              soil resources inventory. Further, based on field observations and
              scientific analysis, locale- specific resource action plans are
              developed for sustainable development of the land and water
              resources. A holisticWebGIS and Mobileapplication is developed as
              part of NRIMAP for providing the geo-tagged information to
              Planners and cultivators, thus providing the experience of sharing
              information in Geo-spatial Context.
            </h6>
          </ion-text>
        </ion-col>
      </ion-row>
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
object /deep/ path:hover {
  fill: red;
}
</style>
