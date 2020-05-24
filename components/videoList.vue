<template>
  <v-card width="320px" hover class="ma-2" :to="{title: 'video-watch', params: {id: video.id}}">
    <v-img :src="video.thumbnailUrl" />
    <v-card-title>{{video.title}}</v-card-title>
  </v-card>
</template>



<script>
export default {
  props: ["video"]
};
</script>