#!/bin/bash

# Image Conversion Script - Convert PNG/JPG to WebP
# This script converts existing images to WebP format for better performance
# Run this script to optimize images for modern browsers

echo "🖼️  Starting image conversion to WebP format..."

# Create WebP directory if it doesn't exist
mkdir -p public/assets/img/webp

# Function to convert image to WebP
convert_to_webp() {
    input_file="$1"
    filename=$(basename "$input_file")
    name="${filename%.*}"
    output_file="public/assets/img/webp/${name}.webp"
    
    echo "Converting: $input_file -> $output_file"
    
    # Check if cwebp is installed
    if command -v cwebp &> /dev/null; then
        # Use cwebp for high-quality conversion
        cwebp -q 85 -m 6 "$input_file" -o "$output_file"
    elif command -v convert &> /dev/null; then
        # Use ImageMagick convert as fallback
        convert "$input_file" -quality 85 "$output_file"
    else
        echo "❌ Error: Neither cwebp nor ImageMagick convert found."
        echo "Please install one of the following:"
        echo "  - libwebp-tools (for cwebp): sudo apt-get install webp"
        echo "  - ImageMagick: sudo apt-get install imagemagick"
        echo "  - On macOS: brew install webp imagemagick"
        exit 1
    fi
    
    if [ -f "$output_file" ]; then
        original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file")
        webp_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file")
        reduction=$(( (original_size - webp_size) * 100 / original_size ))
        echo "✅ Converted successfully! Size reduction: ${reduction}%"
    else
        echo "❌ Failed to convert $input_file"
    fi
}

# Convert all PNG and JPG files
echo "Converting PNG files..."
for file in public/assets/img/*.png; do
    if [ -f "$file" ]; then
        convert_to_webp "$file"
    fi
done

echo "Converting JPG files..."
for file in public/assets/img/*.jpg public/assets/img/*.jpeg; do
    if [ -f "$file" ]; then
        convert_to_webp "$file"
    fi
done

# Generate AVIF versions for even better compression (next-gen format)
echo "🚀 Generating AVIF versions (next-gen format)..."
mkdir -p public/assets/img/avif

generate_avif() {
    input_file="$1"
    filename=$(basename "$input_file")
    name="${filename%.*}"
    output_file="public/assets/img/avif/${name}.avif"
    
    echo "Converting: $input_file -> $output_file"
    
    if command -v avifenc &> /dev/null; then
        avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 -a tune=ssim "$input_file" "$output_file"
        echo "✅ AVIF conversion successful!"
    else
        echo "ℹ️  avifenc not found. AVIF generation skipped."
        echo "To install: npm install -g @squoosh/cli or use other AVIF encoders"
    fi
}

for file in public/assets/img/*.png; do
    if [ -f "$file" ]; then
        generate_avif "$file"
    fi
done

# Create optimized versions at different sizes for responsive images
echo "📱 Creating responsive image sizes..."
mkdir -p public/assets/img/responsive

create_responsive_sizes() {
    input_file="$1"
    filename=$(basename "$input_file")
    name="${filename%.*}"
    
    # Define sizes for responsive images
    sizes=(256 512 768 1024)
    
    for size in "${sizes[@]}"; do
        output_file="public/assets/img/responsive/${name}-${size}w.webp"
        
        if command -v convert &> /dev/null; then
            convert "$input_file" -resize "${size}x${size}>" -quality 85 "$output_file"
            echo "✅ Created ${size}w version"
        fi
    done
}

# Create responsive versions of main images
for file in public/assets/img/wheelicon.png; do
    if [ -f "$file" ]; then
        create_responsive_sizes "$file"
    fi
done

echo ""
echo "🎉 Image conversion completed!"
echo ""
echo "📊 Summary:"
echo "  - WebP versions created in: public/assets/img/webp/"
echo "  - AVIF versions created in: public/assets/img/avif/ (if available)"
echo "  - Responsive sizes created in: public/assets/img/responsive/"
echo ""
echo "📝 Next steps:"
echo "  1. Update your HTML/CSS to use <picture> elements with WebP/AVIF fallbacks"
echo "  2. Configure your server to serve WebP/AVIF when supported"
echo "  3. Test the images in different browsers"
echo ""
echo "🔧 Server configuration example:"
echo "  - Add to your .htaccess or nginx config to serve modern formats"
echo "  - Enable compression for image formats"
echo ""

# Create a summary report
echo "Image Optimization Report - $(date)" > image-optimization-report.txt
echo "========================================" >> image-optimization-report.txt
echo "" >> image-optimization-report.txt

for file in public/assets/img/*.png public/assets/img/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")
        webp_file="public/assets/img/webp/${name}.webp"
        
        if [ -f "$webp_file" ]; then
            webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file")
            reduction=$(( (original_size - webp_size) * 100 / original_size ))
            echo "$filename: ${original_size} bytes -> WebP: ${webp_size} bytes (${reduction}% reduction)" >> image-optimization-report.txt
        fi
    fi
done

echo "" >> image-optimization-report.txt
echo "Total images processed: $(ls public/assets/img/*.png public/assets/img/*.jpg 2>/dev/null | wc -l)" >> image-optimization-report.txt
echo "WebP files created: $(ls public/assets/img/webp/*.webp 2>/dev/null | wc -l)" >> image-optimization-report.txt

echo "📄 Detailed report saved to: image-optimization-report.txt"