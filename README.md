# LAsafeParking
Project 1 ProposalLA Safe Parking Solution
Alexis Bieda 
Juan Pimentel
Rachel Rodriguez 
Vartan Krekorian


Company Description: 
LA Safe parking is a program that provides safe parking lots for homeless people to park in at night in order to sleep in their cars legally. These lots are not visible to the public and are business parking lots during the day, so participants must leave by 6:30am. There are currently 7 parking lots and only 10 cars are allowed in each lot. A person must apply to the program and go through an on-boarding process. Once they have gone through the process they receive a waiver of eligibility. 

Problem: 
How can we solve the problem of checking in and tracking the cars? When LA Safe Parking residents come to the lot the security guard currently has to write down their first and last name, their car’s license plate number, the time, and the date by hand. The guard then takes a picture of this information and sends it to the program manager, who adds this information to her personal excel sheet. The guard also keeps a copy for the parking lot owner just in case a participant has not left by 6:30am.

Solution: 
Create a website or application for the check-in process that will automatically add the data of lA Parking user to the database. This will allow the security guard to input and keep track of the participant’s information by taking a picture of their license plate.

Requirements: 
This project must be scalable due to the growth of the program. There must be a way to manually input the information in-case there are technical difficulties with taking an image. This project must take into consideration that not all the security guards have the same mobile devices, so it must be adaptable.

User Flow — Check In
1. Guard opens a website on the mobile phone
2. Guard takes a picture of a license plate of a vehicle
3. License plate number will be recognized automatically or can be entered manually
4. The website pulls data from the database by license plate number and displays a full name of the person, so that guard can verify their identity
5. Website prepopulates parking location based on GPS location (guard will have an option to choose location manually)
6. Guard selects ‘Check in’ option and submits a form
7. The website adds a record to the database that the given vehicle has checked in at the given parking location at the given date and time
8. Date and time generated automatically
9. Car can have access to the parking lot 

User Flow — Leaving
1. When Vehicle is ready to leave the parking lot, the guard opens a website
2. Guard takes a picture of the license plate of the vehicle
3. License plate number will be recognized automatically or can be entered manually
4. Website prepopulates parking location based on GPS location, and guard will have an option to choose location manually
5. Guard selects ‘Check out’ option and submits a form
6. The website adds a record to the database that the given vehicle has checked out at the given parking location at the given date and time
7.    Date and time generated automatically
8. Car drives out the parking lot

Resources:
HTML File ?CSS File/ CSS Reset File/ Bootstrap LinkJavaScript CodeDatabase (Firebase)APIsGoogle Maps — To generate the parking lot locationsOpenalpr (Cloud API) — To gather information about the driver