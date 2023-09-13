const accessKey="-9TAOJQ1wb2-UpapqhHdiBuCTk4Zwj5yzVfu4FuEjxE";

const searchform = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
   keyword = searchBox.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}
   &client_id=-9TAOJQ1wb2-UpapqhHdiBuCTk4Zwj5yzVfu4FuEjxE&per_page=12`;

   const response = await fetch(url);
   const data = await response.json();
// it hides the previous search image
   if(page===1){
    searchResult.innerHTML="";
   }

   const results = data.results;

   console.log(data);
// search the images and display 
   results.map((result) => {
       const image = document.createElement("img");
       image.src = result.urls.small;
       const imageLink = document.createElement("a");
       imageLink.href = result.links.html;
       imageLink.target = "_blank";

       imageLink.appendChild(image);
       searchResult.appendChild(imageLink);
   })
// show the show more btn after search the image
   showMoreBtn.style.display="block";

}
// search images 
function form(){
    searchform.addEventListener("submit" , (e) => {
        e.preventDefault();
        page =1;
        searchImages();
})
}
form();

// it ad the 12 more  images next to it after click the showmore btn
function showMore(){
    showMoreBtn.addEventListener("click",() =>{
        page++;
        searchImages();
})
} 
showMore();