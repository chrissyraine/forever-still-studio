<?php
/**
 * Forever Still Studio — Child Theme Functions
 * Parent theme: Hello Elementor
 *
 * HOW TO USE:
 * 1. Create a folder in wp-content/themes/ called "forever-still-studio"
 * 2. Add this file (functions.php) and the style.css file to that folder
 * 3. Go to Appearance > Themes and activate "Forever Still Studio Child"
 */

// Load parent theme stylesheet
add_action( 'wp_enqueue_scripts', 'fss_enqueue_styles' );
function fss_enqueue_styles() {
    wp_enqueue_style(
        'hello-elementor-style',
        get_template_directory_uri() . '/style.css'
    );

    // Google Fonts
    wp_enqueue_style(
        'fss-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap',
        [],
        null
    );

    // Brand CSS
    wp_enqueue_style(
        'fss-brand',
        get_stylesheet_directory_uri() . '/brand.css',
        [ 'fss-google-fonts' ],
        '1.0.0'
    );
}

// Preconnect to Google Fonts for performance
add_action( 'wp_head', 'fss_preconnect_fonts', 1 );
function fss_preconnect_fonts() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}

// Add mobile CTA bar to footer
add_action( 'wp_footer', 'fss_mobile_cta_bar' );
function fss_mobile_cta_bar() {
    ?>
    <a href="sms:8142820777" class="fss-mobile-cta" aria-label="Text Chrissy at Forever Still Studio">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        Text Me — I'll Show You What's Costing You Customers
    </a>
    <?php
}

// Show mobile CTA only after scrolling past hero
add_action( 'wp_footer', 'fss_mobile_cta_scroll_script' );
function fss_mobile_cta_scroll_script() {
    ?>
    <script>
    (function() {
        var bar = document.querySelector('.fss-mobile-cta');
        if (!bar) return;
        bar.style.transform = 'translateY(100%)';
        bar.style.transition = 'transform 0.3s ease';
        window.addEventListener('scroll', function() {
            if (window.scrollY > 600) {
                bar.style.transform = 'translateY(0)';
            } else {
                bar.style.transform = 'translateY(100%)';
            }
        }, { passive: true });
    })();
    </script>
    <?php
}

// SEO: Add local business schema
add_action( 'wp_head', 'fss_local_business_schema' );
function fss_local_business_schema() {
    if ( ! is_front_page() ) return;
    $schema = [
        '@context'    => 'https://schema.org',
        '@type'       => 'ProfessionalService',
        'name'        => 'Forever Still Studio',
        'description' => 'Web design for local businesses in Titusville, PA. Fast, mobile-friendly websites that bring in more customers.',
        'url'         => 'https://www.foreverstillstudio.com',
        'telephone'   => '+18142820777',
        'email'       => 'chrissyschroer@gmail.com',
        'address'     => [
            '@type'           => 'PostalAddress',
            'addressLocality' => 'Titusville',
            'addressRegion'   => 'PA',
            'addressCountry'  => 'US',
        ],
        'areaServed'       => 'Northwest Pennsylvania',
        'priceRange'       => '$$',
        'knowsAbout'       => [ 'Web Design', 'Local SEO', 'Social Media Setup', 'Small Business Marketing' ],
        'hasCredential'    => 'Veteran-Owned Business',
    ];
    echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT ) . '</script>' . "\n";
}
