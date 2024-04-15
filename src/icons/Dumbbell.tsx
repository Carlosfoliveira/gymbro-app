import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Dumbbell(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 10A2.5 2.5 0 0110 7.5h3.75a2.5 2.5 0 012.5 2.5v20a2.5 2.5 0 01-2.5 2.5H10A2.5 2.5 0 017.5 30V10zm6.25 0H10v20h3.75V10zM23.75 10a2.5 2.5 0 012.5-2.5H30a2.5 2.5 0 012.5 2.5v20a2.5 2.5 0 01-2.5 2.5h-3.75a2.5 2.5 0 01-2.5-2.5V10zM30 10h-3.75v20H30V10z"
        fill="#00B37E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 12.5c0-.69.56-1.25 1.25-1.25H35a2.5 2.5 0 012.5 2.5v12.5a2.5 2.5 0 01-2.5 2.5h-3.75a1.25 1.25 0 110-2.5H35v-12.5h-3.75c-.69 0-1.25-.56-1.25-1.25zM3.232 11.982A2.5 2.5 0 015 11.25h3.75a1.25 1.25 0 110 2.5H5v12.5h3.75a1.25 1.25 0 110 2.5H5a2.5 2.5 0 01-2.5-2.5v-12.5a2.5 2.5 0 01.732-1.768zM13.75 20c0-.69.56-1.25 1.25-1.25h10a1.25 1.25 0 110 2.5H15c-.69 0-1.25-.56-1.25-1.25z"
        fill="#00B37E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 20c0-.69.56-1.25 1.25-1.25h2.5a1.25 1.25 0 110 2.5h-2.5c-.69 0-1.25-.56-1.25-1.25zM0 20c0-.69.56-1.25 1.25-1.25h2.5a1.25 1.25 0 110 2.5h-2.5C.56 21.25 0 20.69 0 20z"
        fill="#00B37E"
      />
    </Svg>
  );
}

export default Dumbbell;
