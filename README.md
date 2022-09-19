# Team 4 Capstone Project: Flight Delay Predictions

### Description
Hello! This is a flight delay predictor full-stack web application that allows users to detemrine whether or not their upcoming flight (within the week) will be delayed using a multitude of features (i.e. independent variables that specified in the [Machine Learning Model](#machine-learning-model) section below). The main feature is the weather for the upcoming week which is sourced from the OpenWeather API. The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be cancelled days in advance so that disruption to flight and people's schedules are minimized, thus saving them time and resources that would normally be used for air travel preparations.

### Presentation

**Selected Topic**: Flight Delay Predictor

**Rationale/Business Case**: The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be cancelled days in advance so that disruption to flight and people's schedules are minimized, thus saving them time and resources that would normally be used for air travel preparations. Specifically,
* Airlines can reschedule flights well in advance so that air travel preparation resources are only deployed when the flight is guaranteed to takeoff and flight terminals can be free of passengers when flights are projected to be delayed or cancelled; consequently, airlines save money by not prematurely deploying resources when flights have a high probability of being delayed and customer satisfaction increases due to advance notices of flight cancellations and delays.
* Passengers can finalize their schedules well in advance knowing that their flight is guaranteed to takeoff on time; consequently, passengers' satisfaction with the airline increases and demand of airlines' customer services are decreased since flight delays and cancellations are practically non-existent.

**Data Source**: https://www.transtats.bts.gov/ONTIME/
* **Description**: This is the flight data source that we will be using for training and testing our  
**Questions to Answer**:
* 

**Presentation Link**: [Will be included in a few weeks]

### GitHub

**Branches**:
* Main Branch
* **Team Members' Branches**:
  * AllenEapenAlex
  * AvinashMehra
  * JaspreetKhela
  * MohammadShahid
  * RowanBackhouse
* **Feature Branches**:
  * [Coming Soon]


**Technologies**:
* [Coming Soon]

<a name="machine-learning-model"></a>
### Machine Learning Model

**Provisional Machine Learning Model**: Classification Regression Model using PySpark

**Description**:

**Features**:
* **Flight Data Features**:
 * carrier_code
  * **Description**:
 * date(MM/DD/YYYY)
  * **Description**:
 * flight_number
  * **Description**:
 * destination_airport
  * **Description**:
 * scheduled_departure_time
  * **Description**:
 * actual_departure_time
  * **Description**:
 * scheduled_elapsed_time_minutes
  * **Description**:
 * actual_elapsed_time_minutes
  * **Description**:
 * departure_delay_minutes
  * **Description**:
 * wheel-off_time
  * **Description**:
 * taxi-out_time_minutes
  * **Description**:
 * delay_carrier_minutes
  * **Description**:
 * delay_weather_minutes
  * **Description**:
 * delay_national_aviation_system_minutes
  * **Description**:
 * delay_security_minutes
  * **Description**:
 * delay_late_aircrafts_arrival_minutes
  * **Description**:
* **Weather Data Features**:
 * 

**Targets**:
* flight_delayed
 * **Description**:

**Key Methods**:

### Database

**Provisional Database**: MySQL with Sequelize ORM

**Description**:

**Structure/Schema**:

**Connection with Machine Learning Model**:
