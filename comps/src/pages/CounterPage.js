import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

// action types constans variable
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const FORM_SUBMIT = "form-submit";

// state - to obiekt z useReducer
const reducer = (state, action) => {
  // action to argument podany w funkcji dispatch, podajemy 0 lub jeden agrument
  // cokolwiek zwraca reducer to będzie nasz nowy state object
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case FORM_SUBMIT:
      return {
        ...state,
        count: state.valueToAdd + state.count,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = event => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: FORM_SUBMIT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Count is {state.count}</h1>
      <div className="flex flex-row ">
        <Button success rounded onClick={increment}>
          Increment
        </Button>
        <Button danger rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button primary rounded>
          Add it
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
