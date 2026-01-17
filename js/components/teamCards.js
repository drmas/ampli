(function() {
  'use strict';

  /**
   * Renders team cards matching the exact structure from /about/team/index.html
   * @param {string} containerId - The ID of the container element
   * @param {Object} options - Configuration options
   * @param {string} options.basePath - Path prefix for images (default: './')
   */
  function renderTeamCards(containerId, userOptions = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const options = {
      basePath: './',
      ...userOptions
    };

    const prefix = options.basePath;
    const teamMembers = window.Ampli?.teamMembers || [];

    if (teamMembers.length === 0) {
      console.warn('Team data not loaded. Make sure to include js/data/team.js before teamCards.js');
      return;
    }

    const cardsHTML = teamMembers.map(member => `
      <div class="team-card card reveal">
        <div class="team-card-avatar">
          <img src="${prefix}${member.image}" alt="${member.name}" onerror="this.style.display='none'; this.parentElement.textContent='${member.initial}';">
        </div>
        <div class="team-card-name">${member.name}</div>
        <div class="team-card-role">${member.handle}</div>
        <div class="team-card-bio">${member.bio}</div>
        <div class="team-card-social">
          <a href="${member.linkedin}" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    `).join('');

    container.innerHTML = cardsHTML;
  }

  // Export to global Ampli namespace
  window.Ampli = window.Ampli || {};
  window.Ampli.renderTeamCards = renderTeamCards;
})();
