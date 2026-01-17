(function() {
  'use strict';

  /**
   * Team member data for Ampli
   * Shared across team page and workshop support team section
   */
  const teamMembers = [
    {
      name: 'Attia',
      bio: 'Techie and creator at heart, passionate about getting people together and making it easy for them to share their knowledge. Based in Berlin.',
      image: 'images/team/attia.jpg',
      linkedin: 'https://www.linkedin.com/in/attiamo',
      initial: 'A'
    },
    {
      name: 'Nada Elnadi',
      bio: 'Product designer, always curious, with a passion for art and travel 🎨🚀',
      image: 'images/team/Nada.jpg',
      linkedin: 'https://www.linkedin.com/in/nadaelnadi',
      initial: 'N'
    },
    {
      name: 'Medha',
      bio: 'Hi, I\'m Medha, a UX/UI designer based in Berlin. I switched careers after 5 years in tech to follow my passion. When I\'m not working, you\'ll find me exploring art galleries or planning my next travel adventure.',
      image: 'images/team/Medha.jpg',
      linkedin: 'https://www.linkedin.com/in/medha315',
      initial: 'M'
    },
    {
      name: 'Monica',
      bio: 'Growth Strategy & Content Contributor at Ampli Berlin.',
      image: 'images/team/monica.jpg',
      linkedin: 'https://www.linkedin.com/in/leyvamonica',
      initial: 'M'
    }
  ];

  // Export to global Ampli namespace
  window.Ampli = window.Ampli || {};
  window.Ampli.teamMembers = teamMembers;
})();
