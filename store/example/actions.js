import behavior from "~/constants/behavior";
import url from "~/constants/url";

const EXAMPLE_URL = url.BASE_URL + url.API_VERSION

export default {
  async [behavior.example.GET_EXAMPLE]({commit}) {
    try {
      const response = await this.$api.get(`${EXAMPLE_URL}/example`)
      console.log(response)
      commit(behavior.example.GET_EXAMPLE, response.data)
    } catch (e) {
      // handle errors
      console.log(e)
    }
  },
}
