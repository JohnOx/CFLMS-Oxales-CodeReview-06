// create classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr_loc = [];
var Orte = /** @class */ (function () {
    function Orte(place, city, address, zipCode, image) {
        this.place = place;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        arr_loc.push(this);
    }
    Orte.prototype.displayLoc = function () {
        return document.getElementById('dspInfo').innerHTML += "Welcome to: " + this.place + " in " + this.city + " " + this.address + " " + this.zipCode + "<br>";
    };
    Orte.prototype.displayCard = function () {
        $(".cardWrapper").append("\n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n\t\t\t\t\t<div class=\"card w-100\">\n                        <img class=\"card-img-top img-fluid d-none d-sm-block h-100\" src=\"/" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">" + this.place + "</h5>\n\t\t\t\t\t\t\t<p class=\"card-text location\">&#xe55c;" + this.address + ", " + this.zipCode + " - " + this.city + "</p>\n                        </div>\n                        \n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return Orte;
}());
//*RESTAURANT*/
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(place, city, address, zipCode, image, telNo, cuisine, webAddress) {
        var _this = _super.call(this, place, city, address, zipCode, image) || this;
        _this.telNo = telNo;
        _this.cuisine = cuisine;
        _this.webAddress = webAddress;
        arr_loc.push(_this);
        return _this;
    }
    Restaurant.prototype.displayRest = function () {
        return document.getElementById('dspRest').innerHTML += _super.prototype.displayLoc.call(this) + " enjoy delicious " + this.cuisine + ".<br> Just Call " + this.telNo + " or visit us online " + this.webAddress;
    };
    Restaurant.prototype.displayCard = function () {
        $(".cardWrapper").append("\n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n\t\t\t\t\t<div class=\"card w-100\">\n                        <img class=\"card-img-top img-fluid d-none d-sm-block h-100\" src=\"/" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">" + this.place + "</h5>\n\t\t\t\t\t\t\n                        </div>\n                        \n                        <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item card-text\">" + this.telephoneNumber + "</li>\n                                <li class=\"list-group-item card-text\">" + this.cuisine + "</li>\n                                <li class=\"list-group-item card-text\"><a href=\"http://www." + this.webAddress + "\">" + this.webAddress + "</a></li>\n                                <li class=\"list-group-item card-text\">&#xe561;" + this.address + ", " + this.zipCode + " - " + this.city + "</li>\n                        </ul>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return Restaurant;
}(Orte));
//*EVENTS*/
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(place, city, address, zipCode, image, eventTitle, eventDate, eventTime, eventPrice, eventWebSite) {
        var _this = _super.call(this, place, city, address, zipCode, image) || this;
        _this.eventTitle = eventTitle;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.eventPrice = eventPrice;
        _this.eventWebSite = eventWebSite;
        arr_loc.push(_this);
        return _this;
    }
    Events.prototype.displayEvent = function () {
        return document.getElementById('dspEvent').innerHTML += "<h2>" + this.eventTitle + "</h2> <br>" + this.eventWebSite + "<br> When: " + this.eventDate + " <br> at " + this.eventTime + " o'clock <br> " + _super.prototype.displayLoc.call(this) + " <br> Price: \u20AC" + this.eventPrice + ".-";
    };
    Events.prototype.displayCard = function () {
        $(".cardWrapper").append("\n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n                    <div class=\"card w-100\">\n                        <img class=\"card-img-top img-fluid d-none d-sm-block h-100\" src=\"/" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title font-weight-bold\">" + this.eventTitle + "</h5>\n                            <p class=\"card-text location\">&#xe55e;" + this.address + ", " + this.zipCode + " - " + this.city + "</p>\n                        </div>\n                        \n                        <ul class=\"list-group list-group-flush\">\n                    \n                                <li class=\"list-group-item card-text\">When: " + this.eventDate + "</li>\n                                <li class=\"list-group-item card-text\">At: " + this.eventTime + "</li>\n                                <li class=\"list-group-item card-text\">Where: " + this.address + ", " + this.zipCode + " - " + this.city + "</li>\n                                <li class=\"list-group-item card-text\">\u20AC" + this.eventPrice + ".-</li>\n                                <li class=\"list-group-item card-text\"><a href=\"http://www." + this.eventWebSite + "\">Visit us: " + this.eventWebSite + "</a></li>\n                        </ul>\n                        \n                    </div>\n            </div>\n        ");
    };
    return Events;
}(Orte));
var place1 = new Orte("Louvre", "Paris", "Rue-de-Charles 1", "1010", "img/louvre.jpg");
var place2 = new Orte("Rialto", "Venice", "Maxingstraße 13b", "1130", "img/venice.jpg");
var rest1 = new Restaurant("ON Restaurant", "Vienna", "Wehrgasse 8", "1050", "img/chinese.jpg", "+43(1)5854900", "img/chinese.jpg", "http://www.restaurant-on.at/");
var rest2 = new Restaurant("BioFrische", "Vienna", "Stutterheimstraße 6", "1150", "img/indian.jpg", "+43(1) 9529215", "img/indian.jpg", "http://biofrische.wien/");
var event1 = new Events("Ronacher", "Wien", "Seilerstätte 9", "1010", "img/fire.jpg", "Fire Dance", "Fr.,15.12.2020", "20:00", "120", "http://ronacher.at");
var event2 = new Events("Ernst-Happel-Stadion", "Wien", "Meiereistrasse 7", "1020", "img/music.jpg", "Guns 'n Monkeys", "Sat, 09.06.2020 ", "19:30", "95,50", "http://www.gunsandroses.com/");
for (var _i = 0, arr_loc_1 = arr_loc; _i < arr_loc_1.length; _i++) {
    var i = arr_loc_1[_i];
    i.displayCard();
}
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
/* <div class="row" id="orte">

            <div id="dspInfo"></div>

        </div><!--row orte-->

        <div class="row" id="restaurant">

            <div id="dspRest"></div>

        </div><!--row restaurant-->

        <div class="row" id="events">

            <div id="dspEvent"></div>

        </div><!--row events--> */ 
