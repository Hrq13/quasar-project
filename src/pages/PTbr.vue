<template>
  <q-page class="body">
    <div class="all">
      <h2 class="headline">O que é Quasar framework?</h2>
      <div class="texts">
        <p class="biggertext">
          Quasar Framework é uma estrutura baseada em Vue.JS de código aberto para a construção de aplicativos,
          com uma única base de código e implantá-lo na Web como SPA, PWA, SSR, para um aplicativo móvel,
          usando Cordova para iOS e Android, e para um aplicativo de desktop, usando Electron para Mac, Windows e Linux.
        </p>
        <p class="smallertext">
          O Quasar Framework foi criado por Razvan Stoenescu e é mantido por ele e pelo resto dos membros ativos da equipe principal,
          que trabalham em várias empresas, como Lenovo, IntelliView Technologies Inc. e AG Development Services
        </p>

        <p class="lang"> Mudar idioma </p>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" class="center" />
        <a href="http://localhost:8080/#/eng" class="engPage">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg" class="center"/>
        </a>

      </div>
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

img, .engPage {
  display:flex;
  width: 80px;
  height: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.lang {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
}
.all {
  border-top: 50px;
}

.headline {
  text-align: center;
  color: #336bc0;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 100px;
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
