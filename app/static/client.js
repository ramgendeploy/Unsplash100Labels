var el = x => document.getElementById(x);
let classes = ["airplane", "ambulance", "animal", "artist", "aurora", "baby", "beach", "bear", "bicycle", "bird", "boats", "books", "bridge", "building", "bus", "cars", "castle", "cat", "city", "clouds", "college", "concert", "couple", "crops", "dance", "desert", "dessert", "doctor", "dog", "dolphins", "field", "fire", "food", "golf", "grandfather", "grandmother", "grass", "horse", "hospital", "house", "library", "lights", "man", "moon", "mountain", "music", "nature", "neon", "nurse", "ocean", "painting", "palm", "person", "phone", "rainforest", "restaurant", "river", "robots", "rocks", "shirt", "shop", "sign", "sky", "soccer", "sports", "stars", "storm", "street", "sun", "temple", "tree", "truck", "vegetable", "water", "waves", "weed", "windows", "woman", "wood"]

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
