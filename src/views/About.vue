<template>
  <v-container class="about py-0">
    <v-row>
      <v-col cols="1">
        <v-btn to="/" class="caption" outlined color="blue darken-3">
          戻る
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style scoped></style>
