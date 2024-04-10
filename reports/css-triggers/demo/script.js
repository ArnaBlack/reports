(function() {
    const addListener = (button, box) => {
        button.addEventListener('click', () => {
            if (box.classList.contains('active')) {
                box.classList.remove('active')
            } else {
                box.classList.add('active')
            }
        })
    }


    const layoutButton = document.getElementById('layout');
    const layoutBox = document.querySelector('.layout');
    addListener(layoutButton, layoutBox);

    const paintButton = document.getElementById('paint');
    const paintBox = document.querySelector('.paint');
    addListener(paintButton, paintBox);

    const compositeButton = document.getElementById('composite');
    const compositeBox = document.querySelector('.composite');
    addListener(compositeButton, compositeBox);
})();