function happyHolidays(){
  return("Happy holidays!")
}

console.log(happyHolidays())

function happyHolidaysTo(name){
  return "Happy holidays, "+ name +"!"
}

console.log(happyHolidaysTo("Navin"))

function happyHolidayTo(holiday, name){
  return "Happy " +holiday+", " +name+ "!"
}

console.log(happyHolidayTo("christmas","Navin"))

function holidayCountdown(holiday , days){
  return "It's " +days +" days until " +holiday+"!"
}

console.log(holidayCountdown("5","Christmas"))
