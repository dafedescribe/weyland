export const siteConfig = {
  // Brand
  siteName: "D-Wey",
  tagline: "Smart WhatsApp Link Management",
  
  // Contact
  whatsappNumber: "2348012345678", // EDIT THIS
  whatsappLink: "https://wa.me/2348012345678?text=Hi!%20I%20want%20to%20start%20creating%20links",
  supportEmail: "support@d-wey.com",
  
  // Social Media
  social: {
    whatsapp: "https://wa.me/2348012345678",
    twitter: "https://twitter.com/dwey", // EDIT THIS
    instagram: "https://instagram.com/dwey", // EDIT THIS
  },
  
  // Stats
  stats: {
    activeUsers: "1,000+",
    linksCreated: "50K+",
    clicksTracked: "1M+",
    signupBonus: "1000 Free Tums",
    linkDuration: "24/7 Active",
    dailyCost: "20 Tums/Day"
  },
  
  // Pricing
  pricing: {
    createLink: 250,
    dailyMaintenance: 20,
    checkStats: 10,
    setRedirect: 10,
    reactivate: 100,
    signupBonus: 1000
  },
  
  // Features
  features: [
    {
      id: "short-links",
      icon: "Link",
      title: "Custom Short Links",
      description: "Turn long numbers into memorable links like d-wey.com/myshop"
    },
    {
      id: "analytics",
      icon: "BarChart",
      title: "Real-Time Analytics",
      description: "See total clicks, unique visitors, and peak activity times"
    },
    {
      id: "custom-messages",
      icon: "MessageSquare",
      title: "Pre-filled Messages",
      description: "Add custom messages that appear when links are opened"
    },
    {
      id: "redirects",
      icon: "RefreshCw",
      title: "Temporary Redirects",
      description: "Test ads by redirecting clicks to different numbers"
    },
    {
      id: "shared-access",
      icon: "Users",
      title: "Transparent Tracking",
      description: "Both creator and target can view link statistics"
    },
    {
      id: "auto-renewal",
      icon: "Zap",
      title: "Auto-Renewal",
      description: "Links renew daily automatically from your wallet"
    }
  ],
  
  // How It Works Steps
  howItWorks: [
    {
      id: "step-1",
      number: "01",
      icon: "MessageCircle",
      title: "Message Our WhatsApp Bot",
      description: "Send a message to get started. Receive 1000 free tums instantly!",
      code: null
    },
    {
      id: "step-2",
      number: "02",
      icon: "Link",
      title: "Create Your First Link",
      description: "Type: create 08012345678 - Get your custom short link in seconds",
      code: "create 08012345678"
    },
    {
      id: "step-3",
      number: "03",
      icon: "TrendingUp",
      title: "Share & Track Performance",
      description: "Share your link anywhere. Check stats with: stats LINKCODE",
      code: "stats LINKCODE"
    }
  ],
  
  // Guides
  guides: [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Account setup and first link creation",
      duration: "3-5 min",
      difficulty: "Beginner",
      videoUrl: "", // EDIT: Add YouTube URL
      thumbnail: "", // EDIT: Add thumbnail URL
      content: "Learn how to set up your D-Wey account and create your first WhatsApp link in minutes."
    },
    {
      id: "creating-links",
      title: "Creating Links",
      description: "Detailed guide with examples",
      duration: "5-7 min",
      difficulty: "Beginner",
      videoUrl: "", // EDIT: Add YouTube URL
      thumbnail: "", // EDIT: Add thumbnail URL
      content: "Master the art of creating effective WhatsApp links with custom messages and settings."
    },
    {
      id: "analytics",
      title: "Understanding Analytics",
      description: "What each metric means",
      duration: "4-6 min",
      difficulty: "Intermediate",
      videoUrl: "", // EDIT: Add YouTube URL
      thumbnail: "", // EDIT: Add thumbnail URL
      content: "Learn to read and interpret your link analytics to optimize your marketing strategy."
    },
    {
      id: "redirects",
      title: "Temporal Redirects",
      description: "Use cases and examples",
      duration: "6-8 min",
      difficulty: "Advanced",
      videoUrl: "", // EDIT: Add YouTube URL
      thumbnail: "", // EDIT: Add thumbnail URL
      content: "Advanced techniques for using temporary redirects to test different ad campaigns."
    },
    {
      id: "wallet",
      title: "Managing Wallet & Tums",
      description: "Coupon system and pricing",
      duration: "3-4 min",
      difficulty: "Beginner",
      videoUrl: "", // EDIT: Add YouTube URL
      thumbnail: "", // EDIT: Add thumbnail URL
      content: "Discover how to get free tums daily and manage your wallet efficiently."
    },
    {
      id: "advanced",
      title: "Advanced Features",
      description: "Power user tips",
      duration: "7-10 min",
      difficulty: "Advanced",
      videoUrl: "", // EDIT: Add YouTube URL
      thumbnail: "", // EDIT: Add thumbnail URL
      content: "Unlock the full potential of D-Wey with bulk operations and pro tips."
    }
  ],
  
  // Media Gallery
  media: {
    videos: [
      {
        id: "video1",
        title: "Getting Started with D-Wey",
        thumbnail: "", // EDIT: Add thumbnail URL
        videoUrl: "", // EDIT: Add YouTube URL
        duration: "5:32",
        category: "tutorial"
      },
      {
        id: "video2",
        title: "Creating Your First Link",
        thumbnail: "", // EDIT: Add thumbnail URL
        videoUrl: "", // EDIT: Add YouTube URL
        duration: "4:15",
        category: "tutorial"
      }
    ],
    images: [
      {
        id: "img1",
        title: "Dashboard Overview",
        url: "", // EDIT: Add image URL
        category: "screenshot"
      },
      {
        id: "img2",
        title: "Analytics Dashboard",
        url: "", // EDIT: Add image URL
        category: "screenshot"
      }
    ],
    testimonials: [
      {
        id: "test1",
        name: "Chidi Okafor",
        role: "Business Owner",
        avatar: "", // EDIT: Add avatar URL
        content: "D-Wey helped me track my WhatsApp marketing campaigns effectively. Highly recommended!",
        results: "300% increase in conversions"
      },
      {
        id: "test2",
        name: "Amina Mohammed",
        role: "Digital Marketer",
        avatar: "", // EDIT: Add avatar URL
        content: "The analytics are game-changing. I can now see which campaigns perform best.",
        results: "50+ active links managed"
      }
    ]
  },
  
  // Sponsors
  sponsors: [
    {
      id: "sponsor1",
      name: "Example Business",
      logo: "", // EDIT: Add logo URL or path
      service: "Digital Marketing Services",
      description: "Professional marketing solutions for your business",
      whatsappNumber: "2348012345678", // EDIT THIS
      whatsappMessage: "Hi! I'm interested in your services"
    },
    {
      id: "sponsor2",
      name: "Partner Company",
      logo: "", // EDIT: Add logo URL or path
      service: "Web Development",
      description: "Custom web solutions and development",
      whatsappNumber: "2348012345678", // EDIT THIS
      whatsappMessage: "Hi! I'd like to know more about your services"
    }
  ],
  
  // FAQ
  faqs: [
    {
      id: "faq1",
      question: "What is D-Wey?",
      answer: "D-Wey is a WhatsApp link shortening and analytics service that helps you create trackable short links for WhatsApp numbers, monitor clicks, and grow your business."
    },
    {
      id: "faq2",
      question: "How do I get started?",
      answer: "Simply message our WhatsApp bot and you'll receive 1000 free tums instantly. Then use the 'create' command followed by the phone number to generate your first link."
    },
    {
      id: "faq3",
      question: "What are tums?",
      answer: "Tums are the credits used to create and maintain links on D-Wey. Each action (creating links, checking stats, etc.) costs a certain number of tums."
    },
    {
      id: "faq4",
      question: "How do I get free tums?",
      answer: "Check our WhatsApp status daily for fresh coupon codes! We provide daily codes that give you free tums to keep your links active."
    },
    {
      id: "faq5",
      question: "How long do links last?",
      answer: "Links remain active 24/7 as long as you have sufficient tums for daily maintenance (20 tums per day per link). They auto-renew from your wallet."
    },
    {
      id: "faq6",
      question: "Can I customize my links?",
      answer: "Yes! When creating a link, you can add custom messages that appear pre-filled when someone opens your WhatsApp link."
    },
    {
      id: "faq7",
      question: "Who can see my analytics?",
      answer: "Both the link creator and the target WhatsApp number owner can view the link statistics for complete transparency."
    },
    {
      id: "faq8",
      question: "What are temporal redirects?",
      answer: "Temporal redirects allow you to temporarily redirect clicks to different WhatsApp numbers. Perfect for testing different ad campaigns or numbers."
    },
    {
      id: "faq9",
      question: "How do I reactivate a link?",
      answer: "If a link expires due to insufficient tums, you can reactivate it for 100 tums using the reactivate command."
    },
    {
      id: "faq10",
      question: "Is there a mobile app?",
      answer: "D-Wey works entirely through WhatsApp - no separate app needed! Just message our bot to manage everything."
    },
    {
      id: "faq11",
      question: "How do I contact support?",
      answer: "You can reach our support team via WhatsApp at the same bot number, or email us at support@d-wey.com."
    },
    {
      id: "faq12",
      question: "Can I use this for business?",
      answer: "Absolutely! D-Wey is perfect for businesses of all sizes. Track your marketing campaigns, measure ROI, and optimize your WhatsApp outreach."
    },
    {
      id: "faq13",
      question: "What happens if I run out of tums?",
      answer: "Your links will remain inactive until you add more tums. Get free tums daily via coupon codes or purchase more through the bot."
    },
    {
      id: "faq14",
      question: "Can I delete a link?",
      answer: "Yes, you can delete links at any time through the WhatsApp bot. This will free up your daily maintenance costs."
    },
    {
      id: "faq15",
      question: "Are there any hidden fees?",
      answer: "No hidden fees! Our pricing is completely transparent. You only pay for what you use based on the tum costs listed in our pricing section."
    }
  ],
  
  // Footer Links
  footer: {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Guides", href: "#guides" },
      { label: "Status Page", href: "#" }
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Video Tutorials", href: "#media" },
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" }
    ]
  }
};
