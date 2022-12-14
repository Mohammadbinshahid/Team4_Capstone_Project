-- CODE TO DISPLAY
SELECT * FROM flight_data;
SELECT * FROM all_airports;
SELECT * FROM cancellation_reason;
SELECT * FROM all_carriers

-- Creating tables for Flight_Data
CREATE TABLE Flight_Data (
    YEAR VARCHAR ,
    MONTH VARCHAR ,
    DAY_OF_WEEK VARCHAR ,
    FL_DATE VARCHAR ,
    OP_UNIQUE_CARRIER VARCHAR ,
    TAIL_NUM VARCHAR ,
    OP_CARRIER_FL_NUM VARCHAR ,
    ORIGIN VARCHAR ,
    DEST VARCHAR ,
    CRS_DEP_TIME VARCHAR ,
    DEP_TIME VARCHAR ,
    DEP_DELAY VARCHAR ,
    DEP_DEL15 VARCHAR ,
    DEP_TIME_BLK VARCHAR ,
    TAXI_OUT VARCHAR ,
    WHEELS_OFF VARCHAR ,
    WHEELS_ON VARCHAR ,
    TAXI_IN VARCHAR ,
    CRS_ARR_TIME VARCHAR ,
    ARR_TIME VARCHAR ,
    ARR_DELAY VARCHAR ,
    ARR_DEL15 VARCHAR ,
    ARR_TIME_BLK VARCHAR ,
    CANCELLED VARCHAR ,
    CANCELLATION_CODE VARCHAR ,
    DIVERTED VARCHAR ,
    CRS_ELAPSED_TIME VARCHAR ,
    ACTUAL_ELAPSED_TIME VARCHAR ,
    AIR_TIME VARCHAR ,
    DISTANCE VARCHAR ,
    CARRIER_DELAY VARCHAR ,
    WEATHER_DELAY VARCHAR ,
    NAS_DELAY VARCHAR ,
    SECURITY_DELAY VARCHAR ,
    LATE_AIRCRAFT_DELAY VARCHAR 
);

-- Creating table for Airports
CREATE TABLE All_Airports (
    Code VARCHAR(5) NOT NULL,
    Description VARCHAR(40) NOT NULL,
    PRIMARY KEY (Code),
    UNIQUE (Code)
);

-- Creating table for Carriers
CREATE TABLE All_Carriers (
    Code VARCHAR(5) NOT NULL,
    Description VARCHAR(40) NOT NULL,
    PRIMARY KEY (Code),
    UNIQUE (Code)
);

-- Creating table for Cancellation_reason
CREATE TABLE Cancellation_reason (
    Code VARCHAR(5) NOT NULL,
    Description VARCHAR(40) NOT NULL,
    PRIMARY KEY (Code),
    UNIQUE (Code)
);

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

-- TESTING - COUNT OF CANCELLED FLIGHTS
SELECT COUNT(*) FROM Flight_Data WHERE CANCELLED = '1.0';


# Modify this code to update the DB schema diagram.
# To reset the sample schema, replace everything with
# two dots ('..' - without quotes).

Flight_Data
-
    YEAR int
    MONTH int
    DAY_OF_WEEK int
    FL_DATE VARCHAR 
    OP_UNIQUE_CARRIER VARCHAR 
    TAIL_NUM VARCHAR
    OP_CARRIER_FL_NUM int
    ORIGIN VARCHAR FK >- Airports.code
    DEST VARCHAR FK >- Airports.code
    CRS_DEP_TIME int
    DEP_TIME VARCHAR
    DEP_DELAY int
    DEP_DEL15 int
    DEP_TIME_BLK int
    TAXI_OUT int
    WHEELS_OFF int
    WHEELS_ON int
    TAXI_IN int
    CRS_ARR_TIME int
    ARR_TIME VARCHAR
    ARR_DELAY int
    ARR_DEL15 int
    ARR_TIME_BLK int
    CANCELLED int
    CANCELLATION_CODE int
    DIVERTED int
    CRS_ELAPSED_TIME int
    ACTUAL_ELAPSED_TIME int
    AIR_TIME int
    DISTANCE int
    CARRIER_DELAY int
    WEATHER_DELAY int
    NAS_DELAY int
    SECURITY_DELAY int
    LATE_AIRCRAFT_DELAY int

Carriers
-
    code int FK - Flight_Data.OP_UNIQUE_CARRIER
    description VARCHAR 
    
   
Airports
-
    code int 
    description VARCHAR 
    
Cancellation_Codes
-
    code int FK - Flight_Data.CANCELLATION_CODE
    description VARCHAR 
    
Weekdays
-
    code int FK - Flight_Data.DAY_OF_WEEK
    description VARCHAR 
