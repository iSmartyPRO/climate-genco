<template>
  <div class="container">
    <div class="buttons">
      <a class="button success" @click="prev">Предыдущий</a>
      <a class="button info" @click="next">Следующий</a>
    </div>
    <div class="page">Страница: {{ this.page }}, Дата: {{ this.d }}</div>
    <div class="charts">
      <Line
        v-if="loaded"
        :chart-data="chartPPM"
        :width="width"
        :height="height"
      />
      <Line
        v-if="loaded"
        :chart-data="chartTemperature"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  name: "PPM Chart",
  components: { Line },
  data() {
    return {
      loaded: false,
      chartPPM: null,
      chartTemperature: null,
      width: 900,
      height: 200,
      prevPage: 0,
      page: 1,
      nextPage: 2,
      d: null,
    };
  },
  methods: {
    prev() {
      this.page == 1 ? (this.page = 1) : (this.page = this.page - 1);
      this.drawChart();
    },
    next() {
      this.page = this.page + 1;
      this.drawChart();
    },
    async drawChart() {
      try {
        const { docs } = (
          await axios.get(`${process.env.VUE_APP_API_URL}/${this.page}`)
        ).data;
        this.d = `${docs[0].date.split("T")[0]}`;
        const labels = docs.map((item) => {
          return item.date.split("T")[1].split(".")[0];
        });
        const ppmData = docs.map((item) => {
          return item.ppm;
        });
        const temperatureData = docs.map((item) => {
          return item.temperature;
        });
        const chartPPM = {
          labels,
          datasets: [
            {
              label: `Уровень концентрации CO2`,
              borderColor: "#0e286b",
              pointBackgroundColor: "#ff6f00",
              pointBorderColor: "#ff6f00",
              data: ppmData,
            },
          ],
        };
        const chartTemperature = {
          labels: labels,
          datasets: [
            {
              label: "Температура",
              borderColor: "#73a24e",
              pointBackgroundColor: "#a9c25d",
              pointBorderColor: "#39395f",
              data: temperatureData,
            },
          ],
        };
        this.chartPPM = chartPPM;
        this.chartTemperature = chartTemperature;
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
  async mounted() {
    this.drawChart();
  },
};
</script>

<style>
</style>