import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

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
    .catch((error) => transition(ERROR_SAVE, true));

  }

  function triggerConfirm() {
    transition(CONFIRM);
  }

  function triggerEdit(){
    transition(EDIT);
  }

  function deleteInterview() {
    transition(DELETING, true);
    props.cancelInterview(props.id).then((response) => {
      transition(EMPTY);
    })
    .catch((error) => transition(ERROR_DELETE, true));
  }

  function cancelConfirm() {
    transition(SHOW);
  }

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={triggerConfirm}
          onEdit={triggerEdit}
        />
      )}
      {mode === CREATE && <Form
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back} />}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETING && <Status message={"Deleting"} />}
      {mode === CONFIRM && <Confirm message={"Are you sure would like to delete?"} onConfirm={deleteInterview} onCancel={back} />}
      {mode === EDIT && <Form
      student={props.interview.student}
      interviewer={props.interview.interviewer.id}
      interviewers={props.interviewers}
      onCancel={cancelConfirm} //change to back
      onSave={save}
    />}
      {mode === ERROR_SAVE && <Error message={"Could not save appointment"} onClose={back}/>}
      {mode === ERROR_DELETE && <Error message={"Could not delete appointment"} onClose={back}/>}




    </article>
  );
}