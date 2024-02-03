import * as React from "react";
import type { SVGProps } from "react";
const SvgCertificate2 = ({
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
    className="icon icon-tabler icon-tabler-certificate-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0M10 7h4" />
    <path d="M10 18v4l2-1 2 1v-4" />
    <path d="M10 19H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />
  </svg>
);
export default SvgCertificate2;
