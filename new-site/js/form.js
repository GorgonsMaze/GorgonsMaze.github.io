$(document).ready(function () {
    var form = $('#contact-form');

    form.submit(function (e) {
        e.preventDefault();
        var submit = $('input:submit', form);
        var submitText = submit.val();

        $.ajax({
            url: '//formspree.io/ian_arsenault@protonmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function () {
                submit.attr('disabled', true).val('Sending message...');
                // Todo: add is loading class here
                //.is-loading
            },
            success: function (data) {
                form[0].reset();
                submit.css('background-color', '#4caf50');
                submit.val('Message sent!');
                setTimeout(function () {
                    submit.css('background-color', '#575d5b');
                    submit.attr('disabled', false).val(submitText);
                }, 6000);
            },
            error: function () {
                submit.val('Oops! There was an error.');
                setTimeout(function () {
                    submit.attr('disabled', false).val(submitText);
                }, 6000);
            }
        });
    });
});