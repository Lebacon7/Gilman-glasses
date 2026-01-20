# Gilman Glasses - Professional Optometry Website

A modern, fully-responsive optometry practice website built with semantic HTML5, vanilla JavaScript, and CSS3. Features a data-driven architecture for easy content management.

## 🎯 Features

### Core Pages (18 Total)
- **Homepage** (index.html) - Hero section with services overview and benefits
- **About Dr. Fast** (about-dr-fast.html) - Professional background and practice values
- **Qualifications** (qualifications.html) - Credentials and professional certifications
- **Philosophy** (philosophy.html) - Practice philosophy and patient care approach
- **Testimonials** (testimonials.html) - Patient success stories and reviews
- **Meet Our Team** (staff.html) - Team member profiles with photos and expertise
- **Services Pages** (6 pages) - Comprehensive Eye Exams, Glasses & Frames, Contact Lenses, Eye Disease Treatment, Specialty Services, Insurance & Payment
- **Patient Resources** (6 pages) - Patient Forms, FAQ, Hours & Directions, Contact Us, Book Appointment, Pay Bill

### Design & UX
- ✅ **Responsive Design** - Mobile-first approach optimized for all devices
- ✅ **Professional Color Scheme** - Brand blue (#2c5aa0) with accent green (#27ae60)
- ✅ **Accessibility (WCAG AA)** - Focus management, ARIA labels, keyboard navigation
- ✅ **Fast Load Times** - No dependencies, pure HTML/CSS/JS
- ✅ **Modern Navigation** - Sticky header with dropdown menus and mobile hamburger menu
- ✅ **Clear Call-to-Action** - Prominent "Book Appointment" and "Pay Bill" buttons

### Content Management
- ✅ **Data-Driven System** - All content managed in single `data.js` file
- ✅ **No Database Needed** - Static site, deploy anywhere (GitHub Pages, Netlify, etc.)
- ✅ **Easy Updates** - Change content once, updates appear across all pages automatically
- ✅ **Template System** - Uses dot-notation paths for content (e.g., `global.businessName`)

## 📁 File Structure

```
gimand-glasses/
├── index.html                      # Homepage
├── about-dr-fast.html             # About Dr. Fast
├── qualifications.html            # Credentials
├── philosophy.html                # Practice Philosophy
├── testimonials.html              # Patient Testimonials
├── staff.html                     # Team Members
├── eye-exams.html                # Comprehensive Eye Exams
├── glasses-frames.html            # Glasses & Frames Service
├── contact-lenses.html            # Contact Lenses Service
├── eye-disease-treatment.html     # Eye Disease Treatment
├── specialty-services.html        # Specialty Services
├── insurance-payment.html         # Insurance & Payment
├── patient-forms.html             # Patient Forms
├── faq.html                       # FAQ
├── hours-directions.html          # Hours & Directions
├── contact.html                   # Contact Us
├── book-appointment.html          # Book Appointment
├── pay-bill.html                  # Pay Your Bill
├── data.js                        # ALL CONTENT - Edit this file to update content
├── PHOTOGRAPHY_SHOT_LIST.md       # Photography requirements for photographer
└── README.md                      # This file
```

## 🚀 Quick Start

### To View the Website
1. Open any HTML file in a web browser (e.g., double-click `index.html`)
2. Or serve via local web server: `python -m http.server 8000`

### To Update Content
1. Open `data.js` in any text editor
2. Find the section you want to update (organized by page name)
3. Edit the content
4. Refresh your browser - changes appear automatically on all pages

## 📝 Content Management Guide

### File: `data.js`

This is your single source of truth for all website content. The structure is:

```javascript
const siteData = {
  global: { ... },           // Business info used on all pages
  home: { ... },             // Homepage content
  aboutDrFast: { ... },      // About Dr. Fast page
  qualifications: { ... },   // Qualifications page
  // ... more pages ...
}
```

### Common Content Updates

#### Update Business Name, Phone, Email, Address
```javascript
global: {
  businessName: "Gilman Glasses",
  tagline: "C Fast Optometry",
  phone: "(123) 456-7890",
  email: "info@cfastoptometry.com",
  address: "[Street Address]",
  // ...
}
```

#### Update Team Members
```javascript
staff: {
  members: [
    {
      name: "Dr. Fast",
      title: "Optometrist, Owner",
      bio: "Your bio here...",
      imageAlt: "Dr. Fast photo"
    },
    // ... more team members ...
  ]
}
```

#### Update Hours
```javascript
global: {
  hours: {
    monday: "9:00 AM - 5:00 PM",
    tuesday: "9:00 AM - 5:00 PM",
    // ...
  }
}
```

## 🌐 Deployment

### Easy Deployment Options
1. **GitHub Pages** - Free, automatic deployment
2. **Netlify** - Drag & drop deployment
3. **Traditional Hosting** - Upload HTML files via FTP
4. **Own Server** - Copy files to any web server

No database, build step, or special requirements needed.

## ✅ Quality Checklist

- [x] All 18 pages created and styled
- [x] Responsive design (mobile, tablet, desktop)
- [x] Accessible (WCAG AA compliance)
- [x] Consistent header/navigation across all pages
- [x] Professional color scheme and typography
- [x] Data-driven content system
- [x] Team member showcase page
- [x] Photography shot list for photographer
- [x] Modern, finished appearance

---

**Status**: ✅ Ready for Production
**Last Updated**: January 2025
