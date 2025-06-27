/**
 * SEO Analyzer and Optimization Tool
 * Provides comprehensive SEO analysis and automated optimization recommendations
 */

/**
 * SEO Analyzer Class
 * Analyzes current SEO implementation and provides recommendations
 */
export class SEOAnalyzer {
  constructor() {
    // SEO scoring weights
    this.weights = {
      title: 15,
      description: 15,
      keywords: 10,
      headings: 10,
      images: 10,
      structuredData: 15,
      performance: 15,
      socialMedia: 5,
      accessibility: 5
    };
    
    // Initialize analyzer
    this.initialize();
  }

  /**
   * Initialize the SEO analyzer
   */
  initialize() {
    console.log('SEO Analyzer initialized');
  }

  /**
   * Perform comprehensive SEO analysis
   * @returns {Object} Complete SEO analysis report
   */
  analyze() {
    const analysis = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      score: 0,
      maxScore: 100,
      categories: {
        title: this.analyzeTitleTag(),
        description: this.analyzeDescription(),
        keywords: this.analyzeKeywords(),
        headings: this.analyzeHeadings(),
        images: this.analyzeImages(),
        structuredData: this.analyzeStructuredData(),
        performance: this.analyzePerformance(),
        socialMedia: this.analyzeSocialMedia(),
        accessibility: this.analyzeAccessibility()
      },
      recommendations: [],
      criticalIssues: [],
      warnings: []
    };
    
    // Calculate overall score
    analysis.score = this.calculateOverallScore(analysis.categories);
    
    // Generate recommendations
    analysis.recommendations = this.generateRecommendations(analysis.categories);
    
    // Identify critical issues
    analysis.criticalIssues = this.identifyCriticalIssues(analysis.categories);
    
    // Generate warnings
    analysis.warnings = this.generateWarnings(analysis.categories);
    
