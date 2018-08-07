<template>
  <div id="app"
       v-xy-pull-refresh="onPullRefresh">
    <!--<xy-page-progress></xy-page-progress>-->
    <xy-reach-bottom threshold="50"
                     @on-bottom="onbottom"></xy-reach-bottom>
    <!--<div class="lazy-load"-->
    <!--style="width: 150px;height: 250px;border: 1px solid red;">-->
    <!--<img v-lazy="imgTest"-->
    <!--class="lazy-cover"-->
    <!--:key="imgTest"-->
    <!--:data-img="imgTest3"-->
    <!--:data-index="0"-->
    <!--v-xy-pop-image:change="onPopChange">-->
    <!--</div>-->
    <!--<div class="lazy-load"-->
    <!--style="width: 250px;height: 150px;border: 1px solid blue;">-->
    <!--<img v-lazy="imgTest2"-->
    <!--class="lazy-contain"-->
    <!--:key="imgTest2"-->
    <!--:data-img="imgTest2"-->
    <!--:data-index="1"-->
    <!--v-xy-pop-image:change="onPopChange">-->
    <!--</div>-->
    <div class="lazy-load"
         style="width: 250px;height: 150px;border: 1px solid blue;">
      <img v-lazy="imgTest"
           class="lazy-contain"
           :key="imgTest"
           :data-img="imgTest"
           v-xy-pop-image:imgs="[imgTest,imgTest2,imgTest3]">
    </div>
    <div class="lazy-load"
         style="width: 250px;height: 150px;border: 1px solid blue;">
      <img v-lazy="imgTest2"
           class="lazy-contain"
           :key="imgTest2"
           :data-img="imgTest2"
           v-xy-pop-image:imgs="[imgTest,imgTest2,imgTest3]">
    </div>
    <div class="lazy-load"
         style="width: 250px;height: 150px;border: 1px solid blue;">
      <img v-lazy="imgTest3"
           class="lazy-contain"
           :key="imgTest3"
           :data-img="imgTest3"
           v-xy-pop-image:imgs="[imgTest,imgTest2,imgTest3]">
    </div>
    <div class="lazy-load"
         style="width: 30px;height: 30px;border: 1px solid blue;">
      <img v-lazy="imgTest2"
           class="lazy-cover"
           :key="imgTest2"
           :data-img="imgTest2"
           v-xy-pop-image:change="onPopChange">
    </div>
    <!--<div class="lazy-load"-->
    <!--style="width: 200px;height: 200px;border: 1px solid green;">-->
    <!--<img v-lazy="imgTest3"-->
    <!--class="lazy-contain"-->
    <!--:key="imgTest3"-->
    <!--v-xy-pop-image:change="onPopChange">-->
    <!--</div>-->
    <button @click="onChangeImg"
            style="background-color: #eee;padding: 10px;">更换图片
    </button>
    <xy-scale-slider width="640"
                     height="290"
                     interval="3"
                     :imgs="imgs3"
                     @on-change="onchange"
                     v-xy-moving-btn></xy-scale-slider>
    <div class="lazy-load"
         style="border-radius: 50%;width: 100px;height: 100px;"
         v-for="(item, index) in imgs2"
         :key="item.id">
      <img v-lazy="item">
    </div>
    <xy-article :des="des"></xy-article>
    <div id="demo">
      <router-link tag="button"
                   to="/page-progress"
                   v-xy-moving-btn>路由加载
      </router-link>
      <router-view></router-view>
      <xy-list-status status="loading">
      </xy-list-status>
      <hr>
      <xy-list-status status="nomore">
      </xy-list-status>
      <hr>
      <xy-list-status status="nomore">
        <article slot="nomore"
                 class="nomore">
          <div>
            <div><span>没更多商品了</span></div>
          </div>
        </article>
      </xy-list-status>
      <hr>
      <xy-list-status status="empty"></xy-list-status>
      <hr>
      <xy-list-status status="empty">
        <img slot="empty"
             src="./nomore.png"
             alt="暂无内容"
             class="empty">
      </xy-list-status>
      <div class="keepTopOther"></div>
      <div id="keepTop"
           v-xy-keep-top>
        <button v-xy-moving-btn>keep-top & moving-btn</button>
      </div>
      <div class="keepTopOther"></div>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import VueLazyload from 'vue-lazyload'
  import { xyLazyloadResize } from './lib'
  import xyUI from './lib'

  import MessageBox from './lib/mint-ui/packages/message-box'
  import Toast from './lib/mint-ui/packages/toast'
  import Indicator from './lib/mint-ui/packages/indicator'

  Vue.use(VueRouter)
  Vue.use(VueLazyload, xyLazyloadResize)
  Vue.use(xyUI)

  export default {
    name: 'app',
    data () {
      return {
        des2: `<p>　　原标题：（出访）习近平抵达阿布扎比开始对阿拉伯联合酋长国进行国事访问&nbsp;</p>
<div class="img_wrapper"><img src="http://dummyimage.com/336x280" alt="7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛在阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德陪同下前往检阅大厅。 新华社记者李学仁摄" data-mcesrc="http://www.xinhuanet.com/world/2018-07/20/1123151532_15320241862821n.jpg" data-mceselected="1" data-link=""><span class="img_descr">　　7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛在阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德陪同下前往检阅大厅。 新华社记者李学仁摄</span></div>
<p>　　新华社阿布扎比7月19日电（记者苏小坡　李忠发　郑开君）19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。&nbsp;</p>
<p>　　当习近平乘坐的专机进入阿联酋领空时，阿联酋空军12架战机升空护航。当地时间下午5时40分许，专机抵达阿布扎比总统机场。习近平和夫人彭丽媛步出舱门，阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德在廊桥口热情迎接。阿联酋儿童向习近平和彭丽媛献上鲜花。&nbsp;</p>
<p>　　穆罕默德副总统兼总理在机场为习近平举行迎接仪式。&nbsp;</p>
<p>　　习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下前往检阅大厅，仪仗队列队迎候。鸣21响礼炮。习近平和彭丽媛同穆罕默德副总统兼总理共同登上检阅台。军乐队奏中国国歌。国歌毕，习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下前往会见厅，同阿联酋主要内阁部长和重要王室成员等阿方迎接人员握手。穆罕默德副总统兼总理、穆罕默德王储同中方陪同人员握手。习近平同穆罕默德副总统兼总理、穆罕默德王储亲切交谈。&nbsp;</p>
<p>　　习近平代表中国政府和中国人民，向阿联酋政府和人民致以诚挚问候和良好祝愿。习近平指出，中阿建交34年来，两国始终相互尊重、平等相待，双边关系得到长足发展，各领域务实合作成果丰硕。阿联酋是我这次出访的第一站，也是我再次担任中国国家主席后访问的第一个国家，体现了中方对中阿关系的重视。刚刚抵达阿布扎比，我就感受到了阿联酋人民的热情友好，深受感动。我期待着同阿联酋领导人就发展两国关系深入交换意见。相信在双方共同努力下，这次访问将取得圆满成功，增进两国和两国人民友谊。&nbsp;</p>
<div class="img_wrapper"><img src="http://dummyimage.com/250x250" alt="7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛同阿联酋副总统兼总理穆罕默德共同登上检阅台。 新华社记者谢环驰摄" data-mcesrc="http://www.xinhuanet.com/world/2018-07/20/1123151532_15320241862891n.jpg" data-mceselected="1" data-link=""><span class="img_descr">　　7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛同阿联酋副总统兼总理穆罕默德共同登上检阅台。 新华社记者谢环驰摄</span></div>
<p>　　穆罕默德副总统兼总理和穆罕默德王储热烈欢迎习近平主席对阿联酋进行国事访问，表示习近平主席是阿联酋人民的老朋友、好朋友，很荣幸习近平主席选择阿联酋作为连任中国国家主席后首次出访的首站，阿方各界热切期盼习近平主席这次重要、历史性访问。相信习近平主席这次访问将有力促进阿中战略性关系进一步发展。&nbsp;</p>
<p>　　习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下离开会见厅。当地青年和儿童跳起阿联酋特色舞蹈，欢迎最尊贵的客人。&nbsp;</p>
<p>　　丁薛祥、杨洁篪、王毅、何立峰等陪同人员同机抵达。&nbsp;</p>
<p>　　中国驻阿联酋大使倪坚也到机场迎接。&nbsp;</p>
<p>　　在结束对阿联酋的国事访问后，习近平还将对塞内加尔、卢旺达、南非进行国事访问，出席在南非约翰内斯堡举行的金砖国家领导人第十次会晤，过境毛里求斯并进行友好访问。（完）</p>
<p class="show_author">责任编辑：张玉 </p>`,
        des: '<p><a href="http://www.12371.cn/special/lxyzby/" target="_blank"><img src="http://dummyimage.com/336x280"></a><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span></p><p><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><img src=\'https://st.be-linker.com/data2/var/upload/ueditor/jsp/upload/image/20180723/1532281397085068136.jpg\' title=\'1532281397085068136.jpg\' alt=\'20170411_a5f378bc72ee57dc72869lsi6hl156v8_sp.jpg\'/></span></p><p><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持<img src=\'https://st.be-linker.com/data2/var/upload/ueditor/jsp/upload/image/20180726/1532563756668096323.png\' title=\'1532563756668096323.png\' alt=\'QQ截图20180117090358.png\' width=\'776\' height=\'428\' style=\'width: 776px; height: 428px;\'/></span></span></p><p><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span></span></span></p>',
        imgs0: [],
        imgs1: [
          {
            id: '1',
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }
        ],
        imgs2: [
          {
            id: '2',
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: '#'
          }, {
            id: '3',
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs3: [
          {
            id: '4',
            name: '300*600',
            src: 'http://dummyimage.com/300x600',
            href: '#'
          }, {
            id: '5',
            name: '300*600',
            src: 'http://dummyimage.com/300x600',
            href: 'https://www.baidu.com/'
          }, {
            id: '6',
            name: '300*300',
            src: 'http://dummyimage.com/300x300',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs4: [
          {
            id: '7',
            name: '400*600',
            src: 'http://dummyimage.com/400x600',
            href: '#'
          }, {
            id: '8',
            name: '400*600',
            src: 'http://dummyimage.com/400x600',
            href: '/page-progress'
          }, {
            id: '9',
            name: '400*300',
            src: 'http://dummyimage.com/400x300',
            href: '#'
          }, {
            id: '10',
            name: '400*200',
            src: 'http://dummyimage.com/400x200',
            href: '#'
          }
        ],
        imgs: [],
        count: 1,
        imgTest: 'https://placeimg.com/927/582/any?' + (new Date()).getTime(),
        imgTest2: 'https://placeimg.com/70/150/any?' + (new Date()).getTime(),
        imgTest3: 'https://placeimg.com/90/150/any?' + (new Date()).getTime(),
        username: '',
        password: '',
        captcha: ''
      }
    },
    methods: {
      onbottom () {
        alert('onbottom')
      },
      onchange (item, index, total) {
        //        console.log('onchange', item, index, total)
      },
      onPullRefresh (stop) {
        setTimeout(function () {
          stop()
        }, 2000)
      },
      onChangeImg () {
        let that = this
        that.imgTest = `https://placeimg.com/${that.count * 100}/1500/any?` + (new Date()).getTime()
        that.imgTest2 = `https://placeimg.com/1500/${that.count * 100}/any?` + (new Date()).getTime()
        that.imgTest3 = `https://placeimg.com/${that.count * 100}/${that.count * 100}/any?` + (new Date()).getTime()
        that.count++
      },
      onPopChange (type, data) {
        let that = this
        //        debugger
        // 这里有setter, 可以改变预览图
        data.img = that.imgTest3
      }
    },
    mounted: function () {
      let that = this

      //      setTimeout(function () {
      //        that.imgs = that.imgs1
      //        console.log('1')
      //      }, 2000)
      //      setTimeout(function () {
      //        that.imgs = that.imgs2
      //        console.log('2')
      //      }, 4000)
      //      setTimeout(function () {
      //        that.imgs = that.imgs3
      //        console.log('3')
      //      }, 6000)
      //      setTimeout(function () {
      //        that.imgs = that.imgs4
      //        console.log('4')
      //      }, 8000)
      //      setTimeout(function () {
      //        that.imgs = that.imgs0
      //        console.log('5')
      //      }, 8000)

      //      setTimeout(function () {
      //        Indicator.open()
      //      }, 2000)
      //      setTimeout(function () {
      //        Toast({
      //          message: 'toast',
      //          duration: 2000
      //        })
      //      }, 4000)
      //      setTimeout(function () {
      //        MessageBox({
      //          title: '出错',
      //          message: 'message-box'
      //        })
      //      }, 6000)

      //      setTimeout(function () {
      //        that.$indicator.open()
      //      }, 2000)
      //      setTimeout(function () {
      //        that.$toast({
      //          message: 'toast',
      //          duration: 2000
      //        })
      //      }, 4000)
      //      setTimeout(function () {
      //        that.$messageBox({
      //          title: '出错',
      //          message: 'message-box'
      //        })
      //      }, 6000)
      //      that.$toast({
      //        message: '已添加',
      //        duration: 100000,
      //        iconClass: 'mintui mintui-success xy-mintui-extend-icon'
      //      })
      //      that.$toast({
      //        message: '失败',
      //        duration: 100000,
      //        iconClass: 'mintui mintui-field-error xy-mintui-extend-icon'
      //      })
      console.log(that.$formatDate(new Date(), 'yyyy-MM-dd'))
      console.log(that.$relativeDate(new Date()))

      //      setTimeout(function () {
      //        that.imgs3 = that.imgs4
      //        debugger
      //      }, 3000)

      setTimeout(function () {
        //        debugger
        // 这里update, 也可以改变预览图
        //        that.imgTest = that.imgTest2
      }, 3000)
      setTimeout(function () {
        //        debugger
        // 这里update, 也可以改变预览图
        //        that.imgTest = that.imgTest3
      }, 8000)
    }
  }
</script>

<style lang="scss">
  @import './lib/mint-ui/lib/style.css';
  @import './lib/scss/mixin';

  body {
    margin: 0;
  }

  #demo {
    /*height: 200vh;*/
    /*background: linear-gradient(black 0%, black 10%, white 10%, white 20%, black 20%, black 30%, white 30%, white 40%, black 40%, black 50%, white 50%, white 60%, black 60%, black 70%, white 70%, white 80%, black 80%, black 90%, white 90%, white 100%);*/
    .keepTopOther {
      height: 10vh;
      background-color: blue;
    }

    #keepTop {
      height: 10vh;
      background-color: yellow;
      line-height: 10vh;
      text-align: center;
    }
  }

  .cats {
    $cats-w: red;
    margin-top: 10px;
    @include well-out;
    & > div {
      font-size: 16px;
      padding: rsh(35) 0 rsh(30) 0;
      height: rsh(100);
      background-color: yellow;
      text-align: center;
    }
    &.cats--empty {
      & > div {
        @include well-item(3, 1, blue);
      }
    }
    &.cats--tb {
      & > div {
        @include well-item(3, 1, blue, 'tb');
      }
    }
  }

  img.empty {
    width: rsh(212);
    height: rsh(220);
  }

  article.nomore {
    background-color: #fff;
    display: flex;
    justify-content: center;
    font-style: normal;
    & > div {
      text-align: center;
      margin: 0 auto;
      position: relative;
      color: #cc9054;
      font-weight: 300;
      font-size: rsh(32);
      line-height: rsh(38*2);
      padding: 0 rsh(20);

      &:after {
        position: absolute;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #cc9054;
        left: 0;
        top: 50%;
        z-index: 1;
        transform: scale(1, .5);
        margin-top: -1px;
      }

      & > div {
        position: relative;
        width: auto;
        z-index: 2;
        background-color: #fff;
        margin: 0 auto;
        padding: 0 rsh(10);
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          margin: 0 rsh(7*2);
          text-align: center;
        }
        &:after, &:before {
          content: '';
          vertical-align: middle;
          color: #cc9054;
          font-size: rsh(12*2);
          width: rsh(6*2);
          height: rsh(6*2);
          text-align: center;
          transform: scale(.6, 1) rotate(45deg);
          position: relative;
          background-color: #cc9054;
        }
      }
      &.footer-title {
        width: rsh(150*2);
        & > div {
          width: rsh((16 * 6 + 6 * 4 + 3 * 3)*2);
        }
      }
    }
  }
</style>
