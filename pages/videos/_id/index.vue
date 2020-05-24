<template>
  <div>
    <h1>Video number {{video.title}}</h1>
    <nuxt-link :to="`/videos/${video.id}/edit`">
      <button>edit</button>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["video"],
  head(){
    return{

      title: 'Watch'
    }
  }
};
</script>