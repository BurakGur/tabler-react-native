import * as React from "react";
import type { SVGProps } from "react";
const SvgCertificate = ({
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
    className="icon icon-tabler icon-tabler-certificate"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M13 17.5V22l2-1.5 2 1.5v-4.5" />
    <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3M6 15h2" />
  </svg>
);
export default SvgCertificate;
