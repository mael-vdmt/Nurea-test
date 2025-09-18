import { useGetAgeGroup } from './useGetAgeGroup'

export function useGetBloodPressureStatus(value, age) {

    const BloodPressureRanges = {
        adult: {
            systolic: {min: 120, max: 140},
            diastolic: {min: 60, max: 80}
        },
        elderly: {
            systolic: {min: 150, max: 170},
            diastolic: {min: 60, max: 90}
        }
    }

    const ageGroup = useGetAgeGroup(age)

    if(!BloodPressureRanges[ageGroup]) {
        return "stable"
    }

    const range = BloodPressureRanges[ageGroup]

    const { systolic, diastolic } = value

    if (
        systolic < range.systolic.min || systolic > range.systolic.max ||
        diastolic < range.diastolic.min || diastolic > range.diastolic.max
    ) {
        return "watch"
    }

    return "stable"
    
}