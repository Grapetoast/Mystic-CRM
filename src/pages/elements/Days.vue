<template>
  <div class="mainDays">
    <div class="calendarButton">
      <div v-on:click="back" class="back">Month View</div>
      <div class="jump" v-on:click="jump">Current Day</div>
      <div class="monthNum">{{ this.monthDay }} {{ this.dayNum }}, {{ this.yearNum }}</div>
      <div class="prev" v-on:click="backDay"><div class="backIcon">&#10094;Previous Day</div></div>
      <div class="next" v-on:click="nextDay"><div class="nextIcon">Next Day&#10095;</div></div>
    </div>
    <div class="dayView">
      <div class="twelveAm">12:00am<hr/></div>
      <div class="oneAm">1:00am<hr/></div>
      <div class="twoAm">2:00am<hr/></div>
      <div class="threeAm">3:00am<hr/></div>
      <div class="fourAm">4:00am<hr/></div>
      <div class="fiveAm">5:00am<hr/></div>
      <div class="sixAm">6:00am<hr/></div>
      <div class="sevenAm">7:00am<hr/></div>
      <div class="eightAm">8:00am<hr/></div>
      <div class="nineAm">9:00am<hr/></div>
      <div class="tenAm">10:00am<hr/></div>
      <div class="elevenAm">11:00am<hr/></div>
      <div class="twelvePm">12:00pm<hr/></div>
      <div class="onePm">1:00pm<hr/></div>
      <div class="twoPm">2:00pm<hr/></div>
      <div class="threePm">3:00pm<hr/></div>
      <div class="fourPm">4:00pm<hr/></div>
      <div class="fivePm">5:00pm<hr/></div>
      <div class="sixPm">6:00pm<hr/></div>
      <div class="sevenPm">7:00pm<hr/></div>
      <div class="eightPm">8:00pm<hr/></div>
      <div class="ninePm">9:00pm<hr/></div>
      <div class="tenPm">10:00pm<hr/></div>
      <div class="elevenPm">11:00pm<hr/></div>
      <div class="activeAppointments" v-for="appointment in appointments" v-bind:key="appointment._id" v-bind:class="appointmentLogic(appointment)" v-on:click="appointmentClick(appointment)" >{{appointment.title}}</div>
    </div>
    <appointmentSet v-if="appointmentShow" v-on:backAppointment="appointmentShow = false" v-on:saveAppointment="appointmentSave" :editable="editable" :appointmentProp="clickedAppointment"></appointmentSet>
  </div>
</template>

