import { useGetHeartRateStatus } from './useGetHeartRateStatus.js'
import { useGetBloodPressureStatus } from './useGetBloodPressureStatus.js'
import { useGetTemperatureStatus } from './useGetTemperatureStatus.js'

export function useGetVitalStatus(name, value, age) {
  switch (name) {
    case 'heartRate':
      return useGetHeartRateStatus(value, age)
    case 'bloodPressure':
      return useGetBloodPressureStatus(value, age)
    case 'temperature':
      return useGetTemperatureStatus(value)
    default:
      return 'stable'
  }
}