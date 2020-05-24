<template>
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <!--button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button-->
      <a class="navbar-brand" :href="'#/invite'">G & M</a>
    </div>
    <div>
      <ul class="nav navbar-nav navbar-right">
       <li><a :href="'#/invite'">Invite</a></li>
       <li><a :href="'#/aboutus'">About Us</a></li>
       <li><a :href="'#/photos'">Photos</a></li>
       <li><a :href="'#/location'">Locations</a></li>
       <li><a :href="'#/attendance'">Attendance</a></li>
     </ul>
    </div>
  </div>
</nav>
</template>

<style lang="stylus">
@import "../variables"

.navbar {
  position: relative
  min-height: 50px
  margin-bottom: 20px
  border-color: $border-color
}

.navbar-default {
  background-color: #fff
  /*border-width: 0*/
}

.navbar-form {
  margin-top: 0
  margin-bottom: 0
 .input-group > .form-control {
    background-color: #fff
    border-width: 0
    min-height: 50px
    border-radius: 0
  }
}
</style>
