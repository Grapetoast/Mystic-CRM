<template>
  <div class="main">
    <span v-if="modal==='success'">Success</span>
    <span v-else-if="modal==='error'">Error</span>
    <span v-else>Wait one moment please</span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'unsubscribe',
  props: ['leadId', 'campaignId', 'user'],
  created () {
    let vue = this
    axios.post('https://api.mystic-crm.com/campaigns/unsubscribe', {
      lead: vue.leadId,
      campaign: vue.campaignId
    }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
      .then(response => {
        console.log(response)
        vue.modal = 'success'
      })
      .catch(err => {
        console.log(err)
        vue.modal = 'error'
      })
  },
  data: function () {
    return {
      modal: ''
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    margin-top: 200px;
    text-align: center;
    font-size: 2em;
  }
</style>
