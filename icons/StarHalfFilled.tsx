import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarHalfFilled = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
}: {
  size: number,
  stroke: number,
  color: string,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className=""
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M12 1a1 1 0 0 1 .823.443l.067.116 2.852 5.781 6.38.925c.741.108 1.08.94.703 1.526l-.07.095-.078.086-4.624 4.499 1.09 6.355a1 1 0 0 1-1.249 1.135l-.101-.035-.101-.046-5.693-3-5.706 3q-.158.082-.32.106l-.106.01a1.003 1.003 0 0 1-1.038-1.06l.013-.11 1.09-6.355-4.623-4.5a1 1 0 0 1 .328-1.647l.113-.036.114-.023 6.379-.925 2.853-5.78A.97.97 0 0 1 12 1m0 3.274V16.75a1 1 0 0 1 .239.029l.115.036.112.05 4.363 2.299-.836-4.873a1 1 0 0 1 .136-.696l.07-.099.082-.09 3.546-3.453-4.891-.708a1 1 0 0 1-.62-.344l-.073-.097-.06-.106z"
    />
  </Svg>
);
export default SvgStarHalfFilled;
