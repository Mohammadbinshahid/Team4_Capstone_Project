# Team 4 Capstone Project: Flight Delay Predictions
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<a name="description"></a>
### Description
Hello! This is a flight delay predictor full-stack web application that allows users to determine whether or not their upcoming flight (within the week) will be delayed or cancelled using a multitude of features (i.e. independent variables that specified in the [Machine Learning Model](#machine-learning-model) section below). The main feature is the weather for the upcoming week which is sourced from the OpenWeather API. The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be delayed or cancelled days in advance so that disruption to flight and people's schedules are minimized, thus saving them time and resources that would normally be used for air travel preparations.

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
* What are the main reasons for flight delays?
* Are delays connected to weather patterns?
* Average Flight Delays (minutes) by Airline Carrier?
* Are majority of the flight delays from LaGuardia Airport specific to one airline?
* Are flight delays more prevalent in certain periods or months of the year? e.g. Christmas / New years.
* Which days of the week have most flight delays? Are there more flight delays on weekends than week days?
* What is the likelihood of a flight getting delayed on a certain day of the week

**Presentation Link**: https://docs.google.com/presentation/d/1cRceZIrM9SWz3dwcT1ai_D2vIFZ40tSatOfSH0Q2H6E/edit?usp=sharing

<a name="web-app-link"></a>
**Web Application Link**: [Coming Soon]

_____

<a name="team-roles-and-contributions"></a>
### Team, Roles, and Contributions

* **[Allen Eapen Alex](https://github.com/AllenAx91)**:
  * **Role**: Exploratory Data Analyst, Presenter
  * **Tasks**:
    * Performed an exploratory data analysis on the flight dataset and exported charts;\
    * Contributed to crafting the presentation;
* **[Avinash Mehra](https://github.com/WhySoCodius)**:
  * **Role**: Database Engineer, Presenter
  * **Tasks**: 
    * Created the SQL database schema;
    * Contributed to crafting the presentation;
* **[Jaspreet Khela](https://github.com/JaspreetKhela)**:
  * **Role**: Full-Stack Web Application Developer, Machine Learning Engineer, Database Engineer, Presenter
  * **Tasks**:
    * Created GitHub project board with issues;
    * Created the the machine learning model;
    * Created the full-stack web application running the machine learning model using Spark for JavaScript;
    * Contributed to crafting the presentation;
* **[Mohammad Shahid](https://github.com/Mohammadbinshahid)**:
  * **Role**: Repository Maintainer, Exploratory Data Analyst, Presenter
  * **Tasks**:
    * Created the GitHub repository and branches;
    * Performed an exploratory data analysis on the flight dataset and exported charts;
    * Contributed to crafting the presentation;
* **[Rowan Backhouse](https://github.com/roborowanb)**:
  * **Role**: Exploratory Data Analyst, Presenter
  * **Tasks**:
    * Performed an exploratory data analysis on the flight dataset and exported charts;
    * Contributed to crafting the presentation;

_____

<a name="github"></a>
### GitHub
**Communication Protocals**:
* **Tools**: Communication for this project was primarily done through Slack and Zoom calls.
  * Zoom calls were schedule for:
    * Tuesday and Thursdays from 7:00 PM to 9:00 PM
    * Monday at 7:00 PM
* **Project Board**: A GitHub project board was created to document progress on tasks.
* **Stuck Agreement**: If any developer was stuck on a problem for more than 3 hours, he was required to seek assistance from the project's other developers.
* **Conflict Resolution**: Since there are five developers working on this project, a two-thirds majority is required in votes to make major changes to the application (i.e. to make major changes to the application's architecture, content, styling, etc). 

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
This is a full-stack web application that primarily uses a Node.js backend with Express.js as the 

* **Primary Front-End**:
  * **HTML**:
    * **Description**: HTML creates the webpage's structure.
  * **CSS**:
    * **Description**: CSS creates the webpage's styling.
  * **JavaScript**:
    * **Description**: JavaScript creates the webpage's functionality.
  * **Handbars.js**:
    * **Description**: Handlebar.js is a templating engine for dynamically modifying and serving HTML code.
* **Primary Back-End**:
  * **Node.js**:
    * **Description**: Node.js is the back-end platform from which the other back-end techologies will be imported.
  * **Express.js**:
    * **Description**: Express.js is the back-end infrastruture that runs the server application.
  * **MySQL**:
    * **Description**: MySQL is the SQL database.
  * **Sequelize ORM**:
    * **Description**: Sequelize is the Object Relational Mapper used to interface with the SQL database.
  * **Heroku**:
    * **Description**: Heroku is the hosting platform for the web application.
  * [Coming Soon]
    * **Description**:

**Folder Structure**:
* **__tests__**:
  * **Description**: This is a folder for containing unit tests that can be run using the Jest npm package.
* **config**:
  * **Description**: This folder contains configurations files for the web application.
* **controllers**:
  * **Description**: This folder contains the code that controls the functionality of the web application.
* **db**:
  * **Description**: This folder contains SQL database code.
* **model**:
  * **Description**: This folder contains the SQL database's schema.
* **public**:
  * **Description**: This folder contains the assets that will be used on the front-end (i.e. HTML, CSS, JavaScript, etc. code).
* **seeds**:
  * **Description**: This folder contains the code that populates the SQL database.
* **utils**:
  * **Description**: This folder contains ultility functions.
* **views**:
  * **Description**: This folder contains HTML code that will be displayed to the end user.
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

**Connection with Machine Learning Model**: The supervised classificaiton regression machine learning model will update the flight_delayed_prediction target field in the aforementioned table(s) to determine whether or not a flight is predicted to be delayed or cancelled.

_____

<a name="machine-learning-model"></a>
### Machine Learning Model

**Provisional Machine Learning Model**: Supervised Classification Regression Model using Spark for Python and JavaScript

**Description**: This web application uses the Supervised Classification Regression Machine Learning Model that is implemented in Python for testing and JavaScript for deployment since the flight_delayed_prediction target variable stores binary predictions (i.e. the flight is either "delayed" or "not_delayed"). This flight delay prediction model is based on the deep learning and [Levenberg-Marquart algorithm](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-020-00380-z).

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

**Sample Code**:

_____

<a name="installation"></a>
### Installation
No installation is required. Please visit the [deployment link](#web-app-link).

For developers who wish to run the application locally, please follow these steps:
* 

_____

<a name="usage"></a>
### Usage
Please visit the [deployment link](#web-app-link).

_____

<a name="features"></a>
### Features
The web application has the following features:
* User account creation;
* User commenting;
* Dashboard with a form asking for a user's flight information;
* Machine learning model to provide a recommendation to a user on whether or not his or her flight is likely to be delayed;
* Weather widgets that provide the current weather conditions and a 5-day forecast.

_____

<a name="testing"></a>
### Testing
Please visit the [deployment link](#web-app-link).

For developers who wish to use Jest to test the application locally, please follow these steps:
* 
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
