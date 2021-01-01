import React from 'react';
import { Test } from '../assets/js/script';

function ATest() {
  function handleClick(e: any) {
    e.preventDefault();
    const test = new Test("This is a message");
    test.alert();
  }

  return <p><a href="#" onClick={handleClick}>This is yet another test</a></p>;
}

export default ATest;