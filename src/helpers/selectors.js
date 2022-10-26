//Go through a state array with a days object and an appointments object
//Match the appointments given in the days object to those in the appointments object
function getAppointmentsForDay(state, day) {
  const appointmentFilter = [];

  const dayMatch = state.days.filter((dayObj) => dayObj.name === day)[0];

  if (!dayMatch) {
    return appointmentFilter;
  }

  dayMatch.appointments.forEach((appt) => {
    if (state.appointments[appt]) {
      appointmentFilter.push(state.appointments[appt]);
    }
  });

  return appointmentFilter;
}

// Add the info of the interviewer for an existing interview
function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  let obj = {};

  obj["student"] = interview.student;

  let interviewerID = interview.interviewer;

  obj["interviewer"] = state.interviewers[interviewerID];

  return obj;
}

// Return the interviewers of a specific day
function getInterviewersForDay(state, day) {
  const filteredInterviewers = [];

  const matchedDay = state.days.filter((dayOb) => dayOb.name === day)[0];

  if (!matchedDay) {
    return filteredInterviewers;
  }

  matchedDay.interviewers.forEach((viewer) => {
    if (state.interviewers[viewer]) {
      filteredInterviewers.push(state.interviewers[viewer]);
    }
  });

  return filteredInterviewers;
}

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
