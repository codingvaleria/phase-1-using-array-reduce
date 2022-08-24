const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((total, battery, index, array) => {
    let totalBatteries = 0;
    return total + battery
})
