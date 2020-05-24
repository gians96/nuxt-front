export const state = ()=>({
    videos: [],
    currentVideo: {},
    usuario:{}
})


export const mutations = {
    SET_VIDEOS(state,videos){
        state.videos = videos
    },
    SET_CURRENT_VIDEO(state,video){
        state.currentVideo = video
    }
}