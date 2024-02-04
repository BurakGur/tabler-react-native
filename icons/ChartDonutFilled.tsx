import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartDonutFilled = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-chart-donut-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025.167L12 4v4a1 1 0 0 1-.641.933l-.107.035a3.1 3.1 0 1 0 3.73 3.953l.05-.173a1 1 0 0 1 .855-.742L16 12h3.8a2 2 0 0 1 2 2 1 1 0 0 1-.026.226A10 10 0 1 1 9.504 2.293l.27-.067.11-.02z"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M14.775 2.526a1 1 0 0 1 .22-.026l.122.007.112.02.103.03a10 10 0 0 1 6.003 5.817l.108.294a1 1 0 0 1-.824 1.325L20.5 10H16a1 1 0 0 1-.76-.35 8 8 0 0 0-.89-.89 1 1 0 0 1-.342-.636L14 8V3.505l.006-.118q.008-.063.02-.116l.03-.103a1 1 0 0 1 .168-.299l.071-.08q.044-.041.087-.075l.09-.063.088-.05.103-.043z"
    />
  </Svg>
);
export default SvgChartDonutFilled;
