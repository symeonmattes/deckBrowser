# DeckBrowser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development Process

The application had 4 developmental steps.
1. Creating the 'home' component and a 'gateway' service.
2. Writing basic html in 'home' component and code 'gateway' to bring the necessary data. In this step the aside and main html tags have meen used to devide the areas. For the asynchronous requests the Promises have been used.
3. Styling up 'home' component. 4 different views have been designed. For larger screens (>1100px) - The sidebar and the content are fully showed, large screens (800px-1100px) - similar to previous but the img of the content start shrinking to give space to the text, average size screens (600px-800px) - Sidebar is hidden and a combo menu appears, small screens (<600px) - the content is showed after the image.
4. Modifying the code to include unit tests that run via Jasmine and Karma.
