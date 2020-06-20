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
    function Orte(place, city, address, zipCode, image, createdDate, createdTime) {
        this.place = place;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        this.createdDate = createdDate;
        this.createdTime = createdTime;
        arr_loc.push(this);
    }
    Orte.prototype.displayLoc = function () {
        return document.getElementById('dspInfo').innerHTML += "Welcome to: " + this.place + " in " + this.city + " " + this.address + " " + this.zipCode + "<br>";
    };
    Orte.prototype.displayCard = function () {
        $(".cardWrapper").append("\n\n\n        \n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n                    <div class=\"card\" style=\"width: 20rem;\">\n                    <img class=\"card-img-top d-none d-sm-block\" src=\"/" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">" + this.place + "</h5>\n\t\t\t\t\t\t\t<p class=\"card-text location\">\uD83C\uDFD9" + this.address + ", " + this.zipCode + " - " + this.city + "</p>\n                        </div>\n\n                        <div class=\"card-footer\">\n                            <small class=\"text-muted\">Created: " + this.createdDate + " " + this.createdTime + "</small>\n                        </div>\n                        \n\t\t\t\t\t</div>\n            </div>\n            \n\t\t");
    };
    return Orte;
}());
//*RESTAURANT*/
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(place, city, address, zipCode, image, createdDate, createdTime, telNo, cuisine, webAddress) {
        var _this = _super.call(this, place, city, address, zipCode, image, createdDate, createdTime) || this;
        _this.telNo = telNo;
        _this.cuisine = cuisine;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurant.prototype.displayRest = function () {
        return document.getElementById('dspRest').innerHTML += _super.prototype.displayLoc.call(this) + " enjoy delicious " + this.cuisine + ".<br> Just Call " + this.telNo + " or visit us online " + this.webAddress;
    };
    Restaurant.prototype.displayCard = function () {
        $(".cardWrapper").append("\n\n        \n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n\t\t\t\t\t<div class=\"card\" style=\"width: 20rem;\">\n                        <img class=\"card-img-top d-none d-sm-block\" src=\"/" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">" + this.place + "</h5>\n\t\t\t\t\t\t\n                        </div>\n                        \n                        <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item card-text\">" + this.telNo + "</li>\n                                <li class=\"list-group-item card-text\">" + this.cuisine + "</li>\n                                <li class=\"list-group-item card-text\"><a href=\"http://www." + this.webAddress + "\">" + this.webAddress + "</a></li>\n                                <li class=\"list-group-item card-text\">\uD83C\uDF74" + this.address + ", " + this.zipCode + " - " + this.city + "</li>\n                        </ul>\n\n                        <div class=\"card-footer\">\n                            <small class=\"text-muted\">Created: " + this.createdDate + " " + this.createdTime + "</small>\n                        </div>\n\t\t\t\t\t\t\n                    </div>\n\n                   \n        \n\t\t    </div>\n\t\t");
    };
    return Restaurant;
}(Orte));
//*EVENTS*/
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(place, city, address, zipCode, image, createdDate, createdTime, eventTitle, eventDate, eventTime, eventPrice, eventWebSite) {
        var _this = _super.call(this, place, city, address, zipCode, image, createdDate, createdTime) || this;
        _this.eventTitle = eventTitle;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.eventPrice = eventPrice;
        _this.eventWebSite = eventWebSite;
        return _this;
    }
    Events.prototype.displayEvent = function () {
        return document.getElementById('dspEvent').innerHTML += "<h2>" + this.eventTitle + "</h2> <br>" + this.eventWebSite + "<br> When: " + this.eventDate + " <br> at " + this.eventTime + " o'clock <br> " + _super.prototype.displayLoc.call(this) + " <br> Price: \u20AC" + this.eventPrice + ".-";
    };
    Events.prototype.displayCard = function () {
        $(".cardWrapper").append("\n\n       \n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n                    <div class=\"card\" style=\"width: 20rem;\">\n                    <img class=\"card-img-top d-none d-sm-block\" src=\"/" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title font-weight-bold\">" + this.eventTitle + "</h5>\n                            <p class=\"card-text location\">\uD83C\uDF9F" + this.address + ", " + this.zipCode + " - " + this.city + "</p>\n                        </div>\n                        \n                        <ul class=\"list-group list-group-flush\">\n                    \n                                <li class=\"list-group-item card-text\">When: " + this.eventDate + "</li>\n                                <li class=\"list-group-item card-text\">At: " + this.eventTime + "</li>\n                                <li class=\"list-group-item card-text\">Where: " + this.address + ", " + this.zipCode + " - " + this.city + "</li>\n                                <li class=\"list-group-item card-text\">\u20AC" + this.eventPrice + ".-</li>\n                                <li class=\"list-group-item card-text\"><a href=\"http://www." + this.eventWebSite + "\">Visit us: " + this.eventWebSite + "</a></li>\n                        </ul>\n\n                        <div class=\"card-footer\">\n                            <small class=\"text-muted\">Created: " + this.createdDate + " " + this.createdTime + "</small>\n                        </div>\n                        \n                    </div>\n            </div>\n        \n        ");
    };
    return Events;
}(Orte));
//Object Orte
var place1 = new Orte("Louvre", "Paris", "Rue-de-Charles 1", "1010", "img/louvre.jpg", "24.10.2020", "12:45");
var place2 = new Orte("Rialto", "Venice", "Maxingstraße 13b", "1130", "img/venice.jpg", "02.10.2010", "17:10");
var place3 = new Orte("Gloriette", "Vienna", "Schönbrunnerstraße 12", "1120", "img/gloriette.jpg", "24.01.2020", "12:45");
var place4 = new Orte("Cancun", "Mexico", "Strada Mexico 5", "MX1130", "img/cancun.jpg", "02.10.2010", "17:10");
//Object Restaurants
var rest1 = new Restaurant("ON Restaurant", "Vienna", "Wehrgasse 8", "1050", "img/chinese.jpg", "24.10.2020", "12:45", "+43(1)5854900", "chinese", "http://www.restaurant-on.at/");
var rest2 = new Restaurant("BioFrische", "Vienna", "Stutterheimstraße 6", "1150", "img/indian.jpg", "02.10.2010", "17:10", "+43(1) 9529215", "indian", "http://biofrische.wien/");
var rest3 = new Restaurant("McDonald's", "Vienna", "Supergasse 3", "1060", "img/wine.jpg", "24.10.2020", "12:45", "+43(1)5854900", "international", "http://www.mcdonalds.at/");
var rest4 = new Restaurant("Burger King", "Vienna", "Frittenstraße 69", "1150", "img/burger.jpg", "02.10.2010", "17:10", "12:45", "+43(1) 9529215", "fast-food", "http://burgerking.com/");
//Object Events
var event1 = new Events("Ronacher", "Wien", "Seilerstätte 9", "1010", "img/fire.jpg", "24.10.2020", "12:45", "Fire Dance", "Fr.,15.12.2020", "20:00", "120", "http://ronacher.at");
var event2 = new Events("Ernst-Happel-Stadion", "Wien", "Meiereistrasse 7", "1020", "img/music.jpg", "24.10.2020", "12:45", "Guns 'n Monkeys", "Sat, 09.06.2020 ", "19:30", "95,50", "http://www.gunsandroses.com/");
var event3 = new Events("Stadthalle", "Wien", "Konzerthalle 1", "1150", "img/pop.jpg", "02.10.2010", "17:10", "Cats in Concert", "Di.,10.10.2020", "21:00", "200", "http://stadthalle.at");
var event4 = new Events("Gasometer", "Wien", "Erdberger-Lände 7", "1030", "img/black.jpg", "24.10.2020", "12:45", "Blackstreet Boy", "Sat, 19.07.2020 ", "19:45", "75,60", "http://www.blackstreet-boy.com/");
//display function to show all on screen
for (var _i = 0, arr_loc_1 = arr_loc; _i < arr_loc_1.length; _i++) {
    var i = arr_loc_1[_i];
    i.displayCard();
}
