<template>
  <div class="main">
    <div class="options">
      <button class="list" v-on:click="upcomingShow = true">Upcoming </button>
      <button v-on:click="appointmentShow = true;modal='new'" class="newAppointment">Schedule New</button>
      <button class="jumpToMonth" v-on:click="jumpTo">Current Month</button>
    </div>
    <div class="calendar">
      <div class="month">
        <div class="monthName">{{ this.month.month }}</div>
        <div class="prev" v-on:click="previous">&#10094;</div>
        <div class="next" v-on:click="next">&#10095;</div>
        <div class="year">{{ this.year }}</div>
      </div>
      <div class="weekdays" v-on:click="weekviewShow = true">
        <div class="sunday">Su</div>
        <div class="monday">Mo</div>
        <div class="tuesday">Tu</div>
        <div class="wednesday">We</div>
        <div class="thursday">Th</div>
        <div class="friday">Fr</div>
        <div class="saturday">Sa</div>
      </div>
      <ul class="days">
        <li v-on:click="dayNum = sunday.day, dayClicked = true" v-bind:key="sunday.day" v-bind:class="{'highlighted': sunday.day===currentDay && sunday.month===currentMonth && sunday.year===currentYear, 'sundayCol': true, 'rowOne': sunday.row === 1, 'rowTwo': sunday.row === 2, 'rowThree': sunday.row === 3, 'rowFour': sunday.row === 4, 'rowFive': sunday.row === 5, 'rowSix': sunday.row === 6}" v-for="sunday in sundays">{{sunday.day}}</li>
        <li v-on:click="dayNum = monday.day, dayClicked = true" v-bind:key="monday.day" v-bind:class="{'highlighted': monday.day===currentDay && monday.month===currentMonth && monday.year===currentYear, 'mondayCol': true, 'rowOne': monday.row === 1, 'rowTwo': monday.row === 2, 'rowThree': monday.row === 3, 'rowFour': monday.row === 4, 'rowFive': monday.row === 5, 'rowSix': monday.row === 6}" v-for="monday in mondays">{{monday.day}}</li>
        <li v-on:click="dayNum = tuesday.day, dayClicked = true" v-bind:key="tuesday.day" v-bind:class="{'highlighted': tuesday.day===currentDay && tuesday.month===currentMonth && tuesday.year===currentYear,'tuesdayCol': true, 'rowOne': tuesday.row === 1, 'rowTwo': tuesday.row === 2, 'rowThree': tuesday.row === 3, 'rowFour': tuesday.row === 4, 'rowFive': tuesday.row === 5, 'rowSix': tuesday.row === 6}" v-for="tuesday in tuesdays">{{tuesday.day}}</li>
        <li v-on:click="dayNum = wednesday.day, dayClicked = true" v-bind:key="wednesday.day" v-bind:class="{'highlighted': wednesday.day===currentDay && wednesday.month===currentMonth && wednesday.year===currentYear, 'wednesdayCol': true, 'rowOne': wednesday.row === 1, 'rowTwo': wednesday.row === 2, 'rowThree': wednesday.row === 3, 'rowFour': wednesday.row === 4, 'rowFive': wednesday.row === 5, 'rowSix': wednesday.row === 6}" v-for="wednesday in wednesdays">{{wednesday.day}}</li>
        <li v-on:click="dayNum = thursday.day, dayClicked = true" v-bind:key="thursday.day" v-bind:class="{'highlighted': thursday.day===currentDay && thursday.month===currentMonth && thursday.year===currentYear,'thursdayCol': true, 'rowOne': thursday.row === 1, 'rowTwo': thursday.row === 2, 'rowThree': thursday.row === 3, 'rowFour': thursday.row === 4, 'rowFive': thursday.row === 5, 'rowSix': thursday.row === 6}" v-for="thursday in thursdays">{{thursday.day}}</li>
        <li v-on:click="dayNum = friday.day, dayClicked = true" v-bind:key="friday.day" v-bind:class="{'highlighted': friday.day===currentDay && friday.month===currentMonth && friday.year===currentYear,'fridayCol': true, 'rowOne': friday.row === 1, 'rowTwo': friday.row === 2, 'rowThree': friday.row === 3, 'rowFour': friday.row === 4, 'rowFive': friday.row === 5, 'rowSix': friday.row === 6}" v-for="friday in fridays">{{friday.day}}</li>
        <li v-on:click="dayNum = saturday.day, dayClicked = true" v-bind:key="saturday.day" v-bind:class="{'highlighted': saturday.day===currentDay && saturday.month===currentMonth && saturday.year===currentYear,'saturdayCol': true, 'rowOne': saturday.row === 1, 'rowTwo': saturday.row === 2, 'rowThree': saturday.row === 3, 'rowFour': saturday.row === 4, 'rowFive': saturday.row === 5, 'rowSix': saturday.row === 6}" v-for="saturday in saturdays">{{saturday.day}}</li>
      </ul>
      <day class="day" v-if="dayClicked" v-on:backDay="backDay" v-on:nextDay="nextDay" v-on:jump="jump" v-on:weekView="weekView" v-on:calendar="calendar" v-on:appointmentClick="appointmentClick" :user="user" :monthDay="this.months[this.monthNum].month" :dayNum="this.dayNum" :yearNum="this.year" :appointmentsProp="this.appointments"></day>
      <appointmentSet class="appointmentSet" v-if="appointmentShow" :modal="modal" v-on:modalEdit="modalEdit" :user="user" v-on:backAppointment="hideAppointment" :appointmentProp="activeAppointment" v-on:backToDay="backToDay" :appointment="appointment"></appointmentSet>
      <upcoming class="upcoming" v-if="upcomingShow" v-on:upcoming="upcoming" :user="user" :appointmentsProp="this.appointments" v-on:appointmentItemDisplay="appointmentItemDisplay"></upcoming>
    </div>
  </div>
