/**
 * Social Media Integration Component
 * Provides social sharing functionality and social media presence
 * Addresses HIGH priority SEO issue: Connect with social media networks
 */

class SocialMediaIntegration {
    constructor() {
        this.currentUrl = encodeURIComponent(window.location.href);
        this.currentTitle = encodeURIComponent(document.title);
        this.description = encodeURIComponent("Make decisions easily with our popular decision wheel spinner. Add your options and spin the wheel to get random results.");
        this.hashtags = "DecisionWheel,SpinWheel,RandomChoice,DecisionMaker";
        this.via = "wheelspinner";
        
        this.init();
    }

    init() {
        this.createSocialShareButtons();
        this.addSocialMetaSupport();
        this.initializeAnalytics();
        this.setupLanguageChangeListener();
    }

    /**
     * Setup listener for language changes
     */
    setupLanguageChangeListener() {
        // Listen for language change events
        document.addEventListener('languageChanged', () => {
            this.updateSocialProofLanguage();
        });

        // Also listen for custom language change events from the language selector
        document.addEventListener('wheelLanguageChanged', () => {
            this.updateSocialProofLanguage();
        });
    }

    /**
     * Create social sharing buttons
     */
    createSocialShareButtons() {
        // Create social share container
        const socialContainer = document.createElement('div');
        socialContainer.className = 'social-share-container glass-card';
        socialContainer.innerHTML = `
            <h3 class="social-title">Share Your Decision</h3>
            <p class="social-subtitle">Let others know about this useful tool!</p>
            <div class="social-buttons">
                ${this.createShareButton('twitter', 'Twitter', '🐦')}
                ${this.createShareButton('facebook', 'Facebook', '📘')}
                ${this.createShareButton('linkedin', 'LinkedIn', '💼')}
                ${this.createShareButton('reddit', 'Reddit', '🔴')}
                ${this.createShareButton('whatsapp', 'WhatsApp', '💬')}
                ${this.createShareButton('telegram', 'Telegram', '✈️')}
                ${this.createShareButton('copy', 'Copy Link', '🔗')}
            </div>
            <div class="social-follow">
                <p>Follow us for updates:</p>
                <div class="follow-buttons">
                    <a href="https://twitter.com/wheelspinner" target="_blank" rel="noopener noreferrer" class="follow-btn twitter-follow">
                        🐦 Follow @wheelspinner
                    </a>
                </div>
            </div>
        `;

        // Add to main container after wheel section
        const wheelSection = document.querySelector('.wheel-container');
        if (wheelSection) {
            wheelSection.insertAdjacentElement('afterend', socialContainer);
        }

        // Add event listeners
        this.attachSocialListeners();
    }

    /**
     * Create individual share button HTML
     */
    createShareButton(platform, name, emoji) {
        return `
            <button class="social-btn social-btn-${platform}" 
                    data-platform="${platform}" 
                    title="Share on ${name}"
                    aria-label="Share on ${name}">
                <span class="social-emoji">${emoji}</span>
                <span class="social-name">${name}</span>
            </button>
        `;
    }

