import type { HTMLAttributes } from "react";

export const Logo = (props: HTMLAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1447.37 1139.49"
      {...props}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .cls-1 {\n        fill: #86d300;\n      }\n\n      .cls-1, .cls-2 {\n        fill-rule: evenodd;\n      }\n\n      .cls-2, .cls-3 {\n        fill: var(--foreground);\n      }\n    ",
          }}
        />
      </defs>
      <g id="Logos">
        <g id="colored-light">
          <polygon
            className="cls-2"
            points="603 883.66 750.2 1138.6 168.66 1138.6 169.52 1137.35 0 829.04 555.35 0 734.05 309.53 343.35 883.66 342.89 883.66 341.49 886.41 343.35 883.66 603 883.66"
          />
          <polygon
            className="cls-2"
            points="1051.06 387.48 1229.75 697.02 974.35 1139.49 795.66 829.94 815.26 796.04 836.01 760.2 1000 476.05 1051.06 387.48"
          />
          <polygon
            className="cls-1"
            points="1447.37 320.18 1299.49 576.35 1120.8 266.81 1268.68 10.64 1447.37 320.18"
          />
          <polygon
            className="cls-2"
            points="343.35 883.66 341.49 886.41 342.89 883.66 343.35 883.66"
          />
          <polygon
            className="cls-2"
            points="343.35 883.66 341.49 886.41 342.89 883.66 343.35 883.66"
          />
          <polyline
            className="cls-3"
            points="815.26 796.04 835.88 760.2 836.01 760.2"
          />
        </g>
      </g>
    </svg>
  );
};