    return analysis;
  }

  /**
   * Analyze title tag
   * @returns {Object} Title analysis
   */
  analyzeTitleTag() {
    const titleElement = document.querySelector('title');
    const title = titleElement ? titleElement.textContent : '';
    
    const analysis = {
      score: 0,
      maxScore: this.weights.title,
      title: title,
      length: title.length,
      issues: []
    };
    
    // Check if title exists
    if (!title) {
      analysis.issues.push('No title tag found');
      return analysis;
    }
    
    // Check title length (optimal: 50-60 characters)
    if (title.length < 30) {
      analysis.issues.push('Title is too short (less than 30 characters)');
      analysis.score += 5;
    } else if (title.length <= 60) {
      analysis.score += 15; // Perfect length
    } else if (title.length <= 70) {
      analysis.issues.push('Title is slightly long (over 60 characters)');
      analysis.score += 10;
    } else {
      analysis.issues.push('Title is too long (over 70 characters)');
      analysis.score += 5;
    }
    
    // Check for keyword presence
    const hasKeywords = title.toLowerCase().includes('wheel') || 
                       title.toLowerCase().includes('spinner') || 
                       title.toLowerCase().includes('decision');
    
    if (hasKeywords) {
      analysis.score += 5; // Bonus for relevant keywords
    } else {
      analysis.issues.push('Title does not contain main keywords');
    }
    
    return analysis;
  }

  /**
   * Analyze meta description
   * @returns {Object} Description analysis
   */
  analyzeDescription() {
    const descElement = document.querySelector('meta[name="description"]');
    const description = descElement ? descElement.getAttribute('content') : '';
    
    const analysis = {
      score: 0,
      maxScore: this.weights.description,
      description: description,
      length: description.length,
      issues: []
    };
    
    // Check if description exists
    if (!description) {
      analysis.issues.push('No meta description found');
      return analysis;
    }
    
    // Check description length (optimal: 150-160 characters)
    if (description.length < 120) {
      analysis.issues.push('Description is too short (less than 120 characters)');
      analysis.score += 8;
    } else if (description.length <= 160) {
      analysis.score += 15; // Perfect length
    } else if (description.length <= 180) {
      analysis.issues.push('Description is slightly long (over 160 characters)');
      analysis.score += 10;
    } else {
      analysis.issues.push('Description is too long (over 180 characters)');
      analysis.score += 5;
    }
    
    return analysis;
  }

  /**
   * Analyze keywords
   * @returns {Object} Keywords analysis
   */
  analyzeKeywords() {
    const keywordsElement = document.querySelector('meta[name="keywords"]');
    const keywords = keywordsElement ? keywordsElement.getAttribute('content') : '';
    
    const analysis = {
      score: 0,
      maxScore: this.weights.keywords,
      keywords: keywords,
      keywordCount: keywords ? keywords.split(',').length : 0,
      issues: []
    };
    
    if (!keywords) {
      analysis.issues.push('No meta keywords found');
      analysis.score += 5; // Keywords are less important now
    } else {
      const keywordArray = keywords.split(',').map(k => k.trim());
      
      if (keywordArray.length > 10) {
        analysis.issues.push('Too many keywords (over 10)');
        analysis.score += 5;
      } else if (keywordArray.length >= 5) {
        analysis.score += 10; // Good number of keywords
      } else {
        analysis.issues.push('Too few keywords (less than 5)');
        analysis.score += 7;
      }
    }
    
    return analysis;
  }

  /**
   * Analyze heading structure
   * @returns {Object} Headings analysis
   */
  analyzeHeadings() {
    const h1Elements = document.querySelectorAll('h1');
    const h2Elements = document.querySelectorAll('h2');
    const h3Elements = document.querySelectorAll('h3');
    
    const analysis = {
      score: 0,
      maxScore: this.weights.headings,
      h1Count: h1Elements.length,
      h2Count: h2Elements.length,
      h3Count: h3Elements.length,
      issues: []
    };
    
    // Check H1 count (should be exactly 1)
    if (h1Elements.length === 0) {
      analysis.issues.push('No H1 tag found');
    } else if (h1Elements.length > 1) {
      analysis.issues.push('Multiple H1 tags found (should be only one)');
      analysis.score += 5;
    } else {
      analysis.score += 8; // Perfect H1 structure
    }
    
    // Check H2 presence
    if (h2Elements.length > 0) {
      analysis.score += 2; // Good structure
    } else {
      analysis.issues.push('No H2 tags found');
    }
    
    return analysis;
  }

  /**
   * Analyze images
   * @returns {Object} Images analysis
   */
  analyzeImages() {
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');
    const imagesWithLazyLoading = document.querySelectorAll('img[loading="lazy"]');
    
    const analysis = {
      score: 0,
      maxScore: this.weights.images,
      totalImages: images.length,
      imagesWithAlt: imagesWithAlt.length,
      imagesWithLazyLoading: imagesWithLazyLoading.length,
      issues: []
    };
    
    if (images.length === 0) {
      analysis.score += 10; // No images to optimize
      return analysis;
    }
    
    // Check alt text coverage
    const altCoverage = (imagesWithAlt.length / images.length) * 100;
    if (altCoverage === 100) {
      analysis.score += 5;
    } else {
      analysis.issues.push(`${images.length - imagesWithAlt.length} images missing alt text`);
      analysis.score += Math.floor(altCoverage / 20); // Partial credit
    }
    
    // Check lazy loading
    const lazyCoverage = (imagesWithLazyLoading.length / images.length) * 100;
    if (lazyCoverage >= 50) {
      analysis.score += 5;
    } else {
      analysis.issues.push('Consider adding lazy loading to images');
      analysis.score += 2;
    }
    
    return analysis;
  }

  /**
   * Analyze structured data
   * @returns {Object} Structured data analysis
   */
  analyzeStructuredData() {
    const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    const analysis = {
      score: 0,
      maxScore: this.weights.structuredData,
      scriptsCount: structuredDataScripts.length,
      validSchemas: 0,
      issues: []
    };
    
    if (structuredDataScripts.length === 0) {
      analysis.issues.push('No structured data found');
      return analysis;
    }
    
    // Validate each structured data script
    let validSchemas = 0;
    structuredDataScripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        if (data['@context'] && data['@type']) {
          validSchemas++;
        }
      } catch (error) {
        analysis.issues.push('Invalid JSON-LD structured data found');
      }
    });
    
    analysis.validSchemas = validSchemas;
    
    // Score based on structured data presence and validity
    if (validSchemas >= 2) {
      analysis.score += 15; // Excellent structured data
    } else if (validSchemas === 1) {
      analysis.score += 10; // Good structured data
    } else {
      analysis.score += 3; // Some attempt at structured data
    }
    
    return analysis;
  }

  /**
   * Analyze performance metrics
   * @returns {Object} Performance analysis
   */
  analyzePerformance() {
    const analysis = {
      score: 0,
      maxScore: this.weights.performance,
      metrics: {},
      issues: []
    };
    
    // Check if performance API is available
    if (!window.performance) {
      analysis.issues.push('Performance API not available');
      analysis.score += 5; // Partial credit
      return analysis;
    }
    
    try {
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        
        analysis.metrics = {
          pageLoadTime: Math.round(loadTime),
          domContentLoaded: Math.round(domContentLoaded)
        };
        
        // Score based on load time
        if (loadTime < 1000) {
          analysis.score += 15; // Excellent
        } else if (loadTime < 2000) {
          analysis.score += 12; // Good
        } else if (loadTime < 3000) {
          analysis.score += 8; // Fair
          analysis.issues.push('Page load time is above 2 seconds');
        } else {
          analysis.score += 3; // Poor
          analysis.issues.push('Page load time is above 3 seconds');
        }
      }
    } catch (error) {
      analysis.issues.push('Could not measure performance metrics');
      analysis.score += 5;
    }
    
    return analysis;
  }

  /**
   * Analyze social media meta tags
   * @returns {Object} Social media analysis
   */
  analyzeSocialMedia() {
    const ogTags = document.querySelectorAll('meta[property^="og:"]');
    const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
    
    const analysis = {
      score: 0,
      maxScore: this.weights.socialMedia,
      openGraphTags: ogTags.length,
      twitterTags: twitterTags.length,
      issues: []
    };
    
    // Check essential OpenGraph tags
    const essentialOgTags = ['og:title', 'og:description', 'og:image', 'og:url'];
    const missingOgTags = essentialOgTags.filter(tag => !document.querySelector(`meta[property="${tag}"]`));
    
    if (missingOgTags.length === 0) {
      analysis.score += 3; // Good OpenGraph coverage
    } else {
      analysis.issues.push(`Missing OpenGraph tags: ${missingOgTags.join(', ')}`);
      analysis.score += 1;
    }
    
    // Check essential Twitter tags
    const essentialTwitterTags = ['twitter:title', 'twitter:description', 'twitter:image'];
    const missingTwitterTags = essentialTwitterTags.filter(tag => !document.querySelector(`meta[name="${tag}"]`));
    
    if (missingTwitterTags.length === 0) {
      analysis.score += 2; // Good Twitter coverage
    } else {
      analysis.issues.push(`Missing Twitter tags: ${missingTwitterTags.join(', ')}`);
      analysis.score += 0;
    }
    
    return analysis;
  }

  /**
   * Analyze accessibility
   * @returns {Object} Accessibility analysis
   */
  analyzeAccessibility() {
    const analysis = {
      score: 0,
      maxScore: this.weights.accessibility,
      issues: []
    };
    
    // Check lang attribute
    const htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang) {
      analysis.score += 2;
    } else {
      analysis.issues.push('HTML lang attribute missing');
    }
    
    // Check viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      analysis.score += 2;
    } else {
      analysis.issues.push('Viewport meta tag missing');
    }
    
    // Check for skip links (basic accessibility)
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    if (skipLinks.length > 0) {
      analysis.score += 1;
    } else {
      analysis.issues.push('Consider adding skip navigation links');
    }
    
    return analysis;
  }

  /**
   * Calculate overall SEO score
   * @param {Object} categories - Analysis categories
   * @returns {number} Overall score
   */
  calculateOverallScore(categories) {
    let totalScore = 0;
    
    Object.keys(categories).forEach(category => {
      totalScore += categories[category].score;
    });
    
    return Math.round(totalScore);
  }

  /**
   * Generate recommendations based on analysis
   * @param {Object} categories - Analysis categories
   * @returns {Array} Array of recommendations
   */
  generateRecommendations(categories) {
    const recommendations = [];
    
    Object.keys(categories).forEach(category => {
      const categoryData = categories[category];
      
      if (categoryData.issues && categoryData.issues.length > 0) {
        categoryData.issues.forEach(issue => {
          recommendations.push({
            category: category,
            priority: this.getIssuePriority(issue),
            issue: issue,
            solution: this.getSolution(issue)
          });
        });
      }
    });
    
    // Sort by priority
    return recommendations.sort((a, b) => this.getPriorityWeight(b.priority) - this.getPriorityWeight(a.priority));
  }

  /**
   * Identify critical SEO issues
   * @param {Object} categories - Analysis categories
   * @returns {Array} Array of critical issues
   */
  identifyCriticalIssues(categories) {
    const criticalIssues = [];
    
    // Critical: No title tag
    if (categories.title.score === 0) {
      criticalIssues.push('Missing title tag');
    }
    
    // Critical: No meta description
    if (categories.description.score === 0) {
      criticalIssues.push('Missing meta description');
    }
    
    // Critical: No H1 tag
    if (categories.headings.h1Count === 0) {
      criticalIssues.push('Missing H1 tag');
    }
    
    // Critical: Very slow loading
    if (categories.performance.metrics.pageLoadTime > 5000) {
      criticalIssues.push('Extremely slow page load time');
    }
    
    return criticalIssues;
  }

  /**
   * Generate warnings
   * @param {Object} categories - Analysis categories
   * @returns {Array} Array of warnings
   */
  generateWarnings(categories) {
    const warnings = [];
    
    // Warning: Long title
    if (categories.title.length > 60) {
      warnings.push('Title tag may be truncated in search results');
    }
    
    // Warning: Long description
    if (categories.description.length > 160) {
      warnings.push('Meta description may be truncated in search results');
    }
    
    // Warning: No structured data
    if (categories.structuredData.scriptsCount === 0) {
      warnings.push('No structured data found - consider adding JSON-LD markup');
    }
    
    return warnings;
  }

  /**
   * Get issue priority
   * @param {string} issue - Issue description
   * @returns {string} Priority level
   */
  getIssuePriority(issue) {
    const highPriorityKeywords = ['title', 'description', 'h1', 'missing'];
    const mediumPriorityKeywords = ['long', 'short', 'slow'];
    
    const issuelower = issue.toLowerCase();
    
    if (highPriorityKeywords.some(keyword => issuelower.includes(keyword))) {
      return 'high';
    } else if (mediumPriorityKeywords.some(keyword => issuelower.includes(keyword))) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  /**
   * Get priority weight for sorting
   * @param {string} priority - Priority level
   * @returns {number} Weight value
   */
  getPriorityWeight(priority) {
    switch (priority) {
      case 'high': return 3;
      case 'medium': return 2;
      case 'low': return 1;
      default: return 0;
    }
  }

  /**
   * Get solution for issue
   * @param {string} issue - Issue description
   * @returns {string} Suggested solution
   */
  getSolution(issue) {
    const solutions = {
      'No title tag found': 'Add a descriptive title tag between 50-60 characters',
      'No meta description found': 'Add a compelling meta description between 150-160 characters',
      'No H1 tag found': 'Add a single H1 tag that describes the main content',
      'Title is too short': 'Expand title to be more descriptive (30+ characters)',
      'Title is too long': 'Shorten title to under 60 characters',
      'Description is too short': 'Expand description to be more informative (120+ characters)',
      'Description is too long': 'Shorten description to under 160 characters',
      'images missing alt text': 'Add descriptive alt text to all images',
      'No structured data found': 'Add JSON-LD structured data markup',
      'Page load time': 'Optimize images, minify CSS/JS, and enable compression'
    };
    
    // Find matching solution
    for (const key in solutions) {
      if (issue.toLowerCase().includes(key.toLowerCase())) {
        return solutions[key];
      }
    }
    
    return 'Review and optimize this element for better SEO';
  }

  /**
   * Generate SEO report in different formats
   * @param {string} format - Report format (json, html, console)
   * @returns {string|Object} Formatted report
   */
  generateReport(format = 'console') {
    const analysis = this.analyze();
    
    switch (format) {
      case 'json':
        return JSON.stringify(analysis, null, 2);
        
      case 'html':
        return this.generateHTMLReport(analysis);
        
      case 'console':
      default:
        this.logConsoleReport(analysis);
        return analysis;
    }
  }

  /**
   * Generate HTML report
   * @param {Object} analysis - SEO analysis data
   * @returns {string} HTML report
   */
  generateHTMLReport(analysis) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1>SEO Analysis Report</h1>
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h2>Overall Score: ${analysis.score}/${analysis.maxScore}</h2>
          <div style="background: #ddd; height: 20px; border-radius: 10px;">
            <div style="background: ${analysis.score >= 80 ? '#4CAF50' : analysis.score >= 60 ? '#FF9800' : '#F44336'}; 
                        height: 100%; width: ${analysis.score}%; border-radius: 10px;"></div>
          </div>
        </div>
        
        ${analysis.criticalIssues.length > 0 ? `
        <div style="background: #ffebee; border-left: 4px solid #f44336; padding: 15px; margin-bottom: 20px;">
          <h3>Critical Issues</h3>
          <ul>
            ${analysis.criticalIssues.map(issue => `<li>${issue}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        
        <div style="background: #fff3e0; border-left: 4px solid #ff9800; padding: 15px; margin-bottom: 20px;">
          <h3>Top Recommendations</h3>
          <ol>
            ${analysis.recommendations.slice(0, 5).map(rec => `
              <li><strong>${rec.category}</strong>: ${rec.issue} - ${rec.solution}</li>
            `).join('')}
          </ol>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
          ${Object.keys(analysis.categories).map(category => {
            const cat = analysis.categories[category];
            return `
              <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
                <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <p>Score: ${cat.score}/${cat.maxScore}</p>
                ${cat.issues && cat.issues.length > 0 ? `
                  <ul style="font-size: 0.9em; color: #666;">
                    ${cat.issues.map(issue => `<li>${issue}</li>`).join('')}
                  </ul>
                ` : '<p style="color: #4CAF50;">✓ No issues found</p>'}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  /**
   * Log console report
   * @param {Object} analysis - SEO analysis data
   */
  logConsoleReport(analysis) {
    console.group('🔍 SEO Analysis Report');
    console.log(`Overall Score: ${analysis.score}/${analysis.maxScore}`);
    
    if (analysis.criticalIssues.length > 0) {
      console.group('🚨 Critical Issues');
      analysis.criticalIssues.forEach(issue => console.error(issue));
      console.groupEnd();
    }
    
    if (analysis.recommendations.length > 0) {
      console.group('💡 Top Recommendations');
      analysis.recommendations.slice(0, 5).forEach(rec => {
        console.log(`${rec.category}: ${rec.issue}`);
        console.log(`   Solution: ${rec.solution}`);
      });
      console.groupEnd();
    }
    
    console.group('📊 Category Breakdown');
    Object.keys(analysis.categories).forEach(category => {
      const cat = analysis.categories[category];
      console.log(`${category}: ${cat.score}/${cat.maxScore}`);
      if (cat.issues && cat.issues.length > 0) {
        cat.issues.forEach(issue => console.warn(`  - ${issue}`));
      }
    });
    console.groupEnd();
    
    console.groupEnd();
  }
}

// Export for use in other modules
export default SEOAnalyzer;