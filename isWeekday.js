function isWeekday(day){
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return weekdays.includes(day);
  }
  
  
  
  
  console.log(isWeekday("Monday"));
  console.log(isWeekday("Saturday"));
  
  assert.equal(isWeekday("Saturday"), false);
  assert.equal(isWeekday("Sunday"), false);
  assert.equal(isWeekday("Monday"), true);