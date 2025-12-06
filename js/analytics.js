// Google Analytics (GA4) with CTA event tracking (no consent gate)
(function () {
    const MEASUREMENT_ID = 'G-3EBWYHMT3D';
    let gaLoaded = false;

    const initGtag = () => {
        if (!MEASUREMENT_ID || MEASUREMENT_ID === 'G-XXXX') return;
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', MEASUREMENT_ID, { transport_type: 'beacon' });
        gaLoaded = true;
    };

    const loadAnalytics = () => {
        if (gaLoaded) return;
        if (!MEASUREMENT_ID || MEASUREMENT_ID === 'G-XXXX') return;

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
        script.onload = initGtag;
        document.head.appendChild(script);
    };

    const trackCtaClick = (label) => {
        if (!gaLoaded || typeof window.gtag !== 'function') return;
        window.gtag('event', 'click', {
            event_category: 'cta',
            event_label: label,
            transport_type: 'beacon'
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        // Load GA immediately (no consent gate)
        loadAnalytics();

        // Track CTA clicks
        document.addEventListener(
            'click',
            (e) => {
                const target = e.target.closest('[data-cta]');
                if (!target) return;
                const label = target.getAttribute('data-cta') || 'cta_unknown';
                trackCtaClick(label);
            },
            true
        );
    });
})();
