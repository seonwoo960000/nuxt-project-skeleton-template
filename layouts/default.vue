<template>
  <v-app>
    <v-app-bar app
               color="white"
               elevatation="0"
               fixed
               class="pa-4 d-flex justify-space-between align-center">
    </v-app-bar>
    <v-main class="grey-background d-flex align-center">
      <v-container fluid>
        <Nuxt />
      </v-container>
      <error-snack-bar />
      <primary-snack-bar />
    </v-main>
  </v-app>
</template>

<script>
import errorSnackBar from "@/components/etc/errorSnackBar";
import primarySnackBar from "@/components/etc/primarySnackBar"

export default {
  name: "empty",
  components: {
    errorSnackBar,
    primarySnackBar,
  },
}
</script>

<style scoped>

</style>
