import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRoundedNumber8Filled = ({
  size = 24,
  stroke = 2,
  ...props
}: {
  size: number,
  stroke: number,
  props: SVGProps,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-square-rounded-number-8-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="m12 2 .642.005.616.017.299.013.579.034.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29.046.553.041.727.006.15.017.617L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03-.553.046-.727.041-.15.006-.617.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29-.046-.553-.041-.727-.006-.15-.017-.617-.004-.318v-.648l.004-.318.017-.616.013-.299.034-.579.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03.553-.046.727-.041.15-.006.617-.017Q11.673 2 12 2m1 5h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15q.029.355.17.667l.075.152.018.03-.018.032c-.133.24-.218.509-.243.795L9 13v2l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-.17-.667l-.075-.152-.019-.032.02-.03a2 2 0 0 0 .242-.795L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 6v2h-2v-2zm0-4v2h-2V9z"
    />
  </svg>
);
export default SvgSquareRoundedNumber8Filled;
