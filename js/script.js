
        // Counter Animation
        $(document).ready(function () {
            $('.counter').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).data('count')
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            // Smooth scroll for anchor links
            $('a[href*="#"]').on('click', function (e) {
                e.preventDefault();
                $('html, body').animate(
                    {
                        scrollTop: $($(this).attr('href')).offset().top,
                    },
                    500,
                    'linear'
                );
            });
        });
    

        //side-menu js 
        document.addEventListener("DOMContentLoaded", function () {
            const menuBtn = document.getElementById("headerMenuBtn");
            const sideMenu = document.getElementById("headerSideMenu");
            const aboutHeader = document.querySelector(".about-hero-header");
            const dropdownItems = document.querySelectorAll(".menu-item-has-children");

            // Toggle side menu on button click
            menuBtn.addEventListener("click", function (e) {
                e.stopPropagation(); // Prevent event from bubbling to document
                sideMenu.classList.toggle("active");
            });

            // Close side menu when clicking outside
            document.addEventListener("click", function (event) {
                const isClickInside = sideMenu.contains(event.target) || menuBtn.contains(event.target);
                if (!isClickInside) {
                    sideMenu.classList.remove("active");
                }
            });

            // Dropdown toggle for submenus
            dropdownItems.forEach(item => {
                item.addEventListener("click", function (e) {
                    e.stopPropagation(); // So it doesn't trigger document click
                    this.classList.toggle("active");
                });
            });

            // Handle scroll event
            window.addEventListener("scroll", function () {
                // Sticky background for header
                if (window.scrollY > 50) {
                    aboutHeader.classList.add("scrolled");
                } else {
                    aboutHeader.classList.remove("scrolled");
                }

                // Hide side menu when scrolling
                if (sideMenu.classList.contains("active")) {
                    sideMenu.classList.remove("active");
                }
            });
        });
    
        