<script>
import AppointmentSet from './AppointmentSet'
export default {
  name: 'days',
  props: ['monthDay', 'dayNum', 'yearNum', 'appointmentsProp'],
  components: {
    'appointmentSet': AppointmentSet
  },
  data () {
    return {
      appointments: [],
      clickedAppointment: [],
      appointmentShow: false,
      editable: true,
      activeAppointment: {
        title: '',
        id: ''
      },
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
    this.appointmentsClear()
    vue.populateActiveAppointments()
  },
  methods: {
    appointmentLogic (activeAppointment) {
      return {
        'twelveAmStart': activeAppointment.time.timeStart === 'twelveAm',
        'twelveAmEnd': activeAppointment.time.timeEnd === 'twelveAm',
        'oneAmStart': activeAppointment.time.timeStart === 'oneAm',
        'oneAmEnd': activeAppointment.time.timeEnd === 'oneAm',
        'twoAmStart': activeAppointment.time.timeStart === 'twoAm',
        'twoAmEnd': activeAppointment.time.timeEnd === 'twoAm',
        'threeAmStart': activeAppointment.time.timeStart === 'threeAm',
        'threeAmEnd': activeAppointment.time.timeEnd === 'threeAm',
        'fourAmStart': activeAppointment.time.timeStart === 'fourAm',
        'fourAmEnd': activeAppointment.time.timeEnd === 'fourAm',
        'fiveAmStart': activeAppointment.time.timeStart === 'fiveAm',
        'fiveAmEnd': activeAppointment.time.timeEnd === 'fiveAm',
        'sixAmStart': activeAppointment.time.timeStart === 'sixAm',
        'sixAmEnd': activeAppointment.time.timeEnd === 'sixAm',
        'sevenAmStart': activeAppointment.time.timeStart === 'sevenAm',
        'sevenAmEnd': activeAppointment.time.timeEnd === 'sevenAm',
        'eightAmStart': activeAppointment.time.timeStart === 'eightAm',
        'eightAmEnd': activeAppointment.time.timeEnd === 'eightAm',
        'nineAmStart': activeAppointment.time.timeStart === 'nineAm',
        'nineAmEnd': activeAppointment.time.timeEnd === 'nineAm',
        'tenAmStart': activeAppointment.time.timeStart === 'tenAm',
        'tenAmEnd': activeAppointment.time.timeEnd === 'tenAm',
        'elevenAmStart': activeAppointment.time.timeStart === 'elevenAm',
        'elevenAmEnd': activeAppointment.time.timeEnd === 'elevenAm',
        'twelvePmStart': activeAppointment.time.timeStart === 'twelvePm',
        'twelvePmEnd': activeAppointment.time.timeEnd === 'twelvePm',
        'onePmStart': activeAppointment.time.timeStart === 'onePm',
        'onePmEnd': activeAppointment.time.timeEnd === 'onePm',
        'twoPmStart': activeAppointment.time.timeStart === 'twoPm',
        'twoPmEnd': activeAppointment.time.timeEnd === 'twoPm',
        'threePmStart': activeAppointment.time.timeStart === 'threePm',
        'threePmEnd': activeAppointment.time.timeEnd === 'threePm',
        'fourPmStart': activeAppointment.time.timeStart === 'fourPm',
        'fourPmEnd': activeAppointment.time.timeEnd === 'fourPm',
        'fivePmStart': activeAppointment.time.timeStart === 'fivePm',
        'fivePmEnd': activeAppointment.time.timeEnd === 'fivePm',
        'sixPmStart': activeAppointment.time.timeStart === 'sixPm',
        'sixPmEnd': activeAppointment.time.timeEnd === 'sixPm',
        'sevenPmStart': activeAppointment.time.timeStart === 'sevenPm',
        'sevenPmEnd': activeAppointment.time.timeEnd === 'sevenPm',
        'eightPmStart': activeAppointment.time.timeStart === 'eightPm',
        'eightPmEnd': activeAppointment.time.timeEnd === 'eightPm',
        'ninePmStart': activeAppointment.time.timeStart === 'ninePm',
        'ninePmEnd': activeAppointment.time.timeEnd === 'ninePm',
        'tenPmStart': activeAppointment.time.timeStart === 'tenPm',
        'tenPmEnd': activeAppointment.time.timeEnd === 'tenPm',
        'elevenPmStart': activeAppointment.time.timeStart === 'elevenPm',
        'elevenPmEnd': activeAppointment.time.timeEnd === 'elevenPm',
        'personal': activeAppointment.type === 'personal',
        'profesional': activeAppointment.type === 'professional',
        'installation': activeAppointment.type === 'installation',
        'estimate': activeAppointment.type === 'estimate'
      }
    },
    populateActiveAppointments () {
      let vue = this
      let i = 0
      for (i = 0; i < vue.appointmentsProp.length; i++) {
        let day = parseInt(vue.appointmentsProp[i].date.day)
        let month = vue.appointmentsProp[i].date.month
        let year = parseInt(vue.appointmentsProp[i].date.year)
        if (day === vue.dayNumber && year === vue.yearNum && month === vue.monthDay) {
          vue.appointments.push(vue.appointmentsProp[i])
        }
      }
    },
    appointmentHide () {
      this.appointmentShow = false
    },
    appointmentSave (activeAppointment) {
      this.appointmentShow = false
      if (activeAppointment !== null) {
        this.appointments.push(activeAppointment)
      }
    },
    backDay () {
      this.$emit('backDay')
      this.dayNumber--
      this.appointmentsClear()
      this.populateActiveAppointments()
    },
    nextDay () {
      this.$emit('nextDay')
      this.dayNumber++
      this.appointmentsClear()
      this.populateActiveAppointments()
    },
    back () {
      this.$emit('calendar')
    },
    weekView () {
      var monthNum
      if (this.monthDay === 'January') {
        monthNum = 0
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'February') {
        monthNum = 1
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'March') {
        monthNum = 2
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'April') {
        monthNum = 3
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'May') {
        monthNum = 4
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'June') {
        monthNum = 5
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'July') {
        monthNum = 6
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'August') {
        monthNum = 7
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'September') {
        monthNum = 8
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'October') {
        monthNum = 9
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'November') {
        monthNum = 10
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      } else if (this.monthDay === 'December') {
        monthNum = 11
        this.$emit('weekView', {day: this.dayNum, monthString: this.monthDay, month: monthNum, year: this.yearNum})
      }
    },
    appointmentsClear () {
      this.appointments = []
    },
    appointmentClick (appointment) {
      this.$emit('appointmentClick', appointment)
    },
    jump () {
      this.$emit('jump')
      this.dayNumber = new Date().getDate()
      this.appointmentsClear()
      this.populateActiveAppointments()
    }
  }
}
</script>

<style scoped lang="less">
@blue: #008be8;
@grey: #ddd;
.mainDays {
  width: 100%;
  height: 100%;
  display: grid;
  margin-top: 0px;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 70px 20px 860px 20px;
  background-color: white;
  position: fixed;
}

.jump {
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
  background: transparent;
  color: black;
  padding: 10%;
  text-align: right;
}

.week {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  background: @blue;
  color: #fff;
}

.dayView {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row: 2;
  height: 790px;
  margin-top: 80px;
  display: grid;
  grid-template-rows: repeat(24, 3em);
  background-color: #fff;
  padding-left: 5px;
  padding-right: 5px;
}

.calendarButton {
  height: 120px;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 25px 20px 20px 20px;
  color: black;
}

.activeAppointments {
  text-align: center;
}

.colorCode {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
}

.personalColor {
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 25px;
  margin-bottom: 5px;
  grid-column: 5;
  grid-row: 1;
  background-color: rgba(255, 255, 0, .3);
  border: 1px solid black;
}

.professionalColor {
  margin-left: 5px;
  margin-right: 25px;
  margin-bottom: 5px;
  grid-column: 5;
  grid-row: 2;
  background-color: rgba(0, 255, 0, .3);
  border: 1px solid black;
}

.installationColor {
  margin-left: 5px;
  margin-right: 25px;
  margin-bottom: 5px;
  grid-column: 5;
  grid-row: 3;
  background-color: rgba(0, 0, 255, .3);
  border: 1px solid black;
}

.estimateColor {
  margin-left: 5px;
  margin-right: 25px;
  margin-bottom: 5px;
  grid-column: 5;
  grid-row: 4;
  background-color: rgba(255, 0, 0, .3);
  border: 1px solid black;
}

.appointment {
  text-align: center;
  margin-left: 70px;
}

.personal {
  background: rgba(255, 255, 0, .3);
}

.professional {
  background: rgba(0, 255, 0, .3);
}

.installation {
  background: rgba(0, 0, 255, .3);
}

.estimate {
  background: rgba(255, 0, 0, .3);
}

.monthNum {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: ;
  font-size: 1.7em;
  font-weight: bold;
  text-align: center;
}

.back {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
  display: grid;
  background-color: ;
  padding: 10%;
  font-size: 1em;
}
.prev {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 5;
  display: grid;
  background-color: ;
  margin-left: 5%;
  color: @blue;
}

.next {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row: 5;
  display: grid;
  background-color: ;
  color: @blue;
}

/* times: half hour and 12am-11pm */

.halfHour {
  margin-top: 5px;
}

.twelveAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 1;
}

.oneAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 2;
}

.twoAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 3;
}

.threeAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 4;
}

.fourAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 5;
}

.fiveAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 6;
}

.sixAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 7;
}

.sevenAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 8;
}

.eightAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 9;
}

.nineAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 10;
}

.tenAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 11;
}

.elevenAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 12;
}

.twelvePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 13;
}

.onePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 14;
}

.twoPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 15;
}

.threePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 16;
}

.fourPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 17;
}

.fivePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 18;
}

.sixPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 19;
}

.sevenPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 20;
}

.eightPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 21;
}

.ninePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 22;
}

.tenPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 23;
}

.elevenPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 24;
}

.twelveAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
}

.oneAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 2;
}

.twoAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 3;
}

.threeAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 4;
}

.fourAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 5;
}

.fiveAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 6;
}

.sixAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 7;
}

.sevenAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 8;
}

.eightAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 9;
}

.nineAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 10;
}

.tenAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 11;
}

.elevenAmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 12;
}

.twelvePmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 13;
}

.onePmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 14;
}

.twoPmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 15;
}

.threePmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 16;
}

.fourPmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 17;
}

.fivePmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 18;
}

.sixPmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 19;
}

.sevenPmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 20;
}

.eightPmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 21;
}

.ninePmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 22;
}

.tenPmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 23;
}

.elevenPmStart {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 24;
}

.twelveAmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 1;
}

.oneAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 2;
}

.twoAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 3;
}

.threeAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 4;
}

.fourAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 5;
}

.fiveAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 6;
}

.sixAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 7;
}

.sevenAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 8;
}

.eightAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 9;
}

.nineAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 10;
}

.tenAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 11;
}

.elevenAmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 12;
}

.twelvePmEnd  {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 13;
}

.onePmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 14;
}

.twoPmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 15;
}

.threePmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 16;
}

.fourPmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 17;
}

.fivePmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 18;
}

.sixPmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 19;
}

.sevenPmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 20;
}

.eightPmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 21;
}

.ninePmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 22;
}

.tenPmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 23;
}

.elevenPmEnd {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-end: 24;
}
</style>
