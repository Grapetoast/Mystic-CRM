<template>
  <div class="main">
    <div class="weekdays">
      <div class="sunday" v-on:click="dayChange">Su</div>
      <div class="monday" v-on:click="dayChange">Mo</div>
      <div class="tuesday" v-on:click="dayChange">Tu</div>
      <div class="wednesday" v-on:click="dayChange">We</div>
      <div class="thursday" v-on:click="dayChange">Th</div>
      <div class="friday" v-on:click="dayChange">Fr</div>
      <div class="saturday" v-on:click="dayChange">Sa</div>
    </div>
    <div class="dayView">
      <div class="times">12:00am</div>
      <div class="times">1:00am</div>
      <div class="times">2:00am</div>
      <div class="times">3:00am</div>
      <div class="times">4:00am</div>
      <div class="times">5:00am</div>
      <div class="times">6:00am</div>
      <div class="times">7:00am</div>
      <div class="times">8:00am</div>
      <div class="times">9:00am</div>
      <div class="times">10:00am</div>
      <div class="times">11:00am</div>
      <div class="times">12:00pm</div>
      <div class="times">1:00pm</div>
      <div class="times">2:00pm</div>
      <div class="times">3:00pm</div>
      <div class="times">4:00pm</div>
      <div class="times">5:00pm</div>
      <div class="times">6:00pm</div>
      <div class="times">7:00pm</div>
      <div class="times">8:00pm</div>
      <div class="times">9:00pm</div>
      <div class="times">10:00pm</div>
      <div class="times">11:00pm</div>
    </div>
    <div class="dayGrid">
      <div class="sundayColumn">
        <div class="twelveAmSunday"></div>
        <div class="oneAmSunday"></div>
        <div class="twoAmSunday"></div>
        <div class="threeAmSunday"></div>
        <div class="fourAmSunday"></div>
        <div class="fiveAmSunday"></div>
        <div class="sixAmSunday"></div>
        <div class="sevenAmSunday"></div>
        <div class="eightAmSunday"></div>
        <div class="nineAmSunday"></div>
        <div class="tenAmSunday"></div>
        <div class="elevenAmSunday"></div>
        <div class="twelvePmSunday"></div>
        <div class="onePmSunday"></div>
        <div class="twoPmSunday"></div>
        <div class="threePmSunday"></div>
        <div class="fourPmSunday"></div>
        <div class="fivePmSunday"></div>
        <div class="sixPmSunday"></div>
        <div class="sevenPmSunday"></div>
        <div class="eightPmSunday"></div>
        <div class="ninePmSunday"></div>
        <div class="tenPmSunday"></div>
        <div class="elevenPmSunday"></div>
      </div>
      <div class="mondayColumn">
        <div class="twelveAmMonday"></div>
        <div class="oneAmMonday"></div>
        <div class="twoAmMonday"></div>
        <div class="threeAmMonday"></div>
        <div class="fourAmMonday"></div>
        <div class="fiveAmMonday"></div>
        <div class="sixAmMonday"></div>
        <div class="sevenAmMonday"></div>
        <div class="eightAmMonday"></div>
        <div class="nineAmMonday"></div>
        <div class="tenAmMonday"></div>
        <div class="elevenAmMonday"></div>
        <div class="twelvePmMonday"></div>
        <div class="onePmMonday"></div>
        <div class="twoPmMonday"></div>
        <div class="threePmMonday"></div>
        <div class="fourPmMonday"></div>
        <div class="fivePmMonday"></div>
        <div class="sixPmMonday"></div>
        <div class="sevenPmMonday"></div>
        <div class="eightPmMonday"></div>
        <div class="ninePmMonday"></div>
        <div class="tenPmMonday"></div>
        <div class="elevenPmMonday"></div>
      </div>
      <div class="tuesdayColumn">
        <div class="twelveAmTuesday"></div>
        <div class="oneAmTuesday"></div>
        <div class="twoAmTuesday"></div>
        <div class="threeAmTuesday"></div>
        <div class="fourAmTuesday"></div>
        <div class="fiveAmTuesday"></div>
        <div class="sixAmTuesday"></div>
        <div class="sevenAmTuesday"></div>
        <div class="eightAmTuesday"></div>
        <div class="nineAmTuesday"></div>
        <div class="tenAmTuesday"></div>
        <div class="elevenAmTuesday"></div>
        <div class="twelvePmTuesday"></div>
        <div class="onePmTuesday"></div>
        <div class="twoPmTuesday"></div>
        <div class="threePmTuesday"></div>
        <div class="fourPmTuesday"></div>
        <div class="fivePmTuesday"></div>
        <div class="sixPmTuesday"></div>
        <div class="sevenPmTuesday"></div>
        <div class="eightPmTuesday"></div>
        <div class="ninePmTuesday"></div>
        <div class="tenPmTuesday"></div>
        <div class="elevenPmTuesday"></div>
      </div>
      <div class="wednesdayColumn">
        <div class="twelveAmWednesday"></div>
        <div class="oneAmWednesday"></div>
        <div class="twoAmWednesday"></div>
        <div class="threeAmWednesday"></div>
        <div class="fourAmWednesday"></div>
        <div class="fiveAmWednesday"></div>
        <div class="sixAmWednesday"></div>
        <div class="sevenAmWednesday"></div>
        <div class="eightAmWednesday"></div>
        <div class="nineAmWednesday"></div>
        <div class="tenAmWednesday"></div>
        <div class="elevenAmWednesday"></div>
        <div class="twelvePmWednesday"></div>
        <div class="onePmWednesday"></div>
        <div class="twoPmWednesday"></div>
        <div class="threePmWednesday"></div>
        <div class="fourPmWednesday"></div>
        <div class="fivePmWednesday"></div>
        <div class="sixPmWednesday"></div>
        <div class="sevenPmWednesday"></div>
        <div class="eightPmWednesday"></div>
        <div class="ninePmWednesday"></div>
        <div class="tenPmWednesday"></div>
        <div class="elevenPmWednesday"></div>
      </div>
      <div class="thursdayColumn">
        <div class="twelveAmThursday"></div>
        <div class="oneAmThursday"></div>
        <div class="twoAmThursday"></div>
        <div class="threeAmThursday"></div>
        <div class="fourAmThursday"></div>
        <div class="fiveAmThursday"></div>
        <div class="sixAmThursday"></div>
        <div class="sevenAmThursday"></div>
        <div class="eightAmThursday"></div>
        <div class="nineAmThursday"></div>
        <div class="tenAmThursday"></div>
        <div class="elevenAmThursday"></div>
        <div class="twelvePmThursday"></div>
        <div class="onePmThursday"></div>
        <div class="twoPmThursday"></div>
        <div class="threePmThursday"></div>
        <div class="fourPmThursday"></div>
        <div class="fivePmThursday"></div>
        <div class="sixPmThursday"></div>
        <div class="sevenPmThursday"></div>
        <div class="eightPmThursday"></div>
        <div class="ninePmThursday"></div>
        <div class="tenPmThursday"></div>
        <div class="elevenPmThursday"></div>
      </div>
      <div class="fridayColumn">
        <div class="twelveAmFriday"></div>
        <div class="oneAmFriday"></div>
        <div class="twoAmFriday"></div>
        <div class="threeAmFriday"></div>
        <div class="fourAmFriday"></div>
        <div class="fiveAmFriday"></div>
        <div class="sixAmFriday"></div>
        <div class="sevenAmFriday"></div>
        <div class="eightAmFriday"></div>
        <div class="nineAmFriday"></div>
        <div class="tenAmFriday"></div>
        <div class="elevenAmFriday"></div>
        <div class="twelvePmFriday"></div>
        <div class="onePmFriday"></div>
        <div class="twoPmFriday"></div>
        <div class="threePmFriday"></div>
        <div class="fourPmFriday"></div>
        <div class="fivePmFriday"></div>
        <div class="sixPmFriday"></div>
        <div class="sevenPmFriday"></div>
        <div class="eightPmFriday"></div>
        <div class="ninePmFriday"></div>
        <div class="tenPmFriday"></div>
        <div class="elevenPmFriday"></div>
      </div>
      <div class="saturdayColumn">
        <div class="twelveAmSaturday"></div>
        <div class="oneAmSaturday"></div>
        <div class="twoAmSaturday"></div>
        <div class="threeAmSaturday"></div>
        <div class="fourAmSaturday"></div>
        <div class="fiveAmSaturday"></div>
        <div class="sixAmSaturday"></div>
        <div class="sevenAmSaturday"></div>
        <div class="eightAmSaturday"></div>
        <div class="nineAmSaturday"></div>
        <div class="tenAmSaturday"></div>
        <div class="elevenAmSaturday"></div>
        <div class="twelvePmSaturday"></div>
        <div class="onePmSaturday"></div>
        <div class="twoPmSaturday"></div>
        <div class="threePmSaturday"></div>
        <div class="fourPmSaturday"></div>
        <div class="fivePmSaturday"></div>
        <div class="sixPmSaturday"></div>
        <div class="sevenPmSaturday"></div>
        <div class="eightPmSaturday"></div>
        <div class="ninePmSaturday"></div>
        <div class="tenPmSaturday"></div>
        <div class="elevenPmSaturday"></div>
      </div>
      <div class="appointment" v-for="appointment in appointments" v-bind:key="appointment._id" v-bind:class="appointmentLogic(appointment)" v-on:click="appointmentClick(appointment)" >{{appointment.title}}</div>
    </div>
    <div class="back" v-on:click="back">Back</div>
  </div>
