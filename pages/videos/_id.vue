<template>
  <div>
    <nuxt-child :video="videosss" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "",
      titleTemplate: `%s ${this.videosss.title} - Video individual`
    };
  },
  async fetch({ $axios, params, store }) {
    let datos = await $axios.get(
      `https://jsonplaceholder.typicode.com/photos/${params.id}`
    );
    let video = datos.data;
    store.commit("SET_CURRENT_VIDEO", video);
  },
  computed: {
    ...mapState({
      videosss: 'currentVideo'
    })
  }
};
</script>