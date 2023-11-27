export const isMobile = window.innerWidth <= 768;
export const tz40 = isMobile ? {} : { transform: 'translateZ(40px)' };
export const tz30 = isMobile ? {} : { transform: 'translateZ(30px)' };
export const tz20 = isMobile ? {} : { transform: 'translateZ(20px)' };
export const tz10 = isMobile ? {} : { transform: 'translateZ(10px)' };
export const p3d = isMobile ? {} : { transformStyle: 'preserve-3d' };