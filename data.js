/**
 * C Fast Optometry - Content Data File
 * All text and content organized by page
 * Easy to update without modifying HTML files
 */

const siteData = {
  // Global/Header Footer Data
  global: {
    businessName: "Gildman Glasses",
    tagline: "C Fast Optometry",
    phone: "(123) 456-7890",
    email: "info@cfastoptometry.com",
    address: "[Street Address]",
    city: "[City]",
    state: "[State]",
    zip: "[ZIP]",
    year: 2025,
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "10:00 AM - 3:00 PM",
      sunday: "Closed"
    }
  },

  // Home Page (index.html)
  home: {
    heroTitle: "Professional Eye Care You Can Trust",
    heroSubtitle: "Expert optometry services for the whole family at C Fast Optometry",
    heroCTA1: "Schedule Your Eye Exam Today",
    heroCTA2: "Learn More",
    welcomeTitle: "Welcome to C Fast Optometry",
    welcomeText1: "At C Fast Optometry, we specialize in providing comprehensive eye care services to our community. Dr. Fast is dedicated to ensuring every patient receives personalized attention and the highest quality of care.",
    welcomeText2: "With state-of-the-art technology and a passion for patient care, we offer a full range of optometry services for patients of all ages. From routine eye exams to specialty treatments, we're here to help you maintain healthy vision.",
    welcomeText3: "Visit our About page to learn more about Dr. Fast's experience, qualifications, and our practice philosophy.",
    welcomeButtonText: "Learn About Dr. Fast",
    servicesTitle: "Our Services",
    serviceCards: [
      {
        title: "Comprehensive Eye Exams",
        description: "Thorough eye examinations to detect vision problems and eye health issues early.",
        link: "eye-exams.html"
      },
      {
        title: "Glasses & Frames",
        description: "Wide selection of fashionable and quality eyeglass frames for every style and budget.",
        link: "glasses-frames.html"
      },
      {
        title: "Contact Lenses",
        description: "Professional fitting and prescription for comfortable contact lens wear.",
        link: "contact-lenses.html"
      },
      {
        title: "Eye Disease Treatment",
        description: "Diagnosis and management of conditions like glaucoma, cataracts, and macular degeneration.",
        link: "eye-disease-treatment.html"
      }
    ],
    whyChooseTitle: "Why Choose C Fast Optometry?",
    benefits: [
      {
        title: "Patient-Centered Care",
        description: "Your vision and comfort are our top priorities."
      },
      {
        title: "Advanced Technology",
        description: "We use state-of-the-art diagnostic equipment."
      },
      {
        title: "Experienced Professional",
        description: "Dr. Fast combines expertise with compassion."
      },
      {
        title: "Convenient Hours",
        description: "Flexible scheduling to fit your busy lifestyle."
      },
      {
        title: "Insurance Friendly",
        description: "We accept most major insurance plans."
      }
    ],
    ctaTitle: "Ready to Improve Your Vision?",
    ctaSubtitle: "Book your comprehensive eye exam with Dr. Fast today.",
    ctaButtonText: "Book Appointment Now"
  },

  // About Dr. Fast (about-dr-fast.html)
  aboutDrFast: {
    pageTitle: "About Dr. Fast",
    mainTitle: "Professional Excellence in Optometry",
    mainText1: "Dr. Fast is a dedicated optometrist with extensive experience in comprehensive eye care. With a passion for helping patients achieve and maintain healthy vision, Dr. Fast has built a reputation for providing personalized care and attention to every patient who walks through our doors.",
    commitmentTitle: "Our Commitment",
    mainText2: "At C Fast Optometry, we believe that quality eye care should be accessible and affordable. We use the latest technology and techniques to provide accurate diagnoses and effective treatments for a wide range of eye conditions.",
    mainText3: "We take time to listen to our patients' concerns and develop treatment plans that work best for their individual needs. Whether you're here for a routine eye exam or specialty care, you can expect professional, compassionate service from our entire team.",
    whyChooseTitle: "Why Choose Our Practice",
    whyChooseItems: [
      {
        title: "Comprehensive Eye Care",
        description: "Complete range of services from eye exams to specialty treatments"
      },
      {
        title: "Advanced Technology",
        description: "Latest diagnostic and treatment equipment"
      },
      {
        title: "Patient-Focused Care",
        description: "Personalized attention and treatment plans for each patient"
      },
      {
        title: "Convenient Hours",
        description: "Flexible scheduling to accommodate your lifestyle"
      }
    ]
  },

  // Qualifications (qualifications.html)
  qualifications: {
    pageTitle: "Dr. Fast's Qualifications",
    credentials: [
      {
        title: "Doctor of Optometry (OD)",
        description: "Earned from an accredited optometry school with advanced training in comprehensive eye care, including diagnosis and treatment of eye diseases."
      },
      {
        title: "Licensed Optometrist",
        description: "Fully licensed to practice optometry with the authority to conduct comprehensive eye exams, prescribe eyeglasses and contact lenses, and diagnose and treat certain eye diseases."
      },
      {
        title: "Board Certified",
        description: "Maintains current certification and continuing education in all areas of optometry practice, ensuring the highest standards of patient care."
      },
      {
        title: "Specialty Training",
        description: "Advanced training in specialty areas including contact lens fitting, pediatric eye care, and management of eye diseases such as glaucoma and diabetic retinopathy."
      },
      {
        title: "Professional Memberships",
        description: "Active member of professional optometry organizations committed to advancing the profession and ensuring patient safety and satisfaction."
      },
      {
        title: "Years of Experience",
        description: "Extensive experience providing comprehensive eye care to patients of all ages with a focus on personalized, compassionate care."
      }
    ]
  },

  // Philosophy (philosophy.html)
  philosophy: {
    pageTitle: "Our Practice Philosophy",
    philosophyItems: [
      {
        title: "Patient-Centered Care",
        description: "We believe that every patient deserves individualized attention and care. We take the time to listen to your concerns, understand your vision needs, and develop personalized treatment plans."
      },
      {
        title: "Excellence in Clinical Practice",
        description: "We maintain the highest standards of clinical excellence by staying current with the latest advancements in optometry and investing in state-of-the-art diagnostic equipment."
      },
      {
        title: "Accessibility and Affordability",
        description: "We believe quality eye care should be accessible to everyone. We work with most insurance plans and offer flexible payment options to ensure affordability for all patients."
      },
      {
        title: "Education and Prevention",
        description: "We emphasize the importance of preventive care and patient education. We take time to explain your eye health conditions and discuss options for maintaining and improving your vision."
      },
      {
        title: "Compassion and Respect",
        description: "We treat every patient with dignity, respect, and compassion. Our goal is to create a comfortable, welcoming environment where you feel valued and heard."
      }
    ]
  },

  // Testimonials (testimonials.html)
  testimonials: {
    pageTitle: "Patient Testimonials",
    testimonialList: [
      {
        quote: "Dr. Fast was incredibly thorough with my eye exam and took time to explain everything. I felt completely comfortable and well-informed.",
        author: "Sarah M."
      },
      {
        quote: "Best eye care experience I've had. The staff is friendly, and Dr. Fast is very knowledgeable and professional. Highly recommended!",
        author: "John T."
      },
      {
        quote: "I've been a patient for several years and always receive excellent care. The practice is clean, professional, and the service is outstanding.",
        author: "Linda R."
      },
      {
        quote: "Dr. Fast caught a potential problem during my exam that I wasn't aware of. Their attention to detail is exceptional and truly cares about patient health.",
        author: "Michael W."
      },
      {
        quote: "Great experience from start to finish. The office environment is welcoming and Dr. Fast explains everything clearly. Would definitely recommend to friends and family.",
        author: "Patricia L."
      },
      {
        quote: "Professional, caring, and efficient. Dr. Fast provided excellent service and my prescription is perfect. Thank you for taking such good care of my vision!",
        author: "David K."
      }
    ]
  },

  // Eye Exams (eye-exams.html)
  eyeExams: {
    pageTitle: "Comprehensive Eye Exams",
    subtitle: "Early detection of eye health problems is key to maintaining good vision throughout your life. Our comprehensive eye exams include state-of-the-art diagnostic testing to assess your vision and eye health.",
    features: [
      {
        title: "Visual Acuity Testing",
        description: "Measure how clearly you can see at various distances to determine if you need vision correction."
      },
      {
        title: "Refraction Assessment",
        description: "Precise measurement to determine your exact prescription for glasses or contact lenses."
      },
      {
        title: "Eye Pressure Testing",
        description: "Screen for glaucoma by measuring the pressure inside your eyes using advanced equipment."
      },
      {
        title: "Retinal Examination",
        description: "Detailed inspection of the retina to check for any signs of disease or abnormality."
      },
      {
        title: "Visual Field Testing",
        description: "Evaluate your peripheral vision to detect any blind spots or vision loss."
      },
      {
        title: "Eye Health Assessment",
        description: "Comprehensive evaluation of overall eye health including screening for cataracts and other conditions."
      }
    ],
    scheduleTitle: "When Should You Get an Eye Exam?",
    scheduleItems: [
      {
        frequency: "Adults with no vision problems:",
        timing: "Every 1-2 years"
      },
      {
        frequency: "Adults over 60:",
        timing: "Every year"
      },
      {
        frequency: "Children:",
        timing: "At least once before age 3, then before school age, then every 1-2 years"
      },
      {
        frequency: "People with eye conditions:",
        timing: "As recommended by Dr. Fast"
      }
    ]
  },

  // Glasses & Frames (glasses-frames.html)
  glassesFrames: {
    pageTitle: "Glasses & Frames",
    subtitle: "We offer a wide selection of fashionable and high-quality eyeglass frames to suit every style, face shape, and budget. Our expert staff can help you find frames that not only look great but also provide optimal vision correction.",
    features: [
      {
        title: "Designer Frames",
        description: "Latest styles from top designers to keep you looking your best while correcting your vision."
      },
      {
        title: "Budget-Friendly Options",
        description: "Quality eyeglasses at affordable prices without compromising on style or durability."
      },
      {
        title: "Specialty Lenses",
        description: "Anti-glare, scratch-resistant, progressive, and blue light blocking lens options available."
      },
      {
        title: "Custom Fitting",
        description: "Professional fitting and adjustment to ensure your glasses are comfortable and provide optimal vision."
      },
      {
        title: "Frame Styles",
        description: "Choose from classic, modern, bold, or trendy styles that match your personality and face shape."
      },
      {
        title: "Children's Frames",
        description: "Durable and stylish frames designed specifically for children's needs and active lifestyles."
      }
    ]
  },

  // Contact Lenses (contact-lenses.html)
  contactLenses: {
    pageTitle: "Contact Lenses",
    subtitle: "Contact lenses offer freedom, comfort, and excellent vision correction. Dr. Fast provides professional contact lens fitting and can help you find the perfect lenses for your lifestyle and visual needs.",
    types: [
      {
        title: "Soft Contact Lenses",
        description: "Comfortable, easy to wear daily contact lenses for most vision correction needs."
      },
      {
        title: "Toric Lenses",
        description: "Specialized lenses for correcting astigmatism with excellent stability and comfort."
      },
      {
        title: "Multifocal Lenses",
        description: "Advanced lenses that correct both distance and near vision for presbyopia."
      },
      {
        title: "Rigid Gas Permeable",
        description: "Durable lenses that provide excellent optics and are ideal for certain conditions."
      },
      {
        title: "Specialty Lenses",
        description: "Custom options for keratoconus, post-surgical eyes, and other special needs."
      },
      {
        title: "Extended Wear",
        description: "Lenses that can be worn continuously for extended periods with proper care."
      }
    ],
    fittingInfo: "Contact Lens Fitting: A proper contact lens fitting is essential for comfort and safety. Dr. Fast will perform a thorough fitting to ensure your lenses provide optimal vision and comfort while protecting your eye health."
  },

  // Eye Disease Treatment (eye-disease-treatment.html)
  eyeDiseasetreatment: {
    pageTitle: "Eye Disease Treatment & Management",
    subtitle: "Early detection and treatment of eye diseases can help preserve your vision. Dr. Fast provides comprehensive diagnosis and management of common eye conditions.",
    treatments: [
      {
        title: "Glaucoma",
        description: "A condition characterized by increased intraocular pressure that can damage the optic nerve. Early detection through comprehensive eye exams and treatment can help prevent vision loss."
      },
      {
        title: "Cataracts",
        description: "Clouding of the lens that develops gradually. We monitor cataracts and provide referrals for surgical treatment when necessary to restore clear vision."
      },
      {
        title: "Macular Degeneration",
        description: "Age-related eye condition affecting central vision. Early detection and management strategies can help slow progression and maintain quality of vision."
      },
      {
        title: "Diabetic Retinopathy",
        description: "Eye disease caused by diabetes that affects the blood vessels in the retina. Regular monitoring and proper management are crucial for patients with diabetes."
      },
      {
        title: "Dry Eye Syndrome",
        description: "Condition where the eyes don't produce enough tears or the tears are of poor quality. We offer various treatment options to improve comfort and eye health."
      },
      {
        title: "Presbyopia",
        description: "Age-related loss of focusing ability that requires vision correction. We provide solutions such as multifocal lenses to address this common condition."
      }
    ]
  },

  // Specialty Services (specialty-services.html)
  specialtyServices: {
    pageTitle: "Specialty Services",
    services: [
      {
        title: "Pediatric Eye Care",
        description: "Specialized care for children including vision screening, amblyopia treatment, and monitoring of eye development. Early detection of vision problems is crucial for proper child development."
      },
      {
        title: "Low Vision Services",
        description: "Specialized care and rehabilitation for patients with significant vision loss due to age, disease, or injury. We help patients maximize their remaining vision."
      },
      {
        title: "Computer Vision Syndrome Management",
        description: "Solutions for eye strain and discomfort related to extended screen time. Includes ergonomic assessment and specialized lens prescriptions."
      },
      {
        title: "Sports Vision Enhancement",
        description: "Specialized vision correction and training for athletes to enhance performance and protect eyes during sports activities."
      },
      {
        title: "Occupational Vision Care",
        description: "Tailored vision solutions for specific job requirements, including progressive lenses for office work and specialized protection for hazardous environments."
      },
      {
        title: "Post-Surgical Eye Care",
        description: "Comprehensive follow-up care and vision correction after LASIK, cataract surgery, or other ophthalmic procedures."
      }
    ]
  },

  // Insurance & Payment (insurance-payment.html)
  insurancePayment: {
    pageTitle: "Insurance & Payment Options",
    insuranceInfo: "We accept most major health insurance plans. We are an in-network provider for many insurance companies, which can help reduce your out-of-pocket costs. Please bring your insurance card to your appointment.",
    insuranceQuestion: "If you have questions about your coverage or whether we participate in your plan, please contact us before your visit.",
    visionInsuranceInfo: "We accept vision insurance plans that cover eye exams, glasses, and contact lenses. Vision insurance benefits typically provide discounts on eyeglasses and contact lenses, as well as coverage for annual eye exams.",
    paymentMethods: [
      "Cash",
      "Debit/Credit Cards",
      "Health Savings Accounts (HSA)",
      "Flexible Spending Accounts (FSA)"
    ],
    financialAssistance: "We understand that eye care is an important investment in your health. We offer flexible payment plans to help make quality eye care accessible and affordable for all patients. Contact us to discuss payment options.",
    billingQuestion: "If you have questions about your bill or insurance coverage, please don't hesitate to contact us. Our staff is happy to help explain charges and discuss payment options."
  },

  // Patient Forms (patient-forms.html)
  patientForms: {
    pageTitle: "Patient Forms",
    subtitle: "Please complete the following forms before your visit. You can download and fill them out at home, or arrive early to complete them in our office.",
    forms: [
      {
        title: "New Patient Registration Form",
        description: "Required for all new patients. Includes contact information, medical history, and emergency contacts."
      },
      {
        title: "Vision & Eye Health History",
        description: "Detailed information about your vision problems, previous eye conditions, and family eye health history."
      },
      {
        title: "Medical History Form",
        description: "General health information including current medications, allergies, and any medical conditions that may affect your vision."
      },
      {
        title: "Contact Lens Fitting Agreement",
        description: "Required for patients interested in contact lenses. Includes fitting guidelines and care instructions."
      },
      {
        title: "Insurance Information Form",
        description: "Please provide your insurance information to help us process your claim efficiently."
      },
      {
        title: "HIPAA Privacy Notice",
        description: "Our privacy policy regarding your protected health information and how we handle your personal data."
      }
    ],
    troubleInfo: "Having trouble with forms? Contact us and we'll be happy to help!"
  },

  // FAQ (faq.html)
  faq: {
    pageTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How often should I have my eyes examined?",
        answer: "Adults with no vision problems should have an eye exam every 1-2 years. Those over 60 should have annual exams. People with eye conditions or risk factors should follow Dr. Fast's recommendations."
      },
      {
        question: "Do you accept insurance?",
        answer: "Yes, we accept most major health and vision insurance plans. Please bring your insurance card to your appointment. Contact us if you're unsure about your coverage."
      },
      {
        question: "How long does an eye exam take?",
        answer: "A comprehensive eye exam typically takes 45 minutes to an hour, depending on any additional testing that may be needed."
      },
      {
        question: "Can I get a prescription for glasses and contacts from the same exam?",
        answer: "Yes, your eye exam prescription can be used for both glasses and contacts. However, contact lens fitting requires additional measurements and fitting."
      },
      {
        question: "What should I bring to my appointment?",
        answer: "Bring your insurance card, photo ID, list of current medications, and any relevant medical history. If you wear glasses or contacts, bring them along."
      },
      {
        question: "Do you offer emergency appointments?",
        answer: "Yes, we try to accommodate emergency appointments for acute eye problems. Call us immediately if you experience sudden vision changes or eye pain."
      },
      {
        question: "How long are glasses prescriptions valid?",
        answer: "Glasses prescriptions are typically valid for one year. Outdated prescriptions may not provide optimal vision correction."
      },
      {
        question: "What is my prescription number?",
        answer: "We'll provide you with a copy of your prescription after your exam. You can use this to purchase glasses or contacts from any retailer."
      }
    ]
  },

  // Hours & Directions (hours-directions.html)
  hoursDirections: {
    pageTitle: "Hours & Directions",
    hoursTitle: "Business Hours",
    addressTitle: "Contact Information",
    emergencyInfo: "For emergency eye care or urgent vision problems, please call us immediately."
  },

  // Contact (contact.html)
  contact: {
    pageTitle: "Contact Us",
    phoneDescription: "Call us during business hours to speak with our staff or schedule an appointment.",
    emailDescription: "Send us an email with your questions or appointment requests. We'll respond within 24 hours.",
    visitDescription: "Visit us in person during our business hours."
  },

  // Book Appointment (book-appointment.html)
  bookAppointment: {
    pageTitle: "Book Your Appointment",
    subtitle: "Schedule an appointment with Dr. Fast. Please fill out the form below and we'll contact you to confirm your appointment time.",
    serviceOptions: [
      { value: "exam", label: "Comprehensive Eye Exam" },
      { value: "glasses", label: "Glasses Fitting" },
      { value: "contacts", label: "Contact Lens Fitting" },
      { value: "followup", label: "Follow-up Visit" },
      { value: "other", label: "Other" }
    ],
    timeOptions: [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM"
    ],
    formLabels: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Preferred Service",
      date: "Preferred Date",
      time: "Preferred Time",
      message: "Additional Information"
    },
    messagePlaceholder: "Any special requests or health concerns?",
    submitButton: "Request Appointment",
    orCallText: "Or call us to schedule your appointment."
  },

  // Pay Bill (pay-bill.html)
  payBill: {
    pageTitle: "Pay Your Bill",
    subtitle: "Thank you for choosing C Fast Optometry. Please select your preferred payment method.",
    paymentOptions: [
      {
        title: "Online Payment",
        description: "Pay your bill securely online using your debit or credit card.",
        note: "[Payment gateway integration would go here]",
        buttonText: "Pay Online"
      },
      {
        title: "Payment by Phone",
        description: "Call us to pay your bill over the phone with a credit or debit card.",
        note: "Available during business hours",
        buttonText: "Call (123) 456-7890"
      },
      {
        title: "In-Office Payment",
        description: "Pay your bill in person at our office. We accept cash, cards, and checks.",
        note: "Monday - Saturday",
        buttonText: "Get Directions"
      }
    ],
    questionsText: "Have questions about your bill? Contact us for assistance."
  }
};

/**
 * Helper function to get data for a specific page
 * @param {string} pageName - The name of the page (e.g., 'home', 'aboutDrFast')
 * @returns {object} - The data object for that page
 */
function getPageData(pageName) {
  return siteData[pageName] || {};
}

/**
 * Helper function to get global data
 * @returns {object} - Global site data
 */
function getGlobalData() {
  return siteData.global;
}
