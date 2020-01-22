<template>
  <v-btn
    @click="toggle"
    :color="isResult ? 'warning' : 'info'"
    :disabled="promise"
    :loading="promise"
  >
    {{ isResult ? '結果' : '次へ' }}
  </v-btn>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'

@Component
export default class NextBtn extends Vue {
  @Prop()
  private isResult?: boolean
  @Prop()
  private promise?: boolean

  @Emit()
  private click() {}
  private toggle = () => this.click()
}
</script>

<style scoped></style>
