// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'light mode'
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// Theme toggle event listener
themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
});

// Search functionality
const searchBox = document.getElementById('searchBox');
const newsCards = document.querySelectorAll('.news-card, .featured-card');

searchBox.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    newsCards.forEach(card => {
        const title = card.querySelector('h2, h4');
        const description = card.querySelector('p');
        
        if (title && description) {
            const text = (title.textContent + ' ' + description.textContent).toLowerCase();
            
            if (text.includes(searchTerm)) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.category-section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Terima kasih telah berlangganan! Email akan dikirim ke: ' + emailInput.value);
            emailInput.value = '';
        }
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.news-card, .featured-card').forEach(card => {
    observer.observe(card);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K untuk fokus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchBox.focus();
    }
    
    // Ctrl/Cmd + D untuk toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Read More functionality
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Fitur detail berita akan segera hadir!');
    });
});

console.log('🚀 BeritaHub Portal loaded successfully!');
console.log('⌨️ Keyboard Shortcuts:');
console.log('   Ctrl/Cmd + K: Focus search');
console.log('   Ctrl/Cmd + D: Toggle dark mode');
