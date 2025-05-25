import React from "react";

const BlueShape = ({}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="16" width="8" height="40" rx="4" fill="#3657FF" />
      <rect
        x="40"
        y="16"
        width="8"
        height="40"
        rx="4"
        transform="rotate(90 40 16)"
        fill="#3657FF"
      />
      <rect
        x="31.2843"
        y="3"
        width="8"
        height="40"
        rx="4"
        transform="rotate(45 31.2843 3)"
        fill="#3657FF"
      />
      <rect
        x="36.9412"
        y="31.2852"
        width="8"
        height="40"
        rx="4"
        transform="rotate(135 36.9412 31.2852)"
        fill="#3657FF"
      />
    </svg>
  );
};

export default BlueShape;
