//parse the place_id from the URL 
const urlParams = new URLSearchParams(window.location.search); 
const placeId = urlParams.get('place_id');

if (placeId) {
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    const request = {
        placeId: placeId
    };

//fetch restaurant details using the placeId
service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        document.getElementById('restaurant-name').textContent = place.name;
        document.getElementById('restaurant-address').textContent = place.formatted_address; 
        document.getElementById('restaurant-rating').textContent = `Rating: ${place.rating || 'N/A'}`;

        //initalize and desplay map 
        const map = new google.maps.Map(document.getElementById('map'), {
            center: place.geometry.location,
            zoom: 15     //set zoom level
        });
    }
});

}