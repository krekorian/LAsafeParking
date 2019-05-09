# LAsafeParking


--------------------------------------------------

Company Description
LA Safe parking is a program that provides safe parking lots for homeless people to park in at night in order to sleep in their cars legally. These lots are not visible to the public and are business parking lots during the day, so participants must leave by 6:30am. There are currently 7 parking lots and only 10 cars are allowed in each lot. A person must apply to the program and go through an on-boarding process. Once they have gone through the process they receive a waiver of eligibility.

Problem
How can we solve the problem of checking in and tracking the cars? When LA Safe Parking residents come to the lot the security guard currently has to write down their first and last name, their car’s license plate number, the time, and the date by hand. The guard then takes a picture of this information and sends it to the program manager, who adds this information to her personal excel sheet. The guard also keeps a copy for the parking lot owner just in case a participant has not left by 6:30am.

Solution
SafeStay is a web application for the check-in process that will automatically add the data of a LA Safe Parking user to the database. This will allow the security guard to input and keep track of the driver's information.

--------------------------------------------------

User Flow — Check In
1. Guard opens a website on the mobile phone
2. Guard takes a picture of a license plate of a vehicle
3. Guard fills out the rest of the form
4. The website pulls data from the database and displays the rest of the driver's information and verifies if they are in the LA Safe Parking system
5. Guard selects ‘Check in’ option and submits a form
6. The website adds a record to the database that the given vehicle has checked in at the given parking location at the given date and time
7. Car can have access to the parking lot

User Flow — Check Out
1. When Vehicle is ready to leave the parking lot, the guard opens a website
2. Guard selects ‘Check out’ option
3. They ask the driver for their license
4. They search for them in the lot status log and clicks their profile
5. They verify that it is the correct car
6. They have the option to add notes about the driver
7. They submit the check out and are confirmed

--------------------------------------------------

Requirements
This project must be scalable due to the growth of the program. There must be a way to manually input the information in-case there are technical difficulties with taking an image. This project must take into consideration that not all the security guards have the same mobile devices, so it must be adaptable.

Resources
- HTML File
- CSS File/ CSS Reset File/ Bootstrap Link JavaScript Code
- Database (Firebase)
- Google Maps API — generate the parking lot locations
- Vin Audit API - vin verification

Authors and acknowledgment
- Alexis Bieda
- Juan Pimentel
- Rachel Rodriguez
- Vartan Krekorian

Project status
This project is currently a low fidelity project. We have researched, tested, and created the main functionality and most important features in this version.



## Resources For Grading Purposes:

You will need the following information to make the application run properly. Below you will find login information, user info to populate the check in form, as well as instructions on image upload.

####Login Information:

Location ID: 123
Password: 123456


####Driver Information:

Driver 1:

First Name: Rachel
Last Name: Tybi
License Plate Number: 7EFZ117


Driver 2:

First Name: Fionna
Last Name: Johnson
License Plate Number: 8XYD701

####Image Upload Information:

If logging in as Fionna Johnson...save image as 8XYD701.jpg

If logging in as Rachel Tybi...save image as 7EFZ117.jpg

