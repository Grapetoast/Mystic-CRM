<template>
  <div class="main">
    <div class="accountView" v-if="modal==='view'">
      <h2 class="name">Name: {{activeUser.name}}</h2>
      <h2 class="email">Email: {{activeUser.email}}</h2>
      <button class="accountEditButton" v-on:click="modal='edit'">Edit Account</button>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="accountEdit" v-else-if="modal==='edit'">
      <input class="nameEdit" v-model="activeUser.name" placeholder="Name"/>
      <input class="emailEdit" v-model="activeUser.email" placeholder="user@example.com"/>
      <button class="submitEdit" v-on:click="updateUser">Submit</button>
      <button class="back" v-on:click="modal='view'">Back</button>
    </div>
    <div class="updatePass" v-else-if="modal==='pass'">
      <input class="passwordEdit" v-model="activeUser.password" placeholder="********" v-if="!showPass" type="password">
      <input class="passwordEdit" v-model="activeUser.password" placeholder="********" v-if="showPass">
      <button class="togglePass" v-on:click="showPass = !showPass" v-if="!showPass">Show Password</button>
      <button class="togglePass" v-on:click="showPass = !showPass" v-if="showPass">Hide Password</button>
      <button class="submitUpdatePass" v-on:click="updatePass">Submit</button>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="settings" v-else-if="modal==='sett'">
      <h1>Settings</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="success" v-else-if="modal==='success'">
      <h1>Success!!</h1>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="accountHome" v-else>
      <h1>Account</h1>
      <p>Tip! Using the Manage Employees page, You can keep track of your employees and add new employees to the Mystic Platform!</p>
      <button class="Employees" v-on:click="$router.push('/Employees')" v-if="logged">Manage Employees</button>
      <button class="generalsettings" v-on:click="modal='sett'">General Settings</button>
      <button class="update" v-on:click="modal='pass'">Update Password</button>
      <button class="viewAccount" v-on:click="modal='view'">View Account</button>
      <button class="Logout" v-on:click=" $emit('logout')" v-if="logged">Logout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'account',
  props: ['logged', 'user'],
  data () {
    return {
      modal: '',
      showPass: false,
      activeUser: {
        id: '',
        email: '',
        password: '',
        name: ''
      }
    }
  },
  created () {
    if (this.logged !== true) {
      this.$router.push('/login')
    }
    this.populateActiveUser()
  },
  methods: {
    updateUser () {
      let vue = this
      axios.put('https://api.mystic-crm.com/users/' + vue.user.id, {
        email: vue.activeUser.email,
        name: vue.activeUser.name
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (user) {
          vue.activeUser.email = user.data.email
          vue.activeUser.name = user.data.name
          vue.modal = 'view'
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    updatePass () {
      let vue = this
      axios.put('https://api.mystic-crm.com/users/' + vue.user.id, {
        password: vue.activeUser.password
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (user) {
          vue.modal = 'success'
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearActiveUser () {
      let vue = this
      vue.activeUser.email = ''
      vue.activeUser.name = ''
    },
    populateActiveUser () {
      let vue = this
      axios.get('https://api.mystic-crm.com/users/' + vue.user.id, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.activeUser.email = response.data.email
          vue.activeUser.name = response.data.name
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    registerUser () {
      let vue = this
      axios.post('https://api.mystic-crm.com/users', {
        email: vue.activeUser.email,
        password: vue.activeUser.password,
        name: vue.activeUser.name
      })
        .then(function () {
          vue.modal = 'success'
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="less">
  @red: #008be8;
  @grey: #323d38;
  @blue: #008be8;
  @font: 'Roboto', sans-serif;
  @titlefont: 'Timmana', sans-serif;
  .main {
    width: 100%;
    height: 100%;
    position: fixed;
  }

  h1 {
    color: black;
    text-align: left;
    font-size: 4em;
    font-weight: bold;
    margin-left: 5%;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1em;
    border-bottom: 1px solid #777;
    margin-left: 5%;
    width: 90%;
  }
  p {
    text-align: left;
    color: #777;
    width: 90%;
    margin-left: 5%;
  }
  input {
    width: 90%;
    font-size: 1.5em;
    background-color: #fff;
    border: 2px solid grey;
    padding-left: 5%;
    margin-left: 5%;
  }

  select option[data-default] {
    color: #888;
  }

  button {
    width: 90%;
    margin-left: 5%;
    background: white;
    border: none;
    margin-bottom: 5%;
    height: 50px;
    color: @blue;
    font-size: 1.5em;
    text-align: left;
  }

  .accountEditButton {
    margin-bottom: 20px;
    color: @blue;
  }

  .submitEdit {
    color: @blue;
  }
  .passwordEdit {
    margin-top: 100px;
  }
  .accountView {
    margin-top: 100px;
  }
  .accountEdit {
    margin-top: 100px;
  }
  .nameEdit {
    font-size: 1em;
    margin-bottom: 10px;
  }
  .emailEdit {
    margin-bottom: 10px;
    font-size: 1em;
  }
</style>
