import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketFilled = ({
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
    className="icon icon-tabler icon-tabler-basket-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="m12.684 3.27.084.09 4.7 5.64H21a1 1 0 0 1 .991 1.131l-.02.112-1.984 7.918c-.258 1.578-1.41 2.781-2.817 2.838L17 21l-10.148-.002c-1.37-.053-2.484-1.157-2.787-2.57l-.035-.185-2-8a1 1 0 0 1 .857-1.237L3 9h3.53l4.702-5.64a1 1 0 0 1 1.452-.09M12 12a3 3 0 0 0-2.98 2.65l-.015.174L9 15l.005.176A3 3 0 1 0 12 12m0-6.438L9.135 9h5.73z"
    />
  </svg>
);
export default SvgBasketFilled;
