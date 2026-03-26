import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function createBaseProps(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M3 10h18" />
    </svg>
  );
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M19.4 5.6a4.7 4.7 0 0 0-6.7 0L12 6.3l-.7-.7a4.7 4.7 0 0 0-6.7 6.7l.7.7L12 20l6.7-6.9.7-.7a4.7 4.7 0 0 0 0-6.8Z" />
      <path d="M3.6 12h4.1l1.7-3 2.4 6 1.8-3H20" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M12 3 5 6v5c0 5 3.4 8.8 7 10 3.6-1.2 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 11.8 1.8 1.8 3.8-4" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="m12 3 1.7 4.5L18 9.2l-4.3 1.7L12 15.5l-1.7-4.6L6 9.2l4.3-1.7L12 3Z" />
      <path d="m5 16 .8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16Z" />
      <path d="m19 14 1 2.8L23 18l-3 1.2-1 2.8-1-2.8L15 18l3-1.2 1-2.8Z" />
    </svg>
  );
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M7 3v6a5 5 0 0 0 10 0V3" />
      <path d="M9 3H5" />
      <path d="M19 3h-4" />
      <path d="M13 14v2a4 4 0 0 0 8 0v-1.2a2.8 2.8 0 1 0-2 0V16a2 2 0 0 1-4 0v-2" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <rect x="4" y="10" width="16" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M21 16.5v2a1.7 1.7 0 0 1-1.8 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4 5.2 1.7 1.7 0 0 1 5.7 3.4h2a1.7 1.7 0 0 1 1.7 1.5c.1 1 .4 2 .8 2.9a1.7 1.7 0 0 1-.4 1.8l-.9.9a13.5 13.5 0 0 0 4.7 4.7l.9-.9a1.7 1.7 0 0 1 1.8-.4c.9.4 1.9.7 2.9.8a1.7 1.7 0 0 1 1.5 1.8Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M20 11.5A7.5 7.5 0 0 1 8.8 18L4 19.5l1.5-4.6A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M14.7 13.7v.8a.7.7 0 0 1-.8.7 6.4 6.4 0 0 1-2.7-1 6.1 6.1 0 0 1-1.9-1.9 6.4 6.4 0 0 1-1-2.7.7.7 0 0 1 .7-.8h.8a.7.7 0 0 1 .7.6c0 .4.2.7.3 1.1.1.2 0 .4-.1.6l-.4.4a5.1 5.1 0 0 0 1.8 1.8l.4-.4c.2-.2.4-.2.6-.1.4.1.7.3 1.1.3a.7.7 0 0 1 .5.6Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10v6" />
      <path d="M8 7.5h0" />
      <path d="M12 16v-3.5a2.5 2.5 0 1 1 5 0V16" />
      <path d="M12 10v6" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...createBaseProps(props)}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
