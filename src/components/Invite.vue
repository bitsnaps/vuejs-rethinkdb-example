<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">Invitation</h4>
      <ul v-for="feed in feeds" :key="feed.id">
        <li><a v-bind:href="feed.id" >Invitation @{{ feed.createdAt }}</a></li>
      </ul>
      <h5>Picture</h5>
      Just calling each other's names
             Two people who can confirm the depth of love
             Walk like flowers and trees
             To be all of each other
             Day after wedding after long wait
             The world is more beautiful
             Lee Hye-in, from 'Love People'

             Eldest son
             Eldest daughter

             Reception
             April 29, 2017, 6pm
             Suncheon Hyeop

             Wedding ceremony
             May 14, 2017, 10:30 am
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Invite',

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
      // Changed to call photo and content API

      this.$http.get('http://localhost:8090/api/feeds').then(response => {
        this.feeds = response.data
      })

    }
  }
</script>
