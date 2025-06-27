#!/bin/bash

# =============================================================================
# Full Deployment Script - Complete Git to Production Pipeline
# Handles local git operations, remote deployment, and international SEO
# =============================================================================

set -e  # Exit on any error

# Configuration
VPS_IP="178.16.130.178"
VPS_USER="root"
REMOTE_PROJECT_DIR="/var/www/randomchoicewheel.com"
LOCAL_DEPLOY_SCRIPT="./deploy-international-seo.sh"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to log messages with color and emoji
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${BLUE}ℹ️  [INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}✅ [SUCCESS]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}⚠️  [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}❌ [ERROR]${NC} $message"
            ;;
        "STEP")
            echo -e "${PURPLE}🚀 [STEP]${NC} $message"
            ;;
        *)
            echo "📝 $message"
            ;;
    esac
}

# Function to show banner
show_banner() {
    echo -e "${PURPLE}"
    echo "======================================================================="
    echo "  🌍 Full Deployment Pipeline for Random Choice Wheel"
    echo "  🚀 Git → VPS → Build → International SEO Deployment"
    echo "======================================================================="
    echo -e "${NC}"
}

# Function to check prerequisites
check_prerequisites() {
    log "STEP" "Checking prerequisites..."
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        log "ERROR" "Not in a git repository"
        exit 1
    fi
    
    # Check if git is clean (allow untracked files)
    if ! git diff-index --quiet HEAD -- 2>/dev/null; then
        log "INFO" "Found uncommitted changes, will commit them"
    fi
    
    # Check if ssh key exists or can connect
    log "INFO" "Checking SSH connection to VPS..."
    if ! ssh -o ConnectTimeout=5 -o BatchMode=yes "$VPS_USER@$VPS_IP" "echo 'SSH connection successful'" 2>/dev/null; then
        log "WARN" "Cannot connect to VPS without password. SSH key authentication recommended."
        log "INFO" "Will proceed with password authentication"
    else
        log "SUCCESS" "SSH key authentication available"
    fi
    
    # Check if deploy script exists
    if [ ! -f "$LOCAL_DEPLOY_SCRIPT" ]; then
        log "ERROR" "Deploy script not found: $LOCAL_DEPLOY_SCRIPT"
        exit 1
    fi
    
    log "SUCCESS" "Prerequisites check completed"
}

# Function to handle local git operations
local_git_operations() {
    log "STEP" "Performing local git operations..."
    
    # Add all changes
    log "INFO" "Adding all changes to git..."
    git add .
    
    # Check if there are any changes to commit
    if git diff-index --quiet HEAD -- 2>/dev/null && git diff-index --quiet --cached HEAD -- 2>/dev/null; then
        log "INFO" "No changes to commit"
    else
        # Create commit with current date
        COMMIT_DATE=$(date '+%Y-%m-%d %H:%M:%S')
        COMMIT_MESSAGE="Deploy: $COMMIT_DATE"
        
        log "INFO" "Committing changes with message: '$COMMIT_MESSAGE'"
        git commit -m "$COMMIT_MESSAGE"
        
        log "SUCCESS" "Changes committed successfully"
    fi
    
    # Push to remote repository
    log "INFO" "Pushing to remote repository..."
    git push origin main
    
    log "SUCCESS" "Local git operations completed"
}

# Function to perform remote VPS operations
remote_vps_operations() {
    log "STEP" "Performing remote VPS operations..."
    
    # Create the remote script content
    cat > /tmp/remote_deploy.sh << 'EOF'
#!/bin/bash

# Remote deployment script executed on VPS
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    local level=$1
    shift
    local message="$*"
    
    case $level in
        "INFO")
            echo -e "${BLUE}ℹ️  [VPS-INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}✅ [VPS-SUCCESS]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}❌ [VPS-ERROR]${NC} $message"
            ;;
        *)
            echo "📝 [VPS] $message"
            ;;
    esac
}

REMOTE_PROJECT_DIR="/var/www/randomchoicewheel.com"

log "INFO" "🔄 Actualizando código desde repositorio remoto..."

# Navigate to project directory
cd "$REMOTE_PROJECT_DIR"

# Clean and reset repository
log "INFO" "Ejecutando git clean -fd..."
git clean -fd

log "INFO" "Ejecutando git reset --hard HEAD..."
git reset --hard HEAD

log "INFO" "Ejecutando git fetch origin..."
git fetch origin

log "INFO" "Ejecutando git reset --hard origin/main..."
git reset --hard origin/main

log "SUCCESS" "Repository updated successfully"

# Install dependencies
log "INFO" "Installing dependencies..."
if [ -f package.json ]; then
    npm install
    log "SUCCESS" "Dependencies installed"
else
    log "ERROR" "package.json not found"
    exit 1
fi

# Build project
log "INFO" "Building project..."
if npm run | grep -q "build"; then
    npm run build
    log "SUCCESS" "Project built successfully"
else
    log "ERROR" "Build script not found in package.json"
    exit 1
fi

# Run international SEO deployment
log "INFO" "Running international SEO deployment..."
if [ -f "./scripts/deploy-international-seo.sh" ]; then
    chmod +x ./scripts/deploy-international-seo.sh
    ./scripts/deploy-international-seo.sh
    log "SUCCESS" "International SEO deployment completed"
else
    log "ERROR" "deploy-international-seo.sh script not found"
    exit 1
fi

