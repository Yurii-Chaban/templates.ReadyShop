	try {

		var point = {
			lat: 41.7090442,
			lng: -87.6764847
		};
		var markerSize = {
			x: 36,
			y: 57
		};


		google.maps.Marker.prototype.setLabel = function(label) {
			this.label = new MarkerLabel({
				map: this.map,
				marker: this,
				text: label
			});
			this.label.bindTo('position', this, 'position');
		};

		var MarkerLabel = function(options) {
			this.setValues(options);
			this.span = document.createElement('span');
			this.span.className = 'map-marker-label';
		};

		MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
			onAdd: function() {
				this.getPanes().overlayImage.appendChild(this.span);
				var self = this;
				this.listeners = [
				google.maps.event.addListener(this, 'position_changed', function() {
					self.draw();
				})
				];
			},
			draw: function() {
				var text = String(this.get('text'));
				var position = this.getProjection().fromLatLngToDivPixel(this.get('position'));
				this.span.innerHTML = text;
				this.span.style.left = (position.x - (markerSize.x / 2)) - (text.length * 3) + 170 + 'px';
				this.span.style.top = (position.y - markerSize.y - 20) + 'px';
			}
		});

		function initialize() {    
			var myLatLng = new google.maps.LatLng(point.lat, point.lng);
			var gmap = new google.maps.Map(document.getElementById('mapWrapper'), {
				zoom: 14,
				center: myLatLng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#e9e9e9"
					},
					{
						"lightness": 17
					}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#f5f5f5"
					},
					{
						"lightness": 20
					}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 17
					}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 18
					}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#f5f5f5"
					},
					{
						"lightness": 21
					}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#dedede"
					},
					{
						"lightness": 21
					}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#333333"
					},
					{
						"lightness": 40
					}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#f2f2f2"
					},
					{
						"lightness": 19
					}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#fefefe"
					},
					{
						"lightness": 20
					}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
					{
						"color": "#fefefe"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
					]
				}
				]
			});
			var myMarker = new google.maps.Marker({
				map: gmap,
				icon: "images/location-colore.png",
				position: myLatLng,
				label: 'Shopping Name',
				draggable: true
			});
		}

		initialize();  
	} catch (e) {
		alert(e);
	}