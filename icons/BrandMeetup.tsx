import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMeetup = ({
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
    className="icon icon-tabler icon-tabler-brand-meetup"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.455 10.82C6.39 8.657 8.5 7 11 7c2.104 0 2.844 1.915 2 4l-2 6M6.981 7 3 16.914" />
    <path d="M13 11c.937-2.16 3.071-3.802 5.42-3.972 2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094C17.397 18.59 19 19.5 21 19" />
  </svg>
);
export default SvgBrandMeetup;