</template>

<script>
import Day from './elements/Days'
import AppointmentSet from './elements/AppointmentSet'
import Weekview from './elements/Weekview'
import Upcoming from './elements/Upcoming'
import axios from 'axios'
export default {
  name: 'calendar',
  props: ['user', 'logged'],
  components: {
    'day': Day,
    'appointmentSet': AppointmentSet,
    'weekview': Weekview,
    'upcoming': Upcoming
  },
  created () {
    let time = new Date()
    let vue = this
    if (vue.logged === false) {
      vue.$router.push('/login')
    }
    vue.year = time.getFullYear()
    vue.monthNum = time.getMonth()
    vue.currentYear = time.getFullYear()
    vue.currentMonth = time.getMonth()
    vue.currentDay = time.getDate()
    vue.monthCompute()
    vue.dayClear()
    vue.dayPopulate()
    vue.populateAppointments()
  },
  data () {
    return {
      months: [
        { monthNum: 0, month: 'January', days: 31, startingDay: 'monday' },
        { monthNum: 1, month: 'February', days: 28, startingDay: 'thursday' }, // 29
        { monthNum: 2, month: 'March', days: 31, startingDay: 'thursday' },
        { monthNum: 3, month: 'April', days: 30, startingDay: 'sunday' },
        { monthNum: 4, month: 'May', days: 31, startingDay: 'tuesday' },
        { monthNum: 5, month: 'June', days: 30, startingDay: 'friday' },
        { monthNum: 6, month: 'July', days: 31, startingDay: 'sunday' },
        { monthNum: 7, month: 'August', days: 31, startingDay: 'wednesday' },
        { monthNum: 8, month: 'September', days: 30, startingDay: 'saturday' },
        { monthNum: 9, month: 'October', days: 31, startingDay: 'monday' },
        { monthNum: 10, month: 'November', days: 30, startingDay: 'thursday' },
        { monthNum: 11, month: 'December', days: 31, startingDay: 'saturday' }],
      appointments: [],
      year: 0,
      month: '',
      monthNum: 0,
      dayNum: 0,
      currentMonth: '',
      currentDay: '',
      currentYear: '',
      mondays: [],
      tuesdays: [],
      wednesdays: [],
      thursdays: [],
      fridays: [],
      saturdays: [],
      sundays: [],
      dayClicked: false,
      appointmentShow: false,
      weekviewShow: false,
      upcomingShow: false,
      modal: '',
      appointment: '',
      activeAppointment: {
        title: '',
        type: '',
        date: {
          month: '',
          day: '',
          year: '',
          dayString: ''
        },
        time: {
          timeStart: '',
          timeEnd: ''
        },
        description: '',
        upcoming: false
      },
      currentView: {
        year: 0,
        month: 0,
        monthString: '',
        day: 0
      }
    }
  },
  methods: {
    dayPopulate () {
      let vue = this
      let i = 0
      let rowNum = 1
      let dayString = vue.months[vue.monthNum].startingDay
      for (i = 0; i < vue.months[vue.monthNum].days; i++) {
        let dayNum = i + 1
        if (dayString === 'sunday') {
          vue.sundays.push({ day: dayNum, row: rowNum, month: vue.monthNum, year: vue.year, dayString: 'monday' })
          dayString = 'monday'
        } else if (dayString === 'monday') {
          vue.mondays.push({ day: dayNum, row: rowNum, month: vue.monthNum, year: vue.year, dayString: 'tuesday' })
          dayString = 'tuesday'
        } else if (dayString === 'tuesday') {
          vue.tuesdays.push({ day: dayNum, row: rowNum, month: vue.monthNum, year: vue.year, dayString: 'wednesday' })
          dayString = 'wednesday'
        } else if (dayString === 'wednesday') {
          vue.wednesdays.push({ day: dayNum, row: rowNum, month: vue.monthNum, year: vue.year, dayString: 'thursday' })
          dayString = 'thursday'
        } else if (dayString === 'thursday') {
          vue.thursdays.push({ day: dayNum, row: rowNum, month: vue.monthNum, year: vue.year, dayString: 'friday' })
          dayString = 'friday'
        } else if (dayString === 'friday') {
          vue.fridays.push({ day: dayNum, row: rowNum, month: vue.monthNum, year: vue.year, dayString: 'saturday' })
          dayString = 'saturday'
        } else if (dayString === 'saturday') {
          vue.saturdays.push({ day: dayNum, row: rowNum, month: vue.monthNum, year: vue.year, dayString: 'sunday' })
          dayString = 'sunday'
          rowNum++
        }
      }
    },
    dayClear () {
      let vue = this
      vue.mondays = []
      vue.tuesdays = []
      vue.wednesdays = []
      vue.thursdays = []
      vue.fridays = []
      vue.saturdays = []
      vue.sundays = []
    },
    jump () {
      let vue = this
      vue.monthNum = vue.currentMonth
      vue.dayNum = vue.currentDay
      vue.yearNum = vue.currentYear
    },
    monthCompute () {
      let vue = this
      if (vue.monthNum === vue.months[0].monthNum) {
        vue.month = vue.months[0]
      } else if (vue.monthNum === vue.months[1].monthNum) {
        vue.month = vue.months[1]
      } else if (vue.monthNum === vue.months[2].monthNum) {
        vue.month = vue.months[2]
      } else if (vue.monthNum === vue.months[3].monthNum) {
        vue.month = vue.months[3]
      } else if (vue.monthNum === vue.months[4].monthNum) {
        vue.month = vue.months[4]
      } else if (vue.monthNum === vue.months[5].monthNum) {
        vue.month = vue.months[5]
      } else if (vue.monthNum === vue.months[6].monthNum) {
        vue.month = vue.months[6]
      } else if (vue.monthNum === vue.months[7].monthNum) {
        vue.month = vue.months[7]
      } else if (vue.monthNum === vue.months[8].monthNum) {
        vue.month = vue.months[8]
      } else if (vue.monthNum === vue.months[9].monthNum) {
        vue.month = vue.months[9]
      } else if (vue.monthNum === vue.months[10].monthNum) {
        vue.month = vue.months[10]
      } else if (vue.monthNum === vue.months[11].monthNum) {
        vue.month = vue.months[11]
      }
    },
    previous () {
      let vue = this
      if (vue.monthNum > 0) {
        vue.monthNum--
      } else if (vue.monthNum === 0) {
        vue.monthNum = 11
        let x = vue.year - 2000
        if (x % 4 === 0) {
          vue.months[1].days = 29
          vue.drift(true, false)
        } else {
          vue.months[1].days = 28
          vue.drift(false, false)
        }
        vue.year--
      }
      vue.monthCompute()
      vue.dayClear()
      vue.dayPopulate()
    },
    next () {
      let vue = this
      if (vue.monthNum < 11) {
        vue.monthNum++
      } else if (vue.monthNum === 11) {
        vue.monthNum = 0
        vue.year++
        let x = vue.year - 2000
        if (x % 4 === 0) {
          vue.months[1].days = 29
          vue.drift(true, true)
        } else {
          vue.months[1].days = 28
          vue.drift(false, true)
        }
      }
      vue.monthCompute()
      vue.dayClear()
      vue.dayPopulate()
    },
    drift (x, y) {
      let vue = this
      let i = 0
      for (i = 0; i < 12; i++) {
        if (vue.months[i].startingDay === 'monday') {
          if (y === true) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'tuesday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'wednesday'
            }
          } else if (y === false) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'sunday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'saturday'
            }
          }
        } else if (vue.months[i].startingDay === 'tuesday') {
          if (y === true) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'wednesday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'thursday'
            }
          } else if (y === false) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'monday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'sunday'
            }
          }
        } else if (vue.months[i].startingDay === 'wednesday') {
          if (y === true) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'thursday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'friday'
            }
          } else if (y === false) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'tuesday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'monday'
            }
          }
        } else if (vue.months[i].startingDay === 'thursday') {
          if (y === true) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'friday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'saturday'
            }
          } else if (y === false) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'wednesday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'tuesday'
            }
          }
        } else if (vue.months[i].startingDay === 'friday') {
          if (y === true) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'saturday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'sunday'
            }
          } else if (y === false) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'thursday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'wednesday'
            }
          }
        } else if (vue.months[i].startingDay === 'saturday') {
          if (y === true) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'sunday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'monday'
            }
          } else if (y === false) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'friday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'thursday'
            }
          }
        } else if (vue.months[i].startingDay === 'sunday') {
          if (y === true) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'monday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'tuesday'
            }
          } else if (y === false) {
            if (x === false || i < 2) {
              vue.months[i].startingDay = 'saturday'
            } else if (x === true && i > 1) {
              vue.months[i].startingDay = 'friday'
            }
          }
        }
      }
    },
    jumpTo () {
      let vue = this
      this.monthNum = this.currentMonth
      this.year = this.currentYear
      vue.monthCompute()
      vue.dayClear()
      vue.dayPopulate()
    },
    backDay () {
      let vue = this
      if (this.dayNum === 1) {
        console.log('reset')
        vue.previous()
        this.dayNum = this.months[this.monthNum].days
      } else {
        this.dayNum--
        console.log('back' + vue.dayNum)
      }
    },
    nextDay () {
      let vue = this
      if (this.dayNum === this.months[this.monthNum].days) {
        console.log('reset')
        this.dayNum = 1
        vue.next()
      } else {
        this.dayNum++
        console.log('next' + vue.dayNum)
      }
    },
    populateAppointments () {
      let vue = this
      axios.get('https://api.mystic-crm.com/appointments/' + vue.user.companyId, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.appointments = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    calendar () {
      this.dayClicked = false
    },
    hideAppointment () {
      this.appointmentShow = false
      this.appointmentsClear()
      this.populateAppointments()
    },
    weekview () {
      this.weekviewShow = false
    },
    upcoming () {
      this.upcomingShow = false
    },
    weekView (object) {
      this.currentView.year = object.year
      this.currentView.month = object.month
      this.currentView.monthString = object.monthString
      this.currentView.day = object.day
      this.dayClicked = false
      this.weekviewShow = true
    },
    modalEdit (arg) {
      this.modal = arg
    },
    backAppointment () {
      this.modal = ''
    },
    dayChange () {
      this.weekviewShow = false
      this.dayClicked = true
    },
    appointmentClick (appointment) {
      this.activeAppointment = appointment
      this.dayClicked = false
      this.appointmentShow = true
      this.modal = 'view'
    },
    appointmentItemDisplay (appointment) {
      this.activeAppointment = appointment
      this.upcomingShow = false
      this.appointmentShow = true
      this.upcoming = true
      this.modal = 'view'
    },
    backToDay () {
      if (this.upcoming === false) {
        this.appointmentShow = false
        this.dayClicked = true
      } else {
        this.appointmentShow = false
      }
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
  position: absolute;
  display: grid;
  grid-template-rows: repeat(8, 55px);
  overflow-y: scroll;
  margin-bottom: 70px;
  scroll-behavior: smooth;
}
.options {
  padding-top: 10px;
  width: 100%;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 60px;
  position: fixed;
  background-color: white;
}

h2 {
  font-size: 1em;
  color: #fff;
  margin-left: 5%;
}

button {
  border: none;
  font-size: 1.2em;
}

button:active {
  color: #C22227;
}
p {
  grid-row: 11;
  text-align: center;
  color: #777;
  grid-column-start: 1;
  grid-column-end: 8;
}

.view {
  grid-column: 5;
  background: #fff;
}

.appointmentSet {
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  height: 100%;
}

.calendar {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  grid-template-rows: 60px repeat(9, 70px);
  grid-template-columns: 1fr;
}

.month {
    height: 80px;
    width: 100%;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
}

.monthName {
  font-weight: bold;
  font-size: 3em;
  color: black;
  line-height: 100px;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
}

/* Month list */
.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  color: black;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.year {
  color: black;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row: 2;
  text-align: center;
  font-size: 2em;
}

/* Previous button inside month header */
.month .prev {
    color: @blue;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    font-size: 2em;
}

/* Next button */
.month .next {
    color: @blue;
    grid-column-start: 5;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
    font-size: 2em;
}

.list {
  background: none;
  grid-row: 1;
  grid-column: 2;
  color: @blue;
}

.newAppointment {
  background: none;
  grid-row: 1;
  grid-column: 1;
  color: @blue;
}

.jumpToMonth {
  background: none;
  grid-row: 1;
  grid-column: 3;
  color: @blue;
}
/* Weekdays (Mon-Sun) */
.weekdays {
  margin: 0;
  padding: 10px 0;
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

.weekdays li {
  color: @blue;
}

/* Days (1-31) */
.days {
  border: 1px solid grey;
  padding: 0;
  background: #eee;
  margin: 0;
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 4;
  grid-row-end: 9;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.title {
  display: none;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5em;
}

.sunday {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 3;
  text-align: center;
  color: black;
  font-size: 1.3em;
}

.monday {
  grid-column-start: 2;
  grid-row-start: 3;
  grid-row-end: 3;
  text-align: center;
  color: black;
  font-size: 1.3em;
}

.tuesday {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
  text-align: center;
  color: black;
  font-size: 1.3em;
}

.wednesday {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
  text-align: center;
  color: black;
  font-size: 1.3em;
}

.thursday {
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 3;
  text-align: center;
  color: black;
  font-size: 1.3em;
}

.friday {
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 3;
  text-align: center;
  color: black;
  font-size: 1.3em;
}

.saturday {
  grid-column-start: 7;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 3;
  text-align: center;
  color: black;
  font-size: 1.3em;
}

.sundayCol {
  grid-column: 1;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 1px solid grey;
}

.mondayCol {
  grid-column: 2;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 1px solid grey;
}

.tuesdayCol {
  grid-column: 3;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 1px solid grey;
}

.wednesdayCol {
  grid-column: 4;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 1px solid grey;
}

.thursdayCol {
  grid-column: 5;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 1px solid grey;
}

.fridayCol {
  grid-column: 6;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 1px solid grey;
}

.saturdayCol {
  grid-column: 7;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 1px solid grey;
}

.rowOne {
  grid-row: 1;
}

.rowTwo {
  grid-row: 2;
}

.rowThree {
  grid-row: 3;
}

.rowFour {
  grid-row: 4;
}

.rowFive {
  grid-row: 5;
}

.rowSix {
  grid-row: 6;
  border: 1px solid grey;
}

.highlighted {
  background: linear-gradient(#d8d8d8, #9b9b9b);
}

.days li {
    list-style-type: none;
    text-align: center;
    color:#777;
}
/* Highlight the "current" day */
.days li .active {
    padding: 5px;
    background: #f4c20d;
    color: white !important
}

.colorCode {
  grid-column-start: ;
  grid-column-end: ;
  grid-row-start: ;
  grid-row-end: ;
  border-top: 5px;
  border-left: 5px;
  border-right: 5px;
  border-bottom: 5px;
}

.hidden {
  display: none;
}

.day {
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  height: 100%;
}

.weekView {
  margin-top: 0px;
}

.monthview {
  color: #fff;
  font-size: 1em;
}

.appts {
  color: #fff;
  font-size: 1em;
}

</style>
