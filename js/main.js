document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       0. Cinematic Intro
       ========================================================================== */
    const introOverlay = document.getElementById('cinematic-intro');
    const skipBtn = document.getElementById('skip-intro');

    if (introOverlay) {
        const hasSeenIntro = sessionStorage.getItem('jb_intro_seen');
        
        if (hasSeenIntro) {
            introOverlay.classList.add('no-transition');
            introOverlay.style.display = 'none';
        } else {
            // Lock scrolling while intro plays
            document.body.style.overflow = 'hidden';
            
            // Mark as seen for this session
            sessionStorage.setItem('jb_intro_seen', 'true');

            // Function to close intro
            const closeIntro = () => {
                introOverlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
                setTimeout(() => {
                    introOverlay.style.display = 'none';
                }, 1200); // matches CSS transition duration
            };

            // Auto-close after ~4 seconds (4000ms)
            const introTimer = setTimeout(closeIntro, 4000);

            // Skip button
            if (skipBtn) {
                skipBtn.addEventListener('click', () => {
                    clearTimeout(introTimer);
                    closeIntro();
                });
            }
        }
    }

    /* ==========================================================================
       1. Populate Data from data.js
       ========================================================================== */
    function populateData() {
        if (!window.siteData) {
            console.error("siteData not found. Ensure data.js is loaded.");
            return;
        }
        
        const data = window.siteData;
        
        // 1.1 Text Elements
        document.querySelectorAll('[data-content]').forEach(el => {
            const path = el.getAttribute('data-content').split('.');
            let val = data;
            for (let i = 0; i < path.length; i++) {
                if (val) val = val[path[i]];
            }
            if (val) el.textContent = val;
        });

        // 1.2 Team Members
        const teamContainer = document.getElementById('team-container');
        if (teamContainer && data.team) {
            data.team.forEach(member => {
                teamContainer.innerHTML += `
                    <div class="team-card">
                        <div class="team-img">
                            <img src="${member.image}" alt="${member.name}" loading="lazy">
                        </div>
                        <div class="team-info">
                            <h4>${member.name}</h4>
                            <p>${member.role}</p>
                        </div>
                    </div>
                `;
            });
        }

        // 1.3 Portfolio
        const portfolioContainer = document.getElementById('portfolio-container');
        if (portfolioContainer && data.portfolio) {
            data.portfolio.forEach(item => {
                portfolioContainer.innerHTML += `
                    <div class="portfolio-item" data-category="${item.category}" data-img="${item.image}">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                        <div class="portfolio-overlay">
                            <h3>${item.title}</h3>
                            <span>${item.category}</span>
                        </div>
                    </div>
                `;
            });
        }

        // 1.4 Reference Videos
        const videoContainer = document.getElementById('video-container');
        if (videoContainer && data.referenceVideos) {
            data.referenceVideos.forEach(vid => {
                videoContainer.innerHTML += `
                    <div class="video-card">
                        <div class="video-thumb" data-video="${vid.videoUrl}">
                            <img src="${vid.thumbnail}" alt="${vid.title}" loading="lazy">
                            <div class="play-icon"><i class="ph-fill ph-play"></i></div>
                        </div>
                        <div class="video-info">
                            <span>${vid.category}</span>
                            <h3>${vid.title}</h3>
                            <p>${vid.desc}</p>
                        </div>
                    </div>
                `;
            });
        }

        // 1.5 Packages
        const pricingContainer = document.getElementById('pricing-container');
        if (pricingContainer && data.packages) {
            data.packages.forEach(pkg => {
                pricingContainer.innerHTML += `
                    <div class="price-item">
                        <h4>${pkg.name}</h4>
                        <span class="price">Starting from ₹${pkg.price}</span>
                    </div>
                `;
            });
        }

        // 1.6 Payment Info
        const paymentContainer = document.getElementById('payment-container');
        if (paymentContainer && data.payment) {
            paymentContainer.innerHTML = `
                <div class="pay-detail"><h5>UPI ID</h5><p>${data.payment.upiId}</p></div>
                <div class="pay-detail"><h5>Bank Name</h5><p>${data.payment.bankName}</p></div>
                <div class="pay-detail"><h5>Account Name</h5><p>${data.payment.accountName}</p></div>
                <div class="pay-detail"><h5>Terms</h5><p>${data.payment.paymentTerms}</p></div>
            `;
        }

        // 1.7 Social Links (Contact section & Footer)
        const socialHTML = `
            ${data.social.instagram ? `<a href="${data.social.instagram}" target="_blank" aria-label="Instagram"><i class="ph ph-instagram-logo"></i></a>` : ''}
            ${data.social.youtube ? `<a href="${data.social.youtube}" target="_blank" aria-label="YouTube"><i class="ph ph-youtube-logo"></i></a>` : ''}
            ${data.social.facebook ? `<a href="${data.social.facebook}" target="_blank" aria-label="Facebook"><i class="ph ph-facebook-logo"></i></a>` : ''}
        `;
        const socialContainer = document.getElementById('social-container');
        const footerSocial = document.getElementById('footer-social-container');
        if(socialContainer) socialContainer.innerHTML = socialHTML;
        if(footerSocial) footerSocial.innerHTML = socialHTML;

        // 1.8 WhatsApp Button
        const waBtn = document.getElementById('whatsapp-btn');
        if (waBtn && data.contact.whatsapp) {
            const message = encodeURIComponent("Hi JB Creations, I would like to enquire about your media services.");
            waBtn.href = `https://wa.me/${data.contact.whatsapp}?text=${message}`;
        }
    }
    
    populateData();

    /* ==========================================================================
       2. Navigation & Scrolling
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const bttBtn = document.getElementById('btt-btn');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Sticky Nav & Back to Top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            bttBtn.classList.add('visible');
        } else {
            bttBtn.classList.remove('visible');
        }
    });

    // Back to top click
    bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Hamburger Menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('nav-active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    // Close menu on link click and smooth scroll
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Only prevent default if it's an internal hash link
            if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                navLinks.classList.remove('nav-active');
                hamburger.querySelector('i').classList.remove('ph-x');
                hamburger.querySelector('i').classList.add('ph-list');

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* ==========================================================================
       3. Portfolio Filtering
       ========================================================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // small delay for animation effect could be added here
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================================================
       4. Lightbox / Modal (Images & Videos)
       ========================================================================== */
    const modal = document.getElementById('media-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Open Image Lightbox
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-img');
            modalBody.innerHTML = `<img src="${imgSrc}" alt="Portfolio Image">`;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // prevent scrolling
        });
    });

    // Open Video Modal
    document.querySelectorAll('.video-thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            const sep = videoUrl.includes('?') ? '&' : '?';
            modalBody.innerHTML = `<iframe src="${videoUrl}${sep}autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close Modal
    function closeMediaModal() {
        modal.style.display = 'none';
        modalBody.innerHTML = ''; // Clear iframe to stop video
        document.body.style.overflow = 'auto';
    }

    closeModal.addEventListener('click', closeMediaModal);
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeMediaModal();
        }
    });
    
    // Close on escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeMediaModal();
        }
    });

    /* ==========================================================================
       5. FAQ Accordion
       ========================================================================== */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Get the associated answer div
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    /* ==========================================================================
       6. Contact Form Validation (Frontend only)
       ========================================================================== */
    const form = document.getElementById('enquiry-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation check
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const desc = document.getElementById('desc').value.trim();

            if (!name || !phone || !service || !desc) {
                showMessage('error', 'Please fill in all required fields (*).');
                return;
            }

            // Phone basic regex (just checking if it has digits, can be improved)
            const phoneRegex = /^[0-9+\-\s()]+$/;
            if (!phoneRegex.test(phone)) {
                showMessage('error', 'Please enter a valid phone number.');
                return;
            }

            // Simulate form submission
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'SENDING...';
            btn.disabled = true;

            setTimeout(() => {
                // Success
                showMessage('success', 'Thank you! Your enquiry has been sent. We will contact you shortly.');
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    function showMessage(type, text) {
        formMessage.className = `form-message ${type}`;
        formMessage.textContent = text;
        
        // Hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
});
