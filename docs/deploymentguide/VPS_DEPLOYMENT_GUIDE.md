# Random Choice Wheel - Complete VPS Deployment Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Initial VPS Setup](#initial-vps-setup)
3. [Domain Configuration](#domain-configuration)
4. [Nginx Configuration](#nginx-configuration)
5. [SSL Certificate Setup](#ssl-certificate-setup)
6. [Git Repository Setup](#git-repository-setup)
7. [Project Deployment](#project-deployment)
8. [Automation Scripts](#automation-scripts)
9. [Monitoring and Maintenance](#monitoring-and-maintenance)
10. [Troubleshooting](#troubleshooting)
11. [International SEO Deployment](#international-seo-deployment)

## Prerequisites

Before starting the deployment process, ensure you have:

- Access to your VPS: `ssh root@178.16.130.178`
- Domain purchased and configured: `randomchoicewheel.com`
- Cloudflare account with domain management access
- Git repository with your Random Choice Wheel project
- Basic understanding of Linux commands

## Initial VPS Setup

### 1. Connect to Your VPS

```bash
ssh root@178.16.130.178
```

### 2. Update System Packages

```bash
# Update package list and upgrade system
apt update && apt upgrade -y

# Install essential packages
apt install -y curl wget git nginx nodejs npm certbot python3-certbot-nginx ufw
```

### 3. Configure Firewall

```bash
# Enable UFW firewall
ufw enable

# Allow SSH, HTTP, and HTTPS
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp

# Check firewall status
ufw status
```

### 4. Create Project Directory Structure

```bash
# Navigate to web directory
cd /var/www

# Create directory for your project
mkdir -p randomchoicewheel.com
cd randomchoicewheel.com

# Set proper ownership
chown -R www-data:www-data /var/www/randomchoicewheel.com
```

## Domain Configuration

### 1. Cloudflare DNS Settings

Log into your Cloudflare dashboard and configure DNS records:

**A Record:**
- Name: `@` (or leave blank for root domain)
- Content: `178.16.130.178`
- TTL: Auto
- Proxy status: Proxied (orange cloud)

**CNAME Record (optional for www):**
- Name: `www`
- Content: `randomchoicewheel.com`
- TTL: Auto
- Proxy status: Proxied (orange cloud)

### 2. Verify Domain Propagation

```bash
# Check if domain resolves to your VPS IP
nslookup randomchoicewheel.com
dig randomchoicewheel.com A
```

## Nginx Configuration

### 1. Create Nginx Configuration File

```bash
# Create nginx configuration file
nano /etc/nginx/sites-available/randomchoicewheel.com
```

**Basic Configuration (HTTP only - before SSL):**

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name randomchoicewheel.com www.randomchoicewheel.com;
    
    root /var/www/randomchoicewheel.com;
    index index.html index.htm;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Handle main route
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Handle static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
    
    # Handle favicon
    location = /favicon.ico {
        log_not_found off;
        access_log off;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle robots.txt
    location = /robots.txt {
        log_not_found off;
        access_log off;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security: deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Security: deny access to backup files
    location ~* \.(bak|backup|old|orig|tmp)$ {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Error pages
    error_page 404 /index.html;
    error_page 500 502 503 504 /index.html;
    
    # Logging
    access_log /var/log/nginx/randomchoicewheel.com.access.log;
    error_log /var/log/nginx/randomchoicewheel.com.error.log;
}
```

### 2. Enable Site Configuration

```bash
# Create symbolic link to enable site
ln -s /etc/nginx/sites-available/randomchoicewheel.com /etc/nginx/sites-enabled/

# Test nginx configuration
nginx -t

# Reload nginx if test passes
systemctl reload nginx
```

### 3. Check Nginx Status

```bash
# Check nginx service status
systemctl status nginx

# If not running, start nginx
systemctl start nginx
systemctl enable nginx
```

## SSL Certificate Setup

### 1. Install SSL Certificate with Let's Encrypt

```bash
# Install SSL certificate for your domain
certbot --nginx -d randomchoicewheel.com -d www.randomchoicewheel.com

# Follow the prompts:
# - Enter email address for notifications
# - Agree to terms of service
# - Choose whether to share email with EFF
# - Select redirect HTTP to HTTPS (recommended: option 2)
```

### 2. Verify SSL Certificate

```bash
# Check certificate status
certbot certificates

# Test SSL configuration
curl -I https://randomchoicewheel.com
```

### 3. Setup Auto-renewal

```bash
# Test auto-renewal
certbot renew --dry-run

# Add cron job for auto-renewal (if not already added)
crontab -e

# Add this line if not present:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

## Git Repository Setup

### 1. Initialize Git Repository

```bash
# Navigate to project directory
cd /var/www/randomchoicewheel.com

# Initialize git repository
git init

# Add your remote repository
git remote add origin YOUR_GIT_REPOSITORY_URL

# Example:
# git remote add origin https://github.com/yourusername/wheelspinner.git
```

### 2. Deploy Initial Code

```bash
# Pull code from repository
git pull origin main

# If you have build steps, install dependencies
npm install

# Build the project (if using build tools like Vite)
npm run build

# Copy built files to web directory
cp -r dist/* /var/www/randomchoicewheel.com/
# OR if no build step, copy source files directly
# cp -r src/* /var/www/randomchoicewheel.com/
```

### 3. Set Proper Permissions

```bash
# Set correct ownership and permissions
chown -R www-data:www-data /var/www/randomchoicewheel.com
chmod -R 755 /var/www/randomchoicewheel.com
find /var/www/randomchoicewheel.com -type f -exec chmod 644 {} \;
```

## Project Deployment

### 1. Manual Deployment Steps

```bash
# Navigate to project directory
cd /var/www/randomchoicewheel.com

# Pull latest changes
git pull origin main

# Install/update dependencies (if package.json exists)
if [ -f package.json ]; then
    npm install
fi

# Build project (if build command exists)
if [ -f package.json ] && npm run | grep -q "build"; then
    npm run build
    # Copy built files to web root
    cp -r dist/* ./
fi

# Set permissions
chown -R www-data:www-data /var/www/randomchoicewheel.com
find /var/www/randomchoicewheel.com -type f -exec chmod 644 {} \;
find /var/www/randomchoicewheel.com -type d -exec chmod 755 {} \;

# Reload nginx
nginx -t && systemctl reload nginx
```

### 2. Verify Deployment

```bash
# Check if files are properly deployed
ls -la /var/www/randomchoicewheel.com

# Test website accessibility
curl -I http://randomchoicewheel.com
curl -I https://randomchoicewheel.com

# Check nginx logs for any errors
tail -f /var/log/nginx/randomchoicewheel.com.error.log
```

## Automation Scripts

### 1. Create Deployment Script

```bash
# Create deployment script
nano /root/deploy-randomchoicewheel.sh
```

**Deployment Script Content:**

```bash
#!/bin/bash

# Random Choice Wheel Deployment Script
# Usage: ./deploy-randomchoicewheel.sh

set -e  # Exit on any error

# Configuration
PROJECT_DIR="/var/www/randomchoicewheel.com"
LOG_FILE="/var/log/deployment-randomchoicewheel.log"
BACKUP_DIR="/root/backups/randomchoicewheel"

# Function to log messages
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Function to create backup
create_backup() {
    log "Creating backup..."
    mkdir -p "$BACKUP_DIR"
    BACKUP_NAME="backup-$(date '+%Y%m%d_%H%M%S').tar.gz"
    tar -czf "$BACKUP_DIR/$BACKUP_NAME" -C "$(dirname "$PROJECT_DIR")" "$(basename "$PROJECT_DIR")"
    log "Backup created: $BACKUP_DIR/$BACKUP_NAME"
    
    # Keep only last 5 backups
    cd "$BACKUP_DIR"
    ls -t backup-*.tar.gz | tail -n +6 | xargs -r rm
}

# Function to deploy
deploy() {
    log "Starting deployment..."
    
    # Navigate to project directory
    cd "$PROJECT_DIR"
    
    # Pull latest changes
    log "Pulling latest changes from git..."
    git pull origin main
    
    # Install/update dependencies if package.json exists
    if [ -f package.json ]; then
        log "Installing dependencies..."
        npm install
        
        # Build project if build script exists
        if npm run | grep -q "build"; then
            log "Building project..."
            npm run build
            
            # Copy built files to web root
            log "Copying built files..."
            cp -r dist/* ./
        fi
    fi
    
    # Set proper permissions
    log "Setting permissions..."
    chown -R www-data:www-data "$PROJECT_DIR"
    find "$PROJECT_DIR" -type f -exec chmod 644 {} \;
    find "$PROJECT_DIR" -type d -exec chmod 755 {} \;
    
    # Test nginx configuration
    log "Testing nginx configuration..."
    nginx -t
    
    # Reload nginx
    log "Reloading nginx..."
    systemctl reload nginx
    
    log "Deployment completed successfully!"
}

# Function to rollback
rollback() {
    log "Starting rollback..."
    
    # Find latest backup
    LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/backup-*.tar.gz | head -1)
    
    if [ -z "$LATEST_BACKUP" ]; then
        log "ERROR: No backup found for rollback!"
        exit 1
    fi
    
    log "Rolling back to: $LATEST_BACKUP"
    
    # Extract backup
    cd "$(dirname "$PROJECT_DIR")"
    tar -xzf "$LATEST_BACKUP"
    
    # Set permissions
    chown -R www-data:www-data "$PROJECT_DIR"
    find "$PROJECT_DIR" -type f -exec chmod 644 {} \;
    find "$PROJECT_DIR" -type d -exec chmod 755 {} \;
    
    # Reload nginx
    nginx -t && systemctl reload nginx
    
    log "Rollback completed!"
}

# Main script logic
case "${1:-deploy}" in
    "deploy")
        create_backup
        deploy
        ;;
    "rollback")
        rollback
        ;;
    "backup")
        create_backup
        ;;
    *)
        echo "Usage: $0 [deploy|rollback|backup]"
        echo "  deploy  - Deploy latest changes (default)"
        echo "  rollback - Rollback to previous version"
        echo "  backup  - Create backup only"
        exit 1
        ;;
esac
```

### 2. Make Script Executable

```bash
# Make deployment script executable
chmod +x /root/deploy-randomchoicewheel.sh

# Test the script
/root/deploy-randomchoicewheel.sh deploy
```

### 3. Create Git Hook for Auto-deployment (Optional)

```bash
# Navigate to git directory
cd /var/www/randomchoicewheel.com/.git/hooks

# Create post-receive hook
nano post-receive
```

**Post-receive Hook Content:**

```bash
#!/bin/bash
# Auto-deployment hook

cd /var/www/randomchoicewheel.com
/root/deploy-randomchoicewheel.sh deploy
```

```bash
# Make hook executable
chmod +x /var/www/randomchoicewheel.com/.git/hooks/post-receive
```

## Monitoring and Maintenance

### 1. Setup Log Monitoring

```bash
# Create log monitoring script
nano /root/monitor-randomchoicewheel.sh
```

**Monitoring Script:**

```bash
#!/bin/bash

# Monitor script for Random Choice Wheel
LOG_DIR="/var/log/nginx"
SITE_LOG="$LOG_DIR/randomchoicewheel.com.access.log"
ERROR_LOG="$LOG_DIR/randomchoicewheel.com.error.log"

echo "=== Site Statistics ==="
echo "Total requests today: $(grep "$(date '+%d/%b/%Y')" "$SITE_LOG" | wc -l)"
echo "Unique visitors today: $(grep "$(date '+%d/%b/%Y')" "$SITE_LOG" | awk '{print $1}' | sort -u | wc -l)"
echo "Errors today: $(grep "$(date '+%d/%b/%Y')" "$ERROR_LOG" | wc -l)"

echo ""
echo "=== Latest Errors ==="
tail -10 "$ERROR_LOG"

echo ""
echo "=== System Resources ==="
df -h /var/www
free -m
```

```bash
# Make monitoring script executable
chmod +x /root/monitor-randomchoicewheel.sh
```

### 2. Setup Health Check

```bash
# Create health check script
nano /root/healthcheck-randomchoicewheel.sh
```

**Health Check Script:**

```bash
#!/bin/bash

SITE_URL="https://randomchoicewheel.com"
EXPECTED_CODE="200"

# Check if site is responding
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")

if [ "$HTTP_CODE" != "$EXPECTED_CODE" ]; then
    echo "ALERT: Site is not responding correctly. HTTP Code: $HTTP_CODE"
    # Restart nginx if needed
    systemctl restart nginx
    
    # Send notification (optional - configure email)
    # echo "Site down at $(date)" | mail -s "RandomChoiceWheel Alert" your-email@example.com
else
    echo "Site is healthy. HTTP Code: $HTTP_CODE"
fi
```

```bash
# Make health check executable
chmod +x /root/healthcheck-randomchoicewheel.sh

# Add to crontab for regular checks
crontab -e

# Add this line to check every 5 minutes:
# */5 * * * * /root/healthcheck-randomchoicewheel.sh >> /var/log/healthcheck-randomchoicewheel.log 2>&1
```

### 3. Backup Automation

```bash
# Add backup to crontab
crontab -e

# Add daily backup at 2 AM:
# 0 2 * * * /root/deploy-randomchoicewheel.sh backup

# Add weekly full system backup:
# 0 3 * * 0 tar -czf /root/backups/full-backup-$(date +\%Y\%m\%d).tar.gz /var/www /etc/nginx/sites-available
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Site Not Loading

**Check Nginx Status:**
```bash
systemctl status nginx
nginx -t
```

**Check Logs:**
```bash
tail -f /var/log/nginx/randomchoicewheel.com.error.log
tail -f /var/log/nginx/error.log
```

**Common Solutions:**
```bash
# Restart nginx
systemctl restart nginx

# Check file permissions
ls -la /var/www/randomchoicewheel.com/
chown -R www-data:www-data /var/www/randomchoicewheel.com
```

#### 2. SSL Certificate Issues

**Check Certificate Status:**
```bash
certbot certificates
openssl s_client -connect randomchoicewheel.com:443 -servername randomchoicewheel.com
```

**Renew Certificate:**
```bash
certbot renew --force-renewal
systemctl reload nginx
```

#### 3. Git Deployment Issues

**Check Git Status:**
```bash
cd /var/www/randomchoicewheel.com
git status
git log --oneline -10
```

**Fix Git Issues:**
```bash
# Reset to remote state
git fetch origin
git reset --hard origin/main

# Fix permissions after git operations
chown -R www-data:www-data /var/www/randomchoicewheel.com
```

#### 4. Performance Issues

**Check System Resources:**
```bash
htop
df -h
free -m
```

**Optimize Nginx:**
```bash
# Edit nginx main config
nano /etc/nginx/nginx.conf

# Optimize worker processes
worker_processes auto;
worker_connections 1024;

# Enable gzip compression (already in site config)
```

#### 5. Domain/DNS Issues

**Check DNS Resolution:**
```bash
nslookup randomchoicewheel.com
dig randomchoicewheel.com A
ping randomchoicewheel.com
```

**Cloudflare Issues:**
- Ensure proxy is enabled (orange cloud)
- Check SSL/TLS mode (should be "Full" or "Full (strict)")
- Verify DNS records are correct

### Emergency Procedures

#### Quick Site Restore

```bash
# If site is completely broken, restore from backup
cd /root/backups/randomchoicewheel
LATEST_BACKUP=$(ls -t backup-*.tar.gz | head -1)
cd /var/www
tar -xzf "/root/backups/randomchoicewheel/$LATEST_BACKUP"
chown -R www-data:www-data randomchoicewheel.com
systemctl restart nginx
```

#### Reset Nginx Configuration

```bash
# Backup current config
cp /etc/nginx/sites-available/randomchoicewheel.com /etc/nginx/sites-available/randomchoicewheel.com.backup

# Remove and recreate basic config
rm /etc/nginx/sites-enabled/randomchoicewheel.com
# Recreate configuration using the template above
```

## Final Deployment Steps

### 1. Complete Deployment Checklist

- [ ] VPS access confirmed
- [ ] Domain DNS configured in Cloudflare
- [ ] Nginx installed and configured
- [ ] SSL certificate installed and working
- [ ] Git repository cloned
- [ ] Project files deployed
- [ ] Permissions set correctly
- [ ] Site accessible via HTTPS
- [ ] Monitoring scripts installed
- [ ] Backup system configured
- [ ] Automation scripts tested

### 2. Post-Deployment Verification

```bash
# Test all endpoints
curl -I https://randomchoicewheel.com
curl -I https://www.randomchoicewheel.com

# Check SSL grade
curl -I https://randomchoicewheel.com | grep -i ssl

# Verify site content
curl -s https://randomchoicewheel.com | grep -i "wheel"

# Check performance
time curl -s https://randomchoicewheel.com > /dev/null
```

### 3. Final Security Hardening

```bash
# Update all packages
apt update && apt upgrade -y

# Configure automatic security updates
apt install unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades

# Setup fail2ban for additional security
apt install fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

## International SEO Deployment

**⚠️ IMPORTANT: After completing the basic deployment above, you MUST implement the international SEO enhancements for the 40-language support to work properly.**

### Required Additional Steps

The application now includes comprehensive international SEO features supporting 40 languages with:
- Advanced hreflang implementation
- Country-specific sitemaps with regional targeting  
- Tier-based language optimization
- Enhanced meta tags and structured data
- Mobile-first SEO for developing markets

### Implementation Required

**📋 See the complete SEO deployment guide:**
- **File:** `docs/deploymentguide/SEO_DEPLOYMENT_ADDENDUM.md`
- **Essential:** Enhanced Nginx configuration for language routing
- **Critical:** SEO file generation scripts and sitemap handling
- **Important:** International security headers and performance optimization

### Quick SEO Deployment Summary

1. **Update Nginx Configuration**: Enhanced config with language route support
2. **Install SEO Scripts**: Sitemap generation and robots.txt automation  
3. **Configure Analytics**: International traffic monitoring
4. **Test All Routes**: Verify 40 language routes work correctly
5. **Verify SEO Files**: Ensure sitemaps and robots.txt are properly generated

**⚡ Run this after basic deployment:**
```bash
# Apply SEO enhancements (detailed in SEO_DEPLOYMENT_ADDENDUM.md)
/root/generate-seo-files.sh
/root/test-international-seo.sh
```

---

Your Random Choice Wheel application should now be successfully deployed and accessible at https://randomchoicewheel.com!

For ongoing maintenance, use the provided scripts and monitoring tools to ensure optimal performance and security. The international SEO features will ensure global visibility across all 40 supported languages and regions.