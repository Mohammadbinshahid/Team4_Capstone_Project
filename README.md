# Team 4 Capstone Project: Flight Delay Predictions
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Data Engineering, Analytics, and Science
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=Tableau&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)
![Numpy](https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Spark](https://img.shields.io/badge/Apache_Spark-FFFFFF?style=for-the-badge&logo=apachespark&logoColor=#E35A16)

### Front-End Web Development
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Handlebars.js](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

### Back-End Web Development
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize ORM](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Spark](https://img.shields.io/badge/Apache_Spark-FFFFFF?style=for-the-badge&logo=apachespark&logoColor=#E35A16)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
_____

![matthew-smith-OiiThC8Wf68-unsplash](https://user-images.githubusercontent.com/80941606/192616390-4d16df7c-e264-4b9c-b3b6-62e97ff4d5c8.jpg)

_____

<a name="description"></a>
### Description
Hello! This is a flight delay predictor full-stack web application that allows users to determine whether or not their upcoming flight (within the week) will be delayed or cancelled using a multitude of features (i.e. independent variables that specified in the [Machine Learning Model](#machine-learning-model) section below). The main features are those that are listed on a plane ticket such as a flight's date, origin, destination, airline carrier, departure time, estimated time, and arrival time. 

The purpose of this web application is to allow both airlines and customers to better predict whether or not a flight will be delayed or cancelled days in advance in an effort to minimize disruptions to flight and people's schedules, thus saving them time and resources that would normally be used for air travel preparations.

_____

**GitHub Pages Link [using the Front-End Code]**: https://mohammadbinshahid.github.io/Team4_Capstone_Project/
 
<a name="web-app-link"></a>
**Web Application Link [using the Full-Stack Code]**: https://flights-r-us.herokuapp.com/
* Please note that this application still has bugs and styling issues that need to be fixed.

**GitHub Project Board Link**: https://github.com/users/Mohammadbinshahid/projects/2

**(Google Slides) Presentation Link**: https://docs.google.com/presentation/d/1d9vr3jMhRY1ceHiKuWwPbF1X4R5g_oyU/edit?usp=sharing&ouid=103862841931365976162&rtpof=true&sd=true

_____

![screencapture-mohammadbinshahid-github-io-Team4-Capstone-Project-2022-10-12-23_11_51](https://user-images.githubusercontent.com/80941606/195491132-6e877227-54c9-403d-8755-9a65d0d5555e.png)

_____

## Table of Contents
* [General Information](#info)
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
* [License](#license)
* [Communication Protocols](#communication)

_____

<a name="info"></a>
### General Information

**Selected Topic**: Flight Delay Predictor

**Rationale/Business Case**: The purpose of this web application is to allow both airlines and customers to better **predict whether or not a flight will be delayed or cancelled days in advance** in an effort to **minimize disruptions** to flight and people's schedules, thus **saving them time and resources** that would normally be used for air travel preparations. Specifically,
* **Airlines** can reschedule flights well in advance so that air travel preparation resources are only deployed when the flight is (almost) guaranteed to takeoff on time and flight terminals can be free of passengers when flights are projected to be delayed or cancelled; consequently, airlines **save money by not prematurely deploying resources when flights have a high probability of being delayed and customer satisfaction increases due to advance notices of flight delays and cancellations**.
* **Passengers** can finalize their schedules well in advance knowing that their flight is (almost) guaranteed to takeoff on time; consequently, **passengers' satisfaction with the airline increases and demand for airlines' customer services decreases** since flight delays and cancellations are practically non-existent. This both **increases the airline's reputation and decreases its service costs, the saving from which can be passed off to passengers**.

**Data Sources**: 
* **Flight Data**: https://www.transtats.bts.gov/ONTIME/
  * **Description**: This is the flight data source that we are using for training and testing our machine learning model.

**Questions to Answer**:
* What are the primary reasons for flight delays?
* Are flight delays connected to weather events?
* Are flight delays more prevalent in certain periods of the year?
* What is the probability of a flight delay on a certain day of the week?

**Description of the Data Exploration Phase of the Project**:
* Our data exploration began with an entirely different abstract as we worked with ticket master data to make a machine learning model that would predict the price or 'fair value' of tickets leading up to an event. Unfortunately, the free API only provided a price range of all the tickets available as opposed to the actual price of individual tickets and, therefore, did not provide enough data to derive meaningful insights from a machine learning model using that dataset. Fortunately, the team was working in parallel to perform exploratory data analysis on a flight delays dataset. With the team now fully committed to the flight delays dataset, a few flight delays-related datasets were combined to provide for more features, including the reasoning behind the flight delays. With meaningful data now at our fingertips, we created [4 visuals](https://public.tableau.com/app/profile/rowan.backhouse/viz/Aircraftdashboard/FlightDelays?publish=yes) using 4 different chart types. 

**Description of the Analysis Phase of the Project**:
* We analyzed the dataset from January to May, which includes information for up to 307,490 various domestic flights in the US in 2022 and the reasoning behind their cancellations, diversions, or delays. 
- Per the analysis, ~ 40% of the flights scheduled were delayed and the maximum number of hours that the flights were delayed was up to 34 hours from the scheduled flight's departure time.
- The standard deviation of the delay during arrival and departure was ~ 1 hour.

![Catplot_ARR_DELAY](/proof_of_concept_designs/presentation_resources/images/Catplot_ARR_DELAY.png)
**Technologies**:
This is a full-stack web application that primarily uses a Node.js with Express.js server platform, MySQL database, and Handebars.js templating engine. 

* **Data Engineering, Analysis, Science Technologies**:
  * **Tableau**:
    * **Description**: Tableau was primarily used for exploratory data analysis and displaying interactive charts on the dashboard.
  * **Python**:
    * **Description**: Python was used for all of the data engineering and analysis components of this project.
  * **Jupyter Notebook**:
    * **Description**: Jupyter Notebook was used to run the Exploratory Data Analysis code.
  * **Numpy**:
    * **Description**: Numpy was used for mathematical functions and attributes.
  * **Pandas**:
    * **Description**: Pandas was used for creating, modifying, and analyzing datasets in DataFrames.
  * **Matplotlib**:
    * **Description**: Matplotlib was used for plotting analyzed data contained in arrays and DataFrames.
  * **Spark**:
    * **Description**: Spark was used as the library used for running machine learning models.
  * **scikit-learn**:
    * **Description**: scikit-learn was used as a Python library used for creating and testing machine learning models.
  * **Machine Learning Algorithm**: Classification Regression Machine Learning Model based on the [Levenberg-Marquart algorithm](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-020-00380-z).
* **Primary Front-End Technologies**:
  * **HTML**:
    * **Description**: HTML was used to create the webpage's structure.
  * **CSS**:
    * **Description**: CSS was used to create the webpage's styling.
  * **JavaScript**:
    * **Description**: JavaScript was used to create the webpage's functionality.
  * **Handbars.js**:
    * **Description**: Handlebar.js was used as a templating engine for dynamically modifying and serving (static) HTML code.
* **Primary Back-End Technologies**:
  * **Node.js**:
    * **Description**: Node.js is was used as the back-end platform from which the other back-end techologies were imported.
  * **Express.js**:
    * **Description**: Express.js was used as the back-end infrastruture that runs the server application.
  * **MySQL**:
    * **Description**: MySQL was used as the SQL database.
  * **Sequelize ORM**:
    * **Description**: Sequelize was used as the Object Relational Mapper used to interface with the SQL database.
  * **bcrypt**:
    * **Description**: Bcrypt was used to hash passwords.
  * **dotenv**:
    * **Description**: Dotenv is a zero-dependency module that was used to load environment variables from a .env file into process.env. 
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
  * **Description**: This folder contains the assets that will be used on the front-end (i.e. CSS, JavaScript, etc. code).
* **seeds**:
  * **Description**: This folder contains the code that populates the SQL database.
* **utils**:
  * **Description**: This folder contains ultility functions.
* **views**:
  * **Description**: This folder contains HTML code that will be displayed to the end user.
* **proof_of_concept_designs**:
  * **Description**: This folder contains the proof-of-concept work for this web application. 

**Results of the Analysis**:
* We gained insights on how flight-related variables impact flight delays through our exploratory data analysis process conducted using Jupyter Notebook and visual analysis conducted using Tableau, which helped us to streamline our dataset and machine learning model.

**Recommendations for Future Analysis and Development**:
* Improve the accuracy of our machine learning model by adding upon our dataset and tweaking our machine learning model.
* Add more functionality to the dashboard to make it more dynamic and user friendly.
* Convert the website to a Progressive Web Application so that users can use it both online and offline.

**Anything the Team would have Done Differently**:
* We could have used data over a larger timeframe in order to detemine how the time of the year and holidays impact flight delays.

_____

<a name="team-roles-and-contributions"></a>
### Team, Roles, and Contributions

* **[Allen Eapen Alex](https://github.com/AllenAx91)**:
  * **Role**: Data Analyst, Machine Learning Engineer, and Presenter
  * **(Projected) Tasks**:
    * Performed an exploratory data analysis on the flight dataset and exported charts;
    * Created a Python mock-up of the machine learning model for local testing; and
    * Contributed to crafting the presentation.
* **[Avinash Mehra](https://github.com/WhySoCodius)**:
  * **Role**: Data Analyst, Database Designer, and Presenter
  * **(Projected) Tasks**: 
    * Performed an exploratory data analysis on the flight dataset and exported charts;
    * Created the SQL database schema for the flight data, all airports, cancellation reason, all carriers;
    * Contributed to crafting the presentation; and
    * Lead presenter.
* **[Jaspreet Khela](https://github.com/JaspreetKhela)**:
  * **Role**: Technical Project Manager, Full-Stack Web Application Developer, Machine Learning Engineer, Database Engineer, UX/UI Designer, and Presenter
  * **(Projected) Tasks**:
    * Created GitHub project board with issues [still in progress];
    * Created a proof-of-concept version of the machine learning model for use in the web application;
    * Contributed to designing the UX/UI for the dashboard using the dashboard's wireframe design by creating and modifying the web application's client-side code;
    * Created the full-stack web application running the machine learning model using Spark for JavaScript and scikit-learn; and
    * Contributed to crafting the presentation.
* **[Mohammad Shahid](https://github.com/Mohammadbinshahid)**:
  * **Role**: Repository Maintainer, Exploratory Data Analyst, and Presenter
  * **(Projected) Tasks**:
    * Created the GitHub repository and branches;
    * Performed an exploratory data analysis on the flight dataset and exported charts; and
    * Contributed to crafting the presentation.
* **[Rowan Backhouse](https://github.com/roborowanb)**:
  * **Role**: Data Analyst, UX/UI Designer, and Presenter
  * **(Projected) Tasks**:
    * Performed exploratory data analysis on the TicketMaster dataset;
    * Performed analysis on the flight delays dataset and exported charts using Tableau, which were used as interactive components on the dashboard;
    * Created the wireframe for the website; and
    * Contributed to crafting the presentation.
    
_____

<a name="github"></a>
### GitHub

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
* Our database stores static data for use during the project as specificed in the [AllMonths_RAW.csv](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/data/outdated/monthly_data/AllMonths_RAW.csv) data file;
* Our database interfaces with the project in some format;
  * For proof-of-concept purposes, we created a PostgreSQL database that interfaces with pgAdmin locally:
  * For our deployed application, we will be using a MySQL database that is hosted on Heroku and uses Sequelize as the Object Relational Mapper to perform CRUD operations on the database.
* Includes at least two tables;
  * Our database includes the ten tables specified in the schemas above.
* Our database includes at least one join statement using the database language (not including any joins in Pandas)
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
![DB_Join](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/database_design/SQL_Join_Image.png)

**Image 3**: Outcome of Join.

* Includes at least one connection string (using SQLAlchemy or PyMongo):
  * Our MySQL database is controlled by the Sequelize Object Relational Mapper which is written in JavaScript. Consequently, the connection string for our production database is: 
```
// Import the sequelize npm package
const Sequelize = require('sequelize');

// Create a connection to our database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
    
// Export sequelize
module.exports = sequelize;
```

_____

<a name="machine-learning-model"></a>
### Machine Learning Model

**Provisional Machine Learning Model**: Supervised Classification Regression Model using Spark for Python and JavaScript

**Description**: This web application uses the Supervised Classification Regression Machine Learning Model that is implemented in Python for testing and JavaScript for deployment since the flight_delayed_prediction target variable stores binary predictions (i.e. the flight is either "delayed" or "not_delayed"). This flight delay prediction model is based on the deep learning and [Levenberg-Marquart algorithm](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-020-00380-z).

**Data Preprocessing**:
To preprocess the data for use in the machine learning model, we completed the following steps:
1. We imported the raw data from the aforementioned datasets and APIs.
2. We joined DataFrames and retained the desired columns from the DataFrames.
3. We removed records with null values from the DataFrame.
4. We converted the date column to DateTime datatype.
5. 70% of the data in the DataFrame was used for training the machine learning model; the remaining data was used for testing the model.

**Features**:
* **Flight Data Features**: These are the primary features that were extracted from the original flight data DataFrame.
  * **The following features are those that a passenger and an airline know well in advance; thus, these are the primary parameters used for predicting whether or not a flight will be delayed**:	     
    * YEAR
      * **Description**: Year(s) with data pertaining to Flight arrival and departure delays.
      * **Rationale**:	At the moment, we only have data from 2022 with room to expand to years prior to the selected year.
    * MONTH
      * **Description**: Months with data pertaining to Flight arrival and departure delays.
      * **Rationale**:	Flight data for the Months Jan - Jun, with room to expand the data with more months. The Month can be associated with the season and typical weather at that time.
    * DAY_OF_WEEK
      * **Description**: Day of the week with data pertaining to Flight arrival and departure delays.
      * **Rationale**: The day of the week could indicate how busy the airport is. 
    * ORIGIN
      * **Description**: This is the flight's origin [IATA airport code](https://en.wikipedia.org/wiki/IATA_airport_code#:~:text=An%20IATA%20airport%20code%2C%20also,Air%20Transport%20Association%20(IATA).).
      * **Rationale**: Flight delays can be attributed to the operational efficiency of the origin airport.
    * DEST
      * **Description**: This is the destination airport of the flight.
      * **Rationale**: Flight delays can be attributed to the operational efficiency of the destination airport.
    * OP_UNIQUE_CARRIER
      * **Description**: This is the airline's identification code.
      * **Rationale**: Airline identifier which could indicate airline-wise flight delay pattern. 
    * CRS_DEP_TIME
      * **Description**: This is the scheduled departure time of the flight.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * CRS_ELAPSED_TIME
      * **Description**: This is the scheduled flight time.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * CRS_ARR_TIME
      * **Description**: This is the scheduled arrival time of the flight.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
  * **These are the remaining features that were considered to improve the accuracy score of the machine learning model but were not implemented since their values are not known in advance by the user**:
    * TAIL_NUM
      * **Description**: This is the aircrafts's identification code.
      * **Rationale**: This could potentially be associated with the age of the aircraft on there after the time required for maintenance prior to departure.
    * OP_CARRIER_FL_NUM
      * **Description**: This is the flight number of the plane for a certain route.
      * **Rationale**: Flight numbers can be associated with the time of the day. This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
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
      * **Rationale**: This feature can indicate the delays caused due to the distance from gate to the take-off runway.
    * WHEELS_OFF
      * **Description**: The time when the aircraft wheels are off the runway.
      * **Rationale**: This feature can indicate the delays based on the actual take-off time since taxi-out.
    * WHEELS_ON
      * **Description**: The time when the aircraft wheels are on the runway / touch-down of aircraft.
      * **Rationale**: This feature can indicate the delays caused due to the distance from gate to the arrival runway.
    * TAXI_IN
      * **Description**: The time when the aircraft has arrived at the destination airport gate.
      * **Rationale**: This feature can indicate the delays based on the actual arrival time since wheels-on.
    * ARR_TIME
      * **Description**: This is the actual arrival time of the flight.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * ARR_DEL15
      * **Description**: This is the arival delay indicator of the flight, 15 minutes or more.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * CANCELLED
      * **Description**: Cancelled filghts in binary.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * ACTUAL_ELAPSED_TIME
      * **Description**: This is the actual flight time.
      * **Rationale**: This feature can be dropped in future iterations based on the acceptance criteria of the Machine learning model.
    * AIR_TIME
      * **Description**: Time between wheel off and wheel on
      * **Rationale**: This feature could show differences in air time based on the day and how it could affect on-time arrival and departures.
    * DISTANCE
      * **Description**: The distance between airports in miles
      * **Rationale**: This feature can show how distances can be an attributed to delays.

**Targets**: The first phase of our models have been trained only to indicate arrival delays. The next phase would involve improving the arrival delay predicting model and will attempt to predict departure delays. 

* ARR_DELAY
  * **Description**: This is the classification outcome variable; its values are:
	  * Early: > 30 mins
	  * Early: < 30 mins
	  * Late: < 30 mins
	  * Late: < 5 hours
	  * Late: > 5 hours

**Key Libraries and Frameworks**:
* PySpark
* Spark for JavaScript
* scikit-learn

**Code**: For the priliminary machine learning model [click here](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/Machine_learning/ML.ipynb). This file is for presenting the model without a web-app. The final code will be incorporated into the web-app as indicated in the Sample JavaScript section which is yet to be finalized. 

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

**Model Training Progress**:
  * Currently, we have a functional stand-alone .ipynb file with a machine learning model based on Sklearn's LogisticRegression. 
  * Out final model will use PySpark's LogisticRegression which will be integrated with the front end.
   
**Model Accuracy Score**:
 * The current accuracy is at 69% with room for improvement.
  ![](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/Machine_learning/WIP/Score.png)

**Machine Learning Model Benefits**:
* PySpark's LogisticRegression is simple and easy to implement with good training efficiency
* The classification model provides a user-friendly (binary) outcome that allows both airlines and customers to make quick and informed decisions;
* The supervised nature of our machine learning model allows it to process training datasets more quickly than if the model was unsupervised (where the model would have to find categorical patterns on its own, thus increasing the use of the server's processing resources)
* 

**Machine Learning Model Limitations**:
* The machine learning model only provides binary outcomes, so airlines and customers do not know by how long a flight may be delayed;
* The supervised nature of our machine learning model may miss out on other important data correlations amongst the data fields; and
* Running the machine learning model is time consuming and therefore the data set was limited to 10,000 rows in this phase of development, which may reduce the accuracy of the model.

For More info on the Model: [spark.apache](https://spark.apache.org/docs/latest/ml-classification-regression.html)

_____

<a name="Dashboard"></a>
### Dashboard

**Story Board**: Please refer to our [Google Slides Presentation](https://docs.google.com/presentation/d/1d9vr3jMhRY1ceHiKuWwPbF1X4R5g_oyU/edit?usp=sharing&ouid=103862841931365976162&rtpof=true&sd=true) for details about our project.

**Initial Analysis Images**:
  * **Correlation Analysis**:
    * **Description**: To determine the primary factors for flight delays and cancellations, we utilised correlation analysis on the flight features listed in the [Machine Learning Model Specifications](#machine-learning-model) section above.
  
![Correlation Analysis](/proof_of_concept_designs/presentation_resources/images/Correlation_Analysis1.png?raw=true)

**Interactive Components**:
* **Flight Data Form**:
  * **Description**: A user can input known flight data to recieve a prediction as to whether or not his or her flight is delayed.
  * **Rationale**: This allows a user to decide well in advance whether or not he or she should rebook his or her flight at a later date.
* **Historical Flight Data Diagrams**:
  * **Description**: A user can view interactive Tableau charts to better understand which data features most contribute to flight delays.
  * **Rationale**: This allows a user to make better decisions when booking flights in an effort to minimize flight delays.
* **Raw Data Table**:
  * **Description**: A user can view the raw historical flight data in a table format for performing their own exploratory data analysis using filters.
  * **Rationale**: This allows a user to find tailored answers to his or her search queries that are not obtainable from the Tableau charts alone. 
* **Community Forum**:
  * **Description**: A user can discuss flight delay-related things with other users.
  * **Rationale**: This allows users to share informal flight delay insights that are not obtainable from the dataset.

**Machine Learning Output Data and Images**:
* [Coming Soon]

![](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/Machine_learning/WIP/Screen%20Shot%202022-10-11%20at%206.32.38%20PM.png)
![](https://github.com/Mohammadbinshahid/Team4_Capstone_Project/blob/main/proof_of_concept_designs/Machine_learning/WIP/Screen%20Shot%202022-10-11%20at%206.32.45%20PM.png)

**Image:** Outcome of prediciton from Sklearn's Logistic Regression Model

**Tools**:
* Balsamiq was used for wireframing;
* HTML was used for structuring the webpage and displaying dashboard;
* CSS was used for styling the dashboard;
* JavaScript was used for adding functionality to the dashboard;
* Bootstap was used for incorporating pre-built mobile-responsive components into the dashboard;

**Wireframe**:

![alt text](proof_of_concept_designs/wireframe(s)/rowan/rowan_flight_delays_wireframe.png)

**Version 1 Screenshot**:

![screencapture-file-Users-jaspreetkhela-My-Drive-SCS-Data-Analytics-Boot-Camp-Course-Work-Boot-Camp-Module-20-Final-Project-Module-20-First-Segment-Project-Deliverable-Team4-Capstone-Project-proof-of-concept-designs-dashboard-mockup-index-ht](https://user-images.githubusercontent.com/80941606/194967605-011b6cbe-639b-40a0-9bdf-7db0ced1a4e5.png)

_____

<a name="installation"></a>
### Installation
No installation is required. Please visit the [deployment link](#web-app-link).

For developers who wish to run the application locally, please follow these steps:
* Install node.js locally;
* Clone the main branch of this repository and upload the code to your GitHub account;
* Create a Heroku account and deploy the application from the main branch of the cloned repository on your GitHub account;
* Turn on automatic deploys from the main branch on Heroku; and
* Modify and/or test the code locally, push it to your repository's main branch, and then refresh your Heroku web application to see updates to the application.

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
* Expand the dataset;
* Incorporate more features into the machine learning model;
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

<a name="license"></a>
### License
MIT License

_____
<a name="communication"></a>
### Communication Protocols

**Communication Protocols**:
* **Tools**: Communication for this project was primarily done through Slack and Zoom calls.
  * Zoom calls were scheduled for:
    * Tuesdays and Thursdays from 7:00 PM to 9:00 PM
    * Mondays at 7:00 PM
    * Adhoc working sessions at coordinated times
* **Project Board**: A GitHub project board was created to document progress on tasks primarily using issues.
* **Stuck Agreement**: If any developer was stuck on a problem for more than 3 hours, he was required to seek assistance from the project's other developers.
* **Conflict Resolution**: Since there are five developers working on this project, a two-thirds majority is required in votes to make major changes to the application (i.e. to make major changes to the application's architecture, content, styling, etc)