</template>

<script>
import AppointmentSet from './AppointmentSet'
export default {
  name: 'weekview',
  props: ['appointmentsProp', 'dayNum', 'currentView'],
  components: {
    'appointmentSet': AppointmentSet
  },
  created () {
    let vue = this
    vue.calculateDayString()
    vue.populateWeekAppointments()
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
      time: '',
      currentMonth: '',
      currentDay: '',
      currentYear: '',
      dayString: '',
      monthNum: 0,
      tempMonthString: ''
    }
  },
  methods: {
    populateWeekAppointments () {
      let vue = this
      let i = 0
      for (i = 0; i < vue.appointmentsProp.length; i++) {
        let day = parseInt(vue.appointmentsProp[i].date.day)
        let month = vue.appointmentsProp[i].date.month
        let year = parseInt(vue.appointmentsProp[i].date.year)
        let monthDays = this.months[this.currentView.month].days
        if (((this.currentView.day + 1) > monthDays) && this.dayString !== 'saturday') {
          vue.getTempMonthString(true)
          if (this.dayString === 'friday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'thursday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
            console.log('thursday')
          } else if (this.dayString === 'wednesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'tuesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'monday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'sunday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((this.currentView.day + 2) > monthDays) && this.dayString !== 'saturday' && this.dayString !== 'friday') {
          vue.getTempMonthString(true)
          if (this.dayString === 'thursday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'wednesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'tuesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'monday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'sunday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((this.currentView.day + 3) > monthDays) && this.dayString !== 'saturday' && this.dayString !== 'friday' && this.dayString !== 'thursday') {
          vue.getTempMonthString(true)
          if (this.dayString === 'wednesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'tuesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'monday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'sunday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((this.currentView.day + 4) > monthDays) && this.dayString !== 'saturday' && this.dayString !== 'friday' && this.dayString !== 'thursday' && this.dayString !== 'wednesday') {
          vue.getTempMonthString(true)
          if (this.dayString === 'tuesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 4 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'monday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 4 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'sunday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 4 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((this.currentView.day + 5) > monthDays) && this.dayString !== 'saturday' && this.dayString !== 'friday' && this.dayString !== 'thursday' && this.dayString !== 'wednesday' && this.dayString !== 'tuesday') {
          vue.getTempMonthString(true)
          if (this.dayString === 'monday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 4 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 5 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'sunday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 4 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 5 && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((this.currentView.day + 6) > monthDays) && this.dayString !== 'saturday' && this.dayString !== 'friday' && this.dayString !== 'thursday' && this.dayString !== 'wednesday' && this.dayString !== 'tuesday' && this.dayString !== 'monday') {
          vue.getTempMonthString(true)
          if (this.appointmentsProp[i].date.dayString === 'sunday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === 1 && year === vue.currentView.year && month === vue.tempMonthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === 2 && year === vue.currentView.year && month === vue.tempMonthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === 3 && year === vue.currentView.year && month === vue.tempMonthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === 4 && year === vue.currentView.year && month === vue.tempMonthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === 5 && year === vue.currentView.year && month === vue.tempMonthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === 6 && year === vue.currentView.year && month === vue.tempMonthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          }
        } else if (((6 - this.currentView.day) < 1) && this.dayString !== 'sunday') {
          vue.getTempMonthString(false)
          let tempMonthDays = this.months[(this.currentView.month - 1)].days
          if (this.appointmentsProp[i].date.dayString === 'sunday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
            vue.appointments.push(vue.appointmentsProp[i])
          }
        } else if (((5 - this.currentView.day) < 1) && this.dayString !== 'sunday' && this.dayString !== 'monday' && this.dayString !== 'tuesday' && this.dayString !== 'wednesday' && this.dayString !== 'thursday') {
          console.log('< 5')
          if (this.dayString === 'saturday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'friday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((4 - this.currentView.day) < 1) && this.dayString !== 'sunday' && this.dayString !== 'monday' && this.dayString !== 'tuesday' && this.dayString !== 'wednesday') {
          console.log('< 4')
          if (this.dayString === 'saturday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'friday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'thursday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((3 - this.currentView.day) < 1) && this.dayString !== 'sunday' && this.dayString !== 'monday' && this.dayString !== 'tuesday') {
          console.log('< 3')
          if (this.dayString === 'saturday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 3) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'friday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'thursday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'wednesday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((2 - this.currentView.day) < 1) && this.dayString !== 'sunday' && this.dayString !== 'monday') {
          console.log('< 2')
          if (this.dayString === 'saturday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 4) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 3) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'friday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 3) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'thursday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'wednesday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'tuesday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else if (((1 - this.currentView.day) < 1) && this.dayString !== 'sunday') {
          console.log('< 1')
          if (this.dayString === 'saturday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 5) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 4) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (tempMonthDays - 3) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'friday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 4) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 3) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'thursday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 3) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'wednesday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 2) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'tuesday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (tempMonthDays - 1) && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'monday') {
            vue.getTempMonthString(false)
            let tempMonthDays = this.months[(this.currentView.month - 1)].days
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === tempMonthDays && year === vue.currentView.year && month === vue.tempMonthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          }
        } else {
          console.log('else')
          if (this.dayString === 'sunday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === (vue.currentView.day + 6) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'monday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === (vue.currentView.day + 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'tuesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === (vue.currentView.day + 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'wednesday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === (vue.currentView.day + 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'thursday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === (vue.currentView.day + 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'friday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === (vue.currentView.day + 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else if (this.dayString === 'saturday') {
            if (this.appointmentsProp[i].date.dayString === 'sunday' && day === (vue.currentView.day - 6) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'monday' && day === (vue.currentView.day - 5) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'tuesday' && day === (vue.currentView.day - 4) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'wednesday' && day === (vue.currentView.day - 3) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'thursday' && day === (vue.currentView.day - 2) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'friday' && day === (vue.currentView.day - 1) && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            } else if (this.appointmentsProp[i].date.dayString === 'saturday' && day === vue.currentView.day && year === vue.currentView.year && month === vue.currentView.monthString) {
              vue.appointments.push(vue.appointmentsProp[i])
            }
          } else {
            console.log('error no day')
          }
        }
      }
    },
    getTempMonthString (forwards) {
      let vue = this
      console.log('fired')
      if (this.monthDay === 'January') {
        if (forwards === true) {
          this.tempMonthString = 'February'
        } else {
          this.tempMonthString = 'December'
          let x = vue.year - 2000
          if (x % 4 === 0) {
            vue.months[1].days = 29
            vue.drift(true, false)
          } else {
            vue.months[1].days = 28
            vue.drift(false, false)
          }
        }
      } else if (this.monthDay === 'February') {
        if (forwards === true) {
          this.tempMonthString = 'March'
        } else {
          this.tempMonthString = 'January'
        }
      } else if (this.monthDay === 'March') {
        if (forwards === true) {
          this.tempMonthString = 'April'
        } else {
          this.tempMonthString = 'February'
        }
      } else if (this.monthDay === 'April') {
        if (forwards === true) {
          this.tempMonthString = 'May'
        } else {
          this.tempMonthString = 'March'
        }
      } else if (this.monthDay === 'May') {
        if (forwards === true) {
          this.tempMonthString = 'June'
        } else {
          this.tempMonthString = 'April'
        }
      } else if (this.monthDay === 'June') {
        if (forwards === true) {
          this.tempMonthString = 'July'
        } else {
          this.tempMonthString = 'May'
        }
      } else if (this.monthDay === 'July') {
        if (forwards === true) {
          this.tempMonthString = 'August'
        } else {
          this.tempMonthString = 'June'
        }
      } else if (this.monthDay === 'August') {
        if (forwards === true) {
          this.tempMonthString = 'September'
        } else {
          this.tempMonthString = 'July'
        }
      } else if (this.monthDay === 'September') {
        if (forwards === true) {
          this.tempMonthString = 'October'
        } else {
          this.tempMonthString = 'August'
        }
      } else if (this.monthDay === 'October') {
        if (forwards === true) {
          this.tempMonthString = 'November'
        } else {
          this.tempMonthString = 'September'
        }
      } else if (this.monthDay === 'November') {
        if (forwards === true) {
          this.tempMonthString = 'December'
        } else {
          this.tempMonthString = 'October'
        }
      } else if (this.monthDay === 'December') {
        if (forwards === true) {
          this.tempMonthString = 'January'
          let x = vue.year - 2000
          if (x % 4 === 0) {
            vue.months[1].days = 29
            vue.drift(true, true)
          } else {
            vue.months[1].days = 28
            vue.drift(false, true)
          }
        } else {
          this.tempMonthString = 'November'
        }
      }
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
    calculateDayString () {
      let vue = this
      let i = 0
      vue.dayString = vue.months[vue.currentView.month].startingDay
      for (i = 0; i < vue.months[vue.currentView.month].days; i++) {
        if (vue.dayString === 'sunday') {
          vue.dayString = 'monday'
        } else if (vue.dayString === 'monday') {
          vue.dayString = 'tuesday'
        } else if (vue.dayString === 'tuesday') {
          vue.dayString = 'wednesday'
        } else if (vue.dayString === 'wednesday') {
          vue.dayString = 'thursday'
        } else if (vue.dayString === 'thursday') {
          vue.dayString = 'friday'
        } else if (vue.dayString === 'friday') {
          vue.dayString = 'saturday'
        } else if (vue.dayString === 'saturday') {
          vue.dayString = 'sunday'
        }
        let num = i + 1
        let day = vue.currentView.day - 1
        if (day === num) {
          break
        }
      }
    },
    back () {
      this.$emit('weekview')
    },
    dayChange () {
      this.$emit('dayChange')
    },
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
        'sundayColumn': activeAppointment.date.dayString === 'sunday',
        'mondayColumn': activeAppointment.date.dayString === 'monday',
        'tuesdayColumn': activeAppointment.date.dayString === 'tuesday',
        'wednesdayColumn': activeAppointment.date.dayString === 'wednesday',
        'thursdayColumn': activeAppointment.date.dayString === 'thursday',
        'fridayColumn': activeAppointment.date.dayString === 'friday',
        'saturdayColumn': activeAppointment.date.dayString === 'saturday',
        'personal': activeAppointment.type === 'personal',
        'profesional': activeAppointment.type === 'professional',
        'installation': activeAppointment.type === 'installation',
        'estimate': activeAppointment.type === 'estimate'
      }
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
  background-color: @blue;
  height: 100%;
  width: 100%;
  margin-top: 25px;
  border-radius: 0px;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 5fr 1fr;
  grid-template-rows: 1fr 1fr 15fr;
  overflow-y: scroll;
}

.times {
  border-right-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
}

.back {
  grid-row: 1;
  grid-column: 1;
}

.previous {

}

.next {

}

.weekdays {
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 2;
  grid-column-end: 5;
  padding: 10px 0;
  background-color: #ddd;
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(7, 1fr);
}

.dayView {
  grid-row-start: 3;
  grid-row-end: 25;
  grid-column-start: 1;
  grid-column-end: 1;
  display: grid;
  justify-content: space-evenly;
}

.dayGrid {
  grid-row-start: 3;
  grid-row-end: 25;
  grid-column-start: 2;
  grid-column-end: 8;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(24, 1fr);
}

.sundayColumn {
  grid-row-start: 1;
  grid-row-end: 24;
  grid-column-start: 1;
  grid-column-end: 1;
  display: grid;
  grid-template-rows: repeat(24, 30.38px);
  grid-template-columns: 1;
}

.mondayColumn {
  grid-row-start: 1;
  grid-row-end: 24;
  grid-column-start: 2;
  grid-column-end: 2;
  display: grid;
  grid-template-rows: repeat(24, 30.38px);
  grid-template-columns: 1;
}

.tuesdayColumn {
  grid-row-start: 1;
  grid-row-end: 24;
  grid-column-start: 3;
  grid-column-end: 3;
  display: grid;
  grid-template-rows: repeat(24, 30.38px);
  grid-template-columns: 1;
}

.wednesdayColumn {
  grid-row-start: 1;
  grid-row-end: 24;
  grid-column-start: 4;
  grid-column-end: 4;
  display: grid;
  grid-template-rows: repeat(24, 30.38px);
  grid-template-columns: 1;
}

.thursdayColumn {
  grid-row-start: 1;
  grid-row-end: 24;
  grid-column-start: 5;
  grid-column-end: 5;
  display: grid;
  grid-template-rows: repeat(24, 30.38px);
  grid-template-columns: 1;
}

.fridayColumn {
  grid-row-start: 1;
  grid-row-end: 24;
  grid-column-start: 6;
  grid-column-end: 6;
  display: grid;
  grid-template-rows: repeat(24, 30.38px);
  grid-template-columns: 1;
}

.saturdayColumn {
  grid-row-start: 1;
  grid-row-end: 24;
  grid-column-start: 7;
  grid-column-end: 7;
  display: grid;
  grid-template-rows: repeat(24, 30.38px);
  grid-template-columns: 1;
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
