<template>
  <v-card>
    <v-card-title class="body-2">
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text class="body-1">
      <slot name="text"></slot>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class IdolCard extends Vue {}
</script>

<style scoped></style>
<style>
.v-card {
  margin: 15px;
  margin-top: 0;
}
.theme--light.v-card > .v-card__text {
  color: rgba(0, 0, 0, 0.87);
}
</style>
