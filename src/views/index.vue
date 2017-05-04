<template>
  <div class="container">
    <div class="banner" id="anchor-1">
    </div>
    <div class="service" id="anchor-2">
      <h1>我们的服务</h1>
      <ul>
        <li>
          <h2>网站设计</h2>
          <p>电子商务平台</p>
          <p>企业集团官网</p>
          <p>品牌营销网站</p>
          <p>行业信息平台</p>
        </li>
        <li>
          <h2>APP开发</h2>
          <p>IOS/Android APP</p>
          <p>智能硬件 APP</p>
          <p>游戏开发</p>
          <p>设计直播应用</p>
        </li>
        <li>
          <h2>微信开发</h2>
          <p>行业解决方案</p>
          <p>移动营销（游戏、H5）</p>
          <p>微信代运营</p>
          <p>移动办公系统</p>
        </li>
        <li>
          <h2>营销推广</h2>
          <p>自媒体推广运营</p>
          <p>搜索优化（SEO/SEM）</p>
          <p>年度网络整合营销</p>
          <p>网络媒体精准投放</p>
        </li>
        <li>
          <h2>创意设计</h2>
          <p>互联网品牌策略</p>
          <p>用户体验研究</p>
          <p>UI创意设计</p>
          <p>交互设计</p>
        </li>
      </ul>
    </div>
    <div class="case" id="anchor-3">
      <h1>项目官网</h1>
      <ul>
        <li>
          <a href="#">
            <img src="../assets/img/case1.png">
          </a>
          <div class="details">
            <p>项目详情</p>
          </div>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/case2.png">
          </a>
          <div class="details">
            <p>项目详情</p>
          </div>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/case3.png">
          </a>
          <div class="details">
            <p>项目详情</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img src="../assets/img/case4.png">
          </a>
          <div class="details">
            <p>项目详情</p>
          </div>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/case5.png">
          </a>
          <div class="details">
            <p>项目详情</p>
          </div>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/case6.png">
          </a>
          <div class="details">
            <p>项目详情</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="serviceFlow">
      <h1>服务流程</h1>
      <ul>
        <li>
          <h2>产品策略</h2>
          <img src="../assets/img/serviceFlow1.png"/>
          <p>需求讲解</p>
          <p>市场调研</p>
          <p>用户研究</p>
          <p>概念设计</p>
          <p>原型制作</p>
        </li>
        <li>
          <h2>创意设计</h2>
          <img src="../assets/img/serviceFlow2.png"/>
          <p>设计访谈</p>
          <p>风格探索</p>
          <p>关键页设计</p>
          <p>详细设计</p>
          <p>交互设计</p>
          
        </li>
        <li>
          <h2>技术研发</h2>
          <img src="../assets/img/serviceFlow3.png"/>
          <p>系统分析</p>
          <p>UML建模</p>
          <p>前端/APP开发</p>
          <p>后端开发</p>
          <p>系统集成</p>
        </li>
        <li>
          <h2>测试评估</h2>
          <img src="../assets/img/serviceFlow4.png"/>
          <p>自动化测试</p>
          <p>功能测试</p>
          <p>可用性评估</p>
          <p>安全性测试</p>
          <p>代码评估</p>
        </li>
        <li>
          <h2>部署交付</h2>
          <img src="../assets/img/serviceFlow5.png"/>
          <p>文档汇编</p>
          <p>系统部署</p>
          <p>交付培训</p>
          <p>运维支持</p>
          <p>运营诊断</p>
        </li>
      </ul>
    </div>
    <div class="partners">
      <h1>合作伙伴</h1>
      <ul>
        <li>
          <a href="#">
            <img src="../assets/img/partner1.png">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/partner2.png">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/partner3.png">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/partner4.png">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/partner5.png">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.container{
  margin-top: 120px; 
  min-width: 1280px;
}
.banner{
  width: 100%;
  height: 790px;
  background: url(../assets/img/banner.png) no-repeat;
  background-size: 100% 100%;
}
.service{
  width: 100%;
  height:740px;
  padding: 0 15%;
  box-sizing: border-box;
  background: url(../assets/img/service.png) center center;
  background-size: 100% 100%;
  transition: background-size 2s;
  -moz-transition: background-size 2s;  /* Firefox 4 */
  -webkit-transition: background-size 2s; /* Safari 和 Chrome */
  -o-transition: background-size 2s;  /* Opera */
}
.service:hover{
  background-size: 105% 105%;
}
.service h1{
  font-size: 52px;
  color:#283a63;
  text-align: center;
  line-height: 234px;
}
.service ul,.serviceFlow ul{
  display: flex;
  display: -webkit-box; /* OLD – iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD – Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER – IE 10 */
  display: -webkit-flex; /* NEW – Chrome */
}
.service ul li{
  flex: 1;
  -webkit-box-flex: 1; /* OLD – iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD – Firefox 19- */
  width: 20%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  background: #fff;
  float: left;
  margin-right: 8px;
  text-align: center;
  border-radius: 5px;
  color:#283a63;
  padding-bottom: 50px;
}
.service ul li:last-child{
  margin-right: 0;
}
.service ul li:before{
  content: '';
  display: block;
  width: 60px;
  height: 125px;
  margin: 0 auto;
}
.service ul li:nth-child(1):before{
  background: url(../assets/img/service1.png) no-repeat center;
  background-size: contain;
}
.service ul li:nth-child(2):before{
  background: url(../assets/img/service2.png) no-repeat center;
  background-size: initial;
}
.service ul li:nth-child(3):before{
  background: url(../assets/img/service3.png) no-repeat center;
  background-size: contain;
}
.service ul li:nth-child(4):before{
  background: url(../assets/img/service4.png) no-repeat center;
  background-size: contain;
}
.service ul li:nth-child(5):before{
  background: url(../assets/img/service5.png) no-repeat center;
  background-size: contain;
}
.service ul li h2{
  font-size: 20px;
  line-height: 40px;
}
.service ul li p{
  font-size:16px;
  line-height:30px;
}
.service li:hover{
  -webkit-box-shadow:0 0 10px rgba(20, 120, 220, .5); 
  -moz-box-shadow:0 0 10px rgba(20, 120, 220, .5);  
  box-shadow:0 0 10px rgba(20, 120, 220, .5);  
}
.case{
  height: 923px;
  background: #f3f5f8;
  padding:0 15%;
}
.case h1{
  line-height: 223px;
  text-align: center;
  font-size: 52px;
  color:#283a63;
}
.case ul{
  width: 100%;
  height: 230px;
  display: flex;
  margin-bottom: 60px;
  display: -webkit-box; /* OLD – iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD – Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER – IE 10 */
  display: -webkit-flex; /* NEW – Chrome */
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
}
.case ul li{
  float: left;
  height: 230px;
  overflow: hidden;
  position: relative;
}
.case ul li a img{
  display: block;
  width: 110%;
  height: 230px;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  /* Firefox 4 */
  -webkit-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); /* Safari 和 Chrome */
  -o-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  /* Opera */
}
.case ul li:hover img{
  transform: translateX(-20px);
  -ms-transform: translateX(-20px);   /* IE 9 */
  -webkit-transform: translateX(-20px); /* Safari and Chrome */
  -o-transform: translateX(-20px);    /* Opera */
  -moz-transform: translateX(-20px);    /* Firefox */
}
.case ul .details{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(27,108,230,0.3);
  color:#fff;
  font-size: 18px;
  text-align: center;
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  /* Firefox 4 */
  -webkit-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); /* Safari 和 Chrome */
  -o-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  /* Opera */
}
.case ul .details p{
  margin-top:50%;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  /* Firefox 4 */
  -webkit-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); /* Safari 和 Chrome */
  -o-transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  /* Opera */
}
.case ul .details:hover p{
  transform: translateY(-15px);
  -ms-transform: translateY(-15px);   /* IE 9 */
  -webkit-transform: translateY(-15px); /* Safari and Chrome */
  -o-transform: translateY(-15px);    /* Opera */
  -moz-transform: translateY(-15px);    /* Firefox */
}
.case ul .details:hover{
  opacity: 1;
}
.serviceFlow{
  height: 720px;
  width: 100%;
  box-sizing: border-box;
  padding:0 15%;
  background: url(../assets/img/serviceFlow.png) no-repeat center;
  background-size: cover;
}
.serviceFlow h1{
  font-size: 52px;
  color:#283a63;
  text-align: center;
  line-height: 200px;
}
.serviceFlow ul li{
  flex: 1;
  -webkit-box-flex: 1; /* OLD – iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD – Firefox 19- */
  width: 20%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  text-align: center;
}
.serviceFlow ul li h2{
  font-size: 23px;
  line-height: 40px;
  color:#283a63;
  font-weight: normal;
}
.serviceFlow ul img{
  display: block;
  width: 180px;
  height: 180px;
  margin: 15px auto 25px;
}
.serviceFlow ul p{
  font-size: 16px;
  line-height: 30px;
  color:#283a63;
}
.partners{
  height: 317px;
  background: #fff;
}
.partners h1{
  text-align: center;
  font-size: 52px;
  color:#283a63;
  margin-top: 100px;
}
.partners ul{
  padding: 0 15%;
}
.partners ul li{
  height: 150px;
  float: left;
  width: 20%;
  position: relative;
}
.partners ul li img{
  display: table-cell;
  margin: auto;
  vertical-align: middle;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
