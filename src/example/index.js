import React from 'react';

function Foo({ children }) {
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      id: `i-am-child-${index}`
    });
  });
}

export const Example = () => {
  return (
    <Foo>
      <div>I will have id "i-am-child-0"</div>
    </Foo>
  );
};
