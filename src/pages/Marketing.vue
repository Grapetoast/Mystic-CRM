<template>
  <div class="main">
    <div class="header">
      <h1>Marketing</h1>
      <p>Create email marketing campaigns to keep your leads in the know!</p>
    </div>
    <div class="templateView" v-if="modal==='template'">
      <h3>Template</h3>
      <input class="templateName" v-model="activeTemplate.name" placeholder="Template Name"/>
      <input class="templateSender" v-model="activeTemplate.sender" placeholder="Sender"/>
      <input class="templateSubject" v-model="activeTemplate.subject" placeholder="Subject"/>
      <h3>Variables</h3>
      <h4>{{variable}}</h4>
      <select v-model="variable">
        <option value="">Pick a variable</option>
        <option value="${leadArray[i].name}">Lead Name</option>
        <option value="${leadArray[i].phone}">Lead Phone</option>
        <option value="${leadArray[i].email}">Lead Email</option>
        <option value="${leadArray[i].address}">Lead Address</option>
        <option value="${leadArray[i].status}">Lead Status</option>
        <option value="${leadArray[i].url}">Lead url</option>
        <option value="${leadArray[i].comment}">Lead Comment</option>
      </select>
      <h3>Link Shortener</h3>
      <h4>shortened link: {{shortLink}}</h4>
      <input class="shortener" v-model="link"/>
      <button v-on:click="shortenLink">Shorten Link</button>
      <h3>HTML text box</h3>
      <textarea v-model="activeTemplate.html"></textarea>
      <h3>Text Box</h3>
      <textarea v-model="activeTemplate.text"></textarea>
      <button class="createTemplate" v-on:click="createTemplate">Create Template</button>
      <button class="templateBack" v-on:click="modal=''; clearActiveTemplate()">Back</button>
    </div>
    <div class="newCampaignView" v-else-if="modal==='campaign'">
      <div v-for="template in templates" v-bind:key="template.id">
        <span class="templateName" v-on:click="campaignCreateView(template)">{{template.name}}</span>
      </div>
      <button class="newCampaignBack" v-on:click="modal=''">Back</button>
    </div>
    <div class="campaignView" v-else-if="modal==='campaignView'">
      <div v-for="campaign in campaigns" v-bind:key="campaign.id">
        <span class="campaignName" v-on:click="campaignView(campaign)" v-if="campaign.active">{{campaign.name}}</span>
      </div>
      <button class="newCampaignBack" v-on:click="modal=''">Back</button>
    </div>
    <div class="activeCampaignView" v-else-if="modal==='activeCampaignView'">
      <span class="campaignName">{{activeCampaign.name}}</span>
      <span class="templateName">{{activeTemplate.name}}</span>
      <span class="templateSender">{{activeTemplate.sender}}</span>
      <span class="templateSubject">{{activeTemplate.subject}}</span>
      <span class="templateHtml">{{activeTemplate.html}}</span>
      <span class="templateText">{{activeTemplate.text}}</span>
      <span class="campaignTarget">{{activeCampaign.target}}</span>
      <span class="numberReached">{{activeCampaign.logs.length}}</span>
      <button class="pushAnalytics" v-on:click="pushAnalytics()">Push to Analytics</button>
      <button class="templateBack" v-on:click="modal=''; clearActiveTemplate(); clearActiveCampaign()">Back</button>
    </div>
    <div class="createCampaignView" v-else-if="modal==='createCampaign'">
      <input class="campaignName" v-model="activeCampaign.name" placeholder="Campaign Name"/>
      <span class="templateName">{{activeTemplate.name}}</span>
      <span class="templateSender">{{activeTemplate.sender}}</span>
      <span class="templateSubject">{{activeTemplate.subject}}</span>
      <span class="templateHtml">{{activeTemplate.html}}</span>
      <span class="templateText">{{activeTemplate.text}}</span>
      <select v-model="activeCampaign.target">
        <option value="all">All Leads</option>
        <option value="new">Uncontacted Leads</option>
        <option value="cust">Customers</option>
      </select>
      <button class="launchCampaign" v-on:click="launchCampaign()">Launch Campaign</button>
      <button class="templateBack" v-on:click="modal=''; clearActiveTemplate(); clearActiveCampaign()">Back</button>
    </div>
    <div class="createSurveyView" v-else-if="modal==='survey'">
      <h3>Survey</h3>
      <textarea class="greeting" placeholder="Greeting Message"></textarea>
      <h4>Amount of Questions?</h4>
      <input class="questionAmount" v-model="questionAmount" type="number"/>
      <div class="questions">
        <h4>Question Type</h4>
        <select v-model="questionModal">
          <option v-on:select="questionModal='boolean'" value="boolean">Yes/No</option>
          <option v-on:select="questionModal='fiveChoice'" value="fiveChoice">FiveChoice</option>
          <option v-on:select="questionModal='tenChoice'" value="tenChoice">TenChoice</option>
          <option v-on:select="questionModal='strings'" value="strings">Strings</option>
          <option v-on:select="questionModal='textBox'" value="textBox">TextBox</option>
        </select>
        <div v-if="questionModal==='boolean'" class="boolean">
          <h4>Question</h4>
          <input />
        </div>
        <div v-else-if="questionModal==='fiveChoice'" class="fiveChoice">
          <h4>Question</h4>
          <input />
          <h4>Answer</h4>
          <input />
        </div>
        <div v-else-if="questionModal==='tenChoice'" class="tenChoice">
          <h4>Question</h4>
          <input />
          <h4>Answer</h4>
          <input />
        </div>
        <div v-else-if="questionModal==='strings'" class="strings">
          <h4>Question</h4>
          <input />
        </div>
        <div v-else-if="questionModal==='textBox'" class="textBox">
          <h4>Question</h4>
          <input />
        </div>
      </div>
      <div class="addQuestion" v-on:click="pushQuestions()">Add Question</div>
      <div class="clearQuestions" v-on:click="clearQuestions()">Clear Questions</div>
      <h4>Confirmation Popup</h4>
      <input class="confirmationPopup" />
      <div class="surveyPreview">
        <h4>Preview</h4>
        {{this.questions[]}}
      </div>
      <button class="surveyBack" v-on:click="modal=''">Back</button>
    </div>
    <div class="success" v-else-if="modal==='success'">
      <h2>Success</h2>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="wait" v-else-if="modal==='wait'">
      <h2>Wait</h2>
    </div>
    <div class="error" v-else-if="modal==='error'">
      <h2>Error please try again later</h2>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="menu" v-else>
      <button class="createTemplateRoute" v-on:click="modal='template'">Create Template</button>
      <button class="createSurveyRoute" v-on:click="modal='survey'">Create Survey</button>
      <button class="newCampaign" v-on:click="modal='campaign'; populateTemplates()">New Campaign</button>
      <button class="viewCampaign" v-on:click="modal='campaignView'; populateCampaigns()">View Active Campaigns</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'marketing',
  props: ['user'],
  data () {
    return {
      modal: '',
      variable: '',
      link: '',
      shortLink: '',
      templates: [],
      campaigns: [],
      activeCampaign: {
        target: 'all',
        id: '',
        templateId: '',
        name: '',
        logs: []
      },
      activeTemplate: {
        id: '',
        name: '',
        html: '',
        text: '',
        sender: '',
        subject: ''
      },
      questions: [],
      questionAmount: 0,
      questionModal: '',
      surveyTemplate: {
        greeting: '',
        questionData: [],
        confirmation: ''
      }
    }
  },
  created () {
    let vue = this
    vue.populateTemplates()
    vue.populateCampaigns()
  },
  methods: {
    populateTemplates () {
      let vue = this
      vue.templates = []
      axios.get('https://api.mystic-crm.com/templates/' + vue.user.companyId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.templates = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    populateCampaigns () {
      let vue = this
      vue.templates = []
      axios.get('https://api.mystic-crm.com/campaigns/' + vue.user.companyId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.campaigns = []
          let i = 0
          for (i = 0; i < response.data.length; i++) {
            if (response.data[i].active === true) {
              vue.campaigns.push(response.data[i])
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    clearActiveTemplate () {
      let vue = this
      vue.activeTemplate.sender = ''
      vue.activeTemplate.subject = ''
      vue.activeTemplate.text = ''
      vue.activeTemplate.html = ''
      vue.activeTemplate.name = ''
    },
    clearActiveCampaign () {
      let vue = this
      vue.activeCampaign.target = 'all'
      vue.activeCampaign.name = ''
      vue.activeCampaign.id = ''
      vue.activeCampaign.logs = []
    },
    campaignCreateView (template) {
      let vue = this
      vue.activeTemplate.id = template._id
      vue.activeTemplate.sender = template.sender
      vue.activeTemplate.subject = template.subject
      vue.activeTemplate.text = template.text
      vue.activeTemplate.html = template.html
      vue.activeTemplate.name = template.name
      vue.clearActiveCampaign()
      vue.modal = 'createCampaign'
    },
    campaignView (campaign) {
      let vue = this
      vue.clearActiveCampaign()
      vue.activeCampaign.target = campaign.target
      vue.activeCampaign.name = campaign.name
      vue.activeCampaign.id = campaign._id
      vue.activeCampaign.templateId = campaign.templateId
      vue.activeCampaign.logs = campaign.log
      axios.get('https://api.mystic-crm.com/templates/id/' + vue.activeCampaign.templateId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.activeTemplate.id = response.data[0]._id
          vue.activeTemplate.sender = response.data[0].sender
          vue.activeTemplate.subject = response.data[0].subject
          vue.activeTemplate.text = response.data[0].text
          vue.activeTemplate.html = response.data[0].html
          vue.activeTemplate.name = response.data[0].name
          vue.modal = 'activeCampaignView'
        })
        .catch(err => {
          console.log(err)
          vue.modal = 'error'
        })
    },
    createTemplate () {
      let vue = this
      axios.post('https://api.mystic-crm.com/templates', {
        company: vue.user.companyId,
        sender: vue.activeTemplate.sender,
        subject: vue.activeTemplate.subject,
        text: vue.activeTemplate.text,
        html: vue.activeTemplate.html,
        name: vue.activeTemplate.name
      })
        .then(function () {
          vue.populateTemplates()
          vue.clearActiveTemplate()
          vue.modal = 'success'
        })
        .catch(function (error) {
          console.log(error)
          vue.modal = 'error'
        })
    },
    launchCampaign () {
      let vue = this
      vue.modal = 'wait'
      axios.post('https://api.mystic-crm.com/campaigns', {
        name: vue.activeCampaign.name,
        company: vue.user.companyId,
        templateId: vue.activeTemplate.id,
        target: vue.activeCampaign.target,
        active: true,
        startDate: new Date()
      })
        .then(function (result) {
          vue.activeCampaign.id = result.data._id
          axios.post('https://api.mystic-crm.com/templates/send/' + vue.activeTemplate.id, {
            target: vue.activeCampaign.target,
            campaignId: result.data._id
          })
            .then(function (result) {
              vue.clearActiveCampaign()
              vue.populateCampaigns()
              vue.modal = 'success'
            })
            .catch(function (error) {
              console.log(error)
              vue.modal = 'error'
            })
        })
        .catch(function (error) {
          console.log(error)
          vue.modal = 'error'
        })
    },
    pushAnalytics () {
      let vue = this
      axios.put('https://api.mystic-crm.com/campaigns/' + vue.activeCampaign.id, {
        active: false
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (user) {
          vue.modal = 'success'
        })
        .catch(function (error) {
          console.log(error)
          vue.modal = 'error'
        })
    },
    shortenLink () {
      let vue = this
      axios.post('https://api.mystic-crm.com/links', {
        company: vue.user.companyId,
        url: vue.link
      })
        .then(result => {
          vue.shortLink = 'https://www.mystic-crm.com/short/' + result.data._id + '/${leadArray[i]._id' + '}/${' + 'req.body.campaignId}'
        })
        .catch(err => {
          console.log(err)
        })
    },
    pushQuestions () {
      let vue = this
      vue.questions.push('')
    },
    clearQuestions () {
      let vue = this
      vue.questions = []
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
  height: 90%;
  position: fixed;
  overflow-y: scroll;
  margin-bottom: 100px;
}

h1, h2, h3, h4 {
  padding: 0;
  margin: 0;
}

h1 {
  color: black;
  font-size: 4em;
  text-align: left;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 5%;
}

h3 {
  margin-left: 5%;
  color: #777;
}

p {
  text-align: left;
  color: #777;
  width: 90%;
  margin-left: 5%;
}

input {
  margin-left: 5%;
  border: 1px solid black;
  width: 90%;
  margin-bottom: 2%;
  height: 30px;
}

select {
  text-align: left;
  width: 90%;
  border: 1px solid black;
  grid-column-start: 1;
  grid-column-end: 5;
  margin-left: 5%;
}

button {
  border: none;
  background: white;
  font-size: 2em;
  color: @blue;
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  text-align: left;
  grid-row: 13;
}

.createTemplate {
  grid-column-start: 1;
  grid-column-end: 3;
  background: none;
  color: @blue;
  font-size: 1.5em;
  text-align: center;
}

.createSurveyRoute {
}

.createSurveyView {
}

.templateBack {
  grid-column-start: 3;
  grid-column-end: 5;
  background: none;
  color: @blue;
  text-align: center;
  font-size: 1.5em;
}

.templateView {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 40px;
  margin-bottom: 50px;
}

.templateName, .templateSender, .templateSubject, h3, textarea{
  grid-column-start: 1;
  grid-column-end: 5;
}

textarea {
  width: 90%;
  margin-left: 5%;
  height: 10em;
  font-size: 1.2em;
  border: 1px;
  border-color: #000;
  border-style: solid;
}
</style>
