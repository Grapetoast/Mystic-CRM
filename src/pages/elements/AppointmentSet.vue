<template>
  <div class="main">
    <div v-if="modal==='new'" class="appointmentNew">
      <h4>New Appointment</h4>
      <select v-model="month" class="month">
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <select v-model="day" class="day">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
      <select v-model="year" class="year">
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <select v-model="timeStart" class="timeStart">
        <option value="twelveAm">12:00am</option>
        <option value="oneAm">1:00am</option>
        <option value="twoAm">2:00am</option>
        <option value="threeAm">3:00am</option>
        <option value="fourAm">4:00am</option>
        <option value="fiveAm">5:00am</option>
        <option value="sixAm">6:00am</option>
        <option value="sevenAm">7:00am</option>
        <option value="eightAm">8:00am</option>
        <option value="nineAm">9:00am</option>
        <option value="tenAm">10:00am</option>
        <option value="elevenAm">11:00am</option>
        <option value="twelvePm">12:00pm</option>
        <option value="onePm">1:00pm</option>
        <option value="twoPm">2:00pm</option>
        <option value="threePm">3:00pm</option>
        <option value="fourPm">4:00pm</option>
        <option value="fivePm">5:00pm</option>
        <option value="sixPm">6:00pm</option>
        <option value="sevenPm">7:00pm</option>
        <option value="eightPm">8:00pm</option>
        <option value="ninePm">9:00pm</option>
        <option value="tenPm">10:00pm</option>
        <option value="elevenPm">11:00pm</option>
      </select>
      <select v-model="timeEnd" class="timeEnd">
        <option value="twelveAm">12:00am</option>
        <option value="oneAm">1:00am</option>
        <option value="twoAm">2:00am</option>
        <option value="threeAm">3:00am</option>
        <option value="fourAm">4:00am</option>
        <option value="fiveAm">5:00am</option>
        <option value="sixAm">6:00am</option>
        <option value="sevenAm">7:00am</option>
        <option value="eightAm">8:00am</option>
        <option value="nineAm">9:00am</option>
        <option value="tenAm">10:00am</option>
        <option value="elevenAm">11:00am</option>
        <option value="twelvePm">12:00pm</option>
        <option value="onePm">1:00pm</option>
        <option value="twoPm">2:00pm</option>
        <option value="threePm">3:00pm</option>
        <option value="fourPm">4:00pm</option>
        <option value="fivePm">5:00pm</option>
        <option value="sixPm">6:00pm</option>
        <option value="sevenPm">7:00pm</option>
        <option value="eightPm">8:00pm</option>
        <option value="ninePm">9:00pm</option>
        <option value="tenPm">10:00pm</option>
        <option value="elevenPm">11:00pm</option>
      </select>
      <select v-model="type" class="type">
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
        <option value="installation">Installation</option>
        <option value="estimate">Estimate</option>
      </select>
      <input v-model="title" class="title" placeholder="Title"/>
      <input v-model="description" class="description" placeholder="Description"/>
      <div v-on:click="appointmentSave" class="save">Save</div>
      <div v-on:click="$emit('backAppointment')" class="cancel">Cancel</div>
    </div>
    <div v-if="modal==='view'" class="appointmentView">
      <h4>{{activeAppointment.title}}</h4>
      <div class="appointmentDate">
        <div class="month">{{ activeAppointment.date.month }}</div>
        <div class="day">{{ activeAppointment.date.day }}</div>
        <div class="dayString">{{ activeAppointment.date.dayString }}</div>
        <div class="year">{{ activeAppointment.date.year }}</div>
      </div>
      <div class="timeStartView">{{activeAppointment.time.timeStart}}-</div>
      <div class="timeEndView">{{activeAppointment.time.timeEnd}}</div>
      <div class="typeView">{{activeAppointment.type}}</div>
      <div class="descriptionView">{{activeAppointment.description}}</div>
      <div v-on:click="$emit('modalEdit', 'new')" class="new">New</div>
      <div v-on:click="$emit('modalEdit', 'edit')" class="edit">Edit</div>
      <div v-on:click="$emit('backToDay')" class="backView">Back</div>
    </div>
    <div v-if="modal==='edit'" class="appointmentEdit">
      <h4>Edit Appointment: {{activeAppointment.title}}</h4>
      <select v-model="month" class="monthEdit">
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <select v-model="day" class="dayEdit">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
      <select v-model="year" class="yearEdit">
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <select v-model="activeAppointment.time.timeStart" class="timeStart">
        <option value="twelveAm">12:00am</option>
        <option value="oneAm">1:00am</option>
        <option value="twoAm">2:00am</option>
        <option value="threeAm">3:00am</option>
        <option value="fourAm">4:00am</option>
        <option value="fiveAm">5:00am</option>
        <option value="sixAm">6:00am</option>
        <option value="sevenAm">7:00am</option>
        <option value="eightAm">8:00am</option>
        <option value="nineAm">9:00am</option>
        <option value="tenAm">10:00am</option>
        <option value="elevenAm">11:00am</option>
        <option value="twelvePm">12:00pm</option>
        <option value="onePm">1:00pm</option>
        <option value="twoPm">2:00pm</option>
        <option value="threePm">3:00pm</option>
        <option value="fourPm">4:00pm</option>
        <option value="fivePm">5:00pm</option>
        <option value="sixPm">6:00pm</option>
        <option value="sevenPm">7:00pm</option>
        <option value="eightPm">8:00pm</option>
        <option value="ninePm">9:00pm</option>
        <option value="tenPm">10:00pm</option>
        <option value="elevenPm">11:00pm</option>
      </select>
      <select v-model="activeAppointment.time.timeEnd" class="timeEnd">
        <option value="twelveAm">12:00am</option>
        <option value="oneAm">1:00am</option>
        <option value="twoAm">2:00am</option>
        <option value="threeAm">3:00am</option>
        <option value="fourAm">4:00am</option>
        <option value="fiveAm">5:00am</option>
        <option value="sixAm">6:00am</option>
        <option value="sevenAm">7:00am</option>
        <option value="eightAm">8:00am</option>
        <option value="nineAm">9:00am</option>
        <option value="tenAm">10:00am</option>
        <option value="elevenAm">11:00am</option>
        <option value="twelvePm">12:00pm</option>
        <option value="onePm">1:00pm</option>
        <option value="twoPm">2:00pm</option>
        <option value="threePm">3:00pm</option>
        <option value="fourPm">4:00pm</option>
        <option value="fivePm">5:00pm</option>
        <option value="sixPm">6:00pm</option>
        <option value="sevenPm">7:00pm</option>
        <option value="eightPm">8:00pm</option>
        <option value="ninePm">9:00pm</option>
        <option value="tenPm">10:00pm</option>
        <option value="elevenPm">11:00pm</option>
      </select>
      <select v-model="activeAppointment.type" class="type">
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
        <option value="installation">Installation</option>
        <option value="estimate">Estimate</option>
      </select>
      <input v-model="activeAppointment.title" class="title" placeholder="Title"/>
      <input v-model="activeAppointment.description" class="description" placeholder="Description"/>
      <div v-on:click="appointmentSaveEdit; $emit('modalEdit', 'view')" class="appointmentEditSave">Save</div>
      <div v-on:click="$emit('modalEdit', 'view')" class="backEdit">Back</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'appointmentSet',
  props: ['appointmentProp', 'editable', 'modal', 'user'],
  created () {
    if (this.appointmentProp !== null) {
      this.activeAppointment = this.appointmentProp
    }
    if (this.editable !== null) {
      this.edit = this.editable
    }
  },
  data () {
    return {
      title: '',
      type: 'personal',
      month: 'January',
      monthNum: 0,
      day: '1',
      dayString: 'sunday',
      year: '2018',
      timeStart: 'twelveAm',
      timeEnd: 'twelveAm',
      description: '',
      appointment: [],
      newAppointments: [],
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
        description: ''
      },
      clickedAppointment: [],
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
        { monthNum: 11, month: 'December', days: 31, startingDay: 'saturday' }]
    }
  },
  methods: {
    appointmentSave () {
      let vue = this
      vue.calculateDayString()
      axios.post('https://api.mystic-crm.com/appointments/', {
        company: this.user.companyId,
        title: this.title,
        type: this.type,
        date: {
          month: this.month,
          day: this.day,
          year: this.year,
          dayString: this.dayString
        },
        time: {
          timeStart: this.timeStart,
          timeEnd: this.timeEnd
        },
        description: this.description
      })
        .then(result => {
          console.log(result)
          this.$emit('backAppointment')
        })
        .catch(error => {
          console.log(error)
          vue.error = true
        })
    },
    calculateDayString () {
      let vue = this
      let i = 0
      if (vue.month === 'January') {
        vue.monthNum = 0
      } else if (vue.month === 'February') {
        vue.monthNum = 1
      } else if (vue.month === 'March') {
        vue.monthNum = 2
      } else if (vue.month === 'April') {
        vue.monthNum = 3
      } else if (vue.month === 'May') {
        vue.monthNum = 4
      } else if (vue.month === 'June') {
        vue.monthNum = 5
      } else if (vue.month === 'July') {
        vue.monthNum = 6
      } else if (vue.month === 'August') {
        vue.monthNum = 7
      } else if (vue.month === 'September') {
        vue.monthNum = 8
      } else if (vue.month === 'October') {
        vue.monthNum = 9
      } else if (vue.month === 'November') {
        vue.monthNum = 10
      } else if (vue.month === 'December') {
        vue.monthNum = 11
      }
      let time = new Date().getFullYear()
      let yearDif = vue.year - time
      if (vue.year > time) {
        let i = 0
        for (i = 0; i <= yearDif; i++) {
          let x = parseInt(vue.year) - 2000
          if (x % 4 === 0) {
            vue.months[1].days = 29
            vue.drift(true, true)
          } else {
            vue.months[1].days = 28
            vue.drift(false, true)
          }
        }
      }
      vue.dayString = vue.months[vue.monthNum].startingDay
      for (i = 0; i < vue.months[vue.monthNum].days; i++) {
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
        console.log('i: ' + i + ' dayString: ' + vue.dayString)
        let num = i + 1
        let day = vue.day - 1
        if (day === num) {
          console.log('break')
          break
        }
      }
    },
    drift (x, y) {
      console.log('drift')
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
    appointmentSaveEdit () {
      let vue = this
      axios.put('https://api.mystic-crm.com/appointments/' + vue.appointmentProp.id, {
        company: this.user.companyId,
        title: this.title,
        type: this.type,
        date: {
          month: this.month,
          day: this.day,
          year: this.year,
          dayString: this.dayString
        },
        time: {
          timeStart: this.timeStart,
          timeEnd: this.timeEnd
        },
        description: this.description
      })
        .then(function () {
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    newAppointment () {
      this.$emit('modalEdit', 'new')
    }
  }
}
</script>

<style scoped lang="less">
@yellow: #f4c20d;
@blue: #00a1ff;
@grey: #323d38;
@font: 'Roboto', sans-serif;
@titlefont: 'Timmana', sans-serif;
.main {
  background: linear-gradient(#008be8, #0a669b);
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 8;
  box-shadow: 0px 2px 7px black;
  border-radius: 10px;
}

// newAppointment
.appointmentNew {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 35px 35px 35px 35px 35px ;
}

.save {
  grid-column: 1;
  grid-row: 10;
  text-align: center;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: white;
}

h4 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  color: #fff;
  line-height: 0px;
  font-size: 1.5em;
  text-align: center;
}

.month {
  grid-column: 1;
  grid-row: 3;
  background-color: white;
  margin: 2%;
}

.day {
  grid-column: 2;
  grid-row: 3;
  background-color: white;
  margin: 2%;
}

.year {
  grid-column: 3;
  grid-row: 3;
  background-color: white;
  margin: 2%;
}

.timeStart {
  grid-column: 1;
  grid-row: 4;
  margin-right: 5px;
  background-color: white;
  margin: 2%;
}

.timeEnd {
  grid-column: 2;
  grid-row: 4;
  margin-right: 5px;
  background-color: white;
  margin: 2%;
}

.type {
  grid-column: 3;
  grid-row: 4;
  background-color: white;
  margin: 2%;

}

.title {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 5;
  width: 90%;
  margin-left: 5%;
}

.description {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  height: 100px;
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
}

input::placeholder {
  line-height: 1em;
}

.appointmentSave {
  grid-column: 1;
  grid-row: 9;
  text-align: center;
  font-family: @titlefont;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: #fff;
}

.cancel {
  grid-column: 3;
  grid-row: 10;
  text-align: center;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: white;
}

// view appointment
.appointmentView {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(9, 35px);
  background-color: @blue;
}

.timeStartView {
  grid-column: 1;
  grid-row: 4;
  color: #fff;
  font-weight: bold;
}

.timeEndView {
  grid-column: 2;
  grid-row: 4;
  color: #fff;
  font-weight: bold;
}

.typeView {
  grid-column: 3;
  grid-row: 4;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
}

.descriptionView {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 8;
  background-color: white;
  padding: 3%;
}

.new {
  grid-column: 1;
  grid-row: 8;
  text-align: center;
  font-family: @titlefont;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: #fff;
}

.edit {
  grid-column: 2;
  grid-row: 8;
  text-align: center;
  font-family: @titlefont;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: #fff;
}

.backView {
  grid-column: 3;
  grid-row: 8;
  text-align: center;
  font-family: @titlefont;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: @grey;
}

// edit appointment
.appointmentEdit {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: repeat(9, 35px);
  background-color: @blue;
}

.monthEdit {
  grid-column: 1;
  grid-row: 3;
}

.dayEdit {
  grid-column: 2;
  grid-row: 3;
}

.yearEdit {
  grid-column: 3;
  grid-row: 3;
}

.timeStartEdit {
  grid-column: 1;
  grid-row: 3;
}

.timeEndEdit {
  grid-column: 2;
  grid-row: 3;
}

.typeEdit {
  grid-column: 3;
  grid-row: 3;
}

.titleEdit {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 3;
}

.descriptionEdit {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 7;
  background-color: white;
}

.appointmentEditSave {
  grid-column: 1;
  grid-row: 9;
  text-align: center;
  font-family: @titlefont;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: #fff;
}

.backEdit {
  grid-column: 3;
  grid-row: 9;
  text-align: center;
  font-family: @titlefont;
  margin-right: 15px;
  height: 40px;
  background: none;
  font-size: 2em;
  color: @grey;
}
</style>
