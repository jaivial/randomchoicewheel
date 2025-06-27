#!/bin/bash

# =============================================================================
# International SEO Deployment Master Script
# Comprehensive deployment script for Random Choice Wheel with 40-language SEO
# =============================================================================

set -e  # Exit on any error

# Configuration
PROJECT_NAME="randomchoicewheel"
PROJECT_DIR="/var/www/randomchoicewheel.com"
DIST_DIR="/var/www/randomchoicewheel.com/dist"
DOMAIN="randomchoicewheel.com"
LOG_FILE="/var/log/international-seo-deployment.log"
BACKUP_DIR="/root/backups/randomchoicewheel"
NGINX_SITE="/etc/nginx/sites-available/randomchoicewheel.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to log messages with color
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${GREEN}[INFO]${NC} $message"
            echo "$timestamp - INFO - $message" >> "$LOG_FILE"
            ;;
        "WARN")
            echo -e "${YELLOW}[WARN]${NC} $message"
            echo "$timestamp - WARN - $message" >> "$LOG_FILE"
            ;;
        "ERROR")
            echo -e "${RED}[ERROR]${NC} $message"
            echo "$timestamp - ERROR - $message" >> "$LOG_FILE"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[SUCCESS]${NC} $message"
            echo "$timestamp - SUCCESS - $message" >> "$LOG_FILE"
            ;;
        "STEP")
            echo -e "${BLUE}[STEP]${NC} $message"
            echo "$timestamp - STEP - $message" >> "$LOG_FILE"
            ;;
        *)
            echo "$message"
            echo "$timestamp - $message" >> "$LOG_FILE"
            ;;
    esac
}

# Function to show banner
show_banner() {
    echo -e "${PURPLE}"
    echo "======================================================================"
    echo "  International SEO Deployment Script for Random Choice Wheel"
    echo "  Supporting 40 Languages with Advanced SEO Optimization"
    echo "======================================================================"
    echo -e "${NC}"
}

# Function to check prerequisites
check_prerequisites() {
    log "STEP" "Checking prerequisites..."
    
    # Check if running as root
    if [ "$EUID" -ne 0 ]; then
        log "ERROR" "This script must be run as root"
        exit 1
    fi
    
    # Check if project directory exists
    if [ ! -d "$PROJECT_DIR" ]; then
        log "ERROR" "Project directory $PROJECT_DIR does not exist"
        exit 1
    fi
    
    # Check if nginx is installed
    if ! command -v nginx &> /dev/null; then
        log "ERROR" "Nginx is not installed"
        exit 1
    fi
    
    # Check if SSL certificate exists
    if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
        log "WARN" "SSL certificate not found. Make sure to install SSL certificate first."
    fi
    
    log "SUCCESS" "Prerequisites check completed"
}

# Function to create backup
create_backup() {
    log "STEP" "Creating backup..."
    
    mkdir -p "$BACKUP_DIR"
    BACKUP_NAME="backup-$(date '+%Y%m%d_%H%M%S').tar.gz"
    
    # Create backup of project and nginx config
    tar -czf "$BACKUP_DIR/$BACKUP_NAME" \
        -C "$(dirname "$PROJECT_DIR")" "$(basename "$PROJECT_DIR")" \
        -C /etc/nginx/sites-available randomchoicewheel.com 2>/dev/null || true
    
    log "SUCCESS" "Backup created: $BACKUP_DIR/$BACKUP_NAME"
    
    # Keep only last 5 backups
    cd "$BACKUP_DIR"
    ls -t backup-*.tar.gz | tail -n +6 | xargs -r rm
}

