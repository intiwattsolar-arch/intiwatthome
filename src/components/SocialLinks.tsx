import { Instagram, Facebook, Linkedin } from "lucide-react";

const TikTok = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.5 3h-2.6v12.1a2.4 2.4 0 1 1-1.7-2.3V10a5.3 5.3 0 1 0 4.3 5.2V8.9c.9.6 2 1 3.2 1V7.3c-1.8 0-3.2-1.4-3.2-3.2V3Z" />
  </svg>
);

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/intiwatt", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/intiwatt.solar", Icon: Facebook },
  { label: "TikTok", href: "https://www.tiktok.com/@intiwatt", Icon: TikTok },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/intiwatt", Icon: Linkedin },
];

interface Props {
  className?: string;
  iconClassName?: string;
}

const SocialLinks = ({ className = "", iconClassName = "w-5 h-5" }: Props) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {socials.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Icon className={iconClassName} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
