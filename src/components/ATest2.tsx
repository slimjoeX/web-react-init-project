import React from 'react';

function ATest() {
  const defaultText: string = "This is a setState test"
  const [text, setText] = React.useState(`${defaultText}: initial value`);

  function handleClick(e: any) {
    e.preventDefault();
    const date = new Date();
    const tick: Number = date.getTime();
    setText(`${defaultText}: ${tick.toString()}`);
  }
  return <p><a href="#" onClick={handleClick}>{text}</a></p>;
}

export default ATest;