import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationOff = ({
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
    className="icon icon-tabler icon-tabler-navigation-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16.28 12.28Q14.855 9.184 12 3q-1.049 2.273-1.573 3.41m-1.27 2.75Q7.835 12.03 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l7.265 2.463c.196.077.42.032.57-.116a.55.55 0 0 0 .134-.572l-.26-.563M3 3l18 18" />
  </svg>
);
export default SvgNavigationOff;
