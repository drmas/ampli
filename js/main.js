/* ============================================
   AMPLI - Main JavaScript
   ============================================ */

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.nav-mobile');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// RSS Feed Fetcher
async function fetchRSSFeed(feedUrl, containerId, limit = 5) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    try {
        container.innerHTML = '<div class="loading">Loading recent issues...</div>';

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error('Failed to fetch feed');
        }

        const items = data.items.slice(0, limit);

        container.innerHTML = items.map(item => {
            const date = new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            // Get image from enclosure, thumbnail, or content
            const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
            let thumbnail = item.thumbnail || item.enclosure?.link || (imgMatch ? imgMatch[1] : null);

            // Fix Substack CDN URL encoding issues and get higher resolution
            if (thumbnail && thumbnail.includes('substackcdn.com')) {
                thumbnail = thumbnail.replace(/w_\d+/, 'w_800').replace(/\$[^/]+/, '');
            }

            // Clean description
            const description = item.description
                ?.replace(/<[^>]+>/g, '')
                ?.slice(0, 150) + '...';

            return `
                <a href="${item.link}" target="_blank" rel="noopener" class="issue-card card">
                    ${thumbnail ? `
                        <div class="issue-card-image">
                            <img src="${thumbnail}" alt="${item.title}" loading="lazy">
                        </div>
                    ` : ''}
                    <div class="issue-card-content">
                        <div class="issue-card-date">${date}</div>
                        <h4>${item.title}</h4>
                        <p>${description}</p>
                    </div>
                </a>
            `;
        }).join('');

    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        container.innerHTML = `
            <div class="card" style="text-align: center; padding: var(--space-2xl);">
                <p style="margin-bottom: var(--space-lg);">Unable to load recent issues</p>
                <a href="${feedUrl.replace('/feed', '')}" target="_blank" class="btn btn-secondary">
                    View on Substack
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                </a>
            </div>
        `;
    }
}

// Form Validation
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const checkboxes = form.querySelectorAll('.channel-checkbox');
            if (checkboxes.length > 0) {
                const hasChecked = [...checkboxes].some(cb => cb.checked);
                if (!hasChecked) {
                    e.preventDefault();
                    alert('Please select at least one newsletter to subscribe to.');
                }
            }
        });
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(8, 7, 13, 0.95)';
        } else {
            header.style.background = 'linear-gradient(to bottom, var(--bg-primary), transparent)';
        }

        lastScroll = currentScroll;
    });
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initFormValidation();
    initHeaderScroll();
});

// Export for use in page-specific scripts
window.Ampli = {
    fetchRSSFeed
};
