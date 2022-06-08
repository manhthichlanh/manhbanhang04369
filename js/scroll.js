window.onload =


    function() {
        const Place = document.querySelector(".scroll");
        window.addEventListener('scroll', function scrollPlace() {
            if (window.scrollY >= 100) {
                Place.style.position = 'fixed';
                Place.style.width = '100%';
                Place.style.zIndex = '2';
            } else {
                Place.style.position = "relative";
            }
        });




        document.getElementById("place").innerHTML = localStorage.getItem("key_1")
        thaydoi();
    }