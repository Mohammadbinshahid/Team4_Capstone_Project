
-- Column names from ML
-- (['YEAR', 'MONTH', 'DAY_OF_WEEK', 'OP_CARRIER_FL_NUM', 'CRS_DEP_TIME',
--        'DEP_TIME', 'DEP_DELAY', 'DEP_DEL15', 'TAXI_OUT', 'WHEELS_OFF',
--        'WHEELS_ON', 'TAXI_IN', 'CRS_ARR_TIME', 'ARR_TIME', 'ARR_DELAY',
--        'ARR_DEL15', 'CANCELLED', 'CRS_ELAPSED_TIME', 'ACTUAL_ELAPSED_TIME',
--        'AIR_TIME', 'DISTANCE'],
 
 CREATE TABLE Flight_Data (
    YEAR int,
    MONTH int,
    DAY_OF_WEEK int,
    OP_CARRIER_FL_NUM int,
    CRS_DEP_TIME int,
    DEP_TIME VARCHAR,
    DEP_DELAY int,
    DEP_DEL15 int,
    TAXI_OUT int,
    WHEELS_OFF int,
    WHEELS_ON int,
    TAXI_IN int,
    CRS_ARR_TIME int,
    ARR_TIME VARCHAR,
    ARR_DELAY int,
    ARR_DEL15 int,
    CANCELLED int,
    CRS_ELAPSED_TIME int,
    ACTUAL_ELAPSED_TIME int,
    AIR_TIME int,
    DISTANCE int
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



