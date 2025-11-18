// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Function to scroll to about section
function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add animation to elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated', 'fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Video functionality for multiple videos
function playVideo(videoId) {
    console.log("Playing video with ID:", videoId); // Debugging line
    
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Set video source based on videoId
    let videoSource = '';
    switch(videoId) {
        case 1:
            // Video 1 - Dokumentasi Kegiatan
            videoSource = '.vscode/12345.mp4';
            break;
        case 2:
            // Video 2 - Latihan Rutin
            videoSource = '.vscode/vidio 123.mp4';
            break;
        case 3:
            // Video 3 - Acara Khusus
            videoSource = '.vscode/12345.mp4';
            break;
        default:
            videoSource = '.vscode/12345.mp4';
    }
    
    // Update the source of the video element
    const sourceElement = modalVideo.querySelector('source');
    if (sourceElement) {
        sourceElement.src = videoSource;
    } else {
        // If no source element exists, create one
        modalVideo.innerHTML = `<source src="${videoSource}" type="video/mp4">Your browser does not support the video tag.`;
    }
    
    modalVideo.load(); // Reload the video
    videoModal.style.display = 'block';
    
    // Play the video after a short delay to ensure it's loaded
    setTimeout(() => {
        modalVideo.play().catch(e => console.log('Autoplay prevented: ', e));
    }, 100);
}

// Function to close video modal
function closeVideoModal(event) {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    if (modalVideo) {
        modalVideo.pause();
        modalVideo.currentTime = 0;
    }
    
    if (videoModal) {
        videoModal.style.display = 'none';
    }
}

// Image modal functionality is now handled in index.html