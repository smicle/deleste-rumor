<template>
  <v-container class="home">
    <h1>デレステウワサクイズ</h1>

    <v-row>
      <v-col cols="8" style="padding-right: 0">
        <IdolCard style="margin-right: 0; min-height: 92px">
          <template v-slot:title>名前</template>
          <template v-slot:text>{{ flag ? '' : idol.name }}</template>
        </IdolCard>
      </v-col>

      <v-col cols="4" style="padding-left: 0">
        <img :src="src" :style="`height: 92px; ${flag ? 'opacity: 0' : ''}`" />
      </v-col>
    </v-row>

    <IdolCard>
      <template v-slot:title>ウワサ</template>
      <template v-slot:text>{{ idol.text }}</template>
    </IdolCard>

    <NextBtn @click="toggle" :flag="flag"></NextBtn>
  </v-container>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
import IdolCard from '@/components/IdolCard.vue'
import NextBtn from '@/components/NextBtn.vue'
import rumors from '@/json/scraping-rumor.json'
const randomNumber = require('random-number-csprng')

interface Idol {
  name: string
  text: string
}

@Component({
  components: {
    IdolCard,
    NextBtn,
  },
})
export default class Home extends Vue {
  private flag: boolean = true
  private idol: Idol = {name: '', text: ''}
  private rand: number = 0
  private src: string = ''

  public async toggle() {
    this.flag = !this.flag
    if (this.flag) {
      this.rand = await randomNumber(0, rumors.length)
      const rumor = rumors[this.rand]

      this.idol = {name: rumor.name, text: rumor.text}
      this.src = require(`@/assets/img/${rumor.name}.png`)
    }
  }

  onload = this.toggle()
}
</script>

<style scoped></style>
