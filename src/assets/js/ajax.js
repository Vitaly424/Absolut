$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $("form").trigger("reset");


        let overlay = document.querySelector('#js-overlay');
        let close = document.querySelector('#js-close');
        let body = document.querySelector('body');

        overlay.classList.remove('overlay-none');
        body.classList.add('overflow');

        close.addEventListener('click', function () {
            overlay.classList.add('overlay-none');
            body.classList.remove('overflow');
        });

        overlay.addEventListener('click', function (e) {
            e.stopPropagation();

            if (e.target === overlay) {
                overlay.classList.add('overlay-none');
            }

        });

    });
    return false;
});