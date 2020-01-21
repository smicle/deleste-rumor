<template>
  <v-card class="ma-4 mt-0">
    <v-card-title class="body-2">
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text class="body-1" :style="bl">
      <slot name="text"></slot>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class IdolCard extends Vue {
  private bl = 'color: rgba(0, 0, 0, 0.87);'
}
</script>

<style scoped></style>
