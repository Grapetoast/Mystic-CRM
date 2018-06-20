<template>
  <div class="main">
    <div class="navbar">
        <div class="calIcon" v-on:click="$router.push('/')" v-if="logged"></div>
        <button class="Calendar" v-on:click="$router.push('/')" v-if="logged">Calendar</button>
        <div class="leadIcon" v-on:click="$router.push('/Leads')" v-if="logged"></div>
        <button class="Leads" v-on:click="$router.push('/Leads')" v-if="logged">Leads</button>
        <div class="markIcon" v-on:click="$router.push('/Marketing')" v-if="logged"></div>
        <button class="Marketing" v-on:click="$router.push('/Marketing')" v-if="logged">Marketing</button>
        <div class="anaIcon" v-on:click="$router.push('/Analytics')" v-if="logged"></div>
        <button class="Analytics" v-on:click="$router.push('/Analytics')" v-if="logged">Analytics</button>
        <div class="accIcon" v-on:click="$router.push('/Account')" v-if="logged"></div>
        <button class="Account" v-on:click="$router.push('/Account')" v-if="logged">Account</button>
        <button class="Login" v-on:click="$router.push('/Login')" v-if="!logged">Login</button>
        <button class="Reg" v-on:click="$router.push('/Register')" v-if="!logged">Register</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['logged', 'user', 'monthDay', 'dayNum', 'yearNum'],
  data () {
    return {
      time: '',
      currentMonth: '',
      currentDay: '',
      currentYear: ''
    }
  },
  created () {
    let time = new Date()
    let vue = this
    vue.currentYear = time.getFullYear()
    vue.currentMonth = time.getMonth()
    vue.currentDay = time.getDate()
    vue.dayNumber = vue.dayNum
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

  button {
    border: none;
    background: none;
    color: #fff;
    font-size: .8em;
  }
  h1 {
    color: black;
    z-index: 5;
    font-size: 1em;
    grid-column: 1;
  }

  .main {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    z-index: 4;
  }
  .navbar {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 50px 20px;
    background-color: white;
    box-shadow: 0px -3px 7px -4px black;
  }
  .Calendar {
    grid-row: 2;
    grid-column: 1;
    color: black;
  }
  .Leads {
    grid-row: 2;
    grid-column: 2;
    color: black;
  }
  .Marketing {
    grid-row: 2;
    grid-column: 3;
    color: black;
  }
  .Analytics {
    grid-row: 2;
    grid-column: 4;
    color: black;
  }
  .Account {
    grid-row: 2;
    grid-column: 5;
    color: black;
  }
  .calIcon {
    background-image: url("../../assets/mystic_Calendar2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: grey;
    padding-left: 32px;
    padding-top: 20px;
  }
  .leadIcon {
    background-image: url("../../assets/mystic_Leads2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .markIcon {
    background-image: url("../../assets/mystic_Projects2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .anaIcon {
    background-image: url("../../assets/mystic_Analytics2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .accIcon {
    background-image: url("../../assets/mystic_Account2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
