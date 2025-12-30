import React, { useReducer } from "react";
import { formReducer, initialState } from'./UseReducer';

const MultistepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, values, isSubmitted } = state;

  const isStep1Valid = values.name && values.email;
  const isStep2Valid = values.username && values.password;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Step 1: Personal Details</h2>

            <input
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "name",
                  value: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
            />

            <button
              disabled={!isStep1Valid}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </>
        );

      case 2:
        return (
          <>
            <h2>Step 2: Account Details</h2>

            <input
              type="text"
              placeholder="Username"
              value={values.username}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "username",
                  value: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "password",
                  value: e.target.value,
                })
              }
            />

            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>

            <button
              disabled={!isStep2Valid}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </>
        );

      case 3:
        return (
          <>
            <h2>Step 3: Review & Submit</h2>

            <p><strong>Name:</strong> {values.name}</p>
            <p><strong>Email:</strong> {values.email}</p>
            <p><strong>Username:</strong> {values.username}</p>

            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>

            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
              Submit
            </button>
          </>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <h2>✅ Form Submitted</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h3>Step {step} / 3</h3>
      {renderStep()}
    </div>
  );
};

export default MultistepForm;
