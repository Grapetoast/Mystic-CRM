<template>
  <div id="q-app">
    <div class="main">
    <navbar v-on:logout="logOut" :logged="logged" :user="user"></navbar>
    <transition name="fade">
      <router-view v-on:login="log" v-on:register="register" v-on:logout="logOut" :logged="logged" :user="user"/>
    </transition>
  </div>
</div>
</template>

<script>
import navbar from './pages/elements/Navbar'
export default {
  name: 'app',
  components: {
    'navbar': navbar
  },
  created () {
    let vue = this
    vue.user.token = localStorage.getItem('mystictoken')
    vue.user.id = localStorage.getItem('mysticuserId')
    vue.user.companyId = localStorage.getItem('mysticcompanyId')
    vue.user.admin = Boolean(localStorage.getItem('mysticadmin'))
    if (vue.user.token !== null) {
      vue.logged = true
    }
  },
  data: function () {
    return {
      logged: false,
      user: {
        id: '',
        token: '',
        companyId: '',
        admin: false
      }
    }
  },
  methods: {
    log (user) {
      let vue = this
      if (user.token !== null) {
        vue.user.token = user.token
        vue.user.id = user.id
        vue.user.admin = user.admin
        vue.user.companyId = user.companyId
        vue.logged = true
        vue.$router.push('/')
      } else {
        vue.logged = false
      }
    },
    register (user) {
      let vue = this
      if (user.token !== null) {
        vue.user.token = user.data.token
        vue.user.id = user.data.id
        vue.user.admin = user.data.admin
        vue.logged = true
        vue.$router.push('/')
      } else {
        vue.logged = false
      }
    },
    logOut () {
      let vue = this
      vue.user.token = ''
      vue.user.id = ''
      vue.user.admin = false
      vue.logged = false
      localStorage.removeItem('mystictoken')
      localStorage.removeItem('mysticuserId')
      localStorage.removeItem('mysticadmin')
      vue.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">

.fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>
