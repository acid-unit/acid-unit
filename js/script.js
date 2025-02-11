// noinspection JSUnusedGlobalSymbols,JSUnresolvedReference

(() => {
    new Typed('.magento', {
        strings: ['Adobe Commerce'],
        startDelay: 2000,
        typeSpeed: 50,
        backSpeed: 50,
        loop: false,
        onComplete: typed => {
            typed.cursor.classList.replace('typed-cursor', 'hide');

            setTimeout(() => {
                document.querySelector('.acid .bar, .acid .typed-cursor--blink').remove();
                document.querySelector('.acid .typed-cursor--blink').remove();
                document.querySelector('.magento').classList.add('color-red');
            }, 400);
        },
        onBegin: typed => {
            typed.insertCursor();
            typed.cursor.classList.add("typed-cursor--blink");
        },
    });

    document.querySelector('.flask').addEventListener('click', event => {
        event.target.classList.add('shake');

        setTimeout(() => {
            event.target.classList.remove('shake');
        }, 800);
    });

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        document.querySelector('html').classList.add('is-safari');
    }
})();

