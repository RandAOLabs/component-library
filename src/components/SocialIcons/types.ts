export type SocialPlatform = 'discord' | 'x' | 'telegram' | 'reddit' | 'youtube';

export interface SocialLink {
    platform: SocialPlatform;
    url: string;
    ariaLabel?: string;
}

export interface SocialIconProps {
    platform: SocialPlatform;
    url: string;
    size?: number;
    ariaLabel?: string;
    className?: string;
}

export interface SocialIconsProps {
    links: SocialLink[];
    size?: number;
    className?: string;
}
