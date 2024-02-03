import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPatreonFilled = ({
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
    className="icon icon-tabler icon-tabler-brand-patreon-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M7.462 3.1c2.615-1.268 6.226-1.446 9.063-.503 2.568.853 4.471 3.175 4.475 5.81.004 3.061-1.942 5.492-4.896 6.243-1.693.43-2.338.75-2.942 1.582-.238.328-.45.745-.796 1.533l-.22.5C11 20.866 9.99 22.027 7.91 22c-2.232-.03-3.603-1.742-4.313-4.48-.458-1.768-.617-3.808-.594-5.876.044-3.993 1.42-7.072 4.46-8.545z"
    />
  </svg>
);
export default SvgBrandPatreonFilled;
