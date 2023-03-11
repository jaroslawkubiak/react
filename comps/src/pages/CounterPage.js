import Button from "../components/Button";
import useCounter from "../hooks/use-counter";


function CounterPage({ initialCount }) {
    const {count, increment} = useCounter(initialCount);

  return (
    <div>
      <h1>
        count is {count}
        <Button onClick={increment}>Increment</Button>
      </h1>
    </div>
  );
}

export default CounterPage;
