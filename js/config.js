/* ============================================
   AMPLI - Configuration Constants
   ============================================ */

// Contact Email
export const CONTACT_EMAIL = 'amplitechcom@gmail.com';

// External Links
export const LINKS = {
    substack: 'https://ampli.substack.com',
    substackBerlin: 'https://ampli.substack.com/s/ampli-berlin',
    substackVibeAI: 'https://ampli.substack.com/s/ampli-vibe-ai',
    luma: 'https://luma.com/ampli',
    twitter: 'https://x.com/ampli_tech',
    linkedin: 'https://www.linkedin.com/company/ampli-tech'
};

// Make available globally for HTML mailto links
window.AMPLI_CONFIG = {
    email: CONTACT_EMAIL,
    links: LINKS
};
