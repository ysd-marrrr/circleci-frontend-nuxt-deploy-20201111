<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <v-card>
        <v-card-title class="headline">
          Welcome to the Nuxt.js + Google Maps sample
        </v-card-title>
        <v-card-text>
          <Maps />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Maps from '@/components/Maps.vue'

export default {
  components: {
    Maps,
  },
}
</script>
