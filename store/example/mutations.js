import behavior from "~/constants/behavior";

export default {
  [behavior.example.GET_EXAMPLE](state, payload) {
    state.example = payload
  }
}
