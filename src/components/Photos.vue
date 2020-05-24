<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">Photo album</h4>
      Photo photo photo photo photo
       Photo photo photo photo photo
       Photo photo photo photo photo
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Photos',

    components: {

    },

    data () {
      return {
        title: '',
        content: '',
        projects: [],
        feeds: []
      }
    },

    created () {
      // API call to return photo address
      /*
       this.$http.get('http://localhost:8090/api/stories').then(response => {
       this.feeds = response.data
       })
       */
    }
  }
</script>
