# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Route Table
| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place | 
| POST | /places/:id/rant | Create a rant about a particular place |
| DELETE | /places/:id/rant/rantId | Delete a rant about a particular place |
| GET | * | 404 Page |

## Places data format
| Variable Name | Object Type |
| ------------- | ----------- |
| name | string |
| city | string |
| state | string |
| cuisines | string |
| pic | string |