# Gilman Glasses - Professional Optometry Website

A modern, fully-responsive optometry practice website built with semantic HTML5, vanilla JavaScript, and CSS3. Features a data-driven architecture for easy content management.

## Features

### 18 Pages, All Ready to Go
- **Homepage** (index.html) - Hero section with services overview and benefits
- **About Dr. Fast** (about-dr-fast.html) - Professional background and practice values
- **Qualifications** (qualifications.html) - Credentials and professional certifications
- **Philosophy** (philosophy.html) - Practice philosophy and patient care approach
- **Testimonials** (testimonials.html) - Patient success stories and reviews
- **Meet Our Team** (staff.html) - Team member profiles with photos and expertise
- **Services Pages** (6 pages) - Comprehensive Eye Exams, Glasses & Frames, Contact Lenses, Eye Disease Treatment, Specialty Services, Insurance & Payment
- **Patient Resources** (6 pages) - Patient Forms, FAQ, Hours & Directions, Contact Us, Book Appointment, Pay Bill

### Design That Actually Works
- **Responsive Design** - Works great on phones, tablets, and desktop
- **Professional Color Scheme** - Clean, branded look (blues and greens)
- **Accessible** - Works with screen readers, keyboard navigation, WCAG AA compliant
- **Fast** - No bloat, just HTML, CSS, and JavaScript
- **Easy Navigation** - Sticky header with dropdown menus and mobile hamburger
- **Strong Calls-to-Action** - "Book Appointment" and "Pay Bill" are prominent

### Content Management Made Simple
- **Data-Driven** - All content lives in one `data.js` file
- **No Database** - Static site that deploys anywhere
- **Update Once, Everywhere** - Change content in one place and it updates across all pages
- **Template System** - Uses simple dot-notation for content paths

## File Structure

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

## Getting Started

### Viewing the Website
1. Open any HTML file in a web browser (double-click `index.html`)
2. Or run a local server: `python -m http.server 8000`

### Updating Content
1. Open `data.js` in your text editor
2. Find the section you need to change
3. Edit the content
4. Refresh your browser - that's it, all pages update automatically

## Updating Your Content

### The `data.js` File

This is where everything lives. One file, all your content:

```javascript
const siteData = {
  global: { ... },           // Business info used on all pages
  home: { ... },             // Homepage content
  aboutDrFast: { ... },      // About Dr. Fast page
  qualifications: { ... },   // Qualifications page
  // ... more pages ...
}
```

### Common Updates

**Update Business Info**
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

**Update Team Members**
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

**Update Hours**
```javascript
global: {
  hours: {
    monday: "9:00 AM - 5:00 PM",
    tuesday: "9:00 AM - 5:00 PM",
    // ...
  }
}
```

## Deployment

Pick what works best for you:

1. **GitHub Pages** - Free and automatic
2. **Netlify** - Drag and drop your files
3. **Traditional Hosting** - Upload via FTP
4. **Your Own Server** - Copy files over, done

No build process, no database, no complicated setup.

## What's Complete

- All 18 pages created and styled
- Responsive design for all devices
- Accessible (WCAG AA compliant)
- Consistent navigation throughout
- Professional color scheme and typography
- Data-driven content system
- Team member showcase
- Ready for production

---

**Status**: Ready for Production
**Last Updated**: January 2025
