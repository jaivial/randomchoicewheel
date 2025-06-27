# Advertisement Setup Guide for Wheelspinner

This guide will help you configure and enable advertisements on your wheelspinner website to generate revenue while maintaining a great user experience.

## 📋 Quick Setup Checklist

- [ ] Apply for Google AdSense account
- [ ] Replace placeholder ad unit IDs with your actual IDs
- [ ] Configure ad placements and sizes
- [ ] Test ad display across devices
- [ ] Monitor ad performance

## 🎯 Getting Started with Google AdSense

### 1. Create an AdSense Account

1. Visit [Google AdSense](https://www.google.com/adsense/)
2. Sign in with your Google account
3. Add your website URL and select your country
4. Review and accept AdSense Terms & Conditions
5. Connect your site to AdSense (add AdSense code)

### 2. Get Your Publisher ID

Once approved, you'll receive a Publisher ID that looks like:
```
ca-pub-1234567890123456
```

### 3. Create Ad Units

In your AdSense dashboard:
1. Go to "Ads" > "By ad unit" > "Display ads"
2. Create ad units for different placements:
   - **Header Banner**: 728x90 (Leaderboard)
   - **Sidebar**: 300x250 (Medium Rectangle)
   - **Content**: 320x100 (Large Mobile Banner)
   - **Footer**: 728x90 (Leaderboard)

## ⚙️ Configuration

### 1. Update Ad Unit IDs

Replace the placeholder IDs in `/src/components/AdManager.js`:

```javascript
// Replace these placeholder IDs with your actual AdSense IDs
this.adConfig = {
  header: {
    enabled: true,
    size: { width: 728, height: 90 },
    mobileSize: { width: 320, height: 50 },
    adUnitId: 'ca-pub-XXXXXXXXX/XXXXXXXXX', // ← Replace this
    position: 'header'
  },
  // ... update all other placements
};
```

### 2. Update HTML AdSense Script

In `/index.html`, replace the placeholder client ID:

```html
<!-- Replace ca-pub-XXXXXXXXX with your actual Publisher ID -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX"
        crossorigin="anonymous"></script>
```

### 3. Configure Ad Placements

Edit the `adConfig` object in `AdManager.js` to enable/disable specific ad placements:

```javascript
header: {
  enabled: true,        // Set to false to disable header ads
  // ... other settings
},
sidebar: {
  enabled: true,        // Sidebar ads (desktop only by default)
  desktopOnly: true,    // Hide on mobile devices
  // ... other settings
},
```

## 🎨 Ad Placement Options

### Header Ads
- **Desktop**: 728x90 leaderboard banner
- **Mobile**: 320x50 mobile banner
- **Position**: Below site header
- **Best for**: Brand awareness, high visibility

### Sidebar Ads
- **Size**: 300x250 medium rectangle
- **Position**: Fixed sidebar (desktop only)
- **Best for**: Continuous visibility while browsing

### Content Ads
- **Size**: 320x100 large mobile banner
- **Position**: Between wheel and input sections
- **Best for**: High engagement, contextual relevance

### Footer Ads
- **Desktop**: 728x90 leaderboard banner
- **Mobile**: 320x50 mobile banner
- **Position**: Bottom of page
- **Best for**: Exit intent monetization

### Modal Ads (Optional)
- **Size**: 300x250 medium rectangle
- **Trigger**: Every 3rd wheel spin (configurable)
- **Position**: Overlay modal
- **Best for**: High-value placements

## 📱 Responsive Design

The ad system automatically handles responsive behavior:

- **Desktop (>768px)**: Shows all ad types including sidebar
- **Tablet (768px-1024px)**: Sidebar moves below content
- **Mobile (<768px)**: Sidebar hidden, smaller banner sizes

## 🔧 Advanced Configuration

### Customizing Ad Frequency

To change modal ad frequency, edit `ModalAdUnit` in `/src/components/AdUnits.js`:

```javascript
constructor(config = {}) {
  super('modal', {
    frequency: 5, // Show every 5th spin instead of 3rd
    // ...
  });
}
```

### Disabling Specific Ad Types

```javascript
// In AdManager.js, set enabled: false
sidebar: {
  enabled: false, // Disables sidebar ads completely
  // ...
}
```

### Custom Ad Styling

Modify `/src/styles/ads.css` to customize appearance:

```css
.ad-container {
  /* Your custom glassmorphism styling */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  /* ... */
}
```

## 📊 Performance Monitoring

### Built-in Analytics

The AdManager provides basic metrics:

```javascript
// Get ad performance data
const metrics = app.components.adManager.getMetrics();
console.log(metrics);
```

### Google Analytics Integration

Add to your existing Google Analytics:

```javascript
// Track ad views
gtag('event', 'ad_view', {
  'ad_placement': 'header',
  'ad_unit_id': 'your-ad-unit-id'
});
```

## 🚫 Ad Blocker Handling

The system automatically detects ad blockers and:
- Shows a polite message asking users to disable ad blockers
- Provides fallback content to maintain layout
- Tracks ad blocker usage for analytics

## 💰 Revenue Optimization Tips

### 1. Strategic Placement
- Place ads where users naturally look
- Avoid overwhelming the user experience
- Test different positions to find optimal performance

### 2. Content Integration
- Ensure ads complement your site's glassmorphism design
- Match ad colors to your theme where possible
- Consider native ad formats

### 3. Mobile Optimization
- Mobile users are often more engaged
- Ensure mobile ad sizes don't disrupt usability
- Test thoroughly on various mobile devices

### 4. Loading Performance
- Ads load lazily by default (only when visible)
- This improves page speed and user experience
- Monitor Core Web Vitals impact

## 🔒 Privacy and Compliance

### GDPR Compliance
- AdSense handles most GDPR requirements automatically
- Consider adding a privacy policy link
- Inform users about ad personalization

### Ad Policy Compliance
- Ensure your content complies with AdSense policies
- Avoid clicking your own ads
- Don't place ads on error pages or empty content

## 🐛 Troubleshooting

### Ads Not Showing

1. **Check Console Errors**: Look for JavaScript errors
2. **Verify Ad Unit IDs**: Ensure IDs are correct and active
3. **Test Ad Blocker**: Temporarily disable ad blocker
4. **Check AdSense Status**: Verify account is approved and active

### Layout Issues

1. **Responsive Testing**: Test on various screen sizes
2. **CSS Conflicts**: Check for conflicting styles
3. **Container Sizing**: Ensure ad containers have proper dimensions

### Performance Issues

1. **Lazy Loading**: Ensure lazy loading is working
2. **Script Loading**: Check AdSense script loads properly
3. **Network Requests**: Monitor network tab for ad requests

## 📈 Testing Your Setup

### Before Going Live

1. **Development Testing**:
   ```bash
   npm run dev
   # Test all ad placements
   # Check responsive behavior
   # Verify no console errors
   ```

2. **Cross-Browser Testing**:
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

3. **Ad Display Verification**:
   - Test with ad blocker disabled
   - Verify all placement positions
   - Check responsive breakpoints

### Production Testing

1. **Real Ad Units**: Use actual AdSense ad units
2. **Traffic Testing**: Monitor with real user traffic
3. **Performance Monitoring**: Check page speed impact

## 📞 Support and Resources

### Documentation
- [Google AdSense Help Center](https://support.google.com/adsense/)
- [AdSense Policy Center](https://support.google.com/adsense/answer/48182)
- [Web Vitals Guide](https://web.dev/vitals/)

### Optimization Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [AdSense Revenue Optimization](https://support.google.com/adsense/answer/9183549)

## 🚀 Next Steps

1. **Apply for AdSense** (if not already done)
2. **Replace placeholder IDs** with your actual ad unit IDs
3. **Test the implementation** thoroughly
4. **Monitor performance** and optimize placements
5. **Scale revenue** by analyzing user engagement patterns

---

**Note**: This advertising system is designed to be non-intrusive and maintain the excellent user experience of your wheelspinner app while generating revenue to support its continued development.