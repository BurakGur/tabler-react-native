import * as React from "react";
import type { SVGProps } from "react";
const SvgAtom = ({
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
    className="icon icon-tabler icon-tabler-atom"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 12v.01M19.071 4.929c-1.562-1.562-6 .337-9.9 4.243-3.905 3.905-5.804 8.337-4.242 9.9 1.562 1.561 6-.338 9.9-4.244 3.905-3.905 5.804-8.337 4.242-9.9" />
    <path d="M4.929 4.929c-1.562 1.562.337 6 4.243 9.9 3.905 3.905 8.337 5.804 9.9 4.242 1.561-1.562-.338-6-4.244-9.9-3.905-3.905-8.337-5.804-9.9-4.242" />
  </svg>
);
export default SvgAtom;
