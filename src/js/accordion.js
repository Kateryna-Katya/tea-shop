document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const arrow = parentElement.querySelector('.faq-img');
        const isOpen = parentElement.classList.contains('open');

        if (!isOpen) {
            parentElement.classList.add('open');
            arrow?.classList.add('rotated');
            if (panel) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        } else {
            parentElement.classList.remove('open');
            arrow?.classList.remove('rotated');
            if (panel) {
                panel.style.maxHeight = '0';
            }
        }
    });
});