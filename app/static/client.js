var el = x => document.getElementById(x);

let classes = ["airplane", "ambulance", "animal", "artist", "aurora", "baby", "beach", "bear", "bicycle", "bird", "boats", "books", "bridge", "building", "bus", "cars", "castle", "cat", "city", "clouds", "college", "concert", "couple", "crops", "dance", "desert", "dessert", "doctor", "dog", "dolphins", "field", "fire", "food", "golf", "grandfather", "grandmother", "grass", "horse", "hospital", "house", "library", "lights", "man", "moon", "mountain", "music", "nature", "neon", "nurse", "ocean", "painting", "palm", "person", "phone", "rainforest", "restaurant", "river", "robots", "rocks", "shirt", "shop", "sign", "sky", "soccer", "sports", "stars", "storm", "street", "sun", "temple", "tree", "truck", "vegetable", "water", "waves", "weed", "windows", "woman", "wood"]

function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}

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

function analyze() {
  var uploadFiles = el("file-input").files;
  if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {
      var response = JSON.parse(e.target.responseText);
      
      showResult(JSON.parse(response["result"]), "result-ul")
      // el("result-ul").innerHTML = `Result = ${response["result"]}`;
    }
    el("analyze-button").innerHTML = "Analyze";
  };

  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);
}

