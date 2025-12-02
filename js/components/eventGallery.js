(function() {
  'use strict';

  // Default Berlin events (all 6)
  const DEFAULT_EVENTS = [
    { image: 'images/events/event-1.jpg', alt: 'Tech professionals networking at Berlin meetup', featured: true },
    { image: 'images/events/event-2.jpg', alt: 'Engaging tech talk presentation', featured: false },
    { image: 'images/events/event-3.jpg', alt: 'Collaborative workshop session', featured: false },
    { image: 'images/events/event-4.jpg', alt: 'Community members discussing tech topics', featured: false },
    { image: 'images/events/event-5.jpg', alt: 'Casual networking and conversations', featured: false },
    { image: 'images/events/event-6.jpg', alt: 'Panel discussion with industry experts', featured: false }
  ];

  function renderEventGallery(containerId, userOptions = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const options = {
      title: 'Moments from Our Meetups',
      subtitle: 'Event Highlights',
      description: 'Snapshots from our community gatherings—tech talks, networking, and good vibes.',
      events: DEFAULT_EVENTS,
      basePath: './',
      ctaUrl: 'https://luma.com/ampli',
      ctaText: 'View All Upcoming Events on Luma',
      showSection: true,
      showCta: true,
      ...userOptions
    };

    // Generate gallery grid HTML
    const galleryHTML = options.events.map(e =>
      `<div class="gallery-item${e.featured ? ' featured' : ''}">
        <img src="${options.basePath}${e.image}" alt="${e.alt}" loading="lazy">
      </div>`
    ).join('');

    // Render with header + grid + CTA
    container.innerHTML = `
      ${options.showSection ? `
        <div class="section-header reveal">
          <span class="label">${options.subtitle}</span>
          <h2>${options.title}</h2>
          <p>${options.description}</p>
        </div>
      ` : ''}
      <div class="gallery-grid reveal">
        ${galleryHTML}
      </div>
      ${options.showCta ? `
        <div class="text-center reveal" style="margin-top: var(--space-xl);">
          <a href="${options.ctaUrl}" target="_blank" class="btn btn-channel">
            ${options.ctaText}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      ` : ''}
    `;

    // Re-trigger scroll reveal
    if (window.Ampli?.initScrollReveal) {
      window.Ampli.initScrollReveal();
    }
  }

  window.Ampli = window.Ampli || {};
  window.Ampli.renderEventGallery = renderEventGallery;
})();