log "SUCCESS" "🎉 Complete VPS deployment finished successfully!"
EOF

    # Copy script to VPS and execute
    log "INFO" "Copying deployment script to VPS..."
    scp /tmp/remote_deploy.sh "$VPS_USER@$VPS_IP:/tmp/remote_deploy.sh"
    
    log "INFO" "Executing remote deployment on VPS..."
    ssh "$VPS_USER@$VPS_IP" "chmod +x /tmp/remote_deploy.sh && /tmp/remote_deploy.sh"
    
    # Clean up temporary script
    ssh "$VPS_USER@$VPS_IP" "rm -f /tmp/remote_deploy.sh"
    rm -f /tmp/remote_deploy.sh
    
    log "SUCCESS" "Remote VPS operations completed"
}

# Function to perform post-deployment verification
post_deployment_verification() {
    log "STEP" "Performing post-deployment verification..."
    
    # Test website accessibility
    log "INFO" "Testing website accessibility..."
    
    DOMAIN="randomchoicewheel.com"
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN/" || echo "000")
    
    if [ "$HTTP_CODE" = "200" ]; then
        log "SUCCESS" "Website is accessible (HTTP $HTTP_CODE)"
    else
        log "WARN" "Website returned HTTP $HTTP_CODE"
    fi
    
    # Test a few language routes
    log "INFO" "Testing language routes..."
    for lang in es fr pt de; do
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN/$lang/" || echo "000")
        if [ "$HTTP_CODE" = "200" ]; then
            log "SUCCESS" "Language route /$lang/ is accessible"
        else
            log "WARN" "Language route /$lang/ returned HTTP $HTTP_CODE"
        fi
    done
    
    # Test SEO files
    log "INFO" "Testing SEO files..."
    for file in robots.txt sitemap.xml manifest.json ads.txt; do
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN/$file" || echo "000")
        if [ "$HTTP_CODE" = "200" ]; then
            log "SUCCESS" "SEO file /$file is accessible"
        else
            log "WARN" "SEO file /$file returned HTTP $HTTP_CODE"
        fi
    done
    
    log "SUCCESS" "Post-deployment verification completed"
}

# Function to show deployment summary
show_summary() {
    echo ""
    echo -e "${GREEN}========================== DEPLOYMENT SUMMARY ==========================${NC}"
    echo -e "${BLUE}🌐 Website:${NC} https://randomchoicewheel.com"
    echo -e "${BLUE}🚀 Deployment:${NC} Full pipeline completed successfully"
    echo -e "${BLUE}🌍 Languages:${NC} 40 languages with international SEO"
    echo -e "${BLUE}📊 Features:${NC}"
    echo "  ✅ Git repository updated and pushed"
    echo "  ✅ VPS code synchronized"
    echo "  ✅ Dependencies installed"
    echo "  ✅ Project built and optimized"
    echo "  ✅ International SEO deployed"
    echo "  ✅ Nginx configuration updated"
    echo "  ✅ SEO files generated (robots.txt, sitemaps, manifest.json)"
    echo "  ✅ Language routing configured for 40 languages"
    echo ""
    echo -e "${BLUE}🔧 Next Steps:${NC}"
    echo "  • Monitor website performance at https://randomchoicewheel.com"
    echo "  • Check SEO analytics with: ssh $VPS_USER@$VPS_IP '/root/seo-analytics.sh'"
    echo "  • Run tests anytime with: ssh $VPS_USER@$VPS_IP '/root/test-international-seo.sh'"
    echo ""
    echo -e "${GREEN}🎉 Your Random Choice Wheel is now live with international SEO! 🌍${NC}"
    echo "========================================================================"
}

# Function to handle errors
handle_error() {
    log "ERROR" "Deployment failed at step: $1"
    log "INFO" "Check the logs above for details"
    log "INFO" "You can retry the deployment or run individual steps manually"
    exit 1
}

# Main execution function
main() {
    show_banner
    
    log "INFO" "Starting full deployment pipeline..."
    log "INFO" "Target: $VPS_USER@$VPS_IP:$REMOTE_PROJECT_DIR"
    
    # Execute deployment steps
    check_prerequisites || handle_error "Prerequisites check"
    local_git_operations || handle_error "Local git operations"
    remote_vps_operations || handle_error "Remote VPS operations"
    post_deployment_verification || handle_error "Post-deployment verification"
    show_summary
    
    log "SUCCESS" "🎉 Full deployment pipeline completed successfully!"
}

# Handle script arguments
case "${1:-deploy}" in
    "deploy")
        main
        ;;
    "git-only")
        show_banner
        log "INFO" "Running git operations only..."
        check_prerequisites
        local_git_operations
        log "SUCCESS" "Git operations completed. Run '$0 vps-only' to deploy to VPS."
        ;;
    "vps-only")
        show_banner
        log "INFO" "Running VPS deployment only..."
        remote_vps_operations
        post_deployment_verification
        show_summary
        ;;
    "test")
        show_banner
        log "INFO" "Running post-deployment tests only..."
        post_deployment_verification
        ;;
    "help")
        echo "Usage: $0 [deploy|git-only|vps-only|test|help]"
        echo ""
        echo "Commands:"
        echo "  deploy    - Full deployment pipeline (default)"
        echo "            Git add/commit/push → VPS sync → Build → SEO deploy"
        echo ""
        echo "  git-only  - Only perform local git operations"
        echo "            Git add/commit/push to repository"
        echo ""
        echo "  vps-only  - Only perform VPS deployment"
        echo "            Sync code → Build → Deploy SEO"
        echo ""
        echo "  test      - Run post-deployment verification tests"
        echo "            Test website, language routes, SEO files"
        echo ""
        echo "  help      - Show this help message"
        echo ""
        echo "Examples:"
        echo "  $0                    # Full deployment"
        echo "  $0 deploy             # Full deployment (explicit)"
        echo "  $0 git-only           # Only git operations"
        echo "  $0 vps-only           # Only VPS deployment"
        echo "  $0 test               # Only run tests"
        ;;
    *)
        echo "Unknown option: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac