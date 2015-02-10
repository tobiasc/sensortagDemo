var SensorTag = require('sensortag'),
	sensorData = {
		xA: 0, // X accelerometer
		yA: 0, // Y accelerometer
		zA: 0, // Z accelerometer
		xG: 0, // X gyroscope
		yG: 0, // Y gyroscope
		zG: 0, // Z gyroscope
		humidity: 0, 
		temperature: 0
	};

function printVariables() {
	console.log('(%d, %d, %d) - (%d, %d, %d) - %d °C - %d %', 
		sensorData.xA.toFixed(3), sensorData.yA.toFixed(3), sensorData.zA.toFixed(3), 
		sensorData.xG.toFixed(3), sensorData.yG.toFixed(3), sensorData.zG.toFixed(3), 
		sensorData.temperature.toFixed(1), sensorData.humidity.toFixed(1));
}

SensorTag.discover(function(sensorTag) {
	console.log('discover');
	sensorTag.connect(function() {
		console.log('connect');
		sensorTag.discoverServicesAndCharacteristics(function() {
			console.log('discoverServicesAndCharacteristics');

			setInterval(function () {
				printVariables();
			}, 200);

			// enable collection of humidity & temparature
			sensorTag.enableHumidity(function() {
				sensorTag.on('humidityChange', function(temperature, humidity) {
					sensorData.temperature = temperature;
					sensorData.humidity = humidity;
				});

				sensorTag.notifyHumidity(function() {
					console.log('notifyHumidity');
				});
			});
			
			// enable collection of accelerometer data
			sensorTag.enableAccelerometer(function () {
				sensorTag.on('accelerometerChange', function (x, y, z) {
					sensorData.xA = x;
					sensorData.yA = y;
					sensorData.zA = z;
				});
				sensorTag.setAccelerometerPeriod(50, function () {
					sensorTag.readAccelerometer(function (x, y, z) {
						sensorData.xA = x;
						sensorData.yA = y;
						sensorData.zA = z;
					});
				});
				sensorTag.notifyAccelerometer(function () {
					console.log('notifyAccelerometer');
				});
			});
			
			// enable collection of gyrescope data
			sensorTag.enableGyroscope(function () {
				sensorTag.on('gyroscopeChange', function (x, y, z) {
					sensorData.xG = x;
					sensorData.yG = y;
					sensorData.zG = z;
				});
				sensorTag.notifyGyroscope(function () {
					console.log('notifyGyroscope');
				});
			});
		});
	});
});
