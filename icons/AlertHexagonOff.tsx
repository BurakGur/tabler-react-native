import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertHexagonOff = ({
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
    className="icon icon-tabler icon-tabler-alert-hexagon-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18.36 18.387-5.268 3.333a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l1.317-.777M8.01 4l2.898-1.709a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7.398 1.13 1.143 1.125 1.948v7.284c0 .414-.116.812-.326 1.155M12 7v1M12 8v.01M3 3l18 18M12 16h.01" />
  </svg>
);
export default SvgAlertHexagonOff;
