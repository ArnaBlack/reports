(function() {
    const SELECTORS = ['layout', 'paint', 'composite', 'moved']

    const addListener = (button, box) => {
        button.addEventListener('click', () => {
            if (box.classList.contains('active')) {
                box.classList.remove('active')
            } else {
                box.classList.add('active')
            }
        })
    }

    const sizes = document.getElementById('size');

    sizes.addEventListener('click', (e) => {
      setTimeout(() => {
        document.querySelector('composite').getBoundingClientRect();
      }, 1000)
    })

    SELECTORS.forEach(selector => {
        const button = document.getElementById(selector);
        const box = document.querySelector(`.${selector}`);
        addListener(button, box);
    });
})();