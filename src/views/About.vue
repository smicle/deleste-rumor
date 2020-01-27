<template>
  <v-container class="about py-0">
    <v-row>
      <v-col cols="1">
        <v-btn to="/" class="caption" outlined color="blue darken-3">戻る</v-btn>
      </v-col>
    </v-row>

    <v-col cols="12">
      <v-card class="d-flex" width="400">
        <div>
          <v-avatar tile class="ma-3" size="110">
            <img :src="require('@/assets/smicle.jpg')" />
          </v-avatar>
        </div>

        <div>
          <v-card-title class="headline pb-1 pl-1">smicle</v-card-title>
          <AboutBtn href="https://github.com/smicle" color="grey darken-4" text="GitHub"></AboutBtn>
          <AboutBtn
            href="https://twitter.com/smicle_cl"
            color="blue darken-4"
            text="Twitter"
          ></AboutBtn>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import AboutBtn from '@/components/AboutBtn.vue'

@Component({
  components: {
    AboutBtn,
  },
})
export default class About extends Vue {}
</script>

<style scoped></style>
