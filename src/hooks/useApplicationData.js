import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function updateSpots(day, days, appointments) {
    let dayElement = days.find((element) => element.name === day);

    let apptArray = dayElement.appointments;
    let spots = 0;
    for (let appt of apptArray) {
      let appointment = appointments[appt];
      if (!appointment.interview) {
        spots++;
      }
    }
    const newObj = { ...dayElement, spots };
    const newArr = days.map((element) =>
      element.name === day ? newObj : element
    );
    return newArr;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      let days = updateSpots(state.day, state.days, appointments);
      setState({
        ...state,
        days,
        appointments,
      });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      let days = updateSpots(state.day, state.days, appointments);
      setState({
        ...state,
        days,
        appointments,
      });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
