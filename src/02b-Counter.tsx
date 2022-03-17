var count = 0;

export const Counter = () => {
  if (count = 100) count = 0;

  const onInc = (): void => {
    count++;
  };

  const onDec = (): void => {
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
  );
};
