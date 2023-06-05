import React from "react";

export const SampleHighOrderComponent = (component) => {
  const Component = component;
  return function (props) {
    return <Component extraProps="I have super power" {...props} />;
  };
};
