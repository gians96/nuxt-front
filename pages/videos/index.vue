<template>
  <div>
    <nuxt-child />
    <h1>VIDEO BASE</h1>
    <!-- <div v-for="(video) in videos" :key="video.id"> -->
    <div v-for="(video) in $store.state.videos" :key="video.id">
        <nuxt-link :to="`/videos/${video.id}`">{{video.title}}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Post | Videos",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Web sites de post"
        }
      ],
      htmlAttrs: {
        lang: "es"
      }
    };
  },
  async fetch({$axios,store}) {

    let datos = await $axios.get('/photos')
    let videos = datos.data

    store.commit('SET_VIDEOS',videos)
    console.log(datos)
    // debugger
    return {
      videos
    }
  }
};
</script>