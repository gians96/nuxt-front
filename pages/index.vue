<template>
  <div>
    <h1>VIDEO BASE</h1>
    <div class="row">
      <div v-for="vvvv in videoss" :key="vvvv.title">
        <videoList :video="vvvv"></videoList>
      </div>
    </div>
  </div>
</template>


<script>
import videoList from "@/components/videoList";
export default {
  components: { videoList },
  head() {
    return {
      title: "Aplicacion nuxt | Home",
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
  async asyncData({ $axios }) {
    let datos = await $axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5");
    let videoss = datos.data;

    console.log(videoss);
    // debugger
    return {
      videoss
    };
  }
};
</script>