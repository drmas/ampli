/* ============================================
   AMPLI - Configuration Constants
   ============================================ */

// Contact Email
export const CONTACT_EMAIL = 'amplitechcom@gmail.com';

// External Links
export const LINKS = {
    substack: 'https://ampli.substack.com',
    substackBerlin: 'https://ampli.substack.com',
    substackVibeAI: 'https://amplivibeai.substack.com',
    substackBerlinSubscribe: 'https://ampli.substack.com/subscribe',
    substackVibeAISubscribe: 'https://amplivibeai.substack.com/subscribe',
    luma: 'https://luma.com/ampli',
    twitter: 'https://x.com/amplixyz',
    linkedin: 'https://www.linkedin.com/company/ampli-community',
    instagram: 'https://www.instagram.com/ampli.xyz/'
};

// Make available globally for HTML mailto links
window.AMPLI_CONFIG = {
    email: CONTACT_EMAIL,
    links: LINKS
};
