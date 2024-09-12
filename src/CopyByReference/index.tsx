import React from 'react';

export const CopyByReference = () => {
  const obj1 = {
    x: 1,
    y: {
      z: 2,
    },
    name: undefined,
    age: null,
    date: new Date(),
    regex: /test/i,
    map: new Map([['key', 'value']]),
    set: new Set([1, 2, 3]),
    buffer: new ArrayBuffer(8),
    nested: {
      circular: null,
    },
  };

  console.log({ obj1 });

  // obj1.nested.circular = obj1; // Circular reference

  function directAssignment(obj) {
    // performs a shallow copy at all levels
    const newObj = obj;

    newObj.x = 100;
    console.log('Direct Assignment:', newObj );
  }

  function shallowCopy(obj) {
    // performs a shallow copy, first level is copied by value, second level is copied by reference
    const newObj = { ...obj };

    newObj.x = 100;
    newObj.y.z = 200;

    console.log('Shallow Copy:', newObj);
  }

  function deepCopyWithJSON(obj) {
    try {
      const newObj = JSON.parse(JSON.stringify(obj));
      console.log('JSON Copy:', newObj);
    } catch (error) {
      console.error('Error during JSON copy:', error);
    }
  }

  function deepCopyWithStructuredClone(obj) {
    try {
      const newObj = structuredClone(obj);
      console.log('Structured Clone:', newObj);
    } catch (error) {
      console.error('Error during structuredClone:', error);
    }
  }

  // directAssignment(obj1);
  // shallowCopy(obj1);
  // deepCopyWithJSON(obj1);
  deepCopyWithStructuredClone(obj1);

  return <div>directAssignment</div>;
};
