mapboxgl.accessToken = 'pk.eyJ1IjoiZGF3cm91biIsImEiOiJja2hjYzltYWkxbTljMnBucTVjNWs0cXU4In0.pQuBH_SQvQPVxZ7-25mddw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation , {
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position);
    setUp([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setUp([-122, 37]);
}

function setUp(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom: 12
      });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      map.addControl(directions, 'top-left');
}

