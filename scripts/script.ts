// create classes

let arr_loc = [];

class Orte {
    place;
    city;
    address;
    zipCode;
    image;

constructor(place,city,address,zipCode,image) {
    this.place = place;
    this.city = city;
    this.zipCode = zipCode;
    this.address = address;
    this.image = image;

    arr_loc.push(this);
    }

    displayLoc() {

        return document.getElementById('dspInfo').innerHTML += `Welcome to: ${this.place} in ${this.city} ${this.address} ${this.zipCode}<br>`
             
    }

    displayCard() {


        $(".cardWrapper").append(`
            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
					<div class="card w-100">
                        <img class="card-img-top img-fluid d-none d-sm-block h-100" src="/${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
						<div class="card-body">
							<h5 class="card-title font-weight-bold">${this.place}</h5>
							<p class="card-text location">&#xe55c;${this.address}, ${this.zipCode} - ${this.city}</p>
                        </div>
                        
					</div>
			</div>
		`);

    }
}


//*RESTAURANT*/

class Restaurant extends Orte {
    telNo;
    cuisine;
    webAddress;

constructor(place,city,address,zipCode,image,telNo,cuisine,webAddress) {
    super(place,city,address,zipCode,image);
    this.telNo = telNo;
    this.cuisine = cuisine;
    this.webAddress = webAddress;

    arr_loc.push(this);
}

    displayRest () {

        return document.getElementById('dspRest').innerHTML += `${super.displayLoc()} enjoy delicious ${this.cuisine}.<br> Just Call ${this.telNo} or visit us online ${this.webAddress}`;
    
    }

    displayCard() {


        $(".cardWrapper").append(`
            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
					<div class="card w-100">
                        <img class="card-img-top img-fluid d-none d-sm-block h-100" src="/${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
						<div class="card-body">
							<h5 class="card-title font-weight-bold">${this.place}</h5>
						
                        </div>
                        
                        <ul class="list-group list-group-flush">
                                <li class="list-group-item card-text">${this.telephoneNumber}</li>
                                <li class="list-group-item card-text">${this.cuisine}</li>
                                <li class="list-group-item card-text"><a href="http://www.${this.webAddress}">${this.webAddress}</a></li>
                                <li class="list-group-item card-text">&#xe561;${this.address}, ${this.zipCode} - ${this.city}</li>
                        </ul>
						
					</div>
			</div>
		`);

    }
}


//*EVENTS*/

class Events extends Orte {
    eventTitle;
    eventDate;
    eventTime;
    eventPrice;
    eventWebSite;

constructor(place,city,address,zipCode,image,eventTitle,eventDate,eventTime,eventPrice,eventWebSite) {
    super(place,city,address,zipCode,image);
    this.eventTitle = eventTitle;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.eventPrice= eventPrice;
    this.eventWebSite = eventWebSite;

    arr_loc.push(this);
}

    displayEvent () {

        return document.getElementById('dspEvent').innerHTML += `<h2>${this.eventTitle}</h2> <br>${this.eventWebSite}<br> When: ${this.eventDate} <br> at ${this.eventTime} o'clock <br> ${super.displayLoc()} <br> Price: €${this.eventPrice}.-`;
        
        }


    displayCard() {


        $(".cardWrapper").append(`
            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
                    <div class="card w-100">
                        <img class="card-img-top img-fluid d-none d-sm-block h-100" src="/${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">${this.eventTitle}</h5>
                            <p class="card-text location">&#xe55e;${this.address}, ${this.zipCode} - ${this.city}</p>
                        </div>
                        
                        <ul class="list-group list-group-flush">
                    
                                <li class="list-group-item card-text">When: ${this.eventDate}</li>
                                <li class="list-group-item card-text">At: ${this.eventTime}</li>
                                <li class="list-group-item card-text">Where: ${this.address}, ${this.zipCode} - ${this.city}</li>
                                <li class="list-group-item card-text">€${this.eventPrice}.-</li>
                                <li class="list-group-item card-text"><a href="http://www.${this.eventWebSite}">Visit us: ${this.eventWebSite}</a></li>
                        </ul>
                        
                    </div>
            </div>
        `);

    }
}

let place1 = new Orte ("Louvre", "Paris", "Rue-de-Charles 1", "1010", "img/louvre.jpg")

let place2 = new Orte ("Rialto", "Venice", "Maxingstraße 13b", "1130", "img/venice.jpg")


let rest1 = new Restaurant("ON Restaurant","Vienna", "Wehrgasse 8" ,"1050", "img/chinese.jpg","+43(1)5854900","img/chinese.jpg","http://www.restaurant-on.at/")

let rest2 = new Restaurant("BioFrische","Vienna", "Stutterheimstraße 6" ,"1150", "img/indian.jpg","+43(1) 9529215","img/indian.jpg","http://biofrische.wien/")


let event1 = new Events("Ronacher","Wien","Seilerstätte 9","1010","img/fire.jpg","Fire Dance","Fr.,15.12.2020","20:00","120","http://ronacher.at")

let event2 = new Events("Ernst-Happel-Stadion","Wien","Meiereistrasse 7","1020","img/music.jpg","Guns 'n Monkeys","Sat, 09.06.2020 ","19:30","95,50","http://www.gunsandroses.com/")



for (var i of arr_loc) {
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