
const body_img = document.querySelector("body");


function emage_getter(){
  axios.get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(function (response){
      var data_yet = response.data;
      
      var data = JSON.stringify(data_yet[0]);
      var parsedData = JSON.parse(data);
      var value = parsedData.url;
      console.log(value);
      body_img.style=`background-image: url(${value})`;
      
      
      
    })
    .catch(function (error){
      console.log(error);
    })
}



const button_new = document.querySelector("button");

button_new.addEventListener('click',function(){emage_getter()});

