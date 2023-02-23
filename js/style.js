function myFunction() {
    document.getElementById('myDropdown').classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.tartget.matches('dropbtn')) {
        var dropdown = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; 1++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.Classlist.remove('show');
            }
        }
    }
}













