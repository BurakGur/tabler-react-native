import * as React from "react";
import type { SVGProps } from "react";
const SvgOctahedron = ({
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
    className="icon icon-tabler icon-tabler-octahedron"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12.859 21.652 8.845-8.949a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0l-8.845 8.949a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001" />
    <path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l8.845-2.632c.195-.07.294-.156.296-.243M12 2.12v19.76" />
  </svg>
);
export default SvgOctahedron;
