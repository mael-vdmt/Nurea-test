export function useGetAgeGroup(age) {

    if(age < 18) {
        return "child"
    } else if (age >= 18 && age < 65) {
        return "adult"
    } else {
        return "elderly"
    }
    
}