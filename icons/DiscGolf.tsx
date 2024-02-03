import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscGolf = ({
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
    className="icon icon-tabler icon-tabler-disc-golf"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 5h14M6 5c.32 6.744 2.74 9.246 6 10M18 5c-.32 6.744-2.74 9.246-6 10M10 5c0 4.915.552 7.082 2 10M14 5c0 4.915-.552 7.082-2 10M12 15v6M12 3v2M7 16c.64.64 1.509 1 2.414 1h5.172c.905 0 1.774-.36 2.414-1M11 21h2" />
  </svg>
);
export default SvgDiscGolf;
