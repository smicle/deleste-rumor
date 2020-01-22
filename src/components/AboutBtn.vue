<template>
  <v-card-text class="pa-1">
    <v-btn :href="href" outlined class="body-2" :color="color" height="25" width="100">
      {{ text }}
    </v-btn>
  </v-card-text>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class NextBtn extends Vue {
  @Prop()
  private href?: string
  @Prop()
  private color?: string
  @Prop()
  private text?: string
}
</script>

<style scoped></style>
