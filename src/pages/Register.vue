<template>
  <div class="main">
    <div class="registerModal" v-if="modal==='register'">
      <h1>Register</h1>
      <h3 v-if="error">Missing Inputs</h3>
      <input class="name" v-model="name" placeholder="Full Name"/>
      <input class="email" v-model="email" placeholder="user@example.com"/>
      <input class="password" v-model="password" placeholder="*********" type="password" v-if="!showPass" v-on:keypress.enter="registerUser">
      <input class="password" v-model="password" placeholder="*********" v-if="showPass" v-on:keypress.enter="registerUser">
      <button class="togglePass" v-on:click="showPass = !showPass" v-if="!showPass">Show Password</button>
      <button class="togglePass" v-on:click="showPass = !showPass" v-if="showPass">Hide Password</button>
      <button class="submitRegister" v-on:click="registerUser">Submit</button>
      <button class="back" v-on:click="modal=''; error=false">Back</button>
    </div>
    <div class="employeeRegister" v-else-if="modal==='employee'">
      <h1>Enter Company Code</h1>
      <h3 v-if="error">Code Not Recognized. Try Again.</h3>
      <input class="companyCode" v-model="companyId" placeholder="Company Code"/>
      <button class="submitEmployee" v-on:click="submitCompanyId">Submit</button>
      <button class="back" v-on:click="modal=''; error=false">Back</button>
    </div>
    <div class="companyRegister" v-else-if="modal==='company'">
      <h1>Enter Company Information</h1>
      <h3 v-if="error">Missing Inputs</h3>
      <h3 v-if="taken">Company Code Taken</h3>
      <input class="companyCode" v-model="companyId" placeholder="Company Code"/>
      <input class="companyName" v-model="companyName" placeholder="Company Name"/>
      <button class="submitCompany" v-on:click="submitCompany">Submit</button>
      <button class="back" v-on:click="modal=''; error=false">Back</button>
    </div>
    <div class="chooseRegister" v-else>
      <h1>Are you Registering a New Company?</h1>
      <button class="companyRegisterButton" v-on:click="modal='company'">Yes</button>
        <button class="employeeRegisterButton" v-on:click="modal='employee'">No</button>
        <h4>*Must have a company Code</h4>
      <button class="back" v-on:click="$router.push('/login')">Back</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  props: ['logged', 'user'],
  data () {
    return {
      modal: '',
      showPass: false,
      email: '',
      password: '',
      name: '',
      company: false,
      companyId: '',
      companyName: '',
      error: false,
      taken: false
    }
  },
  methods: {
    registerUser () {
      let vue = this
      if (vue.company === true) {
        axios.post('https://api.mystic-crm.com/companys', {
          companyId: vue.companyId,
          companyName: vue.companyName
        })
          .then(function () {
            vue.error = false
          })
          .catch(function (error) {
            console.log(error)
            vue.error = true
          })
      }
      axios.post('https://api.mystic-crm.com/users', {
        email: vue.email,
        password: vue.password,
        name: vue.name,
        companyId: vue.companyId,
        admin: vue.company
      })
        .then(function (user) {
          console.log(user.data.token)
          vue.$emit('register', user)
        })
        .catch(function (error) {
          console.log(error)
          vue.error = true
        })
    },
    submitCompanyId () {
      let vue = this
      axios.get('https://api.mystic-crm.com/companys/' + vue.companyId)
        .then(function (response) {
          vue.companyName = response.data[0].companyName
          vue.modal = 'register'
          vue.company = false
          vue.error = false
        })
        .catch(function (error) {
          console.log(error)
          vue.error = true
        })
    },
    submitCompany () {
      let vue = this
      axios.get('https://api.mystic-crm.com/companys/' + vue.companyId)
        .then(function (response) {
          console.log(response.data.length)
          if (response.data.length === 0) {
            vue.company = true
            vue.modal = 'register'
          } else {
            vue.taken = true
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="less">
@blue: #008be8;
@darkBlue: #00578A;
@lightBlue: #78CDFF;
@grey: #323d38;
@font: 'Roboto', sans-serif;
@titlefont: 'Timmana', sans-serif;

  .main {
    height: 500px;
    width: 100%;
    position: fixed;
  }
  .registerModal {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 60px);
  }
.chooseRegister {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 60px);
}
.employeeRegister {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 60px);
}
.companyRegister {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 60px);
}
  h1 {
    color: black;
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
    margin: 0;
    width: 80%;
    margin-left: 10%;
    margin-top: 100px;
    margin-bottom: 20px;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row: 2;
  }
  h3 {
    color: red;
    grid-column-start: 1;
    grid-column-end: 7;
    font-size: 1em;
    text-align: center;
    grid-row: 2;
  }

  select option[data-default] {
    color: #888;
  }

  button {
    background: white;
    color: @blue;
    border: none;
    font-size: 1.5em;
  }

  input {
    border: none;
    border-bottom: 1px solid black;
    width: 90%;
    margin-left: 5%;
    height: 40px;
    margin-bottom: 10px;
    grid-row: 6;
    grid-column-start: 1;
    grid-column-end: 7;
  }

  .role {
    border: 1px solid @grey;
    width: 90%;
    margin-left: 5%;
    height: 40px;
    margin-bottom: 10px;
    grid-row: 7;
  }

  .togglePass {
    width: 100%;
    margin-left: 20px;
    grid-row: 8;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .name {
    grid-row: 5;
  }
  .email {
    grid-row: 6;
  }
  .password {
    grid-row: 7;
  }

  .submitRegister {
    width: 100%;
    grid-row: 8;
    grid-column-start: 4;
    grid-column-end: 7;
    text-align: center;
  }

  .submitCompany {
    margin-top: 20px;
    width: 90%;
    height: 50px;
    margin-left: 5%;
    grid-row: 8;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 7;
  }
.companyCode {
  border: none;
  border-bottom: 1px solid black;
  width: 90%;
  margin-left: 5%;
  height: 40px;
  margin-bottom: 10px;
  grid-row: 7;
  grid-column-start: 1;
  grid-column-end: 7;
}
  .submitEmployee {
    width: 90%;
    height: 50px;
    margin-left: 5%;
    grid-row: 8;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 7;
  }

  .companyRegisterButton {
    height: 50px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 6;
  }
  .employeeRegisterButton {
    grid-row: 6;
    grid-column-start: 4;
    grid-column-end: 7;
    text-align: center;
    height: 50px;
  }

  h4 {
    font-size: 1em;
    margin: 0;
    color: #777;
    grid-row: 8;
    grid-column-start: 1;
    grid-column-end: 7;
    text-align: center;
  }

  .back {
    height: 50px;
    width: 30%;
    margin-left: 5%;
    grid-row: 1;
    margin-top: 30px;
  }

  @media (min-width: 700px) {
  }
</style>
