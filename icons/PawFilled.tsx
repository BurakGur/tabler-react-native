import * as React from "react";
import type { SVGProps } from "react";
const SvgPawFilled = ({
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
    className="icon icon-tabler icon-tabler-paw-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 10c-1.32 0-1.983.421-2.931 1.924l-.244.398-.395.688-.141.254c-.24.434-.571.753-1.139 1.142l-.55.365c-.94.627-1.432 1.118-1.707 1.955-.124.338-.196.853-.193 1.28C4.7 19.693 5.898 21 7.5 21l.242-.006c.119-.006.234-.017.354-.034l.248-.043.132-.028.291-.073.162-.045.57-.17.763-.243.455-.136c.53-.15.94-.222 1.283-.222.344 0 .753.073 1.283.222l.455.136.764.242.569.171.312.084q.145.036.273.062l.248.043c.12.017.235.028.354.034L16.5 21c1.602 0 2.8-1.307 2.8-3 0-.427-.073-.939-.207-1.306-.236-.724-.677-1.223-1.48-1.83l-.257-.19-.528-.38c-.642-.47-1.003-.826-1.253-1.278l-.27-.485-.252-.432C14.042 10.403 13.435 10 12 10M19.78 7h-.03c-1.219.02-2.35 1.066-2.908 2.504-.69 1.775-.348 3.72 1.075 4.333.256.109.527.163.801.163 1.231 0 2.38-1.053 2.943-2.504.686-1.774.34-3.72-1.076-4.332A2.05 2.05 0 0 0 19.781 7zM9.025 3c-.112 0-.185.002-.27.015l-.093.016C7.13 3.237 6.265 5.02 6.554 6.886 6.826 8.611 8.016 10 9.474 10l.187-.005.084-.01.092-.016c1.533-.206 2.397-1.989 2.108-3.855C11.675 4.387 10.485 3 9.025 3"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M14.972 3c-1.459 0-2.647 1.388-2.916 3.113-.29 1.867.574 3.65 2.174 3.867q.153.02.296.02c1.39 0 2.543-1.265 2.877-2.883l.041-.23c.29-1.867-.574-3.65-2.174-3.867a2 2 0 0 0-.298-.02M4.217 7c-.274 0-.544.054-.797.161-1.426.615-1.767 2.562-1.078 4.335C2.905 12.947 4.052 14 5.283 14c.274 0 .544-.054.797-.161 1.426-.615 1.767-2.562 1.078-4.335C6.595 8.053 5.448 7 4.217 7"
    />
  </svg>
);
export default SvgPawFilled;
