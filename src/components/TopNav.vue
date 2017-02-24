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
       <li><a :href="'#/invite'">초대합니다.</a></li>
       <li><a :href="'#/aboutus'">근호 & 미경</a></li>
       <li><a :href="'#/photos'">사진첩</a></li>
       <li><a :href="'#/location'">오시는 길</a></li>
       <li><a :href="'#/attendance'">참석 여부</a><li>
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
