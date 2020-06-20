// create classes

let arr_loc = [];

class Orte {
    place;
    city;
    address;
    zipCode;
    image;
    createdDate;
    createdTime;

constructor(place,city,address,zipCode,image,createdDate,createdTime) {
    this.place = place;
    this.city = city;
    this.zipCode = zipCode;
    this.address = address;
    this.image = image;
    this.createdDate = createdDate;
    this.createdTime = createdTime;

    arr_loc.push(this);
    }

    displayLoc() {

        return document.getElementById('dspInfo').innerHTML += `Welcome to: ${this.place} in ${this.city} ${this.address} ${this.zipCode}<br>`
             
    }

    displayCard() {


        $(".cardWrapper").append(`


        
            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
                    <div class="card" style="width: 20rem;">
                    <img class="card-img-top d-none d-sm-block" src="/${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
						<div class="card-body">
							<h5 class="card-title font-weight-bold">${this.place}</h5>
							<p class="card-text location">🏙${this.address}, ${this.zipCode} - ${this.city}</p>
                        </div>

                        <div class="card-footer">
                            <small class="text-muted">Created: ${this.createdDate} ${this.createdTime}</small>
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

constructor(place,city,address,zipCode,image,createdDate,createdTime,telNo,cuisine,webAddress) {
    super(place,city,address,zipCode,image,createdDate,createdTime);
    this.telNo = telNo;
    this.cuisine = cuisine;
    this.webAddress = webAddress;

    
}

    displayRest () {

        return document.getElementById('dspRest').innerHTML += `${super.displayLoc()} enjoy delicious ${this.cuisine}.<br> Just Call ${this.telNo} or visit us online ${this.webAddress}`;
    
    }

    displayCard() {


        $(".cardWrapper").append(`

        
            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
					<div class="card" style="width: 20rem;">
                        <img class="card-img-top d-none d-sm-block" src="/${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
						<div class="card-body">
							<h5 class="card-title font-weight-bold">${this.place}</h5>
						
                        </div>
                        
                        <ul class="list-group list-group-flush">
                                <li class="list-group-item card-text">${this.telNo}</li>
                                <li class="list-group-item card-text">${this.cuisine}</li>
                                <li class="list-group-item card-text"><a href="http://www.${this.webAddress}">${this.webAddress}</a></li>
                                <li class="list-group-item card-text">🍴${this.address}, ${this.zipCode} - ${this.city}</li>
                        </ul>

                        <div class="card-footer">
                            <small class="text-muted">Created: ${this.createdDate} ${this.createdTime}</small>
                        </div>
						
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

constructor(place,city,address,zipCode,image,createdDate,createdTime,eventTitle,eventDate,eventTime,eventPrice,eventWebSite) {
    super(place,city,address,zipCode,image,createdDate,createdTime);
    this.eventTitle = eventTitle;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.eventPrice= eventPrice;
    this.eventWebSite = eventWebSite;

    
}

    displayEvent () {

        return document.getElementById('dspEvent').innerHTML += `<h2>${this.eventTitle}</h2> <br>${this.eventWebSite}<br> When: ${this.eventDate} <br> at ${this.eventTime} o'clock <br> ${super.displayLoc()} <br> Price: €${this.eventPrice}.-`;
        
        }


    displayCard() {


        $(".cardWrapper").append(`

       
            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
                    <div class="card" style="width: 20rem;">
                    <img class="card-img-top d-none d-sm-block" src="/${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">${this.eventTitle}</h5>
                            <p class="card-text location">🎟${this.address}, ${this.zipCode} - ${this.city}</p>
                        </div>
                        
                        <ul class="list-group list-group-flush">
                    
                                <li class="list-group-item card-text">When: ${this.eventDate}</li>
                                <li class="list-group-item card-text">At: ${this.eventTime}</li>
                                <li class="list-group-item card-text">Where: ${this.address}, ${this.zipCode} - ${this.city}</li>
                                <li class="list-group-item card-text">€${this.eventPrice}.-</li>
                                <li class="list-group-item card-text"><a href="http://www.${this.eventWebSite}">Visit us: ${this.eventWebSite}</a></li>
                        </ul>

                        <div class="card-footer">
                            <small class="text-muted">Created: ${this.createdDate} ${this.createdTime}</small>
                        </div>
                        
                    </div>
            </div>
        
        `);

    }
}




//Object Orte
let place1 = new Orte ("Louvre", "Paris", "Rue-de-Charles 1", "1010", "img/louvre.jpg","24.10.2020","12:45")

let place2 = new Orte ("Rialto", "Venice", "Maxingstraße 13b", "1130", "img/venice.jpg","02.10.2010","17:10")

let place3 = new Orte ("Gloriette", "Vienna", "Schönbrunnerstraße 12", "1120", "img/gloriette.jpg","24.01.2020","12:45")

let place4 = new Orte ("Cancun", "Mexico", "Strada Mexico 5", "MX1130", "img/cancun.jpg","02.10.2010","17:10")


//Object Restaurants
let rest1 = new Restaurant("ON Restaurant","Vienna", "Wehrgasse 8" ,"1050", "img/chinese.jpg","24.10.2020","12:45","+43(1)5854900","chinese","http://www.restaurant-on.at/")

let rest2 = new Restaurant("BioFrische","Vienna", "Stutterheimstraße 6" ,"1150", "img/indian.jpg","02.10.2010","17:10","+43(1) 9529215","indian","http://biofrische.wien/")

let rest3 = new Restaurant("McDonald's","Vienna", "Supergasse 3" ,"1060", "img/wine.jpg","24.10.2020","12:45","+43(1)5854900","international","http://www.mcdonalds.at/")

let rest4 = new Restaurant("Burger King","Vienna", "Frittenstraße 69" ,"1150", "img/burger.jpg","02.10.2010","17:10","+43(1) 9529215","fast-food","http://burgerking.com/")


//Object Events
let event1 = new Events("Ronacher","Wien","Seilerstätte 9","1010","img/fire.jpg","24.10.2020","12:45","Fire Dance","Fr.,15.12.2020","20:00","120","http://ronacher.at")

let event2 = new Events("Ernst-Happel-Stadion","Wien","Meiereistrasse 7","1020","img/music.jpg","24.10.2020","12:45","Guns 'n Monkeys","Sat, 09.06.2020 ","19:30","95,50","http://www.gunsandroses.com/")

let event3 = new Events("Stadthalle","Wien","Konzerthalle 1","1150","img/pop.jpg","02.10.2010","17:10","Cats in Concert","Di.,10.10.2020","21:00","200","http://stadthalle.at")

let event4 = new Events("Gasometer","Wien","Erdberger-Lände 7","1030","img/black.jpg","24.10.2020","12:45","Blackstreet Boy","Sat, 19.07.2020 ","19:45","75,60","http://www.blackstreet-boy.com/")




//display function to show all on screen
for (var i of arr_loc) {
    i.displayCard();
}




