# Animus Apartment CRUD Example

This is a simple CRUD application for Apartments for managing the properties information.
Version 1 of the API is limited to the essentials of the requirements as per the document provided: listing all the apartments, adding,editing and deleting the apartments.

***
# Technology Stack
## Frontend
- Angular 7
- node v6.6.x
- Added Components: Routes, rxjs, e2e (not needed though), angular-material (for designing the form and the pages as per material design standards), and angular-alerts (but they are not showing the alert when any new record is added, updated or deleted at the moment)

## Backend
- Laravel 5.5.*
- MySQL 5.7.x

***

## Features that are implemented
- Welcome Page, with the Buttons to View All Apartments and Add New Apartment Information
- Clicking on the "View" Button, redirects to the page with the apartments list.
- Clicking on the "Add" Button, redirects to the page with the form to add new apartments
- Form fields currently set are: Move In Date, Property ID, Street, Town, Country, Postal Code, Contact Email Address
- While creating new apartment, it will store all the information and also send an email to the address mentioned in the form for "Contact Email Address" field.
- When any new record is created for apartment, an unique random alphanumeric token is also stored for the record, which acts as an identifier for sending the links in the email.
- Backend has the Resourceful API Routes

#### URL Information and it's details
- Main Page: http://172.104.61.196
- List Page: http://172.104.61.196/apartments/list
- Add Page: http://172.104.61.196/apartment/add
- Edit Page: http://172.104.61.196/apartment/edit;apartment_token={token}
- Delete Page: http://172.104.61.196/apartment/delete;apartment_token={token}

## Note: All the other Urls except that of Main Page, will not be directly accessible via links. They can only be accessed via navigation from the main page.

## Limitations:
- Pagination is not implemented, even though the component is added in the codebase.

## Things that can be improved:
- Availing the ability to set the pagination records (Eg: Showing 5,10,25,50 Records Per page)
- Adding the pagination records.
- Adding the filters to search by property town, postal_code, street or move_in_date
- Adding the options to sort the records by any of the fields in the list.
