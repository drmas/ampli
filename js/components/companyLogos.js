(function() {
  'use strict';

  // Default Berlin companies (all 11)
  const DEFAULT_COMPANIES = [
    { name: 'Zalando', logo: 'images/companies/zalando.png' },
    { name: 'GetYourGuide', logo: 'images/companies/getyourguide.png' },
    { name: 'Delivery Hero', logo: 'images/companies/deliveryhero.png' },
    { name: 'HelloFresh', logo: 'images/companies/hellofresh.png' },
    { name: 'AirHelp', logo: 'images/companies/airhelp.png' },
    { name: 'Kittl', logo: 'images/companies/kittl.png' },
    { name: 'HeyJobs', logo: 'images/companies/heyjobs.png' },
    { name: 'ESMT Berlin', logo: 'images/companies/esmt.png' },
    { name: 'ETH Zürich', logo: 'images/companies/eth.png' },
    { name: 'HomeToGo', logo: 'images/companies/hometogo.png' },
    { name: 'Trade Republic', logo: 'images/companies/traderepublic.png' }
  ];

  function renderCompanyLogos(containerId, userOptions = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const options = {
      title: 'Readers from Leading Companies',
      subtitle: 'Trusted by Professionals',
      description: 'Join thousands of professionals from Berlin\'s top tech companies.',
      companies: DEFAULT_COMPANIES,
      basePath: './',
      showSection: true,
      ...userOptions
    };

    // Generate logo HTML (duplicated for seamless loop)
    const logosHTML = options.companies.map(c =>
      `<div class="company-logo">
        <img src="${options.basePath}${c.logo}" alt="${c.name}" loading="lazy">
      </div>`
    ).join('');

    // Render with section header + carousel
    container.innerHTML = `
      ${options.showSection ? `
        <div class="section-header reveal">
          <span class="label">${options.subtitle}</span>
          <h2>${options.title}</h2>
          <p>${options.description}</p>
        </div>
      ` : ''}
      <div class="company-logos reveal">
        <div class="company-logos-track">
          ${logosHTML}${logosHTML}
        </div>
      </div>
    `;

    // Re-trigger scroll reveal
    if (window.Ampli?.initScrollReveal) {
      window.Ampli.initScrollReveal();
    }
  }

  window.Ampli = window.Ampli || {};
  window.Ampli.renderCompanyLogos = renderCompanyLogos;
})();
