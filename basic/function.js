console.log("CONNECTED");

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([2, 3, 5, 2, 67, 88, 4]);

//

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

//

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

//

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//Ex-2

var someObject = {
    friends: [
        { name: "Malfoy" },
        { name: "crabbe" },
        { name: "Goyle" }
    ],
    color: "baby blue",
    isEvil: true
};

//movieDB
var movies = [{
        title: "In Bruges",
        hasWached: true,
        rating: 4.5
    },
    {
        title: "frozen",
        hasWached: false,
        rating: 6.3
    },
    {
        title: "2012",
        hasWached: false,
        rating: 5.1
    }
]

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWached) {
        result += "wached ";
    } else {
        result += "not wached ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}
movies.forEach(function(movie) {
    console.log(buildString(movie));
});

//hover event
var lis = document.querySelectorAll("li");
for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
        this.style.color = "wheat";
    });
    lis[i].addEventListener("mouseout", function() {
        this.style.color = "black";
    })
};

var h1 = document.querySelector("#hdd");
h1.addEventListener("click", function() {
    this.style.color = "green";
    document.getElementById("hdd").innerHTML = "Oh! you clicked me :):)";
});