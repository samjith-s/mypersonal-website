$(document).ready(function() {

    jQuery.validator.addMethod("noSpace", function(value, element) { 
      return value != "" && value[0]!=0 && value[0]!=1 && value[0]!=2 && value[0]!=3 && value[0]!=4 && value[0]!=5 && value[0]!=6;
    }, "Space are not allowed");
    
  
    $("#ajax-contact").validate({
      errorLabelContainer: $("#form-messages"),
      rules: {
        name: { required: true, noSpace: true },
        message: { required: true, noSpace: true},
        
      },
      messages: {
        name: { required: 'Please enter your name' },
        message : { required: "Please enter the message" }
      }
    });
  
    $('#submit').click(function() {
      var valid = $("#ajax-contact").valid();
      if(!valid) {
        return false;
      }
      $.ajax({
        beforeSend: function() {
          // display loading message
        },
        type: "POST",
        url: 'save',
        data:  $('#formdata').serialize(),
        dataType: 'json',
        cache: false,
        success: function(result) {
          if(result.error) {
            // show error message
          }
          else {
            // redirect to another page
          }
        },
        error: function (response, desc, exception) {
          // show ajax error
        },
        complete: function() {
          // hide loading message
        }
      });
    });
  });
