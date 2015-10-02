# aurelia-bs-modal

This plugin is for the [Aurelia](http://www.aurelia.io/) platform. It sets up a wrapper for the Bootstrap modal.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).

## How to install this plugin?

1. In your project install the plugin via `jspm` with following command

  ```shell
  jspm install aurelia-bs-modal
  ```
2. Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app. Change it to look like this:

  ```html
  <body aurelia-app="main">
  ...
  ```
3. Create (if you haven't already) a file `main.js` in your `src` folder with following content:

  ```javascript
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install the plugin
      .plugin('aurelia-bs-modal');

    aurelia.start().then(a => a.setRoot());
  }
  ```
4. Anywhere in your app add the following markup as a sample -

  ```html
  <modal showing.bind="showing" large="true" small="true">
    <modal-header title="Name Goes Here" close.call="closeEventGoesHere()"></modal-header>
    <modal-body content-view="view-model-path-goes-here" content-model.bind="model-name-goes-here"></modal-body>
    <modal-footer>
      <button class="btn" click.trigger="someFunctionGoesHere()">Save</button>
      <au-button text="Cancel" click.call="someFunctionGoesHere()"></au-button>
    </modal-footer>
  </modal>
  ```

(Note that when You don't want to close button in modal-header, then use `close.bind="false"` instead of `close.call="closeEventGoesHere()"` in modal-header)

(Also note that you can't have both the large attribute and the small attribute. If both are present the modal will get the default size)

5. Update the bindings to be events in the view model that backs whereever you added the sample -
  ```javascript
  export class MyViewModel{
    @bindable showing = false;
    closeEventGoesHere(){
      this.showing = false;
    }
    someFunctionGoesHere(){
      console.log('do stuff');
      this.showing = false;
    }

  }
  ```

  ## How to add buttons with behavior into footer

  ### au-button

  `au-button` is available through the aurelia-bs-modal plugin to have re-usable button logic free of presentiontation.  Make sure to `.call` the click binding instead of `trigger` it since we are passing a function reference.

  ### button

  You can just as easily choose your own buttons to render there as shown in the sample.

  ## How to change the content that shows

  ### Setting content

  Right now you can set the `content-view` property directly with the view-model name as shown in the example.  This will be a one-time setting of the property and lets the modal know which view-model / view you want to render.
  You can also (optionally) set the `content-model` property with the object that you want to act as the model to get data from to populate your view-model.

  ### Binding to content

  We can just as easily bind to that property to change the view-model mid-flight.  A good example of this would be when using a wizard and going through steps.  Ex -

  In your view-model
  ```javascript
  export class MyViewModel{
    this.modalContent = "./step1"
    changeStep(){
      this.modalContent = "./step2";
    }
  }
  ```
  ```html
  <modal-body content-view.bind="modalContent"></modal-body>
  ```

## Cool links
Here are a few samples of the modal in action -

Here is a single modal and a wizard -
https://github.com/PWKad/aurelia-samples/tree/master/src/modal
