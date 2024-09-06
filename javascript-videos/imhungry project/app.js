//initialize map
let map; 
let service; 
let infowindow; 

function initMap(lat, lng) {
    const location = new google.maps.LatLng(lat, lng);


map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 14, 
});

const request = {
    location: location, 
    radius: '1500',
    type: ['restaurant']
};

service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, handleResults);
}

//handle search results
function handleResults(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        document.getElementById('results').innerHTML = ''; //clear previous results

        results.forEach((place) => {
            const li = document.createElement('li');
            li.textContent = place.name; 
            //link to restaurant-detail page
            li.addEventListener('click', () => {
                window.location.href = `restaurant-detail.html?place_id=${place.place_id}`;
            }); 
               
            document.getElementById('results').appendChild(li); 

            //add marker to map
            const marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name,
            });
        });
    } else {
        console.error('PlacesService failed due to: ', status);
    }
}

//parse the place_id from the URL 
const urlParams = URLSearchParams(window.location.search);
const placeId = urlParams.get('place_id'); 

if (placeId) {
    //initialize the map and fetch restaurant details 
    const service = new google.maps.places.PlacesService(document.createElement('div')); 

    const request = { 
        placeId: placeId
    };

    //fetch details for restaurant
    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            document.getElementById('restaurant-name').textContent = place.name;
            document.getElementById('restaurant-address').textContent = place.formatted_address;
            document.getElementById('restaurant-rating').textContent = `Rating: ${place.rating || 'N/A'}`;

            const map = google.maps.Map(document.getElementById('map'), {
                center: place.geometry.location,
                zoom: 15
            });

            new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name 
            });
            } else {
                console.error('PlaceService failed to fetch details due to: ', status);
            }
        });
    } else {
        alert('No place_id found in the URL.');
    }

//show details of a restaurant
function showDetails(placeId) {
    const request = { placeId }; 
    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            alert(`Name: ${place.name}\nRating: ${place.rating}\nAddress: ${place.formatted_address}`);
        }
    });
}

//event listener for button 
document.getElementById('findRestaurants').addEventListener('click', () => {
    const locationInput = document.getElementById('location').value; 

    if (locationInput) {
        const geocoder = new google.maps.Geocoder(); 
        geocoder.geocode({ address: locationInput }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                const lat = results[0].geometry.location.lat();
                const lng = results[0].geometry.location.lng();
                initMap(lat, lng); 
            } else {
                alert("Could not find location: " + status);
            }
        });
    } else {
        //use current location if input is empty
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                initMap(position.coords.latitude, position.coords.longitude);
            });
        } else {
            alert('Geolocation not supported by your browser.');
        }
    }   
}); 

var port = chrome.runtime.connect({name: "communicationChannel"});
port.onDisconnect.addListener(function() {
    console.log("Port was disconnected.");
    // optionally, you can try to reconnect the port here
});
