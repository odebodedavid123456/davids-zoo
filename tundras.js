        // Add smooth animations and interactions
        document.addEventListener('DOMContentLoaded', function () {
            // Animate cards on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all animal cards
            document.querySelectorAll('.sav-list').forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });

            // Learn more button functionality
            const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
            console.log('Found', learnMoreBtns.length, 'learn more buttons');

            learnMoreBtns.forEach((btn, index) => {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    console.log('Learn more button clicked');

                    const card = this.closest('.sav-list');
                    const content = card.querySelector('.learn-more-content');

                    if (content.style.display === 'block' || content.style.display === '') {
                        content.style.display = 'none';
                        this.textContent = 'Learn More';
                        console.log('Hiding content');
                    } else {
                        content.style.display = 'block';
                        this.textContent = 'Show Less';
                        console.log('Showing content');
                    }
                });
            });

            // Image hover effects
            document.querySelectorAll('.image-container').forEach(container => {
                container.addEventListener('mouseenter', function () {
                    this.style.transform = 'scale(1.05)';
                });

                container.addEventListener('mouseleave', function () {
                    this.style.transform = 'scale(1)';
                });
            });
        });
