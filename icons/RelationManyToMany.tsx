import * as React from "react";
import type { SVGProps } from "react";
const SvgRelationManyToMany = ({
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
    className="icon icon-tabler icon-tabler-relation-many-to-many"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M15 14v-4l3 4v-4M6 14v-4l3 4v-4M12 10.5v.01M12 13.5v.01" />
  </svg>
);
export default SvgRelationManyToMany;
