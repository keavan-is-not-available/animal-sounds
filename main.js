function check() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    C = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3LG_3eJnd/model.json", modelReady);
}
function modelReady() {
    console.log("modle has been loaded");
    C.classify(gotResults)
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results)
R = Math.floor(Math.random()*255)+1;
G = Math.floor(Math.random()*255)+1;
B = Math.floor(Math.random()*255)+1;

    document.getElementById("name").innerHTML = "Heard: "+results[0].label;
    document.getElementById("accuracy").innerHTML = "Accuracy: "+Math.floor(results[0].confidence*100)+"%";
    i1 = document.getElementById("a1");

    if (results[0].label == "dog"){
    i1.src = "dog_sound.jpg";
    }
    else if(results[0].label == "cat"){
        i1.src = "cat_sound.jpg";
        }
        else if(results[0].label == "talking"){
            i1.src = "chicken_sound.jpg";
            }
            else{
                i1.src = "";
                }
    }
    }