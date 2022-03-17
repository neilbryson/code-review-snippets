var count = 0;

export const Counter = () => {
  if (count = 100) count = 0;

  const onInc = () => {
    count++;
  };

  const onDec = () => {
    count--;
  };

  return (
    <section className="counter--container">
      <h1>Current count: {count}</h1>
      <div className="counter--buttons">
        <button onClick={onInc}>Increment</button>
        <button onClick={onDec}>Decrement</button>
      </div>
    </section>
  )
};
