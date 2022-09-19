# Team 4 Capstone Project: Flight Delay Predictions
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Testing](#testing)
* [Credit](#credit)
* [Contributions](#contributions)
* [Questions](#questions)
* [Badges](#badges)
* [License](#license)

<a name="description"></a>
### Description
Hello! This is a flight delay predictor full-stack web application that allows users to detemrine whether or not their upcoming flight (within the week) will be delayed using a multitude of features (i.e. independent variables that specified in the [Machine Learning Model](#machine-learning-model) section below). The main feature is the weather for the upcoming week which is sourced from the OpenWeather API. The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be cancelled days in advance so that disruption to flight and people's schedules are minimized, thus saving them time and resources that would normally be used for air travel preparations.

<a name="team-and-roles"></a>
### Team and Roles

* AllenEapenAlex
 * **Role**: Exploratory Data Analyst
 * **Tasks**:
  * Performed an exploratory data analysis on the flight dataset and exported charts;
* AvinashMehra
 * **Role**: Database Engineer
 * **Tasks**: 
  * Created the SQL database schema;
* JaspreetKhela
 * **Role**: Full-Stack Web Application Developer, Machine Learning Engineer
 * **Tasks**:
  * Created GutHub project board with issues;
  * Created the full-stack web application;
  * Created the schema for the machine learning model;
* MohammadShahid
 * **Role**: Repository Maintainer
 * **Tasks**:
  * Created the GutHub repository and branches;
* RowanBackhouse
 * **Role**: Exploratory Data Analyst
 * **Tasks**:
  * Performed an exploratory data analysis on the flight dataset and exported charts;

<a name="presentation"></a>
### Presentation

**Selected Topic**: Flight Delay Predictor

**Rationale/Business Case**: The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be cancelled days in advance so that disruption to flight and people's schedules are minimized, thus saving them time and resources that would normally be used for air travel preparations. Specifically,
* Airlines can reschedule flights well in advance so that air travel preparation resources are only deployed when the flight is guaranteed to takeoff and flight terminals can be free of passengers when flights are projected to be delayed or cancelled; consequently, airlines save money by not prematurely deploying resources when flights have a high probability of being delayed and customer satisfaction increases due to advance notices of flight cancellations and delays.
* Passengers can finalize their schedules well in advance knowing that their flight is guaranteed to takeoff on time; consequently, passengers' satisfaction with the airline increases and demand of airlines' customer services are decreased since flight delays and cancellations are practically non-existent.

**Data Sources**: 
* https://www.transtats.bts.gov/ONTIME/
 * **Description**: This is the flight data source that we are using for training and testing our machine learning model.
* https://openweathermap.org/forecast5
* **Description**: This is the weather forecast data sources that we are using for training and testing our machine learning model. We are using the "5-Day Weather Forecast" API for the weather data since it is the only free API provided by [OpenWeather](https://openweathermap.org/price).

**Questions to Answer**:
* 

**Presentation Link**: [Will be included in a few weeks]

<a name="github"></a>
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
* **Front-End**:
 * HTML
 * CSS
 * JavaScript
 * Handbars.js
* **Back-End**:
 * Node.js
 * MySQL
 * Sequelize ORM
 * Heroku
 * [Coming Soon]

<a name="database"></a>
### Database

**Provisional Database**: MySQL with Sequelize ORM

**Description**:

**Structure/Schema**:

**Connection with Machine Learning Model**:

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
