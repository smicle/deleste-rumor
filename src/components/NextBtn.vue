<template>
  <v-btn @click="toggle" :color="flag ? 'warning' : 'info'">
    {{ flag ? '結果' : '次へ' }}
  </v-btn>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'

@Component
export default class NextBtn extends Vue {
  @Prop()
  public flag?: boolean

  @Emit()
  public click() {}

  public toggle() {
    this.click()
  }
}
</script>

<style scoped></style>
