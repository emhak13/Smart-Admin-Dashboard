document.onclick = function(e) {
    if(e.target != document.getElementById('search') && e.target != document.getElementById('searchInput')) {
        document.getElementById('searchInput').style.visibility = 'hidden';
    } else {
        document.getElementById('searchInput').style.visibility = 'visible';
    }
};


document.getElementById('trafficChart').onmouseover = function (e) {
    document.getElementById('hover').style.visibility = 'visible'
};

document.getElementById('trafficChart').onmouseout = function (e) {
    document.getElementById('hover').style.visibility = 'hidden'
};