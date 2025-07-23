/**
 * Social Media Enhancer - Advanced Social Integration
 * Lightweight alternative to AddThis with better performance
 * Provides comprehensive social media features for SEO and engagement
 */

class SocialMediaEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.addRichSharingSupport();
        this.enableSocialSignals();
        this.addMicroInteractions();
        this.trackSocialEngagement();
        this.setupLanguageChangeListeners();
    }

    /**
     * Setup listeners for language changes to update activity messages
     */
    setupLanguageChangeListeners() {
        // Listen for language change events
        document.addEventListener('languageChanged', () => {
            this.updateActivityLanguage();
        });

        // Also listen for custom language change events from the language selector
        document.addEventListener('wheelLanguageChanged', () => {
            this.updateActivityLanguage();
        });
    }

    /**
     * Update activity messages when language changes
     */
    updateActivityLanguage() {
        if (this.recentActivityIndicator) {
            const activityText = this.recentActivityIndicator.querySelector('#activity-text');
            if (activityText) {
                const newActivity = this.getRandomActivityMessage();
                activityText.textContent = newActivity;
            }
        }
    }

    /**
     * Add rich sharing support with OpenGraph+ features
     */
    addRichSharingSupport() {
        // Dynamic OpenGraph updates based on user interaction
        this.updateDynamicMetaTags();
        
        // Add rich sharing preview functionality
        this.createSharingPreviews();
    }

    /**
     * Update meta tags dynamically for better social sharing
     */
    updateDynamicMetaTags() {
        // Listen for wheel spin results to update sharing content
        document.addEventListener('wheelSpinComplete', (event) => {
            const winner = event.detail.winner;
            if (winner) {
                this.updateMetaForResult(winner);
            }
        });
    }

    /**
     * Update meta tags when user gets a result
     */
    updateMetaForResult(winner) {
        const newTitle = `I got "${winner}" on the Decision Wheel Spinner!`;
        const newDescription = `I used the Decision Wheel Spinner and got "${winner}". Try it yourself to make your decisions easier!`;
        
        // Update document title
        document.title = newTitle;
        
        // Update meta tags
        this.updateMetaTag('property', 'og:title', newTitle);
        this.updateMetaTag('property', 'og:description', newDescription);
        this.updateMetaTag('name', 'twitter:title', newTitle);
        this.updateMetaTag('name', 'twitter:description', newDescription);
        
        // Update sharing URLs in social integration
        if (window.socialIntegration) {
            window.socialIntegration.updateSharingData(winner);
        }
    }

    /**
     * Update or create meta tag
     */
    updateMetaTag(attribute, name, content) {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }

    /**
     * Create sharing preview functionality
     */
    createSharingPreviews() {
        // Add preview tooltips for social buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('.social-btn[data-platform]')) {
                const platform = e.target.getAttribute('data-platform');
                this.showSharingPreview(platform, e.target);
            }
        });
    }

    /**
     * Show preview of what will be shared
     */
    showSharingPreview(platform, button) {
        // Create and show preview tooltip
        const preview = document.createElement('div');
        preview.className = 'sharing-preview';
        preview.innerHTML = `
            <div class="preview-header">Sharing to ${platform}</div>
            <div class="preview-content">
                <strong>${document.title}</strong>
                <p>${document.querySelector('meta[name="description"]')?.content || ''}</p>
                <span class="preview-url">${window.location.href}</span>
            </div>
        `;
        
        // Position and show
        document.body.appendChild(preview);
        const rect = button.getBoundingClientRect();
        preview.style.position = 'fixed';
        preview.style.top = `${rect.top - preview.offsetHeight - 10}px`;
        preview.style.left = `${rect.left + (rect.width / 2) - (preview.offsetWidth / 2)}px`;
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (preview.parentNode) {
                preview.parentNode.removeChild(preview);
            }
        }, 3000);
    }

    /**
     * Enable social signals for SEO
     */
    enableSocialSignals() {
        // Add structured data for social interactions
        this.addSocialInteractionSchema();
        
        // Track social engagement metrics
        this.trackSocialMetrics();
        
        // Add social proof indicators
        this.addSocialProofIndicators();
    }

    /**
     * Add structured data for social interactions
     */
    addSocialInteractionSchema() {
        const interactionSchema = {
            "@context": "https://schema.org",
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/ShareAction",
            "name": "shares",
            "userInteractionCount": this.getSocialShareCount()
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(interactionSchema);
        document.head.appendChild(script);
    }

    /**
     * Get estimated social share count
     */
    getSocialShareCount() {
        // In a real app, this would come from analytics or social APIs
        return Math.floor(Math.random() * 5000) + 1000;
    }

    /**
     * Track social engagement metrics
     */
    trackSocialMetrics() {
        // Track time spent viewing social buttons
        this.trackSocialElementVisibility();
        
        // Track social button hover/interactions
        this.trackSocialInteractions();
    }

    /**
     * Track social element visibility for engagement metrics
     */
    trackSocialElementVisibility() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Track social elements coming into view
                    this.recordSocialEngagement('social_element_viewed', {
                        element: entry.target.className,
                        visibility: entry.intersectionRatio
                    });
                }
            });
        }, { threshold: 0.5 });

        // Observe social elements
        setTimeout(() => {
            const socialElements = document.querySelectorAll('.social-share-container, .social-proof');
            socialElements.forEach(el => observer.observe(el));
        }, 1000);
    }

    /**
     * Track social button interactions
     */
    trackSocialInteractions() {
        document.addEventListener('mouseenter', (e) => {
            if (e.target.matches('.social-btn')) {
                this.recordSocialEngagement('social_button_hover', {
                    platform: e.target.getAttribute('data-platform'),
                    timestamp: Date.now()
                });
            }
        });
    }

    /**
     * Record social engagement event
     */
    recordSocialEngagement(event, data) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', event, {
                custom_parameter_1: data.platform || 'unknown',
                engagement_time_msec: data.timestamp || Date.now()
            });
        }

        // Custom analytics
        console.log(`Social engagement: ${event}`, data);
    }

    /**
     * Add social proof indicators
     */
    addSocialProofIndicators() {
        // Add live sharing counter
        this.addLiveSharingCounter();
        
        // Add recent activity indicator
        this.addRecentActivityIndicator();
    }

    /**
     * Add live sharing counter
     */
    addLiveSharingCounter() {
        const counter = document.createElement('div');
        counter.className = 'live-sharing-counter';
        counter.innerHTML = `
            <div class="counter-content">
                <span class="counter-icon">📊</span>
                <span class="counter-text">
                    <strong id="share-count">${this.getSocialShareCount().toLocaleString()}</strong> 
                    people shared this tool
                </span>
            </div>
        `;

        // Add to social proof section
        const socialProof = document.querySelector('.social-proof');
        if (socialProof) {
            socialProof.appendChild(counter);
        }

        // Animate counter occasionally
        this.animateShareCounter();
    }

    /**
     * Animate share counter for engagement
     */
    animateShareCounter() {
        setInterval(() => {
            const counter = document.getElementById('share-count');
            if (counter && Math.random() < 0.3) { // 30% chance every interval
                const currentCount = parseInt(counter.textContent.replace(/,/g, ''));
                const newCount = currentCount + Math.floor(Math.random() * 3) + 1;
                counter.textContent = newCount.toLocaleString();
                
                // Add animation effect
                counter.style.animation = 'none';
                counter.offsetHeight; // Trigger reflow
                counter.style.animation = 'countUp 0.5s ease-out';
                
                // Track the update for social signals
                this.recordSocialEngagement('share_count_updated', { count: newCount });
            }
        }, 30000); // Every 30 seconds
    }

    /**
     * Add recent activity indicator
     */
    addRecentActivityIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'recent-activity';
        
        // Get initial activity message
        const initialActivity = this.getRandomActivityMessage();
        indicator.innerHTML = `
            <div class="activity-content">
                <span class="activity-dot"></span>
                <span class="activity-text" id="activity-text">
                    ${initialActivity}
                </span>
            </div>
        `;

        // Add to social proof
        const socialProof = document.querySelector('.social-proof');
        if (socialProof) {
            socialProof.appendChild(indicator);
        }

        // Store reference for language updates
        this.recentActivityIndicator = indicator;

        // Update activity text periodically
        this.activityInterval = setInterval(() => {
            const activityText = document.getElementById('activity-text');
            if (activityText) {
                const newActivity = this.getRandomActivityMessage();
                
                // Add fade effect
                activityText.style.opacity = '0';
                setTimeout(() => {
                    activityText.textContent = newActivity;
                    activityText.style.opacity = '1';
                }, 200);
            }
        }, 45000); // Every 45 seconds
    }

    /**
     * Get random activity message in current language
     */
    getRandomActivityMessage() {
        const translations = this.getActivityTranslations();
        const messages = translations.messages || [
            "Someone in New York just spun the wheel",
            "A user from London shared their result",
            "Someone from Tokyo made a decision",
            "A user from Sydney used the wheel",
            "Someone from Berlin got their answer"
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    /**
     * Get activity translations for current language
     */
    getActivityTranslations() {
        // Try to get translations from global language manager
        if (window.languageManager && window.languageManager.getCurrentTranslations) {
            const translations = window.languageManager.getCurrentTranslations();
            if (translations && translations.recentActivity) {
                return translations.recentActivity;
            }
        }
        
        // Fallback to detecting browser language
        const browserLang = this.detectBrowserLanguage();
        return this.getFallbackActivityTranslations(browserLang);
    }

    /**
     * Get fallback activity translations based on language code
     */
    getFallbackActivityTranslations(langCode) {
        const translations = {
            'en': {
                messages: [
                    'Someone in New York just spun the wheel',
                    'A user from London shared their result',
                    'Someone from Tokyo made a decision',
                    'A user from Sydney used the wheel',
                    'Someone from Berlin got their answer'
                ]
            },
            'es': {
                messages: [
                    'Alguien en Nueva York acaba de girar la rueda',
                    'Un usuario de Londres compartió su resultado',
                    'Alguien de Tokio tomó una decisión',
                    'Un usuario de Sídney usó la rueda',
                    'Alguien de Berlín obtuvo su respuesta'
                ]
            },
            'fr': {
                messages: [
                    'Quelqu\'un à New York vient de faire tourner la roue',
                    'Un utilisateur de Londres a partagé son résultat',
                    'Quelqu\'un de Tokyo a pris une décision',
                    'Un utilisateur de Sydney a utilisé la roue',
                    'Quelqu\'un de Berlin a obtenu sa réponse'
                ]
            },
            'de': {
                messages: [
                    'Jemand in New York hat gerade das Rad gedreht',
                    'Ein Nutzer aus London hat sein Ergebnis geteilt',
                    'Jemand aus Tokio hat eine Entscheidung getroffen',
                    'Ein Nutzer aus Sydney hat das Rad benutzt',
                    'Jemand aus Berlin hat seine Antwort erhalten'
                ]
            },
            'pt': {
                messages: [
                    'Alguém em Nova York acabou de girar a roleta',
                    'Um usuário de Londres compartilhou seu resultado',
                    'Alguém de Tóquio tomou uma decisão',
                    'Um usuário de Sydney usou a roleta',
                    'Alguém de Berlim obteve sua resposta'
                ]
            },
            'ru': {
                messages: [
                    'Кто-то в Нью-Йорке только что крутнул колесо',
                    'Пользователь из Лондона поделился результатом',
                    'Кто-то из Токио принял решение',
                    'Пользователь из Сиднея использовал колесо',
                    'Кто-то из Берлина получил ответ'
                ]
            },
            'zh': {
                messages: [
                    '纽约的某人刚刚转动了转盘',
                    '伦敦的用户分享了他们的结果',
                    '东京的某人做出了决定',
                    '悉尼的用户使用了转盘',
                    '柏林的某人得到了答案'
                ]
            },
            'ja': {
                messages: [
                    'ニューヨークの誰かがルーレットを回しました',
                    'ロンドンのユーザーが結果をシェアしました',
                    '東京の誰かが決定を下しました',
                    'シドニーのユーザーがルーレットを使用しました',
                    'ベルリンの誰かが答えを得ました'
                ]
            },
            'ko': {
                messages: [
                    '뉴욕의 누군가가 방금 휠을 돌렸습니다',
                    '런던의 사용자가 결과를 공유했습니다',
                    '도쿄의 누군가가 결정을 내렸습니다',
                    '시드니의 사용자가 휠을 사용했습니다',
                    '베를린의 누군가가 답을 얻었습니다'
                ]
            },
            'hi': {
                messages: [
                    'न्यूयॉर्क के किसी ने अभी व्हील घुमाया',
                    'लंदन के एक उपयोगकर्ता ने अपना परिणाम साझा किया',
                    'टोक्यो के किसी ने निर्णय लिया',
                    'सिडनी के एक उपयोगकर्ता ने व्हील का उपयोग किया',
                    'बर्लिन के किसी को अपना उत्तर मिला'
                ]
            },
            'ar': {
                messages: [
                    'شخص من نيويورك أدار العجلة للتو',
                    'مستخدم من لندن شارك نتيجته',
                    'شخص من طوكيو اتخذ قراراً',
                    'مستخدم من سيدني استخدم العجلة',
                    'شخص من برلين حصل على إجابته'
                ]
            }
        };

        return translations[langCode] || translations['en']; // Fallback to English
    }

    /**
     * Detect browser language
     */
    detectBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage || 'en';
        return lang.split('-')[0]; // Get base language code (e.g., 'en' from 'en-US')
    }

    /**
     * Add micro-interactions for better engagement
     */
    addMicroInteractions() {
        // Add particle effects on social sharing
        this.addShareParticleEffects();
        
        // Add success animations
        this.addSuccessAnimations();
        
        // Add hover effects enhancement
        this.enhanceHoverEffects();
    }

    /**
     * Add particle effects when sharing
     */
    addShareParticleEffects() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.social-btn[data-platform]')) {
                this.createParticleEffect(e.target);
            }
        });
    }

    /**
     * Create particle effect for social sharing
     */
    createParticleEffect(button) {
        const particles = [];
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create 8 particles
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'share-particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #667eea;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            particles.push(particle);

            // Animate particle
            const angle = (i / 8) * Math.PI * 2;
            const distance = 50;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            };
        }
    }

    /**
     * Add success animations for sharing
     */
    addSuccessAnimations() {
        // Already implemented in SocialMediaIntegration.js for copy functionality
        // This could be extended for other platforms if needed
    }

    /**
     * Enhance hover effects with better animations
     */
    enhanceHoverEffects() {
        // Add CSS for enhanced animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes countUp {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); color: #4ecdc4; }
                100% { transform: scale(1); }
            }
            
            .live-sharing-counter {
                margin-top: 1rem;
                padding: 0.75rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: var(--radius-md);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .counter-content {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                font-size: 0.9rem;
            }
            
            .counter-icon {
                font-size: 1.1rem;
            }
            
            .recent-activity {
                margin-top: 0.75rem;
                text-align: center;
            }
            
            .activity-content {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                font-size: 0.8rem;
                opacity: 0.7;
            }
            
            .activity-dot {
                width: 6px;
                height: 6px;
                background: #4ecdc4;
                border-radius: 50%;
                animation: pulse 2s infinite;
            }
            
            .activity-text {
                transition: opacity 0.3s ease;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(1.2); }
            }
            
            .sharing-preview {
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 1rem;
                border-radius: var(--radius-lg);
                max-width: 300px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                z-index: 10000;
                animation: fadeInUp 0.3s ease-out;
            }
            
            .preview-header {
                font-weight: bold;
                margin-bottom: 0.5rem;
                color: #4ecdc4;
            }
            
            .preview-content strong {
                display: block;
                margin-bottom: 0.25rem;
            }
            
            .preview-content p {
                font-size: 0.9rem;
                margin-bottom: 0.5rem;
                opacity: 0.8;
            }
            
            .preview-url {
                font-size: 0.8rem;
                opacity: 0.6;
                word-break: break-all;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize social media enhancer
document.addEventListener('DOMContentLoaded', () => {
    // Wait for social integration to load first
    setTimeout(() => {
        new SocialMediaEnhancer();
    }, 500);
});

export default SocialMediaEnhancer;