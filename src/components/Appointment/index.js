import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then((response) => {
      transition(SHOW);
    })

  }

  function triggerConfirm() {
    transition(CONFIRM);
  }

  function deleteInterview() {

    transition(DELETING);
    props.cancelInterview(props.id).then((response) => {
      transition(EMPTY);
    })
  }
  function cancelConfirm() {
    transition(SHOW);

  }



  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={triggerConfirm}
        />
      )}
      {mode === CREATE && <Form
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back} />}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETING && <Status message={"Deleting"} />}
      {mode === CONFIRM && <Confirm message={"Are you sure would like to delete?"} onConfirm={deleteInterview} onCancel={cancelConfirm} />}


    </article>
  );
}