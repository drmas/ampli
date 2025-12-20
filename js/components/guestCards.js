/**
 * Ampli Guest Cards Component
 * Renders guest cards with headshots, info, and content links
 */

(function() {
    'use strict';

    // LinkedIn SVG icon
    const linkedinIcon = `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`;

    // Arrow icon for content button
    const arrowIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>`;

    /**
     * Get initials from a name
     * @param {string} name - Full name
     * @returns {string} - Two letter initials
     */
    function getInitials(name) {
        if (!name) return '??';
        const parts = name.trim().split(' ');
        if (parts.length === 1) {
            return parts[0].substring(0, 2).toUpperCase();
        }
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    /**
     * Get content button label based on format
     * @param {string} format - Content format (video, article, podcast)
     * @returns {string} - Button label
     */
    function getContentLabel(format) {
        switch (format?.toLowerCase()) {
            case 'video': return 'Watch';
            case 'podcast': return 'Listen';
            case 'article':
            default: return 'Read';
        }
    }

    /**
     * Create a single guest card HTML
     * @param {Object} guest - Guest data object
     * @param {number} index - Card index for staggered animation
     * @returns {string} - HTML string for guest card
     */
    function createGuestCard(guest, index) {
        const initials = getInitials(guest.name);
        const contentLabel = getContentLabel(guest.format);
        const titleCompany = guest.company
            ? `${guest.title} at ${guest.company}`
            : guest.title;

        return `
            <div class="guest-card reveal" style="--card-index: ${index}">
                <div class="guest-avatar">
                    <div class="guest-avatar-inner">
                        ${guest.headshot ? `
                            <img
                                src="${guest.headshot}"
                                alt="${guest.name}"
                                loading="lazy"
                                onerror="this.classList.add('error')"
                            >
                        ` : ''}
                        <div class="guest-initials">${initials}</div>
                    </div>
                </div>
                <div class="guest-info">
                    <h3 class="guest-name">${guest.name}</h3>
                    <p class="guest-title">${titleCompany}</p>
                </div>
                <div class="guest-links">
                    ${guest.linkedinUrl ? `
                        <a
                            href="${guest.linkedinUrl}"
                            class="guest-linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View ${guest.name} on LinkedIn"
                            data-cta="guest_linkedin_${guest.id}"
                        >
                            ${linkedinIcon}
                        </a>
                    ` : ''}
                    ${guest.contentUrl ? `
                        <a
                            href="${guest.contentUrl}"
                            class="guest-content-btn"
                            data-format="${guest.format || 'article'}"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cta="guest_content_${guest.id}"
                        >
                            ${contentLabel}
                            ${arrowIcon}
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }

    /**
     * Render featured guests section on home page
     * @param {string} containerId - Container element ID
     * @param {Object} options - Configuration options
     */
    async function renderFeaturedGuests(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Guest cards container #${containerId} not found`);
            return;
        }

        const {
            basePath = '',
            dataPath = '/data/guests.json',
            limit = 6,
            showViewAll = true,
            viewAllUrl = '/guests/'
        } = options;

        try {
            // Fetch guest data
            const response = await fetch(basePath + dataPath);
            if (!response.ok) throw new Error('Failed to fetch guests');
            const data = await response.json();

            // Filter to featured guests only
            const featuredGuests = data.guests
                .filter(g => g.featured)
                .slice(0, limit);

            if (featuredGuests.length === 0) {
                container.innerHTML = '';
                return;
            }

            // Build HTML
            const cardsHtml = featuredGuests
                .map((guest, index) => createGuestCard(guest, index))
                .join('');

            container.innerHTML = `
                <div class="section-header reveal">
                    <span class="label">Meetup Speakers</span>
                    <h2>The Minds Behind <span class="text-gradient">the Signal</span></h2>
                    <p>Product leaders from HelloFresh, Delivery Hero, and Berlin's top startups who've spoken at our meetups.</p>
                </div>

                <div class="guests-grid">
                    ${cardsHtml}
                </div>

                ${showViewAll ? `
                    <div class="guests-cta reveal">
                        <a href="${viewAllUrl}" class="btn btn-secondary" data-cta="view_all_guests">
                            Meet All Speakers
                            ${arrowIcon}
                        </a>
                    </div>
                ` : ''}
            `;

            // Re-trigger scroll reveal for dynamically added elements
            if (window.Ampli && window.Ampli.initScrollReveal) {
                window.Ampli.initScrollReveal();
            }

        } catch (error) {
            console.error('Error loading guests:', error);
            container.innerHTML = '';
        }
    }

    /**
     * Render full guest grid for /guests page
     * @param {string} containerId - Container element ID
     * @param {Object} options - Configuration options
     */
    async function renderGuestGrid(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Guest grid container #${containerId} not found`);
            return;
        }

        const {
            basePath = '',
            dataPath = '/data/guests.json',
            gridClass = 'guests-grid-full'
        } = options;

        try {
            // Fetch guest data
            const response = await fetch(basePath + dataPath);
            if (!response.ok) throw new Error('Failed to fetch guests');
            const data = await response.json();

            const guests = data.guests || [];

            if (guests.length === 0) {
                container.innerHTML = '<p class="text-center" style="color: var(--text-muted);">No guests yet. Check back soon!</p>';
                return;
            }

            // Build cards HTML
            const cardsHtml = guests
                .map((guest, index) => createGuestCard(guest, index))
                .join('');

            container.innerHTML = `
                <div class="${gridClass}">
                    ${cardsHtml}
                </div>
            `;

            // Re-trigger scroll reveal
            if (window.Ampli && window.Ampli.initScrollReveal) {
                window.Ampli.initScrollReveal();
            }

            return guests.length;

        } catch (error) {
            console.error('Error loading guest grid:', error);
            container.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Unable to load guests. Please try again later.</p>';
            return 0;
        }
    }

    /**
     * Get guest count for stats display
     * @param {Object} options - Configuration options
     * @returns {Promise<number>} - Number of guests
     */
    async function getGuestCount(options = {}) {
        const {
            basePath = '',
            dataPath = '/data/guests.json'
        } = options;

        try {
            const response = await fetch(basePath + dataPath);
            if (!response.ok) return 0;
            const data = await response.json();
            return data.guests?.length || 0;
        } catch {
            return 0;
        }
    }

    /**
     * Get become guest URL from data
     * @param {Object} options - Configuration options
     * @returns {Promise<string>} - Become guest URL
     */
    async function getBecomeGuestUrl(options = {}) {
        const {
            basePath = '',
            dataPath = '/data/guests.json',
            fallback = 'mailto:amplitechcom@gmail.com?subject=Guest%20Inquiry'
        } = options;

        try {
            const response = await fetch(basePath + dataPath);
            if (!response.ok) return fallback;
            const data = await response.json();
            return data.becomeGuestUrl || fallback;
        } catch {
            return fallback;
        }
    }

    // Export to global Ampli namespace
    window.Ampli = window.Ampli || {};
    window.Ampli.renderFeaturedGuests = renderFeaturedGuests;
    window.Ampli.renderGuestGrid = renderGuestGrid;
    window.Ampli.getGuestCount = getGuestCount;
    window.Ampli.getBecomeGuestUrl = getBecomeGuestUrl;

})();
