//가장 큰 테이블 정의
var checking = 0;
var first = document.createElement('table');
//first.style="display:flex;flex-wrap:wrap";
document.body.appendChild(first);

//adding div !! (table-->div-->elements)
var heading = document.createElement('div');
heading.id='container';
heading.style="display:flex;flex-wrap:wrap;justify-content: space-around;align-items;align-items: stretch; ";


first.appendChild(heading);


var img_array=["https://cdn.pixabay.com/photo/2023/04/24/17/48/bird-7948712_640.jpg",
"https://cdn.pixabay.com/photo/2023/04/28/05/43/polar-bear-7955893_640.jpg",
"https://cdn.pixabay.com/photo/2023/04/27/14/00/cat-7954713_640.jpg",
"https://cdn.pixabay.com/photo/2023/04/15/14/21/bird-7927829__480.jpg",
"https://cdn.pixabay.com/photo/2022/10/20/07/23/eurasian-pygmy-owl-7534220__480.jpg",
"https://cdn.pixabay.com/photo/2023/04/11/14/59/bird-7917458__480.jpg",
"https://cdn.pixabay.com/photo/2023/01/07/17/31/ring-necked-parakeet-7703703__480.jpg",
"https://cdn.pixabay.com/photo/2023/04/02/22/07/bird-7895507__480.jpg",
"https://cdn.pixabay.com/photo/2023/03/29/12/33/bird-7885354__480.jpg",
"https://cdn.pixabay.com/photo/2023/03/14/08/34/duck-7851828__480.jpg",
"https://cdn.pixabay.com/photo/2022/10/27/16/58/pelican-7551248__480.jpg",
"https://cdn.pixabay.com/photo/2023/03/03/17/36/peafowl-7828140__480.jpg",
"https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830__480.jpg",
"https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846__480.jpg",
"https://cdn.pixabay.com/photo/2022/05/29/06/44/horses-7228554__480.jpg",
"https://cdn.pixabay.com/photo/2021/08/21/21/10/animal-6563620__480.jpg",
"https://cdn.pixabay.com/photo/2021/01/22/09/01/unicorn-5939500__480.png",
"https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891__480.jpg",
"https://cdn.pixabay.com/photo/2022/02/18/18/31/moon-7021271__480.jpg",
"https://cdn.pixabay.com/photo/2020/09/06/22/11/neptune-5550216__480.jpg",
"https://cdn.pixabay.com/photo/2016/07/03/00/15/sun-1494070__480.jpg",
"https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012__480.jpg",
"https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121__480.jpg",
"https://cdn.pixabay.com/photo/2023/04/21/14/34/black-hole-7942001__480.jpg",
"https://cdn.pixabay.com/photo/2020/08/05/11/30/silhouette-5465124__480.jpg",
"https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999__480.jpg",
"https://cdn.pixabay.com/photo/2023/04/23/16/13/ai-7946082__480.jpg",
"https://cdn.pixabay.com/photo/2023/03/29/03/10/cosmos-7884484__480.jpg",
"https://cdn.pixabay.com/photo/2023/03/22/04/43/cosmos-7868658__480.jpg"
]; //사진의 url이 들어가는 곳
var itemName=["이상한 새","귀여운 북극곰","귀여운 고양이","벌새","올빼미",
"에뮤","잉꼬","남방두줄태양새","붉은 날개 검은새",
"카이나라 모차타","펠리컨","공작","꿩","작은거미사냥꾼",
"마바흐스터드","얼룩말","유니콘","코스모스","달",
"해왕성","태양","화성","지구","블랙홀",
"별똥별","토성","냥이","외계행성","은하수"]; //사진의 이름이 들어가는 곳


//shopbag decalre
var shopbag = document.createElement('div');
shopbag.style="position:fixed;right:20px;top:70px;border-style:solid;color:red;width:100px;height:400px";
shopbag.id='yourchoice';
document.body.appendChild(shopbag);


//initial img create
for(var i=0;i<img_array.length;i++){
  var heading_text = `<div id="container${i}" class="card">
  <div class="yellowE">
  <strong>${i+1} 번째</strong>
  </div>
  
  <img src="${img_array[i]}" 
  id="img${i}" style="width:250px;height:250px">
  
  <div style="text-align: center">
  <strong>${itemName[i]}</strong>
  </div>

  </div>`;
  
  heading.innerHTML += heading_text;

}


//adding click event to "table"
const table = document.querySelector('table');

table.onclick = function(event){
  let target = event.target.closest('div');

  if(!target) return;
  if(!table.contains(target)) return;

  src = target.querySelector('img').getAttribute('src');
  move_bag(target,src);
  
}


//move img to bag
function move_bag(target, src){

  var small_img = document.createElement('img');
  small_img.setAttribute('src',src);
  small_img.style='height:100px;width:100px;';
  checking++;
  shopbag.appendChild(small_img);
  
  target.style='display:none';
  
}

//add click event to shopbag
checking = 0;
const yourchoice = document.querySelector('div#yourchoice')
yourchoice.onclick = function(event){
  if(checking===0) return;
  let choice = event.target;
  
  if(choice.tagName !== 'IMG') return;
  var ch_src = choice.getAttribute('src');
  createEMG(ch_src);


  choice.style='display:none';
}



function find_src(element,src){
  if(element===src) return true;
}


//function to find src and create new card
function createEMG(src){
  //
  for(var j=0;j<img_array.length;j++){
    if(img_array[j]===src){
      var index_of_link = j;
    }
  }
  
  var EMG_text = `<div id="container${index_of_link}" class="card">
  <div>
  <strong>${index_of_link+1} 번째</strong>
  </div>
  
  <img src="${src}" 
  id="img${index_of_link}" style="width:250px;height:250px">
  
  <div style="text_align:center">
  <strong>${itemName[index_of_link]}</strong>
  </div>

  </div>`;

  heading.innerHTML += EMG_text;

}

