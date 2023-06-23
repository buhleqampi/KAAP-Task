// Working hours
// 7 am - 8pm
const workingHoursStart = 7;
const workingHoursEnd = 8;

// Timestamp  within working hours
function withinWorkingHours(timestamp){
    const hour = timestamp. getworkingHours();
    return hour >= workingHoursStart && hour <= workingHoursEnd;
}

// The next working day
function getnextWorkingDay(date) {
    const nextDay = new Date(date.getTime() + 86400);
    while(nextDay.getDay() === 7 || nextDay.getDay() === 6){
        // 7 represents Sunday and 6 represents SAtuarday
        nextDay.setDate(nextDay.getDate() + 1);
    }
    nextDay.setHours(7);
    return nextDay;
}
// Timestamp
function timeStamp(hours){
const exact = new Date();
const timestamp = new Date(exact.getTime() + hours * 60* 60* 1000);

if (!withinWorkingHours(timestamp)) {
if (timestamp.getDay() >= 5){ 
    // 5 represents Friday
    return getnextWorkingDay(timestamp);
}
    timestamp.setHours(7);
}
    return timestamp;
}
// Calculation into the timestamps
const fourHours = timeStamp(4);
const eightHours = timeStamp(8);
const twentyFourHours = timeStamp(24);
const fortyEightHours = timeStamp(48);
const seventyTwoHours = timeStamp(72);
const oneSixtyEightHours = timeStamp(168);

console.log("4 hours later", fourHours);
console.log("8 hours later",eightHours);
console.log("24 hours later",eightHours);
console.log("48 hours later",twentyFourHours);
console.log("72 hours later",seventyTwoHours);
console.log("168 hours later",oneSixtyEightHours);