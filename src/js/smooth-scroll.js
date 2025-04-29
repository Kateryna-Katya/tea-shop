document.addEventListener('DOMContentLoaded', () => {
    function getHeaderOffset() {
        const header = document.getElementById('site-header');
        return header ? header.offsetHeight : 0;
    }

    function smoothScrollToElement(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;

        const offset = getHeaderOffset();
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    }

    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const hashIndex = href.indexOf('#');
            if (hashIndex === -1) return;

            const linkPath = href.substring(0, hashIndex);  
            const targetId = href.substring(hashIndex + 1); 

            const currentPath = window.location.pathname.split('/').pop(); 


            if (linkPath === '' || linkPath === currentPath) {
                e.preventDefault();
                smoothScrollToElement(targetId);
            }

            else if (linkPath === 'index.html') {
                e.preventDefault();
                localStorage.setItem('scrollToId', targetId);
                window.location.href = 'index.html';
            }
        });
    });

    const savedId = localStorage.getItem('scrollToId');
    if (savedId) {
        localStorage.removeItem('scrollToId');
        setTimeout(() => {
            smoothScrollToElement(savedId);
        }, 500);
    }

    const hash = window.location.hash;
    if (hash) {
        const targetId = hash.substring(1);
        setTimeout(() => {
            smoothScrollToElement(targetId);
        }, 500);
    }
});