/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from "@nativescript/core";
import { firebase } from "@nativescript/firebase-core";

var defaultApp = firebase()
  .initializeApp()
  .then(() => {
    console.log("init done");
  })
  .catch((e) => console.log(e));

Application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
