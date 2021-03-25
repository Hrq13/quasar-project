<template>
    <q-page class="body">
      <div class="all">
        <h2 class="headline">{{ content.title }}</h2>
        <div class="texts">
          <p class="biggertext">
            {{ content.text }}
          </p>
            <p class="smallertext">
              {{ content.smallerText }}
            </p>
          <div class="lang">
            {{ content.languageText }}
            <q-img
              :src="flag"
              sizes=""
              transition="scale"
              @click="switchLanguage"
              style="width: 45px"
              ratio="1"
              spinner-color="white"
              class="rounded-borders center"
            />
          </div>

        </div>
      </div>
    </q-page>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      language: 'pt-br'
    }
  },
  methods: {
    ...mapMutations(['setLanguage']),
    switchLanguage () {
      if (this.language === 'pt-br') {
        this.language = 'us-en'
        this.setLanguage('us-en')
      } else {
        this.language = 'pt-br'
        this.setLanguage('pt-br')
      }
    }
  },
  computed: {
    ...mapGetters(['content', 'flag'])
  }
}
</script>
<style lang="scss">

body {
  background-image: url("https://coolwallpapers.me/picsup/2627697-google-4k-wallpaper-hd.jpg");
}

.lang {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 120px;
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
