import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudFog = ({
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
    className="icon icon-tabler icon-tabler-cloud-fog"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 16a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7zM5 20h14" />
  </svg>
);
export default SvgCloudFog;
