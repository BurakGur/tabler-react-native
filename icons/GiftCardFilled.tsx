import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGiftCardFilled = ({
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
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M18 4a4 4 0 0 1 3.995 3.8L22 8v8a4 4 0 0 1-3.8 3.995L18 20H6a4 4 0 0 1-3.995-3.8L2 16V8a4 4 0 0 1 3.8-3.995L6 4zm-5.493 5-.19.004c-.928.052-1.719.583-2.317 1.444-.56-.805-1.288-1.322-2.139-1.428l-.198-.017L7.499 9l-.16.005C6.059 9.091 5 10.184 5 11.5c0 1.226 1.222 2.211 2.453 2.447l.16.026-1.32 1.32-.083.094a1 1 0 0 0 0 1.226l.083.094.094.083a1 1 0 0 0 1.226 0l.094-.083L10 14.415l2.293 2.292.094.083a1 1 0 0 0 1.403-1.403l-.083-.094-1.32-1.32c1.229-.169 2.502-1.11 2.606-2.315L15 11.5l-.005-.163c-.08-1.189-1.02-2.162-2.175-2.316l-.159-.016zm-.025 2 .102.009c.194.04.367.21.407.406L13 11.5l-.012.031-.034.04c-.13.135-.513.369-.836.42L12 12h-.602l.052-.1.088-.156c.27-.444.574-.696.852-.738zm-4.964 0 .084.005.094.02c.254.077.523.32.765.718l.09.157.05.1H8l-.106-.008c-.398-.057-.894-.4-.894-.492 0-.23.194-.446.416-.491z"
    />
  </Svg>
);
export default SvgGiftCardFilled;
