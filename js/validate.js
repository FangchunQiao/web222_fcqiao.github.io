function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const form = document.querySelector("form");
  const latitude = form.latitude.value;
  const longitude = form.longitude.value;

  let latitude_info = document.querySelector("#latitude_info");
  latitude_info.innerHTML = "*";
  let longitude_info = document.querySelector("#longitude_info");
  longitude_info.innerHTML = "*";

  if (
    !(parseFloat(latitude) == latitude && latitude >= -90 && latitude <= 90)
  ) {
    latitude_info.innerHTML = "* must be a valid Latitude(-90 to 90)";
    event.preventDefault();
    return false;
  }

  if (
    !(
      parseFloat(longitude) == longitude &&
      longitude >= -180 &&
      longitude <= 180
    )
  ) {
    longitude_info.innerHTML = "* must be a valid Longitude(-180 to 180)";
    event.preventDefault();
    return false;
  }

  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
  return ture;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
