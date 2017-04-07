<template>
  <header class="nav">
    <div class="logo">
      <img src="../assets/img/logo.png" height="47" width="120">
    </div>
    <ul>
      <li><a href="#anchor-1" title="">首页</a></li>
      <li><a href="#anchor-2" title="">服务</a></li>
      <li><a href="#anchor-3" title="">案例</a></li>
      <li><a href="#anchor-4" title="">联系</a></li>
      <li>
        <router-link to="/">
        <span class="toutoo">投桃官网</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style scoped>
  .nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-width: 1280px;
    height: 75px;
    background: #fff;
    z-index: 10;
    display: flex;
    display: -webkit-box; /* OLD – iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD – Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER – IE 10 */
    display: -webkit-flex; /* NEW – Chrome */
  }
  .nav .logo{
    box-sizing: border-box;
    padding: 15px 0 0 120px;
    flex: 0.55;
    -webkit-box-flex: 0.55; /* OLD – iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 0.55; /* OLD – Firefox 19- */
    width: 55%; /* For old syntax, otherwise collapses. */
    -webkit-flex: 0.55; /* Chrome */
    -ms-flex: 0.55; /* IE 10 */
  }
  .nav ul {
    flex:1;
    -webkit-box-flex: 0.45; /* OLD – iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 0.45; /* OLD – Firefox 19- */
    width: 45%; /* For old syntax, otherwise collapses. */
    -webkit-flex: 0.45; /* Chrome */
    -ms-flex: 0.45; /* IE 10 */
    display: flex;
    display: -webkit-box; /* OLD – iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD – Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER – IE 10 */
    display: -webkit-flex; /* NEW – Chrome */
    font-size: 16px;
    padding-right: 8%;
    box-sizing: border-box;
  }
  .nav ul li{
    list-style: none;
    float: left;
    flex: 1;
    -webkit-box-flex: 1; /* OLD – iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1; /* OLD – Firefox 19- */
    width: 18%;  /*For old syntax, otherwise collapses. */
    -webkit-flex: 1; /* Chrome */
    -ms-flex: 1; /* IE 10 */
    align-content: center;
    justify-content: space-around;
    text-align: center;
    line-height: 75px;
  }
  .nav ul li:last-child{
    flex: 1.5;
    -webkit-box-flex: 1.5; /* OLD – iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1.5; /* OLD – Firefox 19- */
    width: 36%;  /*For old syntax, otherwise collapses. */
    -webkit-flex: 1.5; /* Chrome */
    -ms-flex: 1.5; /* IE 10 */
  }
  .nav ul li a{
    width: 100%;
    height: 100%;
    display: inline-block;
    color:#283a63;
    transition: transform 0.5s;
    -moz-transition: -moz-transform 0.5s;
    -webkit-transition: -webkit-transform 0.5s;
    -o-transition: -o-transform 0.5s;
  }
  .nav ul li a:hover{
    text-decoration: none;
    border-bottom: 5px solid #1b6ce6;
    transform:translateY(-5px);
    -ms-transform:translateY(-5px); /* IE 9 */
    -moz-transform:translateY(-5px); /* Firefox */
    -webkit-transform:translateY(-5px); /* Safari and Chrome */
    -o-transform:translateY(-5px); /* Opera */
  }
  .nav ul .toutoo{
    box-sizing: border-box;
    padding: 10px 30px;
    border: 1px solid #c9d8ff;
    border-radius: 50px;
    color: #2c7df6;
  }
</style>
