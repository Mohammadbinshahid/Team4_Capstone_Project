# Team 4 Capstone Project: Flight Delay Predictions
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<a name="description"></a>
### Description
Hello! This is a flight delay predictor full-stack web application that allows users to detemrine whether or not their upcoming flight (within the week) will be delayed or cancelled using a multitude of features (i.e. independent variables that specified in the [Machine Learning Model](#machine-learning-model) section below). The main feature is the weather for the upcoming week which is sourced from the OpenWeather API. The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be delayed or cancelled days in advance so that disruption to flight and people's schedules are minimized, thus saving them time and resources that would normally be used for air travel preparations.

_____

## Table of Contents
* [Presentation](#presentation)
* [Team, Roles, and Contributions](#team-and-roles-contributions)
* [GitHub Repository Specifications](#github)
* [Database Specifications](#database)
* [Machine Learning Model Specifications](#machine-learning-model)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Testing](#testing)
* [Contributions](#contributions)
* [Questions](#questions)
* [Badges](#badges)
* [License](#license)

_____

<a name="presentation"></a>
### Presentation

**Selected Topic**: Flight Delay Predictor

**Rationale/Business Case**: The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be delayed or cancelled days in advance so that disruption to flight and people's schedules are minimized, thus saving them time and resources that would normally be used for air travel preparations. Specifically,
* Airlines can reschedule flights well in advance so that air travel preparation resources are only deployed when the flight is guaranteed to takeoff on time and flight terminals can be free of passengers when flights are projected to be delayed or cancelled; consequently, airlines save money by not prematurely deploying resources when flights have a high probability of being delayed and customer satisfaction increases due to advance notices of flight delays and cancellations.
* Passengers can finalize their schedules well in advance knowing that their flight is guaranteed to takeoff on time; consequently, passengers' satisfaction with the airline increases and demand of airlines' customer services are decreased since flight delays and cancellations are practically non-existent. This both increases the airline's reputation and decreases its service costs, the saving from which can be passed off to passengers.

**Data Sources**: 
* **Flight Data**: https://www.transtats.bts.gov/ONTIME/
  * **Description**: This is the flight data source that we are using for training and testing our machine learning model.
* **Weather Data**: https://openweathermap.org/forecast5
  * **Description**: This is the weather forecast data sources that we are using for training and testing our machine learning model. We are using the "5-Day Weather Forecast" API for the weather data since it is the only free API provided by [OpenWeather](https://openweathermap.org/price).

**Questions to Answer**:
* [Coming Soon]

**Presentation Link**: [Coming Soon]

<a name="web-app-link"></a>
**Web Application Link**: [Coming Soon]

_____

<a name="team-roles-and-contributions"></a>
### Team, Roles, and Contributions

* **AllenEapenAlex**:
  * **Role**: Exploratory Data Analyst, Presenter
  * **Tasks**:
    * Performed an exploratory data analysis on the flight dataset and exported charts;
* **AvinashMehra**:
  * **Role**: Database Engineer, Presenter
  * **Tasks**: 
    * Created the SQL database schema;
* **JaspreetKhela**:
  * **Role**: Full-Stack Web Application Developer, Machine Learning Engineer, Database Engineer, Presenter
  * **Tasks**:
    * Created GutHub project board with issues;
    * Created the full-stack web application;
    * Created the schema for the machine learning model;
* **MohammadShahid**:
  * **Role**: Repository Maintainer, Presenter
  * **Tasks**:
    * Created the GutHub repository and branches;
* **RowanBackhouse**:
  * **Role**: Exploratory Data Analyst, Presenter
  * **Tasks**:
    * Performed an exploratory data analysis on the flight dataset and exported charts;

_____

<a name="github"></a>
### GitHub

**Branches**:
* **Main Branch**
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
    * **Description**:
  * CSS
    * **Description**:
  * JavaScript
    * **Description**:
  * Handbars.js
    * **Description**:
* **Back-End**:
  * Node.js
    * **Description**:
  * MySQL
    * **Description**:
  * Sequelize ORM
    * **Description**:
  * Heroku
    * **Description**:
  * [Coming Soon]
    * **Description**:

**Folder Structure**:
* **__tests__**:
  * **Description**:
* **config**:
  * **Description**:
* **controllers**:
  * **Description**:
* **db**:
  * **Description**:
* **model**:
  * **Description**:
* **public**:
  * **Description**:
* **seeds**:
  * **Description**:
* **utils**:
  * **Description**:
* **views**:
  * **Description**:
_____

<a name="database"></a>
### Database

**Provisional Database**: MySQL with Sequelize Object Relational Model

**Description**: The database contains the user, flight, and weather data tables.

**Structure/Schema**:
* **User Data Schema**:
  * [Coming Soon]
* **Flight Data Schema**:
  * [Coming Soon]
* **Weather Data Schema**:
  * [Coming Soon]

**Connection with Machine Learning Model**: The classificaiton regression machine learning model will upadate the flight_delayed_prediction target field in the aforementioned table(s) to determine whether or not a flight is predicted to be delayed.

_____

<a name="machine-learning-model"></a>
### Machine Learning Model

**Provisional Machine Learning Model**: Classification Regression Model using PySpark

**Description**: This web application uses the Classification Regression Machine Learning Model that is implemented by using PySpark since the flight_delayed_prediction target variable stores binary predictions (i.e. the flight is either "delayed" or "not_delayed"). This flight delay prediction model is based on the deep learning and [Levenberg-Marquart algorithm](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-020-00380-z).

**Features**:
* **Flight Data Features**:
  * carrier_code
    * **Description**: This is the airline's identification code.
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
* flight_delayed_prediction
  * **Description**:

**Key Libraries and Frameworks**:
* [Coming Soon]
_____

<a name="installation"></a>
### Installation
No installation is required. Please visit the [deployment link](#web-app-link).

_____

<a name="usage"></a>
### Usage
Please visit the [deployment link](#web-app-link).

_____

<a name="features"></a>
### Features
[Coming Soon]

_____

<a name="testing"></a>
### Testing
Please visit the [deployment link](#web-app-link).

_____

<a name="contributions"></a>
### Contributions
This project is not currently open to external contributors.

_____

<a name="questions"></a>
### Questions
If you have any questions regarding this project, please email [Coming Soon].
_____

<a name="badges"></a>
### Badges
N/A
_____

<a name="license"></a>
### License
MIT License
