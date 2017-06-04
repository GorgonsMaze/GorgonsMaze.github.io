/**
 * Created by ianarsenault on 6/2/17.
 */

$(document).ready(function () {


    $('#gpg-btn').on('click', function () {
        // alert("Clciked!@");
        $('#contact-modal').addClass('is-active').fadeIn(30000);
        $('body').addClass('stop-scroll');
    });

    $('.modal-background, .modal-card-head .delete, .modal-card-foot .close').on('click', function () {
        //alert("background clicked!");
        $('#contact-modal').removeClass('is-active').fadeOut(500);
        $('body').removeClass('stop-scroll');
    });

    // var panel = $('#project-panel').offset().top;
    //
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > panel) {
    //         $('#project-panel').addClass('panel-fixed');
    //
    //     } else {
    //         $('#project-panel').removeClass('panel-fixed');
    //     }
    // });

// Panel width bug when set to fixed

    /* Clipboard function */

    function selectText(elem) {
        var range;
        if (document.selection) {
            range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(elem));
            range.select();
        } else if (window.getSelection()) {
            range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(elem));
            window.getSelection().addRange(range);

        }
    }

    $('#copyPGP').on('click', function () {
        // alert("clicked");
        var $this = $(this);
        $this.text('Copied');
        setTimeout(function () {
            $this.text('Copy');
        }, 2000);
    });

    var clipboard = new Clipboard('#copyPGP');

    clipboard.on('success', function(e) {
        document.getElementById('#pgpText').select();
        // $('#pgpText').attr('value').select();
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

    $(document).on('mouseenter', '#blogNavBtn', function () {
        $('#blogDefaultProjects').show();
    }).on('mouseleave', '#blogNavBtn', function () {
        $('#blogDefaultProjects').hide();
    });


});
