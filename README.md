# ng2-form-edit
Example of how to edit data in Angular 2 Reactive Forms, while the form values are retrieved asynchronously, based on an ID on the query string.

##usage
- clone repository
- run `npm install` or `yarn install` plus `typings install`
- run `npm start`

##structure
- The app has two components: a list of cities (`\app\home\app.component.ts`), an Edit component (`\app\edit\city.edit.component.ts`) and the basic Angular 2-files like a bootstrapper, module, routing, etc.
- The data is in `app\data\cities.json`
- The Edit component has a reactive form, in which the chosen city is loaded after a simulated delay of 1500ms.
- Study the code in `city.edit.component.ts` and `city.service.ts` to see how the data is fetched and edited.
- The edited data is not really saved back to the .json file. The Save button is just there for demonstration purposes.

Questions? Mail me at info@kassenaar.com