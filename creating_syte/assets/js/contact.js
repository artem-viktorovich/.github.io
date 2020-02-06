  (function($) {
    "use strict";
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#ajax_form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "введите своё имя. я никому о нём не расскажу, обещаю",
                    minlength: "ваше имя долго состоять как минимум из 2-х символов"
                },
                email: {
                    required: "нет email - нет сообщения. исправьте"
                },
                message: {
                    required: "вы должны написать что-то, чтобы отправить эту форму",
                    minlength: "это всё? серьёзно?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"./contact/telegram.php",
                    success: function() {
                        $('#ajax_form').fadeTo( "slow", 1, function() {
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                            $("#ajax_form").resetForm();
                        });
                       
                    },
                    error: function() {
                        $('#ajax_form').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn();
                        });
                    }
                })
            }
        })
    })
 })(jQuery)