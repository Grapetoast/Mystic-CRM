<template>
  <div class="main">
    <div class="back" v-on:click="backto">Back</div>
    <div class="appointmentList" v-for="appointment in appointments" v-bind:key="appointment.id">
      <div v-on:click="appointmentItemDisplay(appointment)" class="appointment">
        {{appointment.date.day}} {{appointment.date.month}} {{appointment.date.year}}
        <div>{{appointment.title}}:{{appointment.time.timeStart}}-{{appointment.time.timeEnd}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upcoming',
  props: ['user', 'appointmentsProp'],
  data () {
    return {
      appointments: []
    }
  },
  created () {
    let vue = this
    vue.appointments = vue.appointmentsProp
  },
  methods: {
    backto () {
      this.$emit('upcoming')
    },
    appointmentItemDisplay (appointment) {
      this.$emit('appointmentItemDisplay', appointment)
    }
  }
}
</script>

<style scoped lang="less">
@blue: #00a1ff;
@grey: #323d38;
.main {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 6;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: repeat(1fr, 8);
  background: linear-gradient(#008be8, #0a669b);
  margin-top: 0px;
}

.appointmentList {
  grid-column: 2;
}

.appointment {
}
.back {
  padding: 10%;
  color: white;
  font-size: 1.5em;
}
</style>
