## JavaScript Dog API - JavaScript - [Live Demo]( https://truptigaonkar.github.io/mandatory-js-3/)
![mandatory-js-3](https://user-images.githubusercontent.com/14937374/79688507-0704be00-824f-11ea-9da3-7c1f7092d8f9.gif)
### Instructions
* Single-page application (SPA). There should only exist a single html file in the project.
* Build an application for viewing images of dogs by making requests to the Dog API (https://dog.ceo/dog-api/documentation/).
* On the front page of the application, a table or list of some kind should list all the different breeds of dogs that can be
  viewed (see "List all breeds" in the documentation).
* Each breed should link to a new "page" where you'll list multiple images of dogs using the "by breed" endpoint (see documentation for information). Each new page should have a proper navigation route, meaning after entering a breed page, a refresh of the site should navigate you to the same place. (Tips is to use the hash "#" property of window.location).
* Each breed site should have a list of all sub-breeds that exists (if any) for the breed. These should work similary to the breeds, linking to a seperate sub-breed site where both a list of images should be shown.
* Each breed and sub-breed site should also render the name of the breed we're looking at.
* On each site (index, breed, sub-breed), there should also exists a random image (see "Random image" in the documentation), and a button that refreshes this random image. When under breed or sub-breed site, the random image should be of the breed or sub-breed.
### Requirements
* An index page which shows a random image of a dog of any breed, with a refresh button for the image. On the site there should also be a list of any kind that shows all the different breeds and each breed should link to a new sub-page.
* A breed page which shows a random image of a dog of the given breed, with a refresh button for the image. On the site there should also be a list of any kind that shows all the different sub-breeds (if any) and each sub-breed should link to a new sub-page. The breed site should also render all the images given from the API by breed (e.g from https://dog.ceo/api/breed/hound/images). There also needs to be a text rendered on the site that identifies the breed we're looking at.
* A sub-breed page which shows a random image of a dog of the given sub-breed with a refresh button for the image. The sub-breed site should also render all the images given from the API by sub-breed (e.g from https://dog.ceo/api/breed/hound/afgan/images). There also needs to be a text rendered on the site that identifies the sub-breed that we're looking at.
* Each page except the index page should have some kind of URL identifier that makes it possible for the correct breed or sub-breed to be shown. For example, if I try to navigate to http://mysite.com#breed-hound, the breed-page of the breed hound should be shown directly.
* There can only exists a single HTML file in the project that is directly rendered by the browser.
## Resources
https://dog.ceo/dog-api/documentation/   
https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON   
https://developer.mozilla.org/en-US/docs/Web/API/Window/location   