    /**
     * Attach event listeners to social buttons
     */
    attachSocialListeners() {
        const socialButtons = document.querySelectorAll('.social-btn');
        socialButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const platform = e.currentTarget.getAttribute('data-platform');
                this.handleShare(platform);
            });
        });
    }

    /**
     * Handle social sharing based on platform
     */
    handleShare(platform) {
        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?url=${this.currentUrl}&text=${this.currentTitle}&hashtags=${this.hashtags}&via=${this.via}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${this.currentUrl}`,
            reddit: `https://reddit.com/submit?url=${this.currentUrl}&title=${this.currentTitle}`,
            whatsapp: `https://api.whatsapp.com/send?text=${this.currentTitle} ${this.currentUrl}`,
            telegram: `https://t.me/share/url?url=${this.currentUrl}&text=${this.currentTitle}`
        };

        if (platform === 'copy') {
            this.copyToClipboard();
        } else if (shareUrls[platform]) {
            // Track share event
            this.trackSocialShare(platform);
            
            // Open share window
            window.open(
                shareUrls[platform],
                `share-${platform}`,
                'width=600,height=400,scrollbars=yes,resizable=yes'
            );
        }
    }

    /**
     * Copy current URL to clipboard
     */
    async copyToClipboard() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            this.showCopySuccess();
            this.trackSocialShare('copy');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showCopySuccess();
        }
    }

    /**
     * Show copy success message
     */
    showCopySuccess() {
        const copyBtn = document.querySelector('.social-btn-copy');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span class="social-emoji">✅</span><span class="social-name">Copied!</span>';
            copyBtn.classList.add('success');
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.classList.remove('success');
            }, 2000);
        }
    }

    /**
     * Add enhanced social meta support
     */
    addSocialMetaSupport() {
        // Add JSON-LD for social media presence
        const socialSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Decision Wheel Spinner",
            "url": window.location.origin,
            "sameAs": [
                "https://twitter.com/wheelspinner"
            ],
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": window.location.origin + "/?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(socialSchema);
        document.head.appendChild(script);
    }

    /**
     * Track social sharing for analytics
     */
    trackSocialShare(platform) {
        // Google Analytics 4 event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                method: platform,
                content_type: 'decision_wheel',
                content_id: 'main_page'
            });
        }

        // Custom analytics tracking
        if (typeof analytics !== 'undefined') {
            analytics.track('Social Share', {
                platform: platform,
                url: window.location.href,
                title: document.title
            });
        }

        console.log(`Social share tracked: ${platform}`);
    }

    /**
     * Initialize social analytics
     */
    initializeAnalytics() {
        // Add social interaction tracking
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                custom_map: {'custom_parameter_1': 'social_platform'}
            });
        }
    }

    /**
     * Add social proof elements with internationalization
     */
    addSocialProof() {
        const proofContainer = document.createElement('div');
        proofContainer.className = 'social-proof glass-card';
        
        // Get current language translations, fallback to English if not available
        const translations = this.getTranslations();
        
        proofContainer.innerHTML = `
            <div class="proof-stats">
                <div class="proof-stat">
                    <span class="proof-number">50K+</span>
                    <span class="proof-label">${translations.happyUsers}</span>
                </div>
                <div class="proof-stat">
                    <span class="proof-number">1M+</span>
                    <span class="proof-label">${translations.decisionsMade}</span>
                </div>
                <div class="proof-stat">
                    <span class="proof-number">4.8★</span>
                    <span class="proof-label">${translations.userRating}</span>
                </div>
            </div>
            <p class="proof-text">${translations.trustedText}</p>
        `;

        // Add after header
        const header = document.querySelector('header');
        if (header) {
            header.insertAdjacentElement('afterend', proofContainer);
        }
        
        // Store reference for language updates
        this.socialProofContainer = proofContainer;
    }

    /**
     * Get current language translations for social proof
     */
    getTranslations() {
        // Try to get translations from global language manager
        if (window.languageManager && window.languageManager.getCurrentTranslations) {
            const translations = window.languageManager.getCurrentTranslations();
            if (translations && translations.socialProof) {
                return translations.socialProof;
            }
        }
        
        // Fallback to detecting browser language
        const browserLang = this.detectBrowserLanguage();
        return this.getFallbackTranslations(browserLang);
    }

    /**
     * Detect browser language
     */
    detectBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage || 'en';
        return lang.split('-')[0]; // Get base language code (e.g., 'en' from 'en-US')
    }

    /**
     * Get fallback translations based on language code
     */
    getFallbackTranslations(langCode) {
        const translations = {
            'en': {
                happyUsers: 'Happy Users',
                decisionsMade: 'Decisions Made',
                userRating: 'User Rating',
                trustedText: 'Trusted by thousands of users worldwide'
            },
            'es': {
                happyUsers: 'Usuarios Felices',
                decisionsMade: 'Decisiones Tomadas',
                userRating: 'Calificación',
                trustedText: 'Confiado por miles de usuarios en todo el mundo'
            },
            'fr': {
                happyUsers: 'Utilisateurs Satisfaits',
                decisionsMade: 'Décisions Prises',
                userRating: 'Note des Utilisateurs',
                trustedText: 'Fait confiance par des milliers d\'utilisateurs dans le monde'
            },
            'de': {
                happyUsers: 'Zufriedene Nutzer',
                decisionsMade: 'Getroffene Entscheidungen',
                userRating: 'Nutzerbewertung',
                trustedText: 'Vertraut von Tausenden von Nutzern weltweit'
            },
            'pt': {
                happyUsers: 'Usuários Felizes',
                decisionsMade: 'Decisões Tomadas',
                userRating: 'Avaliação',
                trustedText: 'Confiado por milhares de usuários ao redor do mundo'
            },
            'ru': {
                happyUsers: 'Довольные Пользователи',
                decisionsMade: 'Принятые Решения',
                userRating: 'Рейтинг',
                trustedText: 'Доверяют тысячи пользователей по всему миру'
            },
            'zh': {
                happyUsers: '满意用户',
                decisionsMade: '做出的决定',
                userRating: '用户评级',
                trustedText: '受到全世界数千用户的信任'
            },
            'ja': {
                happyUsers: '満足したユーザー',
                decisionsMade: '決定数',
                userRating: 'ユーザー評価',
                trustedText: '世界中の何千ものユーザーに信頼されています'
            },
            'ko': {
                happyUsers: '만족한 사용자',
                decisionsMade: '내린 결정',
                userRating: '사용자 평점',
                trustedText: '전 세계 수천 명의 사용자가 신뢰합니다'
            },
            'hi': {
                happyUsers: 'खुश उपयोगकर्ता',
                decisionsMade: 'लिए गए निर्णय',
                userRating: 'उपयोगकर्ता रेटिंग',
                trustedText: 'दुनिया भर के हजारों उपयोगकर्ताओं द्वारा भरोसा किया गया'
            },
            'ar': {
                happyUsers: 'مستخدمون سعداء',
                decisionsMade: 'قرارات متخذة',
                userRating: 'تقييم المستخدمين',
                trustedText: 'موثوق به من قبل آلاف المستخدمين حول العالم'
            }
        };

        return translations[langCode] || translations['en']; // Fallback to English
    }

    /**
     * Update social proof when language changes
     */
    updateSocialProofLanguage() {
        if (this.socialProofContainer) {
            const translations = this.getTranslations();
            
            // Update the labels
            const labels = this.socialProofContainer.querySelectorAll('.proof-label');
            if (labels.length >= 3) {
                labels[0].textContent = translations.happyUsers;
                labels[1].textContent = translations.decisionsMade;
                labels[2].textContent = translations.userRating;
            }
            
            // Update the trust text
            const trustText = this.socialProofContainer.querySelector('.proof-text');
            if (trustText) {
                trustText.textContent = translations.trustedText;
            }
        }
    }

    /**
     * Initialize Web Share API support
     */
    initWebShareAPI() {
        if ('share' in navigator) {
            // Add native share button for mobile devices
            const nativeShareBtn = document.createElement('button');
            nativeShareBtn.className = 'social-btn social-btn-native';
            nativeShareBtn.innerHTML = '<span class="social-emoji">📱</span><span class="social-name">Share</span>';
            nativeShareBtn.addEventListener('click', async () => {
                try {
                    await navigator.share({
                        title: document.title,
                        text: this.description,
                        url: window.location.href
                    });
                    this.trackSocialShare('native');
                } catch (err) {
                    console.log('Native share cancelled or failed');
                }
            });

            // Add to social buttons
            const socialButtons = document.querySelector('.social-buttons');
            if (socialButtons) {
                socialButtons.appendChild(nativeShareBtn);
            }
        }
    }

    /**
     * Add social media widgets
     */
    addSocialWidgets() {
        // Twitter Follow Button
        const twitterWidget = document.createElement('div');
        twitterWidget.innerHTML = `
            <a href="https://twitter.com/wheelspinner?ref_src=twsrc%5Etfw" 
               class="twitter-follow-button" 
               data-show-count="false" 
               data-size="large" 
               data-show-screen-name="false">
               Follow @wheelspinner
            </a>
        `;

        // Load Twitter widgets script
        if (!document.querySelector('#twitter-wjs')) {
            const script = document.createElement('script');
            script.id = 'twitter-wjs';
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }

    /**
     * Update sharing data when wheel result changes
     */
    updateSharingData(winner) {
        if (winner) {
            this.currentTitle = encodeURIComponent(`I got "${winner}" on the Decision Wheel Spinner!`);
            this.description = encodeURIComponent(`I used the Decision Wheel Spinner and got "${winner}". Try it yourself!`);
        }
    }
}

