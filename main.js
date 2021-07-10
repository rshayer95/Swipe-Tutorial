(function () {
    /*
        SCRIPTED BY : Robin Singh Hayer
    */
    //Get Our Navigation Elements
    var home = document.getElementById("home");
    var aboutus = document.getElementById("aboutus");
    var contactus = document.getElementById("contactus");
    var newsletter = document.getElementById("newsletter");
    //Get Our Buttons 
    var home_btn = document.getElementById("home-btn");
    var aboutus_btn = document.getElementById("aboutus-btn");
    var contactus_btn = document.getElementById("contactus-btn");
    var newsletter_btn = document.getElementById("newsletter-btn");
    //Object To Track Last Click
    var btn_click = {
        last: 'home'
    };


    //Function To Remove Previous Active Link
    function remove_active(element) {
        var current = document.getElementById(element);
        current.classList.remove("show");
        current.classList.add("hidden");
    }
    //Function To Check If Button Was Clicked 
    function check_if_btn_was_clicked() {
        if (btn_click.last != "") {
            //Remove Show Class When Last Click Has Value and Add Hidden class 
            remove_active(btn_click.last);
        }

    }

    //Home Button Click
    home_btn.onclick = function () {
        check_if_btn_was_clicked();
        home.classList.add("show");
        if (btn_click.last !== "") {
            home.classList.remove("hidden");
        }
        btn_click.last = home.getAttribute("id");
    };
    aboutus_btn.onclick = function () {
        check_if_btn_was_clicked();
        aboutus.classList.add("show");
        aboutus.classList.remove("hidden");
        btn_click.last = aboutus.getAttribute("id");
    };
    contactus_btn.onclick = function () {
        check_if_btn_was_clicked();
        contactus.classList.add("show");
        contactus.classList.remove("hidden");
        btn_click.last = contactus.getAttribute("id");
    };
    newsletter_btn.onclick = function () {
        check_if_btn_was_clicked();
        newsletter.classList.add("show");
        newsletter.classList.remove("hidden");
        btn_click.last = newsletter.getAttribute("id");
    };

})();