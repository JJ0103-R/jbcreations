const siteData = {
    // 1. COMPANY INFORMATION
    company: {
        name: "JB CREATIONS",
        tagline: "Your Story. Our Creation.",
        description: "Creative media solutions designed to capture moments, build brands, and turn ideas into visual stories.",
        about: "JB Creations is a creative media company focused on transforming ideas, moments, and stories into engaging visual experiences. Founded by two brothers with a passion for creativity and media, we aim to provide professional and reliable visual content for individuals, events, brands, and businesses.",
        vision: "To build JB Creations into a trusted creative media brand that transforms ideas and moments into meaningful visual stories.",
        mission: "To provide creative, professional, and reliable media solutions that help individuals, brands, and businesses communicate their stories effectively through high-quality visual content."
    },

    // 2. CONTACT INFORMATION
    contact: {
        phone: "+91 6369317393, +91 8825791994",
        whatsapp: "916369317393", // e.g., 919876543210
        email: "jbcreations636@gmail.com",
        location: "166, South Street, Thokkavadi, Chengam, Thiruvanamalai - 606709"
    },

    // 3. SOCIAL MEDIA LINKS
    social: {
        instagram: "https://www.instagram.com/jb_creations.26?stkn=MTJwdzVzMMJwdW0wbw==",
        youtube: "https://youtube.com/",
        facebook: "https://www.facebook.com/profile.php?id=61594450217881&mibextid=ZbWKwL"
    },

    // 4. TEAM MEMBERS
    team: [
        {
            name: "Boobesh",
            role: "Founder, Editor & Cameraman",
            image: "assets/founder.jpg"
        },
        {
            name: "Jayaprakash JJ",
            role: "Founder, Editor & Cameraman",
            image: "assets/cofounder.jpg"
        }
    ],

    // 5. PACKAGES & BUDGET (Starting Prices)
    packages: [
        { name: "Photography", price: "499" },
        { name: "Videography", price: "599" },
        { name: "Video Editing", price: "499" },
        { name: "Reels", price: "599" },
        { name: "Product Video", price: "499" },
        { name: "Event Package (Per day shoot & edit)", price: "1999" }
    ],

    // 6. PAYMENT INFORMATION
    payment: {
        upiId: "6369317393@ptyes",
        bankName: "STATE BANK OF INDIA",
        accountName: "JAYAPRAKASH MURUGAN",
        paymentTerms: "50% advance, full payment after finishing the project"
    },

    // 7. PORTFOLIO ITEMS (Sample Data)
    portfolio: [
        { id: 1, title: "Wedding Event", category: "events", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600&h=400", desc: "A beautiful wedding captured." },
        { id: 3, title: "Portrait Session", category: "photography", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600&h=400", desc: "Creative studio portraits." },
        { id: 4, title: "Reel Edit", category: "reels", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=400", desc: "High-energy social media reel." },
        { id: 6, title: "Cinematic Video", category: "videography", image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80&w=600&h=400", desc: "Cinematic short film." }
    ],

    // 8. REFERENCE VIDEOS (Sample Data)
    referenceVideos: [
        { id: 1, title: "Travel Video", category: "Travel", desc: "Cinematic travel highlights reel.", thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=400&h=250", videoUrl: "https://www.instagram.com/reel/Ddu1POgg5f2/embed" },
        { id: 3, title: "Sample Social Reel", category: "Reels", desc: "Dynamic transitions and color grading.", thumbnail: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=400&h=250", videoUrl: "https://www.instagram.com/reel/DWG3JaojAaP/embed" }
    ]
};

// Export to window so main.js can use it
window.siteData = siteData;
