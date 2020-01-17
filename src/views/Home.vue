<template>
  <v-container class="home" grid-list-sm>
    <h1>デレステウワサクイズ</h1>
    <v-row>
      <v-col cols="8" style="margin-right: 0; padding-right: 0">
        <v-card class="card-name">
          <v-card-title class="body-2 red-text">名前</v-card-title>
          <v-card-text class="body-1" style="color: rgba(0,0,0,.87)">
            {{ bool ? '' : name }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" style="margin-left: 0; padding-left: 0">
        <img
          :class="`idol ${bool ? 'opacity-0' : ''}`"
          :src="require(`@/assets/img/${name}.png`)"
        />
      </v-col>
    </v-row>
    <v-card class="card-rumor">
      <v-card-title class="body-2">ウワサ</v-card-title>
      <v-card-text class="body-1" style="color: rgba(0,0,0,.87)">{{ text }}</v-card-text>
    </v-card>
    <v-btn @click="toggle" :color="bool ? 'warning' : 'info'">
      {{ bool ? '結果' : '次へ' }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
import rumor from '@/json/scraping-rumor.json'
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
      this.name = rumor[this.rand].name
    }
  }

  onload = this.toggle()
}
</script>

<style scoped>
.card-name {
  min-height: 92px;
  margin: 15px;
}
.card-rumor {
  margin: 15px;
}
.idol {
  right: -50px;
  margin-top: 12px;
  padding: 0;
  height: 92px;
}
.opacity-0 {
  opacity: 0;
}
</style>
