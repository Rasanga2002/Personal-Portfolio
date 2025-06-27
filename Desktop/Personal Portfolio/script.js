const projects = [
      {
        id: "proj1-img",
        images: [
          "https://plus.unsplash.com/premium_photo-1664299145564-2702b4f1649c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzdHMlMjB0cmF2ZWwlMjBtYW5hZ2VtZW50JTIwc3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D",
          "https://plus.unsplash.com/premium_photo-1682091944967-1c20660e491e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG91cmlzdHMlMjB0cmF2ZWwlMjBtYW5hZ2VtZW50JTIwc3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D",
          "https://plus.unsplash.com/premium_photo-1716999409695-7df1f2310fb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91cmlzdHMlMjB0cmF2ZWwlMjBtYW5hZ2VtZW50JTIwc3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D"
        ]
      },
      {
        id: "proj2-img",
        images: [
          "https://plus.unsplash.com/premium_photo-1683120731413-b3aa991cb64e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjBzdHVkeXxlbnwwfHwwfHx8MA%3D%3D",
          "https://media.istockphoto.com/id/1165634851/photo/one-more-question-to-be-answered.webp?a=1&b=1&s=612x612&w=0&k=20&c=PR3zzU0jPz6VHTYFYvLg_6Do550z5Zrd9yTBc0gFfmg=",
          "https://images.unsplash.com/photo-1659080553051-65a55237f7a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwc3R1ZHklMjBtb2JpbGUlMjBhcHBsaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        ]
      },
      {
        id: "proj3-img",
        images: [
          "https://plus.unsplash.com/premium_photo-1663100794696-6b7afa02016c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaWFsJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1613919517761-0d9e719d3244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpbmFuY2lhbCUyMHRyYWNrZXIlMjBhcHB8ZW58MHx8MHx8fDA%3D",
          "https://media.istockphoto.com/id/1410599250/photo/man-managing-banking-and-finance-with-online-banking-mobile-app-on-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=CTbWH7ovKxoCKlIfjm0k6b9-B54og-iRp3_O6DxR3Qo="
        ]
      },
      {
        id: "proj4-img",
        images: [
          "https://media.istockphoto.com/id/1342134434/photo/caring-doctor-listens-to-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=HNsleRpKmmC6Zu2JKHa21lx1e7g51ohrxnwGCDh20qQ=",
          "https://media.istockphoto.com/id/1061399220/photo/adult-woman-having-a-visit-at-female-doctors-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=KSUXua0WeD9JznodN4qqQAUsi98Wyv6M6FrWzB3xkL0=",
          "https://media.istockphoto.com/id/2048635835/photo/senior-gentlemans-check-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rvaeago6FYkf28h5tJN2yqhFceR61T20-TIHTsqUnvw="
        ]
      }
    ];

    // Initialize image slideshows with smooth transitions
    projects.forEach(project => {
      let index = 0;
      const imgEl = document.getElementById(project.id);
      
      if (imgEl) {
        // Add smooth transition effect
        imgEl.style.transition = 'opacity 0.5s ease-in-out';
        
        setInterval(() => {
          // Fade out
          imgEl.style.opacity = '0';
          
          setTimeout(() => {
            // Change image and fade in
            index = (index + 1) % project.images.length;
            imgEl.src = project.images[index];
            imgEl.style.opacity = '1';
          }, 250);
        }, 4000);
      }
    });

    // Scroll animations with intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.addEventListener('DOMContentLoaded', () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(el => observer.observe(el));
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add floating animation to shapes
    // const shapes = document.querySelectorAll('.shape');
    // shapes.forEach((shape, index) => {
    //   shape.style.animationDelay = `${index * 2}s`;
    // });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateX(-50%) translateY(-100px)';
        header.style.opacity = '0.8';
      } else {
        // Scrolling up
        header.style.transform = 'translateX(-50%) translateY(0)';
        header.style.opacity = '1';
      }
      
      lastScrollTop = scrollTop;
    });