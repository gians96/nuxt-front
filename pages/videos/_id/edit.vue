<template>
  <div>
    <h1>edit videos {{video.title}}</h1>
    <nuxt-link :to="`/videos/${video.id}`">
      <button>Go back to show</button>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["video"],
  head(){
    return{
      
      title: 'Edit'
    }
  }
};
</script>