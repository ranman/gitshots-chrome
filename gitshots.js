data = document.querySelector("#js-command-bar-field").dataset;
img = new Image();
span = document.createElement('span');
span.appendChild(img);
var imgsha = data.branch;
var project = data.repo.split('/')[1];
div = document.querySelector(".authorship");
img.onload = function() {
    div.appendChild(span);
}
img.width = 600;
span.style.display = "block";
span.style.textAlign = "center";
img.style.borderRadius = "40px";
img.src = "http://gitshots.com/"+project+"/"+imgsha+".jpg";