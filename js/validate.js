// Name: Armin Sharifiyan
// ID: 130891203


function validate(event) {

  
  var elem = document.getElementById("lat");
  var elem2 = document.getElementById("long");
  var txt = elem.value;
  var txt2 = elem2.value;

  
    if(txt > -90 && txt < 90){

      if(txt2 > -180 && txt2 < 180 ){

        return true;
      }

      else{
            document.getElementById("message2").innerHTML = "* must be a valid Longitude (-180 to 180)";
            document.getElementById("message").innerHTML = "*";
            // var  longtitude_error = document.getElementById("message2").innerHTML = "";
            // var texterror = document.createTextNode("must be a valid Longtitude (-180 to 180)");
            // longtitude_error.appendChild(texterror);

            // newtext.innerHTML = "";
            // var texterror = document.createTextNode("must be a valid Longtitude (-180 to 180)");
            // newtext.appendChild(texterror);
            // longtitude_error.appendChild(newtext);
      
            return false;
      }

    }

    else{
    

      document.getElementById("message").innerHTML = "* must be a valid Latitude (-90 to 90)";
      // var teerror = document.createTextNode(" must be a valid Latitude (-90 to 90)");
      // a.appendChild(teerror);

      if(txt2 < -180 || txt2 > 180 ){
      document.getElementById("message2").innerHTML = "* must be a valid Longitude (-180 to 180)";

        //  longtitude_error = document.getElementById("message2").innerHTML = "";
        //   var texterror = document.createTextNode("must be a valid Longtitude (-180 to 180)");
        //   longtitude_error.appendChild(texterror);
      }
      else{
        document.getElementById("message2").innerHTML = "*";
      }

      return false;
    }

  
  
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
