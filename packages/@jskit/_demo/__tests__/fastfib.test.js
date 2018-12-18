import fastfib from '../src/iter';

console.log(fastfib);

describe('fastfib', () => {
  test('test1 1~12', () => {
    expect(fastfib(0)).toBe(0);
    expect(fastfib(1)).toBe(1);
    expect(fastfib(2)).toBe(1);
    expect(fastfib(3)).toBe(2);
    expect(fastfib(4)).toBe(3);
    expect(fastfib(5)).toBe(5);
    expect(fastfib(6)).toBe(8);
    expect(fastfib(7)).toBe(13);
    expect(fastfib(8)).toBe(21);
    expect(fastfib(9)).toBe(34);
    expect(fastfib(10)).toBe(55);
    expect(fastfib(11)).toBe(89);
    expect(fastfib(12)).toBe(144);
  });
});

// import React from 'react';
// import Link from '../src/mycomp/Link';
// import renderer from 'react-test-renderer';

// describe('Shallow Rendering', function () {
//     it('App\'s title should be Todos', function () {
//     const component = renderer.create(
//         <Link page="http://www.facebook.com">Facebook</Link>
//     );
//     let tree = component.toJSON();

//     expect(tree.type).not.toBe("b");

//     expect(tree).toMatchSnapshot();

//     });
// });
