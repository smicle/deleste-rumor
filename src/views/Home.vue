<template>
  <v-container class="home">
    <h1>デレステウワサクイズ</h1>

    <v-row>
      <v-col cols="8" :style="style.pr_0">
        <IdolCard :style="style.mr_0 + style.H_92">
          <template v-slot:title>名前</template>
          <template v-slot:text>{{ flag ? '' : idol.name }}</template>
        </IdolCard>
      </v-col>

      <v-col cols="4" :style="style.pl_0">
        <img :src="src" :style="style.H_92 + (flag ? style.op_0 : '')" />
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
import {Component, Emit, Prop, Vue, Mixins} from 'vue-property-decorator'
import IdolCard from '@/components/IdolCard.vue'
import NextBtn from '@/components/NextBtn.vue'
import rumors from '@/json/scraping-rumor.json'
const randomNumber = require('random-number-csprng')

interface Idol {
  name: string
  text: string
}

@Component
export class MixinStyle extends Vue {
  private style = {
    mr_0: 'margin-right: 0;',
    pr_0: 'padding-right: 0;',
    pl_0: 'padding-left: 0;',
    H_92: 'height: 92px;',
    op_0: 'opacity: 0;',
  }
}

@Component({
  components: {
    IdolCard,
    NextBtn,
  },
})
export default class Home extends Mixins(MixinStyle) {
  private flag: boolean = true
  private idol: Idol = {name: '', text: ''}
  private rand: number = 0
  private src: string = ''

  private async toggle() {
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
