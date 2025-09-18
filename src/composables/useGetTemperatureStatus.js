import { useGetAgeGroup } from './useGetAgeGroup'

export function useGetTemperatureStatus(value) {

    const temperatureRange = {
        criticalMin: 29, 
        criticalMax: 42.6,
        min: 36.3,
        max: 37.5
    }

    if(value < temperatureRange.criticalMin || value > temperatureRange.criticalMax) {
        return "critical"
    } else if((temperatureRange.criticalMin <= value && value< temperatureRange.min) || 
              (temperatureRange.max < value && value <= temperatureRange.criticalMax)) {
        return "watch"
    }
    return "stable"
    
}