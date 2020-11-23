# CFLMS-Oxales-CodeReview-06

Sixth Websitr Project


Project description:

Note: You are now familiar with TypeScript and Bootstrap, as well as with the concepts of objects, classes and inheritance. It is time to put that knowledge to use.


Organization of you code:

Examine the Content section below and use it as a guide to create your index.html page, as well as your script.ts-file(s). 
Submit script.ts, as well as script.js file(s) and all other project files.
All images should be stored in an img folder, which is a subfolder of your main CR project folder.


# Travel-o-matic blog


You enjoy traveling to different places, visiting events and eating good food in restaurants. You want to create a TypeScript-based system that presents all of your experiences in a web-page.


What is common to a place, event and restaurant? A location. Since you know about classes, you decided that your base(main) class Location should hold information about the city, ZIP-code, address (single line like “Kettenbrueckengasse 23”), and a teaser image. That base class has the function display() which is used for displaying the object’s properties on the screen as HTML.


A restaurant must also display a telephone number, type (“chinese”, “indian”, “viennese”, …)  and a web address. Restaurant objects inherit their basic properties (like ZIP-code) from the Location class. The display function must of course be updated.   


Same goes for the events - they have their additional properties like EventDate (“12.10.2020”) and EventTime (“17:00”) and ticket price (in EUR) that also need to be displayed in addition to the base class’ location properties.   


For the regular points of this CodeReview, you need to create a structure of TypeScript/JavaScript classes, their respective constructors and their display() function(s) that will display the relevant data of places, events and restaurants that you have visited.


Regular points:

- Create a data model of Location based on the specification above.

- Create at least 2 location objects by invoking a constructor call and save them in an array (class constructors usage is mandatory, do not use JSON and parsing).

- Add the display() function to the Location class that can display Location objects as an HTML string. Use Bootstrap to solve design and responsiveness issues in an easy manner.

- Use looping functionality to display the objects saved in the array on the screen.

- Create the classes Restaurant and Events with their respective properties. Invoke constructors, and save resulting objects in the same array used for the location objects. Check the rendering (i.e. how you display it).  

- Create a display() function for the classes Restaurant and Event respectively. display() is capable of displaying relevant information of its class as an HTML. Again, use Bootstrap to solve design and responsiveness.

- Assure that rendering of the array is done in the following manner: for small screens, you see the teaser of one object (without the image) in a row. On medium screens, you see two objects in a row (with image). On large screens, you see four objects in a row (with image).


Bonus Points:
- You have decided to add additional date/time for every location that you visited. You add that information “Created: 24.10.2020 12:45” to the respective teaser displays.

-  You want to use the newly added entry to add two additional pages to your system index-asc.html  and index-desc.html Those pages are sorting the array of locations (places, events, restaurant) ascending/descending based on the “Created” date/time property.


Summary: Create 3 different classes. The main class is the Location class, followed by a Restaurant class and Event class. Both the Restaurant class and Event class will inherit the basic properties from the Location class and will have extra properties specific only to themselves. Each class will have a display() function, displaying their specific content. You need to create at least 2 objects per class. All objects created should be placed in an array, that should be looped through to display each object on your page(s). 


Content:
To speed up: for the test data, please consider the following examples of places/locations, restaurants and events. You can choose any city you like. Feel free to expand or use your own:



Places/Locations:
St. Charles Church

Karlsplatz 1, 1010 Vienna

Schönbrunn Park, Vienna

Maxingstraße 13b, 1130 Wien



Restaurants:
ON Restaurant

Wehrgasse 8, 1050 Vienna, +43(1)5854900

Chinese

http://www.restaurant-on.at/


BioFrische

Stutterheimstraße 6, 1150 Wien ,  +43(1) 9529215

Indian

biofrische.wien


Events:

Cats- the musical

http://catsmusical.at

Fr., 15.12.2020. 

20:00

Ronacher- Seilerstätte 9, 1010 Wien

€ 120,00


Guns ‘n Roses

www.gunsandroses.com/

Sat, 09.06.2020 

19:30

Ernst-Happel Stadion, Meiereistraße 7, 1020 Wien

€ 95,50


You can see an example and inspiration from https://www.diefruehstueckerinnen.at of what the travel-o-matic blog could look like.
