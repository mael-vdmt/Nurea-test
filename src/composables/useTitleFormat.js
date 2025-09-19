export function useTitleFormat(title) {

    switch (title) {
        case "heartRate":
            return "Heart rate"
        case "temperature":
            return "Temperature"
        case "bloodPressure":
            return "Blood pressure"
        case "oxygenSaturation":
            return "Oxygen saturation"
    }
    
}