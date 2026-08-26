import patternTop from "../../assets/layout/background-pattern-top.svg";
import patternBottom from "../../assets/layout/background-pattern-bottom.svg";

import "../../styles/background-pattern.css";


export default function BackgroundPattern() {
  return (
    <div
      className="global-background"
      aria-hidden="true"
      data-figma-node="715:446"
    >
      <img
        className="global-background__pattern global-background__pattern--top"
        src={patternTop}
        alt=""
        draggable="false"
      />

      <img
        className="global-background__pattern global-background__pattern--bottom"
        src={patternBottom}
        alt=""
        draggable="false"
      />
    </div>
  );
}
