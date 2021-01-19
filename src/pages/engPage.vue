<template>
  <q-page class="body">
    <div class="all">
      <h2 class="headline">What is Quasar Framework?</h2>
      <div class="texts">
        <p class="biggertext">
          Quasar Framework is an open-source Vue.JS based framework for building apps,
          with a single codebase, and deploy it on the Web as a SPA, PWA, SSR, to a Mobile App,
          using Cordova for iOS & Android, and to a Desktop App, using Electron for Mac, Windows, and Linux.
        </p>
        <p class="smallertext">
          Quasar Framework was created by Razvan Stoenescu and is maintained by him and the rest of the active core team members,
          who work at various companies such as Lenovo, IntelliView Technologies Inc. and AG Development Services
        </p>
      </div>

      <p class="lang"> Change language </p>
      <a href="http://localhost:8080/#/" class="ptPage">
      <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" class="center" />
      </a>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg" class="center"/>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style lang="scss">

body {
  background-image: url("https://coolwallpapers.me/picsup/2627697-google-4k-wallpaper-hd.jpg");
}

.all {
  border-top: 50px;
}

.lang {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 110px;
}

.headline {
  text-align: center;
  color: #336bc0;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 120px;
}

.biggertext {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 24pt;
  width: 935px;
}
.smallertext {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18pt;
  width: 650px;
}
</style>
