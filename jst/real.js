//real-time
function locationFinder() {
    time = 2000
    loc = "SKCET"
    setTimeout(() => {
    
    },time);
}

isLocationFound = (loc,time) => {
    isLoc = "SKCT"
    if(loc === isLoc && time1 <= time) { 
        return true;
    }
    else {
        return false;
    }
};

function locationFinder() {
    time1 = 2001;
    time = 2000;
    loc = "SKCET";
    return new Promise((locFound,locNotFound) => {
    setTimeout(() => {
        if(isLocationFound(loc,time)) {
            return locFound("Location Found")
        }
        else  {
            return locNotFound("Location Not Found")
        }
    },time);
    });
}
locationFinder()
.then((val) => {
    console.log(val);
})
.catch((val) => {
    console.log(val);
});