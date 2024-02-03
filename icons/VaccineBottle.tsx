import * as React from "react";
import type { SVGProps } from "react";
const SvgVaccineBottle = ({
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
    className="icon icon-tabler icon-tabler-vaccine-bottle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM10 6v.98c0 .877-.634 1.626-1.5 1.77S7 9.643 7 10.52V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6M7 12h10M7 18h10M11 15h2" />
  </svg>
);
export default SvgVaccineBottle;
