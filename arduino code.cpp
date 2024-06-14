#include <boltiot.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>


#define API_KEY     "api_key"
#define DEVICE_ID   "Device_id"
#define DHTPIN 2   // Defining DHT Senor Pin that is connected with Boltduino


#define DHTTYPE DHT11   // DHT 22  (AM2302), AM2321
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

DHT dht = DHT(DHTPIN, DHTTYPE);

void setup() {
  boltiot.begin(Serial);  
  pinMode(2,INPUT); 
  dht.begin();
}

void loop() {
  
  delay(500);

  // Read the humidity in %:
  float humidity = dht.readHumidity();
  // Read the temperature as Celsius:
  float temperature = dht.readTemperature();

  boltiot.processPushDataCommand(temperature, humidity);
}
