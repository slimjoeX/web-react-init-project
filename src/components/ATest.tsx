import React from 'react';
import { Test } from '../assets/js/script';

function ATest() {
  function handleClick(e: any) {
    e.preventDefault();
    let test = new Test("This is a message");
    test.alert();
  }

  return <a href="#" onClick={handleClick}>This is yet another test</a>;
}

export default ATest;