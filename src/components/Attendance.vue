<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">Attendance</h4>
      Attendance form
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Attendance',

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
      // Review whether an API call is required.
      /*
       this.$http.get('http://localhost:8090/api/stories').then(response => {
       this.feeds = response.data
       })
       */
    }
  }
</script>
