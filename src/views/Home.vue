<template>
  <v-container class="home">
    <h1>デレステウワサクイズ</h1>

    <v-row>
      <v-col cols="8" class="pr-0">
        <IdolCard class="mr-0" :style="H_92">
          <template v-slot:title>名前</template>
          <template v-slot:text>{{ store.isResult ? '' : idol.name }}</template>
        </IdolCard>
      </v-col>

      <v-col cols="4" class="pl-0">
        <img :src="idol.src" :style="H_92 + (store.isResult ? op_0 : '')" />
      </v-col>
    </v-row>

    <IdolCard>
      <template v-slot:title>ウワサ</template>
      <template v-slot:text>{{ idol.text }}</template>
    </IdolCard>

    <NextBtn @click="resultToggle" :isResult="store.isResult" :promise="store.promise"></NextBtn>
  </v-container>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Mixins} from 'vue-property-decorator'
import IdolCard from '@/components/IdolCard.vue'
import NextBtn from '@/components/NextBtn.vue'
import rumors from '@/json/scraping-rumor.json'

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
  private store = {isResult: true, promise: false}
  private idol: Idol = {name: '', text: '', src: ''}

  private async resultToggle() {
    this.store.isResult = !this.store.isResult
    if (!this.store.isResult) return

    const rand: number = await require('random-number-csprng')(0, rumors.length)
    const rumor = rumors[rand]
    this.idol = {
      name: rumor.name,
      text: rumor.text,
      src: require(`@/assets/img/${rumor.name}.png`),
    }

    this.store.promise = true
    fetch(this.idol.src).then(_ => (this.store.promise = false))
  }

  onload = this.resultToggle()
}
</script>

<style scoped></style>
