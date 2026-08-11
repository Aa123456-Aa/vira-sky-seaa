/** Brand/social icons as inline SVGs (lucide-react no longer ships brand icons). */

interface IconProps {
  size?: number;
  className?: string;
}

export function InstagramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function TelegramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.94 4.16a1.5 1.5 0 0 0-1.87-1.13L2.9 8.26a1.25 1.25 0 0 0-.17 2.38l4.64 1.6 1.8 5.6a1.25 1.25 0 0 0 2.03.56l2.6-2.42 4.5 3.32a1.25 1.25 0 0 0 1.96-.7l2.68-13.44zM7.83 11.8l9.56-5.9-6.2 6.97a.5.5 0 0 0-.13.25l-.46 3.05-1.24-3.87a.5.5 0 0 0-.3-.3l-1.23-.2z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.97L2 22l5.15-1.5A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.06.9.9-2.98-.2-.3a8.2 8.2 0 1 1 6.84 3.71zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.09-.4-.13-.56.12-.17.25-.65.8-.79.97-.15.16-.29.18-.54.06a6.8 6.8 0 0 1-3.37-2.94c-.25-.44.25-.41.72-1.36.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.3-.22.25-.85.84-.85 2.04s.87 2.36 1 2.53c.12.16 1.72 2.63 4.16 3.69.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}
