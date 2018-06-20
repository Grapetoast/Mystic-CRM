<template>
  <div class="main">
    <leads class="leads" v-if="modal==='leads'" :user="user" v-on:back="modal=''"></leads>
    <employees class="employees" v-else-if="modal==='employees'" :user="user" v-on:back="modal=''"></employees>
    <marketing class="marketing" v-else-if="modal==='marketing'" :user="user" v-on:back="modal=''"></marketing>
    <calendar class="calendar" v-else-if="modal==='calendar'" :user="user" v-on:back="modal=''"></calendar>
    <analytics class="analytics" v-else-if="modal==='analytics'" :user="user" v-on:back="modal=''"></analytics>
    <div class="defaultView" v-else>
      <h1>Dashboard</h1>
      <div class="calendarBlock blocks" v-on:click="modal='calendar'">
        <button class="calendarButton">Calendar</button>
        <div class="calIcon"></div>
      </div>
      <div class="employeesBlock blocks" v-on:click="modal='employees'">
        <button class="employeesButton">Employees</button>
        <div class="empIcon"></div>
      </div>
      <div class="leadsBlock blocks" v-on:click="modal='leads'">
        <button class="leadsButton">Leads</button>
        <div class="leadIcon"></div>
      </div>
      <div class="projectsBlock blocks" v-on:click="modal='marketing'">
        <button class="projectsButton">Marketing</button>
        <div class="projIcon"></div>
      </div>
      <div class="analyticsBlock blocks" v-on:click="modal='analytics'">
        <button class="analyticsButton">Analytics</button>
        <div class="anaIcon"></div>
      </div>
    </div>
  </div>
</template>

<script>
import leads from 'pages/Leads'
import employees from './elements/Employees'
import marketing from 'pages/Marketing'
import calendar from 'pages/Calendar'
import analytics from 'pages/Analytics'

export default {
  name: 'home',
  props: ['user', 'logged'],
  components: {
    'leads': leads,
    'employees': employees,
    'marketing': marketing,
    'calendar': calendar,
    'analytics': analytics
  },
  created () {
    let vue = this
    if (vue.logged !== true) {
      vue.$router.push('/login')
    }
  },
  data () {
    return {
      modal: ''
    }
  }
}
</script>

<style scoped lang="less">
@blue: #00a1ff;
@grey: #323d38;
@font: 'Roboto', sans-serif;
@titlefont: 'Timmana', sans-serif;

  .main {
    width: 100%;
    height: 800px;
    position: relative;
  }

  .defaultView {
    width: 100%;
    height: 800px;
    margin-top: 90px;
    display: grid;
    grid-template-columns: 1fr repeat(4, 65px) 1fr;
    grid-template-rows: 90px repeat(3, 135px);
    grid-gap: 5px;
  }

  h1 {
    font-family: @titlefont;
    color: @blue;
    margin: 0;
    text-align: center;
    line-height: 100px;
    font-size: 2.5em;
    grid-row: 1;
    grid-column-start: 2;
    grid-column-end: 6;
  }

  button {
    background: transparent;
    border: none;
    padding-top: 18px;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 1.2em;
    font-family: @font;
    z-index: 1;
  }

  .blocks {
    background-color: @blue;
    border-radius: 100px;
    display: grid;
    grid-template-rows: 30px 1fr;
    grid-template-columns: 1fr;
    z-index: 1;
  }

  .calIcon, .empIcon, .leadIcon, .projIcon, .anaIcon {
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    margin-left: 14px;
  }

  .calendarBlock {
    grid-row: 2;
    grid-column-start: 2;
    grid-column-end: 4;
  }

  .calIcon {
    background-image: url("../assets/mystic_Calendar.svg");
  }

  .employeesBlock {
    grid-row: 2;
    grid-column-start: 4;
    grid-column-end: 6;
  }

  .empIcon {
    background-image: url("../assets/mystic_Employees.svg");
  }

  .leadsBlock {
    grid-row: 3;
    grid-column-start: 2;
    grid-column-end: 4;
  }

  .leadIcon {
    background-image: url("../assets/mystic_Leads.svg");
  }

  .projectsBlock {
    grid-row: 3;
    grid-column-start: 4;
    grid-column-end: 6;
  }

  .projIcon {
    background-image: url("../assets/mystic_Projects.svg");
  }

  .analyticsBlock {
    grid-row: 4;
    grid-column-start: 3;
    grid-column-end: 5;
  }

  .anaIcon {
    background-image: url("../assets/mystic_Analytics.svg");
  }

</style>
