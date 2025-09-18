import {ref, onMounted, onUnmounted } from 'vue'

export function useRealTimeVital(values) {

    const currentIndex = ref(0)
    const currentValue = ref(values[0])

    onMounted(() => {
        setInterval(() => {
            if(currentIndex.value < values.length - 1) {
                currentIndex.value += 1
            } else {
                currentIndex.value = 0
            }
            currentValue.value = values[currentIndex.value]
        }, 3000)
    })
    
    return { currentValue }
}