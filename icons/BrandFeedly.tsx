import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFeedly = ({
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
    className="icon icon-tabler icon-tabler-brand-feedly"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7.833 12.278 4.445-4.445M10.055 14.5l2.223-2.222M12.278 16.722l.555-.555M19.828 14.828a4 4 0 0 0 0-5.656l-5-5a4 4 0 0 0-5.656 0l-5 5a4 4 0 0 0 0 5.656L10.343 21h3.314z" />
  </svg>
);
export default SvgBrandFeedly;
