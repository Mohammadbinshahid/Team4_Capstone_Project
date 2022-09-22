-- Creating tables for Flight_Data
CREATE TABLE Flight_Data (
    YEAR int,
    MONTH int,
    DAY_OF_WEEK int,
    FL_DATE DATE NOT NULL,
    OP_UNIQUE_CARRIER VARCHAR NOT NULL,
    TAIL_NUM VARCHAR,
    OP_CARRIER_FL_NUM int,
    ORIGIN	VARCHAR NOT NULL,
    DEST VARCHAR NOT NULL,
    CRS_DEP_TIME int,
    DEP_TIME VARCHAR,
    DEP_DELAY int,
    DEP_DEL15 int,
    DEP_TIME_BLK int,
    TAXI_OUT int,
    WHEELS_OFF int,
    WHEELS_ON int,
    TAXI_IN int,
    CRS_ARR_TIME int,
    ARR_TIME VARCHAR,
    ARR_DELAY int,
    ARR_DEL15 int,
    ARR_TIME_BLK int,
    CANCELLED int,
    CANCELLATION_CODE int,
    DIVERTED int,
    CRS_ELAPSED_TIME int,
    ACTUAL_ELAPSED_TIME int,
    AIR_TIME int,
    DISTANCE int,
    CARRIER_DELAY int,
    WEATHER_DELAY int,
    NAS_DELAY int,
    SECURITY_DELAY int,
    LATE_AIRCRAFT_DELAY int
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