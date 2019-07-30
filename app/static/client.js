var el = x => document.getElementById(x);
let classes = ["airplane", "ambulance", "animal", "artist", "aurora", "baby", "beach", "bear", "bedroom", "bicycle", "bird", "boats", "book", "bridge", "building", "bus", "cars", "castle", "cat", "city", "clouds", "college", "column", "concert", "couple", "crops", "dance", "dawn", "deer", "desert", "dessert", "doctor", "dog", "dolphins", "field", "fire", "floor", "food", "golf", "graffiti", "grandfather", "grandmother", "grass", "hair", "hand", "horse", "hospital", "house", "human", "insect", "kid", "library", "lights", "man", "moon", "mountain", "music", "nature", "neon", "nurse", "ocean", "painting", "palm", "party", "person", "phone", "plant", "rain", "rainforest", "restaurant", "river", "robot", "rocks", "roses", "shirt", "shop", "sign", "sky", "skyscraper", "snow", "soccer", "sports", "stadium", "staircase", "stars", "storm", "street", "sun", "sunrise", "temple", "tree", "truck", "vegetable", "water", "waves", "weed", "windows", "woman", "wood"]
function showResult(arr,dest){
  el(dest).innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const e = arr[i];
    let node = document.createElement("li");            
    node.innerHTML = `<span class='label'>${classes[e[1]]}</span>
                      <span class='perc_wrap'><span class='perc' style='width: ${(e[0]*100).toFixed(2)}%'>${(e[0]*100).toFixed(2)}%</span></span>`                            
    el(dest).appendChild(node);
  }
}
