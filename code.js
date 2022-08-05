$(document).ready(()=>{
    const sendRequest = (name) => {
    const url = `https://api.genderize.io?name=${name}`
    $.get(url, function(response) {
      $("#gender").text(response.gender)          
    })
}
$("#form1").submit(function(e) {
  e.preventDefault();
  const name = $("#name-input").val();
  sendRequest(name);
})

})
    

//$(document).ready(()=>{
  //  const sendRequest = (city) => {
    //    const url = `https://api.genderize.io?name=peter`

      //  $.get(url, function(response) {
        //    $("#icon-image").attr("src", response.current.condition.icon);
          //  $("#temperature").text(response.current.temp_c + "°C")
        //})
    //}

    //$("#form1").submit(function(e) {
      //  e.preventDefault();
        //const city = $("#city-input").val();
       // sendRequest(city);
    //})
//})
