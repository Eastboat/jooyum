import App from './App'

// #ifndef VUE3
import Vue from 'vue'

// global component 
import NoticeBar from './components/NoticeBar.vue'
import Badge from './components/Badge.vue'
import TabBar from './components/TabBar/TabBar.vue' 
import Dialog from './components/Dialog/Dialog.vue' 
Vue.component('JyNoticeBar',NoticeBar)
Vue.component('JyBadge',Badge)
Vue.component('JyTabBar',TabBar)
Vue.component('JyDialog',Dialog)

// global css
import "@/common/style/index.scss";

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif


// #ifdef MP-WEIXIN
Vue.mixin({
    methods:{
        setTabBarIndex(index) {
            if (typeof this.$mp.page.getTabBar === 'function' &&
            this.$mp.page.getTabBar()) {
                this.$mp.page.getTabBar().setData({
                    selected: index
                })
            }
        }
    }
})
// #endif
