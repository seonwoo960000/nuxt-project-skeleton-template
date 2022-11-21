<template>
  <div>
    example page
    <v-btn @click="getExample()">Click</v-btn> -- {{ example }}
  </div>
</template>

<script>
import behavior from "~/constants/behavior";
import {mapState, mapActions} from 'vuex'

export default {
  name: "index",
  computed: {
    ...mapState('example', {
      example: state => state.example
    })
  },
  methods: {
    ...mapActions('example', {
      axiosGetExample: behavior.example.GET_EXAMPLE
    }),
    getExample() {
      this.axiosGetExample()
    }
  }
}
</script>

<style scoped>

</style>
