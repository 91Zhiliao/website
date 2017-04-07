<template>
  <footer class="footer" id="anchor-4">
    <div class="footer-content">
      <div class="footer-msg">
        <p class="title"></p>
        <p>电话：（86）0755-66812621</p>
        <p>邮箱：contactus@toutoo.net</p>
        <p>地址：广东省深圳市福田区卓越城1期</p>
      </div>
      <div class="footer-about">
        <img src="../assets/img/wechat.png" height="184" width="184">
        <p>关注服务号</p>
      </div>
    </div>
    <div class="page-footer-copyright">
      2016 © <span id="yearNew"></span> 深圳市投桃互动网络科技有限公司 版权所有<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402000264"></a><a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">. 粤ICP备15091171号-2</a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>
p{
  margin: 0
}
  .footer {
    width: 100%;
    min-width: 1200px;
    z-index: 10;
    color: #969696;
    background-color: #f3f5f8;
    font-size:16px;
    padding: 62px 15% 0;
    box-sizing: border-box;
  }
  .footer-msg{
    float: left;
    font-size: 20px;
  }
  .footer-msg .title{
    display: inline-block;
    width: 120px;
    height: 57px;
    margin-bottom: 20px;
    background: url(../assets/img/logo.png) no-repeat center center;
  }
  .footer-msg p{
    line-height: 40px;
  }
  .footer-about{
    float: right;
    width: 184px;
    height: 214px;
  }
  .footer-about p{
    text-align: center;
    line-height: 30px;
  }
  .page-footer-copyright {
    clear: both;
    text-align: center;
    font-size: 16px;
    height: 93px;

  }
  .page-footer-copyright a {
    color: #969696;
    line-height: 93px;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color .1s ease-in-out;
    -moz-transition: color .1s ease-in-out;
    -o-transition: color .1s ease-in-out;
    transition: color .1s ease-in-out;
  }
</style>
