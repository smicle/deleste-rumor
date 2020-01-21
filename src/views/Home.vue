<template>
  <v-container class="home">
    <h1>デレステウワサクイズ</h1>

    <v-row>
      <v-col cols="8" class="pr-0">
        <IdolCard class="mr-0" :style="H_92">
          <template v-slot:title>名前</template>
          <template v-slot:text>{{ flag ? '' : idol.name }}</template>
        </IdolCard>
      </v-col>

      <v-col cols="4" class="pl-0">
        <img :src="idol.src" :style="H_92 + (flag ? op_0 : '')" />
      </v-col>
    </v-row>

    <IdolCard>
      <template v-slot:title>ウワサ</template>
      <template v-slot:text>{{ idol.text }}</template>
    </IdolCard>

    <NextBtn @click="toggle" :flag="flag" :promise="promise"></NextBtn>
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
  src: string
}

@Component
export class MixinStyle extends Vue {
  private H_92 = 'height: 92px;'
  private op_0 = 'opacity: 0;'
}

@Component({
  components: {
    IdolCard,
    NextBtn,
  },
})
export default class Home extends Mixins(MixinStyle) {
  private promise: boolean = false
  private flag: boolean = true
  private rand: number = 0
  private idol: Idol = {name: '', text: '', src: ''}

  private async toggle() {
    this.flag = !this.flag
    if (!this.flag) return

    this.rand = await randomNumber(0, rumors.length)
    const rumor = rumors[this.rand]

    this.idol = {
      name: rumor.name,
      text: rumor.text,
      src: require(`@/assets/img/${rumor.name}.png`),
    }

    this.promise = true
    fetch(this.idol.src).then(_ => (this.promise = false))
  }

  onload = this.toggle()
}
</script>

<style scoped></style>
