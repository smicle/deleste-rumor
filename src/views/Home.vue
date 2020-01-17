<template>
  <div class="home">
    <v-card class="card-name">
      <v-card-title class="body-2 red-text">名前</v-card-title>
      <v-card-text class="body-1" style="color: rgba(0,0,0,.87)">{{ name }}</v-card-text>
    </v-card>
    <v-card class="card-rumor">
      <v-card-title class="body-2">ウワサ</v-card-title>
      <v-card-text class="body-1" style="color: rgba(0,0,0,.87)">{{ text }}</v-card-text>
    </v-card>
    <v-btn @click="toggle" :color="bool ? 'warning' : 'info'">
      {{ bool ? '結果' : '次へ' }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
import rumor from '../json/scraping-rumor.json'
const randomNumber = require('random-number-csprng')

@Component
export default class Home extends Vue {
  public bool: boolean = true
  public name: string = ''
  public text: string = ''
  public rand: number = 0

  public async toggle() {
    this.bool = !this.bool
    if (this.bool) {
      this.rand = await randomNumber(0, rumor.length)
      this.text = rumor[this.rand].text
      this.name = ''
    } else {
      this.name = rumor[this.rand].name
    }
  }

  onload = this.toggle()
}
</script>

<style scoped>
.home {
  margin: 0 auto;
}
.card-name {
  min-height: 105px;
  margin: 15px;
}
.card-rumor {
  margin: 15px;
}
</style>
