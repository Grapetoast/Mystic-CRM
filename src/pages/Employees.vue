<template>
  <div class="main">
    <div class="employeeView" v-if="modal==='employee'">
      <h1 class="nametop">{{activeEmployee.name}}</h1>
      <h5>Phone</h5>
      <h4>{{activeEmployee.phone}}</h4>
      <h5>Email</h5>
      <h4>{{activeEmployee.email}}</h4>
      <h5>Address</h5>
      <h4>{{activeEmployee.address}}</h4>
      <h5>Position</h5>
      <h4>{{activeEmployee.position}}</h4>
      <h5>Admin</h5>
      <h4>{{activeEmployee.admin}}</h4>
      <div class="options">
      <button class="edit" v-on:click="modal='employeeEdit'">Edit</button>
      <button class="back" v-on:click="modal=''; clearActive()">Back</button>
    </div>
    </div>
    <div class="newEmployee" v-else-if="modal==='newEmployee'">
      <input type="text" class="nameNew" v-model="activeEmployee.name" placeholder="Name" required/>
      <input type="tel" class="phoneNew" v-model="activeEmployee.phone" placeholder="Phone Number" required/><br/>
      <input type="text" class="emailNew" v-model="activeEmployee.email" placeholder="Email Address" required/>
      <input type="text" class="addressNew" v-model="activeEmployee.address" placeholder="Address" required/>
      <input type="text" class="positionNew" v-model="activeEmployee.position" placeholder="Position" required/>
      <input type="text" class="commentNew" v-model="activeEmployee.comment" placeholder="Notes"/>
      <h2>Give this employee Admin Privileges?</h2>
      <input type="checkbox" class="adminNew" v-model="activeEmployee.admin"/>
      <button class="cancel" v-on:click="modal=''; clearActive()">Cancel</button>
      <button class="submitEmployee" v-on:click="submitEmployee">Submit</button>
    </div>
    <div class="employeeEditView" v-else-if="modal==='employeeEdit'">
      <input type="text" v-model="activeEmployee.name"/>
      <input type="text" v-model="activeEmployee.phone"/>
      <input type="text" v-model="activeEmployee.email"/>
      <input type="text" v-model="activeEmployee.address"/>
      <input type="text" v-model="activeEmployee.status"/>
      <input type="text" v-model="activeEmployee.position"/>
      <input type="checkbox" v-model="activeEmployee.admin"/><h2>Admin?</h2>
      <button class="cancel" v-on:click="modal='employee'">Cancel</button>
      <button class="delete" v-on:click='deleteEmployee'>Delete Employee</button>
      <button class="submitEmployee" v-on:click="updateEmployee">Submit Changes</button>
    </div>
    <div class="default" v-else>
      <h1>Employees</h1>
      <button class="newEmployeeButton" v-on:click="modal='newEmployee'; clearActive()">+ New Employee</button>
      <div class="employee" v-for="employee in employees" v-bind:key="employee._id">
        <h3 v-on:click="viewEmployee(employee)">{{employee.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'employees',
  props: ['user'],
  created () {
    let vue = this
    vue.populateEmployees()
  },
  data () {
    return {
      pageNum: 1,
      modal: '',
      employees: [],
      activeEmployee: {
        id: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        position: '',
        admin: false
      }
    }
  },
  methods: {
    populateEmployees () {
      let vue = this
      axios.get('https://api.mystic-crm.com/employees/' + vue.pageNum, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.employees = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearActive () {
      let vue = this
      vue.activeEmployee.name = ''
      vue.activeEmployee.phone = ''
      vue.activeEmployee.email = ''
      vue.activeEmployee.address = ''
      vue.activeEmployee.position = ''
      vue.activeEmployee.admin = false
    },
    viewEmployee (employee) {
      let vue = this
      vue.activeEmployee.id = employee._id
      vue.activeEmployee.name = employee.name
      vue.activeEmployee.phone = employee.phone
      vue.activeEmployee.email = employee.email
      vue.activeEmployee.address = employee.address
      vue.activeEmployee.position = employee.position
      vue.activeEmployee.admin = employee.admin
      vue.modal = 'employee'
    },
    submitEmployee () {
      let vue = this
      axios.post('https://api.mystic-crm.com/employees', {
        name: vue.activeEmployee.name,
        phone: vue.activeEmployee.phone,
        email: vue.activeEmployee.email,
        address: vue.activeEmployee.address,
        position: vue.activeEmployee.position,
        admin: vue.activeEmployee.admin
      })
        .then(response => {
          vue.clearActive()
          vue.populateEmployees()
          vue.modal = ''
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateEmployee () {
      let vue = this
      axios.put('https://api.mystic-crm.com/employees/' + vue.activeEmployee.id, {
        name: vue.activeEmployee.name,
        phone: vue.activeEmployee.phone,
        email: vue.activeEmployee.email,
        address: vue.activeEmployee.address,
        position: vue.activeEmployee.position,
        admin: vue.activeEmployee.admin
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.populateEmployees()
          vue.modal = 'employee'
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteEmployee () {
      let vue = this
      axios.delete('https://api.mystic-crm.com/employees/' + vue.activeEmployee.id, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.clearActive()
          vue.populateEmployees()
          vue.modal = ''
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="less">
@blue: #008be8;
@grey: #323d38;
@font: 'Roboto', sans-serif;
@titlefont: 'Timmana', sans-serif;

.main {
  width: 100%;
  height: 100%;
  position: fixed;
}
.default {
}

h1 {
  color: black;
  font-size: 4em;
  margin-left: 5%;
  font-weight: bold;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 40px;
}
h2 {
  font-size: 1em;
  grid-row: 8;
  text-align: center;
}
h3 {
  color: black;
  margin-left: 5%;
  border-bottom: 1px solid grey;
  margin-right: 5%;
  line-height: 30px;
  font-size: 1em;
}
h4 {
  font-size: 1em;
  margin-left: 5%;
  margin-top: 0;
}
h5 {
  color: #777;
  margin-left: 5%;
  margin-bottom: 0;
  border-bottom: 1px solid #777;
  margin-right: 5%;
}
input {
  width: 90%;
  margin-left: 5%;
  border: 1px solid grey;
  margin-bottom: 30px;
  font-size: 1em;
  height: 30px;
}
button {
  color: @blue;
  font-size: 1.5em;
}
.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.delete {
  color: #c22227;
  text-align: center;
  width: 100%;
}
.back {
  grid-column: 1;
  grid-row: 1;
}
.edit {
  grid-column: 2;
}
.newEmployeeButton {
  border: none;
  background: none;
  font-size: 1.5em;
  width: 90%;
  margin-left: 5%;
  color: @blue;
  grid-column-start: 1;
  grid-column-end: 2;
  text-align: right;
  word-spacing: -5px;
}
.newEmployee {
  margin-top: 100px;
  display: grid;
  grid-template-rows: repeat(11, 40px);
  grid-row-gap: 10px;

}
button:active {
  color: #C22227;
}
.employeeEditView {
  margin-top: 50px;
}
.nameNew {
  grid-row: 1;
  width: 90%;
  border: 1px solid #777;
  margin-left:5%;
}
.phoneNew {
  grid-row: 2;
  width: 90%;
  border: 1px solid #777;
  margin-left:5%;
}
.emailNew {
  grid-row: 3;
  width: 90%;
  border: 1px solid #777;
  margin-left:5%;
}
.addressNew {
  grid-row: 4;
  width: 90%;
  border: 1px solid #777;
  margin-left:5%;
}
.positionNew {
  grid-row: 5;
  width: 90%;
  border: 1px solid #777;
  margin-left:5%;
}
.adminNew {
  grid-row: 9;
  margin-left:5%;
}
.commentNew {
  grid-row-start: 6;
  grid-row-end: 8;
  width: 90%;
  border: 1px solid #777;
  margin-left: 5%;
  height: 100px;
}

.submitEmployee {
  background: none;
  color: @blue;
  width: 100%;
  border: none;
  height: 35px;
  grid-row: 11;
}
.cancel {
  background: none;
  color: @blue;
  width: 100%;
  border: none;
  height: 35px;
  grid-row: 10;
}
.nametop {
  font-size: 2em;
  font-weight: 600;
}
.checkbox {
  margin-top: 0;
}
.employeeEditView button {
  margin-bottom: 15px;
}
</style>
