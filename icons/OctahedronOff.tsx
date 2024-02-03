import * as React from "react";
import type { SVGProps } from "react";
const SvgOctahedronOff = ({
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
    className="icon icon-tabler icon-tabler-octahedron-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6.771 6.77-4.475 4.527a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001l4.36-4.412m2.002-2.025 2.483-2.512a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0L8.766 4.751" />
    <path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l1.544-.46m3.094-.92 4.207-1.252c.195-.07.294-.156.296-.243M12 2.12V8m0 4v9.88M3 3l18 18" />
  </svg>
);
export default SvgOctahedronOff;
