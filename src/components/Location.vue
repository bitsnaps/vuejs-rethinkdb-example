<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">Locations</h4>
      <!-- map Vue -->
      Saturday, April 29, 2017, 6:00 p.m.

             Suncheon The Hess @@ Hall
             (Add button: link to schedule registration)
             Address: Suncheon City @@@ @@@ THEHE

             TEL: 061-@@@@@@@
             [Linked to the Naver Map app directions]

             Sunday, May 14, 2017 10:30 AM

             Tamra Hall on the 8th floor of the Jeju Ramada Plaza Hotel

             (Add button: link to schedule registration)

             Address: Jeju-si, Jeju-do ~~~~~
             TEL: 064-@@@
             [Linked to the Naver Map app directions]
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Location',

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
      // 사진 주소를 반환하는 API 호출
      /*
       this.$http.get('http://localhost:8090/api/stories').then(response => {
       this.feeds = response.data
       })
       */
    }
  }
</script>
