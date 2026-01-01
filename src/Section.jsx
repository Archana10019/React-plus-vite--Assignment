import React from "react";

const Section = React.memo(() => {
  console.log("HeavySection rendered");

  // Simulate heavy work
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }

  return (
    <div>
      <h3>Heavy UI Section</h3>
      <p>This component should render only once.</p>
    </div>
  );
});

export default Section;
