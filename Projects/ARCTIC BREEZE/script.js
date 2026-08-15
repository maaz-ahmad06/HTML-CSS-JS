const navLinks = document.querySelectorAll('.nav-item');
        const pages = document.querySelectorAll('.page-view');
        const menuToggle = document.getElementById('menuToggle');
        const navLinksContainer = document.getElementById('navLinks');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-target');
                switchPage(targetPage);
                navLinksContainer.classList.remove('open');
            });
        });

        function switchPage(pageId) {
            pages.forEach(page => {
                page.classList.remove('active');
                if(page.id === pageId) {
                    page.classList.add('active');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('data-target') === pageId) {
                    link.classList.add('active');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });

        function handleFormSubmit(event) {
            event.preventDefault();
            alert("Thank you for reaching out to ARCTIC BREEZE! Our customer support ecosystem will contact you shortly.");
            document.getElementById('contactForm').reset();
        }