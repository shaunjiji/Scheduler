function getAppointmentsForDay(state, day) {

  const appointmentFilter = [];

  const dayMatch = state.days.filter(dayObj => dayObj.name === day)[0];

  if (!dayMatch) {
    return appointmentFilter;
  }

  dayMatch.appointments.forEach(appt => {
    if (state.appointments[appt]) {
      appointmentFilter.push(state.appointments[appt]);
    }
  })

  return appointmentFilter;
}

function getInterview(state, interview) {

if (!interview){
return null;
}
let obj = {};

obj["student"] = interview.student;

let interviewerID = interview.interviewer;


obj["interviewer"] = state.interviewers[interviewerID];

return obj;

}



function getInterviewersForDay(state, day) {
  
  const filteredInterviewers = [];

  const matchedDay = state.days.filter(dayOb => dayOb.name === day)[0];
  
  if (!matchedDay) {
    return filteredInterviewers;
  };
  
  matchedDay.interviewers.forEach(viewer => {
    if (state.interviewers[viewer]) {
      filteredInterviewers.push(state.interviewers[viewer]);
    }
  })
  
  return filteredInterviewers;
}

export {getAppointmentsForDay, getInterview, getInterviewersForDay};