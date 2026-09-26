/**
 * Eshwar Route logo SVG — neural routing nexus with connected nodes.
 */
type OmniRouteLogoProps = {
  size?: number;
  className?: string;
};

export default function OmniRouteLogo({ size = 20, className = "" }: OmniRouteLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      suppressHydrationWarning
    >
      {/* Central routing core */}
      <circle cx="16" cy="16" r="3.5" fill="currentColor" />
      {/* Outer nodes */}
      <circle cx="7" cy="8" r="2.2" fill="currentColor" opacity="0.95" />
      <circle cx="25" cy="8" r="2.2" fill="currentColor" opacity="0.95" />
      <circle cx="7" cy="24" r="2.2" fill="currentColor" opacity="0.95" />
      <circle cx="25" cy="24" r="2.2" fill="currentColor" opacity="0.95" />
      <circle cx="16" cy="5" r="1.8" fill="currentColor" />
      <circle cx="16" cy="27" r="1.8" fill="currentColor" />
      {/* Main vector connections */}
      <line
        x1="16"
        y1="12.5"
        x2="7"
        y2="8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="12.5"
        x2="25"
        y2="8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="19.5"
        x2="7"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="19.5"
        x2="25"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="12.5"
        x2="16"
        y2="5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="19.5"
        x2="16"
        y2="27"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Outer subtle orbital pathways */}
      <line
        x1="7"
        y1="8"
        x2="7"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="25"
        y1="8"
        x2="25"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
