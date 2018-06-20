<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'short',
  props: ['linkId', 'leadId', 'campaignId', 'user'],
  created () {
    let vue = this
    axios.get('https://api.mystic-crm.com/links/' + vue.linkId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
      .then(response => {
        vue.companyId = response.data[0].company
        vue.url = response.data[0].url
        axios.post('https://api.mystic-crm.com/campaigns/link/' + vue.campaignId, {
          lead: vue.leadId,
          link: vue.linkId
        }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
          .then(response => {
            window.location.replace(vue.url)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  },
  data: function () {
    return {
      companyId: '',
      url: ''
    }
  }
}
</script>

<style scoped lang="less">
</style>
