$(document).ready(function() {
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 500)
    };

    var checkbox = document.querySelector('#light-dark-toggle input[type=checkbox]');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            $('body').addClass('dark');
            trans();
        } else {
            $('body').removeClass('dark');
            trans();
        }
    })
});