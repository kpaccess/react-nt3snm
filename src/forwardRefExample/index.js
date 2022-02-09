import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const MyInput = React.forwardRef(function MyInput(props, ref) {
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      focusInput: () => inputRef.current.focus()
    };
  });
  return <input ref={inputRef} />;
});

const ref = React.createRef();

const ForwardRefExample = () => {
  return (
    <div>
      <h2>Forward Ref</h2>
      <div>
        What is fowardRef ?
        <blockquote>
          Technique for automatically passing a ref through a component to one
          of its children
        </blockquote>
        <br />
        <FancyButton>Click here</FancyButton> <br />
        <br />
        <MyInput>Input</MyInput>
        <br />
      </div>
    </div>
  );
};

export default ForwardRefExample;
