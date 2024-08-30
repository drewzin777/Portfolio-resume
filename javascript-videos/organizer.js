//load the map
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map); 

//geocode function
function geocodeLocation(location, callback) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                callback(lat, lon);
            } else {
                alert('Location not found');
            }
        })
        .catch(err => console.error(err));
}

//event form submission
document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

//Get form values
const eventName = document.getElementById('eventName').value;
const eventDate = document.getElementById('eventDate').value; 
const eventTime = document.getElementById('eventTime').value; 
const eventLocation = document.getElementById('eventLocation').value;
const eventNotes = document.getElementById('eventNotes').value;

//if editing an existing event, update the event
if (eventToEdit) {
    eventToEdit.name = eventName;
    eventToEdit.date = eventDate;
    eventToEdit.time = eventTime; 
    eventToEdit.location = eventLocation; 
    eventToEdit.notes = eventNotes;

    updateEvent(eventToEdit);
    eventToEdit = null; //clear the editing flag
} else {
    const event = { name: eventName, date: eventDate, time:  eventTime, location: eventLocation, notes: eventNotes };

    //Geocode the location and add a marker
    geocodeLocation(eventLocation, (lat, lon) => {
        const marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(`<b>${eventName}</b><br>${eventLocation}`).openPopup();

        //center map 
        map.setView([lat, lon], 13);
    });

    saveEvent(event);
    createEventItem(event);

    //clear form fields after adding event
    document.getElementById('eventForm').reset();
    }
});

function updateEvent(updatedEvent) {
    let events = JSON.parse(localStorage.getItem('events')) || [];

    events = events.map(event => {
        if (event.name === updatedEvent.name && event.date === updatedEvent.date) {
            return updatedEvent;
        }
        return event;
    });

    localStorage.setItem('events', JSON.stringify(events));
    
    // Reload the event list to show the updated event
    document.getElementById('eventList').innerHTML = '';
    loadEvents();
}

//search form submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const searchName = document.getElementById('searchName').value.toLowerCase();
    const searchDate = document.getElementById('searchDate').value;
    const searchLocation = document.getElementById('searchLocation').value.toLowerCase();

    //load events from storage
    let events = JSON.parse(localStorage.getItem('events')) || [];

    //filter events 
    const filteredEvents = events.filter(event => {
        const nameMatch = searchName ? event.name.toLowerCase().includes(searchName) : true;
        const dateMatch = searchDate ? event.date === searchDate : true; 
        const locationMatch = searchLocation ? event.location.toLowerCase().includes(searchLocation) : true;
        return nameMatch && dateMatch && locationMatch;
   });

   //clear the event list
   document.getElementById('eventList').innerHTML = '';

   //display filtered events
   filteredEvents.forEach(createEventItem);
});

//function to create a new event item
function createEventItem(event) {
    const eventItem = document.createElement('li');
    eventItem.classList.add('event-item'); 
    eventItem.innerHTML = `
    <strong>${event.name}</strong> - ${event.date} at ${event.time} <br>
    Location: ${event.location} <br> 
    Notes: ${event.notes} <br> 
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
`;

//edit button function
eventItem.querySelector('.edit-btn').addEventListener('click', function() {
    loadEventToForm(event);
});

eventItem.querySelector('.delete-btn').addEventListener('click', function() {
    eventItem.remove();
    deleteEvent(event);
}); 

//append new event to list
document.getElementById('eventList').appendChild(eventItem);
}

//function to save event to storage 
function saveEvent(event) { 
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
}
    
//function to load events from storage
function loadEvents() {
    let events = JSON.parse(localStorage.getItem('events')) || []; 
    events.forEach(createEventItem);
}

let eventToEdit = null; 
function loadEventToForm(event) {
    document.getElementById('eventName').value = event.name;
    document.getElementById('eventDate').value = event.date; 
    document.getElementById('eventTime').value = event.time; 
    document.getElementById('eventLocation').value = event.location; 
    document.getElementById('eventNotes').value = event.notes;
    eventToEdit = event;
}

//map popup and function 
var popup = L.popup() 
.setLatLng([51.513, -0.09])
.setContent("I am a standalone popup.") 
.openOn(map);

function onMapClick(e) {
    alert("You clicked the map at  " + e.latlng); 
}

map.on('click', onMapClick);

//functionto delet event from storage
function deleteEvent(eventToDelete) {
    let events = JSON.parse(localStorage.getItem('events')) || []; 
    events = events.filter(event => !(event.name === eventToDelete.name && event.date === eventToDelete.date)); 
    localStorage.setItem('events', JSON.stringify(events));
}
window.onload = loadEvents;













