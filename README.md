# Team 4 Capstone Project: Flight Delay Predictions
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<a name="description"></a>
### Description
Hello! This is a flight delay predictor full-stack web application that allows users to determine whether or not their upcoming flight (within the week) will be delayed or cancelled using a multitude of features (i.e. independent variables that specified in the [Machine Learning Model](#machine-learning-model) section below). The main feature is the weather for the upcoming week which is sourced from the OpenWeather API. The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be delayed or cancelled days in advance in an effort to minimize disruptions to flight and people's schedules, thus saving them time and resources that would normally be used for air travel preparations.

_____

![matthew-smith-OiiThC8Wf68-unsplash](https://user-images.githubusercontent.com/80941606/192616390-4d16df7c-e264-4b9c-b3b6-62e97ff4d5c8.jpg)

_____

## Table of Contents
* [Presentation](#presentation)
* [Team, Roles, and Contributions](#team-roles-and-contributions)
* [GitHub Repository Specifications](#github)
* [Database Specifications](#database)
* [Machine Learning Model Specifications](#machine-learning-model)
* [Dashboard Specifications](#dashboard)
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

**Rationale/Business Case**: The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be delayed or cancelled days in advance in an effort to minimize disruptions to flight and people's schedules, thus saving them time and resources that would normally be used for air travel preparations. Specifically,
* Airlines can reschedule flights well in advance so that air travel preparation resources are only deployed when the flight is (almost) guaranteed to takeoff on time and flight terminals can be free of passengers when flights are projected to be delayed or cancelled; consequently, airlines save money by not prematurely deploying resources when flights have a high probability of being delayed and customer satisfaction increases due to advance notices of flight delays and cancellations.
* Passengers can finalize their schedules well in advance knowing that their flight is (almost) guaranteed to takeoff on time; consequently, passengers' satisfaction with the airline increases and demand for airlines' customer services decreases since flight delays and cancellations are practically non-existent. This both increases the airline's reputation and decreases its service costs, the saving from which can be passed off to passengers.

**Data Sources**: 
* **Flight Data**: https://www.transtats.bts.gov/ONTIME/
  * **Description**: This is the flight data source that we are using for training and testing our machine learning model.

**Questions to Answer**:
* What are the primary reasons for flight delays?
* Are flight delays connected to weather events?
* Are flight delays more prevalent in certain periods of the year?
* What is the probability of a flight delay on a certain day of the week?

**Description of the Data Exploration Phase of the Project**:
* Our data exploration began with an entirely different abstract as we worked with ticket master data to make a machine learning regression to predict the price or "fair value" of tickets leading up to an event. Unfortunately, the free API only provided a price range of all the tickets available as oppose to the actual price of individual tickets, and therefore, there was not enough data to drive meaningful insight from a machine learning model using that data set. Fortunately, the team was working in parallel to drive EDA on an airport data set. With the team now fully committed to flight data, the data source was revised to a data set that provided more features, including the reasons behind the flight delays. With meaningful data now at our fingertips, we created [4 visuals](https://public.tableau.com/app/profile/rowan.backhouse/viz/Aircraftdashboard/FlightDelays?publish=yes) using 4 different chart types. 

**Description of the Analysis Phase of the Project**:
* We analyzed the dataset from Jan to May, which includes information for up to 307,490 various domestic flights in the US in 2022 and the reasons behind was their cancellation, diversion, and delay. 
- Per the Analysis ~40% of the flight scheduled were delayed, maximum flights delayed was upto 34 hours from the scheduled time.
- Standard deviation of the delay during arrival and departure was ~ 1 hours.

<a name="web-app-link"></a>
**Web Application Link**: [Coming Soon]

**Screenshots**: [Coming Soon]

**GitHub Project Board Link**: https://github.com/users/Mohammadbinshahid/projects/2

**(Google Slides) Presentation Link**: https://docs.google.com/presentation/d/1d9vr3jMhRY1ceHiKuWwPbF1X4R5g_oyU/edit#slide=id.p1

_____

<a name="team-roles-and-contributions"></a>
### Team, Roles, and Contributions

* **[Allen Eapen Alex](https://github.com/AllenAx91)**:
  * **Role**: Exploratory Data Analyst, Machine Learning Engineer, UX/UI Designer, Presenter
  * **(Projected) Tasks**:
    * Performed an exploratory data analysis on the flight dataset and exported charts;
    * Created a Python mock-up of the machine learning model for local testing;
    * Created the SQL database schema for the flight data, all airports, cancellation reason, all carriers;
    * Contributed to designing the UX/UI for the dashboard by creating a wireframe for the dashboard and/or modifying the client-side code;
    * Contributed to crafting the presentation;
* **[Avinash Mehra](https://github.com/WhySoCodius)**:
  * **Role**: Exploratory Data Analyst, Database Engineer, UX/UI Designer, Presenter
  * **(Projected) Tasks**: 
    * Performed an exploratory data analysis on the flight dataset and exported charts;
    * Created the SQL database schema for the flight data, all airports, cancellation reason, all carriers;
    * Contributed to designing the UX/UI for the dashboard by creating a wireframe for the dashboard and/or modifying the client-side code;
    * Contributed to crafting the presentation;
    * Lead presenter;
* **[Jaspreet Khela](https://github.com/JaspreetKhela)**:
  * **Role**: Project Manager/Technical Lead, Full-Stack Web Application Developer, Machine Learning Engineer, Database Engineer, UX/UI Designer, Presenter
  * **(Projected) Tasks**:
    * Created GitHub project board with issues;
    * Created the the machine learning model;
    * Contributed to designing the UX/UI for the dashboard by creating a wireframe for the dashboard and/or modifying the client-side code;
    * Use Bootstrap components to mock-up the dashboard based on a wireframe;
    * Created the full-stack web application running the machine learning model using Spark for JavaScript;
    * Contributed to crafting the presentation;
* **[Mohammad Shahid](https://github.com/Mohammadbinshahid)**:
  * **Role**: Repository Maintainer, Exploratory Data Analyst, UX/UI Designer, Presenter
  * **(Projected) Tasks**:
    * Created the GitHub repository and branches;
    * Performed an exploratory data analysis on the flight dataset and exported charts;
    * Contributed to designing the UX/UI for the dashboard by creating a wireframe for the dashboard and/or modifying the client-side code;
    * Contributed to crafting the presentation;
* **[Rowan Backhouse](https://github.com/roborowanb)**:
  * **Role**: Exploratory Data Analyst, UX/UI Designer, Presenter
  * **(Projected) Tasks**:
    * Performed an exploratory data analysis on the TicketMaster dataset;
    * Assisted with the creation of the SQL database schema for the flight and weather data;
    * Created the wireframe for the website;
    * Contributed to designing the UX/UI for the dashboard by creating a wireframe for the dashboard and/or modifying the client-side code;
    * Contributed to crafting the presentation;
    
_____

<a name="github"></a>
### GitHub
**Communication Protocols**:
* **Tools**: Communication for this project was primarily done through Slack and Zoom calls.
  * Zoom calls were scheduled for:
    * Tuesdays and Thursdays from 7:00 PM to 9:00 PM
    * Mondays at 7:00 PM
    * Adhoc working sessions at coordinated times
* **Project Board**: A GitHub project board was created to document progress on tasks primarily using issues.
* **Stuck Agreement**: If any developer was stuck on a problem for more than 3 hours, he was required to seek assistance from the project's other developers.
* **Conflict Resolution**: Since there are five developers working on this project, a two-thirds majority is required in votes to make major changes to the application (i.e. to make major changes to the application's architecture, content, styling, etc). 

**Branches**:
* **Main Branch**
  * Contains code necessary to perform exploratory analysis;
  * Contains code necessary to complete the machine learning portion of the project;
* **Team Members' Branches**: 
  * AllenEapenAlex
  * AvinashMehra
  * JaspreetKhela
  * MohammadShahid
  * RowanBackhouse
* **Feature Branches**:
  * feature/rowan/interactive_data_tools
  * feature/mohammed/interactive_data_tools
  * feature/allen/pyspark_machine_learning_models
  * feature/avinash/analysis_diagrams
  * feature/jaspreet/web_app

**Technologies**:
This is a full-stack web application that primarily uses a Node.js with Express.js server platform, MySQL database, and Handebars.js templating engine. 

* **Data Analysis**:
  * **Jupyter Notebook**:
    * **Description**: Jupyter Notebook was used to run the Exploratory Data Analysis code.
  * **Numpy**:
    * **Description**: Numpy was used for mathematical functions and attributes.
  * **Pandas**:
    * **Description**: Pandas was used for creating, modifying, and analyzing datasets in DataFrames.
  * **Matplotlib**:
    * **Description**: Matplotlib was used for plotting analyzed data contained in arrays and DataFrames.

* **Primary Front-End**:
  * **HTML**:
    * **Description**: HTML was used to create the webpage's structure.
  * **CSS**:
    * **Description**: CSS was used to create the webpage's styling.
  * **JavaScript**:
    * **Description**: JavaScript was used to create the webpage's functionality.
  * **Handbars.js**:
    * **Description**: Handlebar.js was used as a templating engine for dynamically modifying and serving (static) HTML code.
* **Primary Back-End**:
  * **Node.js**:
    * **Description**: Node.js is was used as the back-end platform from which the other back-end techologies were imported.
  * **Express.js**:
    * **Description**: Express.js was used as the back-end infrastruture that runs the server application.
  * **MySQL**:
    * **Description**: MySQL was used as the SQL database.
  * **Sequelize ORM**:
    * **Description**: Sequelize was used as the Object Relational Mapper used to interface with the SQL database.
  * **Spark**:
    * **Description**: Spark was used as the library used for running machine learning models.
  * **scikit-learn**:
    * **Description**: scikit-learn was used as a Python library used for creating and testing machine learning models.
  * **Heroku**:
    * **Description**: Heroku was used as the hosting platform for the web application.
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

**Provisional Database**: MySQL with Sequelize Object Relational Mapper

**Description**: The database contains the user, flight, and weather data tables.

**Raw Data**: [AllMonths_RAW.csv](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/data/outdated/monthly_data/AllMonths_RAW.csv)

**Structure/Schema/Entity Relationship Diagrams**:
_____


![DB_Schema](https://user-images.githubusercontent.com/80941606/191862502-5b7da043-85d1-4efa-abb3-b77d84c04fbe.png)

**Image 1**: Analysis data schema.

_____

* **Data Sources**: This part of the SQL database stores data that will be used in the machine learning model.
  * **Flight_Data Table**:
    * ![Flight_Data_Table](/proof_of_concept_designs/database_design/flight_data_table.png)
  * **Weekdays Table**:
    * code int FK - Flight_Data.DAY_OF_WEEK
    * description VARCHAR 
  * **Airports Table**:
    * code int 
    * description VARCHAR 
  * **Carriers Table**:
    * code int FK - Flight_Data.OP_UNIQUE_CARRIER
    * description VARCHAR 
  * **Cancellation_Codes**:
    * code int FK - Flight_Data.CANCELLATION_CODE
    * description VARCHAR 
  * **Weather_Data Table**:
    * [Coming Soon]
_____


![QuickDBD-export](https://user-images.githubusercontent.com/80941606/191832150-11b793ab-b894-4cf8-8ff3-68bcf51aafc0.png)

**Image 2**: User data schema.

_____

* **User Data**: This part of the SQL database stores data related to users' accounts.
  * **User Data Table**:
    * id PK int
    * username string
    * email string UNIQUE
    * password string
  * **Post Table**:
    * id int PK
    * title string
    * post_url string
    * user_id int FK >- User.id
  * **Comment Table**:
    * id int PK
    * comment_text string
    * user_id int FK >- User.id
    * post_id int FK >- Post.id
  * **Vote Table**:
    * id int PK
    * user_id int FK >- User.id
    * post_id int FK >- Post.id

**Connection with Machine Learning Model**: The supervised classificaiton regression machine learning model will update the ARR_DELAY target field in the aforementioned table(s) to determine whether or not a flight is predicted to be delayed or cancelled.

**Database Features**:
* Database stores static data for use during the project as specificed in the [AllMonths_RAW.csv](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/data/outdated/monthly_data/AllMonths_RAW.csv) data file;
* Database interfaces with the project in some format;
  * For proof-of-concept purposes, we created a PostgreSQL database that which interfaces with pgAdmin locally:
  * For our deployed application, we will be using a MySQL database that is hosted on Heroku and uses Sequelize as the Object Relational Mapper to perform CRUD operations on the database.
* Includes at least two tables;
  * The database includes the ten tables specified in the schemas above.
* Includes at least one join using the database language (not including any joins in Pandas)
  * The SQL Query used for creating the aforementioned primary tables and __*joining*__ three tables can be found here: [Queries.sql](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/database_design/Queries.sql)
  * We are joining the flight data with its related tables using the following join statements:
  ```
		-- JOINING ALL AIRPORTS WITH FILGHT DATA 
		-- TO IDENTIFY AIRPORT NAME BASED ON AIRORT CODE
		SELECT Flight_Data.ORIGIN,
		all_airports.code, all_airports.description
		FROM Flight_Data
		INNER JOIN all_airports
		ON Flight_Data.ORIGIN = all_airports.code;

		-- JOINING FILGHT DATA  WITH CANCELLATION REASON
		-- TO IDENTIFY WEATHER DESCRIPTION  BASED ON CANCELLATION CODE
		SELECT Flight_Data.CANCELLATION_CODE,
		cancellation_reason.code, cancellation_reason.description
		FROM Flight_Data
		INNER JOIN cancellation_reason
		ON Flight_Data.CANCELLATION_CODE = cancellation_reason.code;

		-- JOINING FILGHT DATA WITH CARRIER DATA 
		-- TO IDENTIFY AIRLINE NAME BASED ON CARRIER CODE
		SELECT Flight_Data.OP_UNIQUE_CARRIER,
		all_carriers.code, all_carriers.description
		FROM Flight_Data
		INNER JOIN all_carriers
		ON Flight_Data.OP_UNIQUE_CARRIER = all_carriers.code;
  ```
* Includes at least one connection string (using SQLAlchemy or PyMongo):
  * Our connection string is: ``` ```

_____

<a name="machine-learning-model"></a>
### Machine Learning Model

**Provisional Machine Learning Model**: Supervised Classification Regression Model using Spark for Python and JavaScript

**Description**: This web application uses the Supervised Classification Regression Machine Learning Model that is implemented in Python for testing and JavaScript for deployment since the flight_delayed_prediction target variable stores binary predictions (i.e. the flight is either "delayed" or "not_delayed"). This flight delay prediction model is based on the deep learning and [Levenberg-Marquart algorithm](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-020-00380-z).

**Code**: For the priliminary machine learning model [click here](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/Machine_learning/ML.ipynb). This file is for presenting the model without a web-app. The final code will be incorporated into the web-app as indicated in the Sample JavaScript section which is yet to be finalized. 

**Features**:
* **Flight Data Features**: These are the primary features that were extracted from the original flight data DataFrame.
  * The following features are those that the passenger and airline know well in advance; thus, these are the primary parameters used for predicting whether or not a flight will be delayed:

	
    * YEAR
      * **Description**: Year(s) with data pertaining to Flight arrival and departure delays.
      * **Rationale**:	At the moment, we only have data from 2022 with room to expand to years prior to the selected year.
    * MONTH
      * **Description**: Months with data pertaining to Flight arrival and departure delays.
      * **Rationale**:	Flight data for the Months Jan - Jun, with room to expand the data with more months. The Month can be associated with the season and typical weather at that time.
    * DAY_OF_WEEK
      * **Description**: Day of the week with data pertaining to Flight arrival and departure delays.
      * **Rationale**: The day of the week could indicate how busy the airport is. 
    * FL_DATE
      * **Description**: This is the flight date.
      * **Rationale**: Delays attributed to certain dates that could signify public holidays. 
    * OP_UNIQUE_CARRIER
      * **Description**: This is the airline's identification code.
      * **Rationale**: Airline identifier which could indicate airline-wise flight delay pattern.
    * TAIL_NUM
      * **Description**: This is the aircrafts's identification code.
      * **Rationale**: This could potentially be associated with the age of the aircraft on there after the time required for maintenance prior to departure.
    * OP_CARRIER_FL_NUM
      * **Description**: This is the flight number of the plane for a certain route.
      * **Rationale**: Flight numbers can be associated with the time of the day. This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * ORIGIN
      * **Description**: This is the flight's origin [IATA airport code](https://en.wikipedia.org/wiki/IATA_airport_code#:~:text=An%20IATA%20airport%20code%2C%20also,Air%20Transport%20Association%20(IATA).).
      * **Rationale**: Flight delays can be attributed to the operational efficiency of the origin airport.
    * DEST
      * **Description**: This is the destination airport of the flight.
      * **Rationale**: Flight delays can be attributed to the operational efficiency of the destination airport.
    * CRS_DEP_TIME
      * **Description**: This is the scheduled departure time of the flight.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * DEP_TIME
      * **Description**: This is the actual departure time of the flight.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * DEP_DELAY
      * **Description**: This is the departure delay time of the flight.
      * **Rationale**: At the moment, we are predicting only arrival delays. Future iterations will show Machine Learning models for both arrival and departure delays. 
    * DEP_DEL15
      * **Description**: This is the departure delay indicator of the flight, 15 minutes or more.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * TAXI_OUT
      * **Description**: The taxi time of the flight from departure from the gate to wheels off.
      * **Rationale**: This feature can indicate the delays caused due to the distance from gate to the take-off runway 
    * WHEELS_OFF
      * **Description**: The time when the aircraft wheels are off the runway.
      * **Rationale**: This feature can indicate the delays based on the actual take-off time since taxi-out 
    * WHEELS_ON
      * **Description**: The time when the aircraft wheels are on the runway / touch-down of aircraft.
      * **Rationale**: This feature can indicate the delays caused due to the distance from gate to the arrival runway
    * TAXI_IN
      * **Description**: The time when the aircraft has arrived at the destination airport gate.
      * **Rationale**: This feature can indicate the delays based on the actual arrival time since Wheels-on 
    * CRS_ARR_TIME
      * **Description**: This is the scheduled arrival time of the flight.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * ARR_TIME
      * **Description**: This is the actual arrival time of the flight.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * ARR_DEL15
      * **Description**: This is the arival delay indicator of the flight, 15 minutes or more.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * CANCELLED
      * **Description**: Cancelled filghts in binary.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * CRS_ELAPSED_TIME
      * **Description**: This is the scheduled flight time.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * ACTUAL_ELAPSED_TIME
      * **Description**: This is the actual flight time.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * AIR_TIME
      * **Description**: Time between wheel off and wheel on
      * **Rationale**: This feature could show differences in air time based on the day and how it could affect on-time arrival and departures
    * DISTANCE
      * **Description**: The distance between airports in miles
      * **Rationale**: This feature can show how distances can be an attribute to delays

**Targets**: The first phase of our models have been trained only to indicate arrival delays. The next phase would involve improving the arrival delay predicting model and will attempt to predict departure delays. 

* ARR_DELAY
  * **Description**: This is the classification outcome variable; its values are:
	  * Early: > 30 mins
	  * Early: < 30 mins
	  * Late: < 30 mins
	  * Late: < 5 hours
	  * Late: > 5 hours

**Preliminary Data Preprocessing**:
To preprocess the data for use in the machine learning model, we completed the following steps:
1. We imported the raw data from the aforementioned datasets and APIs.
2. We joined DataFrames and retained the desired columns from the DataFrames.
3. We removed records with null values from the DataFrame.
4. We converted the date column to DateTime datatype.
5. 70% of the data in the DataFrame was used for training the machine learning model; the remaining data was used for testing the model.

**Key Libraries and Frameworks**:
* PySpark
* Spark for JavaScript
* scikit-learn

**Sample JavaScript Spark and scikit-learn Code**:
```
// Import the spark package
var sparkSessionType = Java.type("org.apache.spark.sql.SparkSession")

// Create a spark session
var sparkSession = sparkSessionType.builder().master("local[*]").appName("flight_delay_predictor").getOrCreate()

var data = sparkSession.read().format("csv").option("header","true").load("flights_data.csv")

data.show()

// Publish data in browser using a local server.
const http = require("http");

http.createServer(function (request, response) {
	    response.writeHead(200, {"Content-Type": "text/html"});
	        response.end(data.schema().prettyJson());
}).listen(8000, function() { console.log("Graal.js server running at http://127.0.0.1:8000/"); });

// Import Scikit-Node package and save as "sklearn"
const sklearn = require(<package-directory>);

// Define the features and target(s)
const y = df["Outcome"];
const X = df.drop(columns="Outcome");

// Create the training and testing sets
const X_train, X_test, y_train, y_test = sklearn.model_selection.train_test_split(X,
   y, random_state=1, stratify=y); 

// Define the model
const classifier = sklearn.linear_model.LogisticRegression(solver='lbfgs', max_iter=200, random_state=1);
   
// Run the model on the DataFrame
classifier.fit(X_train, y_train);

// Predict outcomes for test data
const y_pred = classifier.predict(X_test);

// Calculate the accuracy score for the model
console.log(sklearn.metrics.accuracy_score(y_test, y_pred));

```

**Machine Learning Model Benefits**:
* The current accuracy is at 71% with room for improvement.

**Machine Learning Model Limitations**:
* Time consuming and therefore the data set was limited to 10000 rows in this phase of development.

_____

<a name="Dashboard"></a>
### Dashboard

**Story Board**: Please refer to our [Google Slides Presentation](https://docs.google.com/presentation/d/1d9vr3jMhRY1ceHiKuWwPbF1X4R5g_oyU/edit#slide=id.p1) for details about our project.

**Interactive Components**:
* **Flight Data Form**:
  * **Description**:
  * **Rationale**:
* **Historical Flight Data Diagrams**:
  * **Description**:
  * **Rationale**:
* **Community Foru**:
  * **Description**:
  * **Rationale**:

**Tools**:
* Balsamiq was used for wireframing;
* HTML was used for structuring the webpage and displaying dashboard;
* CSS was used for styling the dashboard;
* JavaScript was used for adding functionality to the dashboard;
* Bootstap was used for incorporating pre-built mobile-responsive components into the dashboard;

**Wireframe(s)**: 



![alt text](proof_of_concept_designs/wireframe(s)/rowan/rowan_flight_delays_wireframe.png)
_____

<a name="installation"></a>
### Installation
No installation is required. Please visit the [deployment link](#web-app-link).

For developers who wish to run the application locally, please follow these steps:
* [Coming Soon]

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
* Machine learning model to provide a recommendation to a user on whether or not his or her flight is likely to be delayed; and
* Weather widgets that provide the current weather conditions and a 5-day forecast.

For future development, we hope to add the following features:
* Convert the website to a Progressive Web Application so that users can use our application - both online and offline - like a native application on their mobile device;
* Create Android and iOS applications that expand our native application's capabilities (by leveraging mobile devices' native APIs);
* [Coming Soon]

_____

<a name="testing"></a>
### Testing
Please visit the [deployment link](#web-app-link).

For developers who wish to use Jest to test the application locally, please follow these steps:
* [Coming Soon]
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
