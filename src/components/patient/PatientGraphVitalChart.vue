<template>
    <Line :data="data" :options="options" />
</template>

<script setup>

import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

import { useTitleFormat } from '@/composables/useTitleFormat.js'

import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    values: {
        type: Array,
        required: true
    },
    patient: {
        type: Object,
        required: true
    }
})

const titleFormat = computed(() => {
    return useTitleFormat(props.title)
})

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartLabels = computed(() => {
    let hour = new Date().getHours() + 1
    const hours = []

    for (let i=0; i<24; i++) {
        if(hour >= 24) {
            hour = 0
        }
        hours.push(`${hour}h`)
        hour++
    }
    return hours
})

const chartDatas = computed(() => {
    const chartValues = []
    let index = 0

    for (let i = 0; i < chartLabels.value.length; i++) {
        if (index >= props.values.length) {
            index = 0
        }

        if (typeof props.values[index] === 'object') {
            chartValues.push(Object.values(props.values[index]))
        } else {
            chartValues.push(props.values[index])
        }

        index ++
    }
    return chartValues
}) 

const datasets = computed(() => {
    if (typeof chartDatas.value[0] === 'number') {
        return {
            labels: chartLabels.value,
            datasets: [
                {
                    label: titleFormat.value,
                    data: chartDatas.value,
                    fill: false,
                    borderColor: 'white',
                },
            ],
        }
    }

    const systolic = chartDatas.value.map(v => v[0])
    const diastolic = chartDatas.value.map(v => v[1])

    return {
        labels: chartLabels.value,
        datasets: [
        {
            label: 'Systolic',
            data: systolic,
            fill: false,
            borderColor: 'white',
        },
        {
            label: 'Diastolic',
            data: diastolic,
            fill: false,
            borderColor: '#ffcc00',
        },
        ],
    }
})

const data = computed(() => datasets.value)

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255,255,255,0.2)',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255,255,255,0.2)',
      },
    },
  },
}

</script>