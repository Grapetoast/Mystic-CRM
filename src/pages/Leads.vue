<template>
  <div class="main">
    <div class="leadView" v-if="modal==='lead'">
      <h1 class="nametop">{{activeLead.name}}</h1>
      <h5>Phone</h5>
      <h4>{{activeLead.phone}}</h4>
      <h5>Email</h5>
      <h4>{{activeLead.email}}</h4>
      <h5>Address</h5>
      <h4>{{activeLead.address}}</h4>
      <h5>Status</h5>
      <h4>{{activeLead.status}}</h4>
      <h5>URL</h5>
      <h4>{{activeLead.url}}</h4>
      <h5>Notes</h5>
      <h4>{{activeLead.comment}}</h4>
      <button class="edit" v-on:click="modal='leadEdit'">Edit</button>
      <button name="back" v-on:click="modal=''; clearActive()">Back</button>
    </div>
    <div class="leadEditView" v-else-if="modal==='leadEdit'">
      <h3>Edit Lead</h3>
      <input type="text" placeholder="Name" v-model="activeLead.name"/>
      <input type="text" placeholder="Phone" v-model="activeLead.phone"/>
      <input type="text" placeholder="Email" v-model="activeLead.email"/>
      <input type="text" placeholder="Address" v-model="activeLead.address"/>
      <input type="text" placeholder="Status" v-model="activeLead.status"/>
      <input type="text" placeholder="URL" v-model="activeLead.url"/>
      <textarea type="text" placeholder="Notes" v-model="activeLead.comment"/>
      <button class="cancel" v-on:click="modal='lead'">Cancel</button>
      <button class="delete" v-on:click='deleteLead'>Delete Lead</button>
      <button class="submitLead" v-on:click="updateLead">Submit Changes</button>
    </div>
    <div class="newLead" v-else-if="modal=== 'newLead'">
      <h2>New Lead</h2>
      <input type="text" class="nameNew" v-model="activeLead.name" placeholder="Name" required/>
      <input type="tel" class="phoneNew" v-model="activeLead.phone" placeholder="Phone Number" required/><br/>
      <input type="text" class="emailNew" v-model="activeLead.email" placeholder="Email Address" required/>
      <input type="text" class="addressNew" v-model="activeLead.address" placeholder="Address" required/>
      <input type="text" class="statusNew" v-model="activeLead.status" placeholder="Status" required/>
      <input type="text" class="urlNew" v-model="activeLead.url" placeholder="url" required/>
      <textarea type="text" class="commentNew" v-model="activeLead.comment" placeholder="Notes" required/>
      <button class="cancel" v-on:click="modal=''; clearActive()">Cancel</button>
      <button class="submitLead" v-on:click="submitLead">Submit</button>
    </div>
    <div class="default" v-else>
      <h1>Leads</h1>
      <p>Enter, Edit and Follow the status of your leads for easy organized customer relations managment!</p>
      <button class="newLeadbutton" v-on:click="modal = 'newLead'; clearActive()">+ New Lead</button>
      <button class="export" v-on:click="exportLeads">Export Leads as CSV</button>
      <div class="lead" v-for="lead in leads" v-bind:key="lead._id">
        <h3 v-on:click="viewLead(lead)">{{lead.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import download from 'downloadjs'

export default {
  name: 'leads',
  props: ['user'],
  created () {
    let vue = this
    vue.populateLeads()
  },
  data () {
    return {
      pageNum: 1,
      modal: '',
      leads: [],
      activeLead: {
        company: '',
        id: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        status: '',
        url: '',
        comment: ''
      }
    }
  },
  methods: {
    viewLead (lead) {
      let vue = this
      vue.activeLead.id = lead._id
      vue.activeLead.company = lead.company
      vue.activeLead.name = lead.name
      vue.activeLead.phone = lead.phone
      vue.activeLead.email = lead.email
      vue.activeLead.address = lead.address
      vue.activeLead.status = lead.status
      vue.activeLead.url = lead.url
      vue.activeLead.comment = lead.comment
      vue.modal = 'lead'
    },
    clearActive () {
      let vue = this
      vue.activeLead.id = ''
      vue.activeLead.company = ''
      vue.activeLead.name = ''
      vue.activeLead.phone = ''
      vue.activeLead.email = ''
      vue.activeLead.address = ''
      vue.activeLead.status = ''
      vue.activeLead.url = ''
      vue.activeLead.comment = ''
    },
    populateLeads () {
      let vue = this
      vue.lead = []
      axios.get('https://api.mystic-crm.com/leads/' + vue.user.companyId + '/' + vue.pageNum, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.leads = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    submitLead () {
      let vue = this
      axios.post('https://api.mystic-crm.com/leads', {
        company: vue.user.companyId,
        name: vue.activeLead.name,
        phone: vue.activeLead.phone,
        email: vue.activeLead.email,
        address: vue.activeLead.address,
        status: vue.activeLead.status,
        url: vue.activeLead.url,
        comment: vue.activeLead.comment
      })
        .then(response => {
          vue.clearActive()
          vue.populateLeads()
          vue.modal = ''
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateLead () {
      let vue = this
      axios.put('https://api.mystic-crm.com/leads/' + vue.activeLead.id, {
        name: vue.activeLead.name,
        phone: vue.activeLead.phone,
        email: vue.activeLead.email,
        address: vue.activeLead.address,
        status: vue.activeLead.status,
        url: vue.activeLead.url,
        comment: vue.activeLead.comment
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.populateLeads()
          vue.modal = 'lead'
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteLead () {
      let vue = this
      axios.delete('https://api.mystic-crm.com/leads/' + vue.activeLead.id, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.clearActive()
          vue.populateLeads()
          vue.modal = ''
        })
        .catch(error => {
          console.log(error)
        })
    },
    exportLeads () {
      let vue = this
      axios.get('https://api.mystic-crm.com/leads/export/' + vue.user.companyId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          download(response.data, 'company_csv.csv', 'text/csv')
            .then(() => {
              vue.modal = 'download'
            })
            .catch(err => {
              console.log(err)
            })
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
@grey: #323d38;

.main {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.default {
}

h1 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 1;
  color: black;
  font-size: 4em;
  text-align: left;
  width: 100%;
  margin-top: 40px;
  margin-left: 5%;
  font-weight: bold;
  margin-bottom: 10px;
}
h2 {
  text-align: center;
  margin: 0;
  padding-top: 40px;
  padding-bottom: 20px;
  color: @blue;
  text-align: left;
  font-weight: bold;
  margin-left: 5%;
  font-size: 3em;
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
  line-height: 20px;
  margin-left: 5%;
  margin-top: 0;
  font-size: 1em;
}
h5 {
  color: #777;
  margin-left: 5%;
  margin-bottom: 0;
  border-bottom: 1px solid #777;
  margin-right: 5%;
}
.nametop {
  font-size: 2em;
  font-weight: 600;
}
textarea {
  height: 100px;
  width: 90%;
  margin-left: 5%;
  border: 1px solid #777;
}
input {
  width: 90%;
  margin-left: 5%;
  border: 1px solid grey;
  margin-bottom: 30px;
  font-size: 1em;
  height: 30px;
}
.delete {
  color: #c22227;
  text-align: center;
  width: 100%;
}
button {
  color: @blue;
  font-size: 1.5em;
}
p {
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 2;
  color: #777;
  margin-left: 5%;
  width: 90%;
}
.newLead {
  color: white;
  grid-column: 1;
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 7;
  height: 100%;
}
.newLeadbutton {
  background: white;
  font-size: 1.5em;
  color: @blue;
  grid-column-start: 1;
  grid-column-end: 7;
  text-align: right;
  height: 40px;
  width: 90%;
  margin-left: 5%;
  border: none;
}

.leadEditView {
  margin-top: 50px;
}
button:active {
  color: #C22227;
}
.submitLead {
  font-size: 1.5em;
  color: @blue;
}
.cancel {
  font-size: 1.5em;
  color: @blue;
  float: right;
}
.nameNew {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  font-size: 1em;
  border: none;
  margin-bottom: 20px;
  border: 1px solid black;
}
.phoneNew {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  font-size: 1em;
  border: none;
  margin-bottom: 20px;
  border: 1px solid black;
}
.emailNew {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  font-size: 1em;
  border: none;
  margin-bottom: 20px;
  border: 1px solid black;
}
.addressNew {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  font-size: 1em;
  border: none;
  margin-bottom: 20px;
  border: 1px solid black;
}
.statusNew {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  font-size: 1em;
  border: none;
  margin-bottom: 20px;
  border: 1px solid black;
}
.urlNew {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  font-size: 1em;
  border: none;
  margin-bottom: 20px;
  border: 1px solid black;
}
.commentNew {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  font-size: 1em;
  border: none;
  height: 100px;
  border: 1px solid black;
}
.leadEditView button {
  margin-bottom: 15px;
  text-align: center;
  width: 100%;
}
.leadEditView {
  overflow-y: scroll;
  margin-bottom: 100px;
}
.newLead .submitLead {
  margin-left: 5%;
}
.newLead .cancel {
  margin-right: 5%;
}
</style>