# Function to deploy project code
deploy_project_code() {
    log "STEP" "Deploying project code..."
    
    cd "$PROJECT_DIR"
    
    # Pull latest changes
    log "INFO" "Pulling latest changes from git..."
    git pull origin main || {
        log "WARN" "Git pull failed, continuing with existing code"
    }
    
    # Install/update dependencies if package.json exists
    if [ -f package.json ]; then
        log "INFO" "Installing dependencies..."
        npm install
        
        # Build project if build script exists
        if npm run | grep -q "build"; then
            log "INFO" "Building project..."
            npm run build
            
            # Copy built files to web root
            if [ -d "dist" ]; then
                log "INFO" "Copying built files to web root..."
                cp -r dist/* "$PROJECT_DIR/"
            fi
        fi
    fi
    
    log "SUCCESS" "Project code deployed"
}

# Function to create SEO files generation script
create_seo_generation_script() {
    log "STEP" "Creating SEO files generation script..."
    
    cat > /root/generate-seo-files.sh << 'EOF'
#!/bin/bash

# SEO Files Generation Script for International Deployment
set -e

PROJECT_DIR="/var/www/randomchoicewheel.com"
LOG_FILE="/var/log/seo-generation.log"

# Function to log messages
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Function to generate robots.txt
generate_robots() {
    log "Generating robots.txt..."
    
    cat > "$PROJECT_DIR/robots.txt" << 'ROBOTS_EOF'
User-agent: *
Allow: /

# Main sitemaps
Sitemap: https://randomchoicewheel.com/sitemap.xml
Sitemap: https://randomchoicewheel.com/sitemap-index.xml
Sitemap: https://randomchoicewheel.com/sitemap-main.xml

# Tier-based sitemaps for international SEO
Sitemap: https://randomchoicewheel.com/sitemap-tier-1.xml
Sitemap: https://randomchoicewheel.com/sitemap-tier-2.xml
Sitemap: https://randomchoicewheel.com/sitemap-tier-3.xml
Sitemap: https://randomchoicewheel.com/sitemap-tier-4.xml

# Region-based sitemaps
Sitemap: https://randomchoicewheel.com/sitemap-americas.xml
Sitemap: https://randomchoicewheel.com/sitemap-europe.xml
Sitemap: https://randomchoicewheel.com/sitemap-asia.xml
Sitemap: https://randomchoicewheel.com/sitemap-africa.xml
Sitemap: https://randomchoicewheel.com/sitemap-oceania.xml

# International SEO optimized for 40 languages
# Tier-based optimization for search engines
# Country-specific targeting for enhanced regional visibility
ROBOTS_EOF
    
    log "robots.txt generated successfully"
}

# Function to create sitemap placeholders
create_sitemap_placeholders() {
    log "Creating sitemap placeholders..."
    
    # Create sitemap index
    cat > "$PROJECT_DIR/sitemap-index.xml" << 'SITEMAP_EOF'
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- This file will be dynamically generated by the application -->
  <!-- Comprehensive international SEO sitemap index -->
  <sitemap>
    <loc>https://randomchoicewheel.com/sitemap-main.xml</loc>
    <lastmod>2024-01-01T00:00:00+00:00</lastmod>
  </sitemap>
</sitemapindex>
SITEMAP_EOF
    
    # Create main sitemap placeholder
    cat > "$PROJECT_DIR/sitemap.xml" << 'MAIN_SITEMAP_EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- This file will be dynamically generated by the application -->
  <!-- Supports 40 languages with comprehensive hreflang -->
  <url>
    <loc>https://randomchoicewheel.com/</loc>
    <lastmod>2024-01-01T00:00:00+00:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
MAIN_SITEMAP_EOF
    
    log "Sitemap placeholders created"
}

# Function to create manifest.json
create_manifest() {
    log "Creating manifest.json for PWA support..."
    
    cat > "$PROJECT_DIR/manifest.json" << 'MANIFEST_EOF'
{
  "name": "Decision Wheel Spinner",
  "short_name": "Decision Wheel",
  "description": "Make decisions easily with our multilingual decision wheel spinner. Available in 40+ languages.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4f46e5",
  "orientation": "portrait",
  "lang": "en",
  "dir": "ltr",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["utilities", "productivity", "games"],
  "shortcuts": [
    {
      "name": "Quick Spin",
      "short_name": "Spin",
      "description": "Quickly spin the decision wheel",
      "url": "/?action=spin",
      "icons": [
        {
          "src": "/icon-96.png",
          "sizes": "96x96"
        }
      ]
    }
  ]
}
MANIFEST_EOF
    
    log "manifest.json created"
}

# Main execution
main() {
    log "Starting SEO files generation..."
    
    cd "$PROJECT_DIR"
    
    generate_robots
    create_sitemap_placeholders
    create_manifest
    
    # Set proper permissions
    chown -R www-data:www-data "$PROJECT_DIR"
    chmod 644 "$PROJECT_DIR/robots.txt"
    find "$PROJECT_DIR" -name "sitemap*.xml" -exec chmod 644 {} \; 2>/dev/null || true
    chmod 644 "$PROJECT_DIR/manifest.json"
    
    log "SEO files generation completed successfully!"
}

# Run main function
main "$@"
EOF

    chmod +x /root/generate-seo-files.sh
    log "SUCCESS" "SEO generation script created"
}

# Function to create SEO analytics script
create_seo_analytics_script() {
    log "STEP" "Creating SEO analytics script..."
    
    cat > /root/seo-analytics.sh << 'EOF'
#!/bin/bash

# International SEO Analytics Script
LOG_DIR="/var/log/nginx"
SITE_LOG="$LOG_DIR/randomchoicewheel.com.access.log"
ERROR_LOG="$LOG_DIR/randomchoicewheel.com.error.log"

echo "=== International SEO Analytics ==="
echo "Generated on: $(date)"
echo ""

# Language-specific traffic analysis
echo "=== Traffic by Language Route ==="
for lang in en zh hi es fr ar bn pt ru ja pa de jv ko te vi mr ta ur tr it th gu pl uk fa ml kn or my nl sw ro cs hu he sv da no fi el; do
    count=$(grep "/$lang/" "$SITE_LOG" 2>/dev/null | wc -l)
    if [ $count -gt 0 ]; then
        echo "$lang: $count requests"
    fi
done

echo ""
echo "=== Sitemap Requests ==="
echo "Main sitemap: $(grep "/sitemap.xml" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "Sitemap index: $(grep "/sitemap-index.xml" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "Tier 1 sitemap: $(grep "/sitemap-tier-1.xml" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "Tier 2 sitemap: $(grep "/sitemap-tier-2.xml" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "Tier 3 sitemap: $(grep "/sitemap-tier-3.xml" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "Tier 4 sitemap: $(grep "/sitemap-tier-4.xml" "$SITE_LOG" 2>/dev/null | wc -l)"

echo ""
echo "=== Search Engine Crawlers ==="
echo "Googlebot: $(grep -i "googlebot" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "Bingbot: $(grep -i "bingbot" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "YandexBot: $(grep -i "yandexbot" "$SITE_LOG" 2>/dev/null | wc -l)"
echo "Baiduspider: $(grep -i "baiduspider" "$SITE_LOG" 2>/dev/null | wc -l)"

echo ""
echo "=== Performance Metrics ==="
if [ -f "$SITE_LOG" ]; then
    echo "Total requests today: $(grep "$(date '+%d/%b/%Y')" "$SITE_LOG" | wc -l)"
    echo "Unique IPs today: $(grep "$(date '+%d/%b/%Y')" "$SITE_LOG" | awk '{print $1}' | sort -u | wc -l)"
else
    echo "Access log not found"
fi

if [ -f "$ERROR_LOG" ]; then
    echo ""
    echo "=== SEO-related Errors ==="
    grep -i "sitemap\|robots\|404" "$ERROR_LOG" 2>/dev/null | tail -10
fi
EOF

    chmod +x /root/seo-analytics.sh
    log "SUCCESS" "SEO analytics script created"
}

# Function to create comprehensive testing script
create_testing_script() {
    log "STEP" "Creating international SEO testing script..."
    
    cat > /root/test-international-seo.sh << 'EOF'
#!/bin/bash

DOMAIN="randomchoicewheel.com"
BASE_URL="https://$DOMAIN"

echo "=== International SEO Deployment Test ==="
echo "Testing domain: $DOMAIN"
echo "Base URL: $BASE_URL"
echo ""

# Test main pages
echo "=== Testing Main Pages ==="
echo "Main page: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/")"
echo "English route: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/en/")"
echo "Spanish route: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/es/")"
echo "Chinese route: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/zh/")"
echo "French route: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/fr/")"
echo "German route: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/de/")"

echo ""
echo "=== Testing SEO Files ==="
echo "robots.txt: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/robots.txt")"
echo "sitemap.xml: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/sitemap.xml")"
echo "sitemap-index.xml: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/sitemap-index.xml")"
echo "manifest.json: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/manifest.json")"

echo ""
echo "=== Testing Tier Sitemaps ==="
for tier in 1 2 3 4; do
    echo "Tier $tier sitemap: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/sitemap-tier-$tier.xml")"
done

echo ""
echo "=== Testing Region Sitemaps ==="
for region in americas europe asia africa oceania; do
    echo "$region sitemap: $(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/sitemap-$region.xml")"
done

echo ""
echo "=== Testing Security Headers ==="
curl -s -I "$BASE_URL/" | grep -i "strict-transport-security\|content-security-policy\|x-content-type-options" || echo "Headers may be set by Cloudflare"

echo ""
echo "=== Testing Performance ==="
time_result=$(time (curl -s "$BASE_URL/" > /dev/null) 2>&1)
echo "Response time: $time_result"

echo ""
echo "=== SSL Certificate Info ==="
echo | openssl s_client -servername "$DOMAIN" -connect "$DOMAIN":443 2>/dev/null | openssl x509 -noout -subject -dates 2>/dev/null || echo "Certificate check via Cloudflare"

echo ""
echo "International SEO deployment test completed!"
EOF

    chmod +x /root/test-international-seo.sh
    log "SUCCESS" "Testing script created"
}

# Function to update enhanced nginx configuration
update_nginx_configuration() {
    log "STEP" "Updating Nginx configuration for international SEO..."
    
    # Backup current nginx config
    cp "$NGINX_SITE" "$NGINX_SITE.backup.$(date +%Y%m%d_%H%M%S)"
    
    # Create enhanced nginx configuration
    cat > "$NGINX_SITE" << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name randomchoicewheel.com www.randomchoicewheel.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    server_name randomchoicewheel.com www.randomchoicewheel.com;
    
    root /var/www/randomchoicewheel.com;
    index index.html index.htm;
    
    # SSL Configuration (managed by Certbot)
    ssl_certificate /etc/letsencrypt/live/randomchoicewheel.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/randomchoicewheel.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    # Enhanced Security Headers for International SEO
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline' 'unsafe-eval'" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # International SEO Headers
    add_header X-Robots-Tag "index, follow" always;
    add_header X-Content-Language "auto" always;
    
    # Advanced Gzip compression for international content
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        application/ld+json
        application/atom+xml
        image/svg+xml;
    
    # Language-specific routing support (40 languages)
    location ~ ^/(en|zh|hi|es|fr|ar|bn|pt|ru|ja|pa|de|jv|ko|te|vi|mr|ta|ur|tr|it|th|gu|pl|uk|fa|ml|kn|or|my|nl|sw|ro|cs|hu|he|sv|da|no|fi|el)/ {
        try_files $uri $uri/ /index.html;
        
        # Add language-specific headers
        add_header Content-Language $1 always;
        add_header X-Language-Code $1 always;
        
        # Cache control for language-specific content
        add_header Cache-Control "public, max-age=3600" always;
    }
    
    # Main route handler
    location / {
        try_files $uri $uri/ /index.html;
        
        # Default language headers
        add_header Content-Language "en" always;
        add_header X-Language-Code "en" always;
    }
    
    # Enhanced Sitemap Handling for International SEO
    location = /sitemap.xml {
        try_files $uri /sitemap-main.xml;
        add_header Content-Type "application/xml" always;
        add_header Cache-Control "public, max-age=86400" always;
        expires 1d;
    }
    
    location = /sitemap-index.xml {
        add_header Content-Type "application/xml" always;
        add_header Cache-Control "public, max-age=86400" always;
        expires 1d;
    }
    
    # Tier-based sitemaps
    location ~ ^/sitemap-tier-[1-4]\.xml$ {
        add_header Content-Type "application/xml" always;
        add_header Cache-Control "public, max-age=86400" always;
        expires 1d;
    }
    
    # Region-based sitemaps
    location ~ ^/sitemap-(americas|europe|asia|africa|oceania)\.xml$ {
        add_header Content-Type "application/xml" always;
        add_header Cache-Control "public, max-age=86400" always;
        expires 1d;
    }
    
    location = /sitemap-main.xml {
        add_header Content-Type "application/xml" always;
        add_header Cache-Control "public, max-age=86400" always;
        expires 1d;
    }
    
    # Enhanced robots.txt
    location = /robots.txt {
        add_header Content-Type "text/plain" always;
        add_header Cache-Control "public, max-age=86400" always;
        expires 1d;
        log_not_found off;
        access_log off;
    }
    
    # Handle static assets with longer cache for international CDN
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary "Accept-Encoding";
        try_files $uri =404;
        
        # Enable CORS for international CDN usage
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Methods "GET, OPTIONS";
        add_header Access-Control-Allow-Headers "Range";
    }
    
    # Handle favicon
    location = /favicon.ico {
        log_not_found off;
        access_log off;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Manifest.json for PWA international support
    location = /manifest.json {
        add_header Content-Type "application/manifest+json" always;
        add_header Cache-Control "public, max-age=86400" always;
        expires 1d;
    }
    
    # Service worker for international PWA features
    location = /sw.js {
        add_header Content-Type "application/javascript" always;
        add_header Cache-Control "no-cache, no-store, must-revalidate" always;
        expires 0;
    }
    
    # Security: deny access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Security: deny access to backup and temporary files
    location ~* \.(bak|backup|old|orig|tmp|log)$ {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Error pages with language detection
    error_page 404 /index.html;
    error_page 500 502 503 504 /index.html;
    
    # Enhanced logging for international SEO analytics
    access_log /var/log/nginx/randomchoicewheel.com.access.log combined;
    error_log /var/log/nginx/randomchoicewheel.com.error.log warn;
}
EOF
    
    log "SUCCESS" "Nginx configuration updated for international SEO"
}

# Function to generate SEO files
generate_seo_files() {
    log "STEP" "Generating SEO files..."
    
    # Run SEO generation script
    /root/generate-seo-files.sh
    
    # If the application has dynamic sitemap generation, try to run it
    if [ -f "$PROJECT_DIR/package.json" ] && npm --prefix "$PROJECT_DIR" run | grep -q "generate-sitemaps"; then
        log "INFO" "Generating dynamic sitemaps..."
        cd "$PROJECT_DIR"
        npm run generate-sitemaps || log "WARN" "Dynamic sitemap generation failed"
    fi
    
    log "SUCCESS" "SEO files generated"
}

# Function to set proper permissions
set_permissions() {
    log "STEP" "Setting proper permissions..."
    
    # Set ownership and permissions
    chown -R www-data:www-data "$PROJECT_DIR"
    find "$PROJECT_DIR" -type f -exec chmod 644 {} \;
    find "$PROJECT_DIR" -type d -exec chmod 755 {} \;
    
    log "SUCCESS" "Permissions set"
}

# Function to test and reload nginx
reload_nginx() {
    log "STEP" "Testing and reloading Nginx..."
    
    # Test nginx configuration
    if nginx -t; then
        log "SUCCESS" "Nginx configuration test passed"
        systemctl reload nginx
        log "SUCCESS" "Nginx reloaded successfully"
    else
        log "ERROR" "Nginx configuration test failed"
        return 1
    fi
}

# Function to run comprehensive tests
run_tests() {
    log "STEP" "Running comprehensive SEO tests..."
    
    # Wait a moment for nginx to fully reload
    sleep 2
    
    # Run the test script
    /root/test-international-seo.sh
    
    log "SUCCESS" "Tests completed"
}

# Function to setup monitoring
setup_monitoring() {
    log "STEP" "Setting up SEO monitoring..."
    
    # Add SEO analytics to crontab if not already present
    if ! crontab -l 2>/dev/null | grep -q "seo-analytics.sh"; then
        (crontab -l 2>/dev/null; echo "0 6 * * * /root/seo-analytics.sh > /var/log/daily-seo-report.log 2>&1") | crontab -
        log "SUCCESS" "Daily SEO analytics scheduled"
    else
        log "INFO" "SEO analytics already scheduled"
    fi
}

# Function to show deployment summary
show_summary() {
    log "SUCCESS" "International SEO deployment completed successfully!"
    echo ""
    echo -e "${GREEN}========================== DEPLOYMENT SUMMARY ==========================${NC}"
    echo -e "${BLUE}Domain:${NC} https://$DOMAIN"
    echo -e "${BLUE}Project Directory:${NC} $PROJECT_DIR"
    echo -e "${BLUE}Languages Supported:${NC} 40 languages with tier-based optimization"
    echo -e "${BLUE}SEO Features:${NC}"
    echo "  ✓ Advanced hreflang implementation"
    echo "  ✓ Country-specific sitemaps (tier & region-based)"
    echo "  ✓ Enhanced meta tags and structured data"
    echo "  ✓ Mobile-first SEO for developing markets"
    echo "  ✓ International security headers"
    echo "  ✓ PWA manifest for global users"
    echo ""
    echo -e "${BLUE}Generated Files:${NC}"
    echo "  ✓ /robots.txt - Comprehensive sitemap index"
    echo "  ✓ /sitemap.xml - Main sitemap"
    echo "  ✓ /sitemap-index.xml - Sitemap index"
    echo "  ✓ /manifest.json - PWA manifest"
    echo ""
    echo -e "${BLUE}Monitoring:${NC}"
    echo "  ✓ Daily SEO analytics at 6 AM"
    echo "  ✓ Log file: $LOG_FILE"
    echo "  ✓ Analytics: /var/log/daily-seo-report.log"
    echo ""
    echo -e "${BLUE}Available Scripts:${NC}"
    echo "  • /root/generate-seo-files.sh - Regenerate SEO files"
    echo "  • /root/seo-analytics.sh - View SEO analytics"
    echo "  • /root/test-international-seo.sh - Test SEO implementation"
    echo ""
    echo -e "${GREEN}Your Random Choice Wheel is now optimized for global SEO! 🌍🚀${NC}"
    echo "========================================================================"
}

# Main execution function
main() {
    show_banner
    
    log "INFO" "Starting International SEO Deployment for Random Choice Wheel"
    log "INFO" "Supporting 40 languages with comprehensive SEO optimization"
    
    # Execute deployment steps
    check_prerequisites
    create_backup
    deploy_project_code
    create_seo_generation_script
    create_seo_analytics_script
    create_testing_script
    update_nginx_configuration
    generate_seo_files
    set_permissions
    reload_nginx
    run_tests
    setup_monitoring
    show_summary
    
    log "SUCCESS" "International SEO deployment completed successfully!"
}

# Handle script arguments
case "${1:-deploy}" in
    "deploy")
        main
        ;;
    "test")
        /root/test-international-seo.sh
        ;;
    "analytics")
        /root/seo-analytics.sh
        ;;
    "seo-files")
        /root/generate-seo-files.sh
        ;;
    "help")
        echo "Usage: $0 [deploy|test|analytics|seo-files|help]"
        echo "  deploy    - Full international SEO deployment (default)"
        echo "  test      - Run SEO tests only"
        echo "  analytics - Show SEO analytics"
        echo "  seo-files - Generate SEO files only"
        echo "  help      - Show this help message"
        ;;
    *)
        echo "Unknown option: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac