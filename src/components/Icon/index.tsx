import "remixicon/fonts/remixicon.css";

interface IconInterface {
  type: "git-branch-line";
  size?: "1x" | "1.5x" | "2x" | "2.5x" | "3x";
}

export default function Icon({ type, size = "1x" }: IconInterface) {
  return <i className={`ri-${type} ri-${size}`} />;
}
