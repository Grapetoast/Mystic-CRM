<template>
  <div class="main">
    <div class="viewCampaign" v-if="modal === 'viewCampaign'">
      <span>{{activeCampaign.name}}</span>
      <h2>Template</h2>
      <span>{{activeCampaign.template.sender}}</span>
      <span>{{activeCampaign.template.subject}}</span>
      <span>{{activeCampaign.template.text}}</span>
      <span>{{activeCampaign.template.html}}</span>
      <h2>Campaign</h2>
      <span>{{activeCampaign.company}}</span>
      <span>{{activeCampaign.target}}</span>
      <span>{{activeCampaign.startDate}}</span>
      <span>{{activeCampaign.endDate}}</span>
      <span>{{activeCampaign.analyze}}</span>
      <span>{{activeCampaign.active}}</span>
      <span class="numberReached">{{activeCampaign.log.length}}</span>
      <span class="numberOpened">{{activeCampaign.openLog.length}}</span>
      <span class="numberLinked">{{activeCampaign.linkLog.length}}</span>
      <h2>Logs</h2>
      <div class="" v-for="log in activeCampaign.log" v-bind:key="log.id">
        <span>{{log.message}}</span>
        <span>{{log.time.toLocaleString()}}</span>
      </div>
      <div class="" v-for="log in activeCampaign.openLog" v-bind:key="log.id">
        <span>{{log.time.toLocaleString()}}</span>
      </div>
      <div class="" v-for="log in activeCampaign.linkLog" v-bind:key="log.id">
        <span>{{log.link}}</span>
        <span>{{log.time.toLocaleString()}}</span>
      </div>
      <button class="" v-on:click="pushCampaigns">push-back</button>
      <button class="back" v-on:click="modal = ''">Back</button>
    </div>
    <div class="header" v-else>
      <h1>Analytics</h1>
      <p>Full spectrum analytics of your campaigns, lead conversion and ad reach.</p>
      <div class="" v-for="campaign in campaigns" v-bind:key="campaign._id">
        <h3 v-on:click="viewCampaign(campaign)">{{campaign.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'analytics',
  props: ['user'],
  data () {
    return {
      modal: '',
      campaigns: [],
      activeCampaign: {
        id: '',
        name: '',
        company: '',
        templateId: '',
        target: '',
        startDate: '',
        endDate: '',
        analyze: false,
        active: false,
        log: [],
        openLog: [],
        linkLog: [],
        template: {
          sender: '',
          subject: '',
          text: '',
          html: ''
        }
      }
    }
  },
  created () {
    let vue = this
    vue.populateCampaigns()
  },
  methods: {
    populateCampaigns () {
      let vue = this
      axios.get('https://api.mystic-crm.com/campaigns/' + vue.user.companyId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.campaigns = []
          let i = 0
          for (i = 0; i < response.data.length; i++) {
            if (response.data[i].active === false) {
              vue.campaigns.push(response.data[i])
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    viewCampaign (campaign) {
      let vue = this
      vue.activeCampaign.id = campaign._id
      vue.activeCampaign.name = campaign.name
      vue.activeCampaign.company = campaign.company
      vue.activeCampaign.target = campaign.target
      vue.activeCampaign.startDate = campaign.startDate
      vue.activeCampaign.endDate = campaign.endDate
      vue.activeCampaign.analyze = campaign.analyze
      vue.activeCampaign.active = campaign.active
      vue.activeCampaign.log = campaign.log
      vue.activeCampaign.templateId = campaign.templateId
      vue.activeCampaign.openLog = campaign.openLog
      vue.activeCampaign.linkLog = campaign.linkLog
      axios.get('https://api.mystic-crm.com/templates/id/' + vue.activeCampaign.templateId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.activeCampaign.template.sender = response.data[0].sender
          vue.activeCampaign.template.subject = response.data[0].subject
          vue.activeCampaign.template.text = response.data[0].text
          vue.activeCampaign.template.html = response.data[0].html
        })
        .catch(err => {
          console.log(err)
        })
      vue.modal = 'viewCampaign'
    },
    pushCampaigns () {
      let vue = this
      axios.put('https://api.mystic-crm.com/campaigns/' + vue.activeCampaign.id, {
        active: true
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          console.log(response)
          vue.populateCampaigns()
          vue.modal = ''
        })
        .catch(err => {
          console.log(err)
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

h1 {
  color: black;
  font-size: 4em;
  margin-left: 5%;
  font-weight: bold;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 10px;
}
h3 {
  color: black;
  margin-left: 5%;
  border-bottom: 1px solid grey;
  margin-right: 5%;
  line-height: 30px;
  font-size: 1em;
}
p {
  text-align: left;
  color: #777;
  font-size: 1em;
  margin-left: 5%;
  grid-column-start: 1;
  grid-column-end: 3;
}
button {
  color: @blue;
  font-size: 1.5em;
}
button:active {
  color: #C22227;
}
</style>
