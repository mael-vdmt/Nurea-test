import { useGetAgeGroup } from './useGetAgeGroup'

export function useGetHeartRateStatus(value, age) {

    const heartRateRanges = {
        child: {min:80, max:120},
        adult: {min:60, max: 80},
        elderly: {min:70, max:90}
    }

    const ageGroup = useGetAgeGroup(age)
    const range = heartRateRanges[ageGroup]

    if(value < range.min || value > range.max) {
        return "watch"
    }
    return "stable"
    
}