// Styles for social integration
const socialStyles = `
    .social-share-container {
        margin: 2rem auto;
        max-width: 600px;
        text-align: center;
    }

    .social-title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        background: linear-gradient(45deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .social-subtitle {
        margin-bottom: 1.5rem;
        opacity: 0.9;
        font-size: 1rem;
    }

    .social-buttons {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 0.75rem;
        margin-bottom: 2rem;
    }

    .social-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        border: 2px solid var(--glass-border);
        border-radius: var(--radius-lg);
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        color: white;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .social-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        background: var(--glass-hover);
    }

    .social-btn.success {
        background: linear-gradient(135deg, #2ed573, #17a2b8);
        border-color: rgba(46, 213, 115, 0.5);
    }

    .social-emoji {
        font-size: 1.2rem;
    }

    .social-follow {
        padding-top: 1.5rem;
        border-top: 1px solid var(--glass-border);
    }

    .social-follow p {
        margin-bottom: 1rem;
        opacity: 0.8;
    }

    .follow-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .follow-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: linear-gradient(135deg, #1da1f2, #1991db);
        color: white;
        text-decoration: none;
        border-radius: var(--radius-lg);
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
    }

    .follow-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(29, 161, 242, 0.4);
    }

    .social-proof {
        margin: 1rem auto 2rem;
        max-width: 500px;
    }

    .proof-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .proof-stat {
        text-align: center;
    }

    .proof-number {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(45deg, #ff6b6b, #ffa726);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .proof-label {
        display: block;
        font-size: 0.9rem;
        opacity: 0.8;
        margin-top: 0.25rem;
    }

    .proof-text {
        text-align: center;
        opacity: 0.7;
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
        .social-buttons {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .proof-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
        }
        
        .proof-number {
            font-size: 1.25rem;
        }
    }

    @media (max-width: 480px) {
        .social-buttons {
            grid-template-columns: 1fr;
        }
        
        .social-btn {
            padding: 1rem;
        }
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = socialStyles;
document.head.appendChild(styleSheet);

// Initialize social media integration
document.addEventListener('DOMContentLoaded', () => {
    const socialIntegration = new SocialMediaIntegration();
    socialIntegration.addSocialProof();
    socialIntegration.initWebShareAPI();
    
    // Make available globally for other components
    window.socialIntegration = socialIntegration;
});

export default SocialMediaIntegration;