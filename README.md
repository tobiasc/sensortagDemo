# sensortagDemo

It'll run every 200ms and collect temperature, humidity, accelerometer, & gyroscope data. 
First is discovers the device, then connects to it, and eventually it'll start collecting data from it (usually takes 5-15 seconds).

### How to get started
1. Install NodeJS (http://nodejs.org/)
2. Install dependencies `> npm install` 
3. Run code `> npm start`
4. Press the "connect button" on the SensorTag

Sample Output:
```
> npm start
discover
connect
discoverServicesAndCharacteristics
(0, 0, 0) - (0, 0, 0) - 0 °C - 0 %
(0, 0, 0) - (0, 0, 0) - 0 °C - 0 %
notifyHumidity
(0, 0, 0) - (0, 0, 0) - 0 °C - 0 %
(0, 0, 0) - (0, 0, 0) - 0 °C - 0 %
notifyAccelerometer
notifyGyroscope
(0, 0, 0) - (0, 0, 0) - 0 °C - 0 %
(0.047, -1.016, -0.063) - (0, 0, 0) - 0 °C - 0 %
(0.031, -0.984, 0.25) - (0, 0, 0) - 26.6 °C - 88.4 %
(-0.016, -0.969, 0.203) - (1.175, 6.18, 3.044) - 26.6 °C - 88.4 %
(-0.063, -1.141, -0.063) - (1.175, 6.18, 3.044) - 26.6 °C - 88.4 %
(0.109, -0.859, 0.016) - (1.175, 6.18, 3.044) - 26.6 °C - 88.4 %
```

### Resources
- https://github.com/sandeepmistry/node-sensortag
- https://gist.github.com/sandeepmistry/6075857
