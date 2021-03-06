# 100 Days Of Code - Log

### Day 1: April 06, Saturday

**Today's Progress**: as kick start picked up Wes Bos's javascript30 course.

**Thoughts:**

* I didn't know `<kbd></kbd>` is a tag in HTML. It's used to define keyboard inputs. The tag is used when it is needed to display text that the user should enter into their keyboard (for any number of reasons).

* `transform` in css used for `transform: scale(1.1);` inside a class scales up whatever in the class by 10% present. 
* `transitionend` is an event you can use to listen to an end of a transition. 

* backtics and template syntax are great way contact strings in javascript.
   ``const key = document.querySelector(`div[data-key="${e.keyCode}"]`);``

* you can add add `EventListners` to html page by, 
  `window.addEventListener('keydown', playSound);`

**Link(s) to work**

* [JavaScript30 Drum Kit ](https://github.com/sankhaKarunasekara/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)

---

### Day 2: April 07, Sunday
 
**Today's Progress**: created internet speed widget using tailwind css and Network information API.

**Thoughts**:

* Tailwind css is a utility based css framework. It is an excellent framework. very straightforward to create components using that.

* network information API is a way to get the internet speed from the browser only.

* combining those two I created the widget that shows the internet speed.

**Useful link(s)**:

* [tailwind css](https://tailwindcss.com/docs/what-is-tailwind/)
* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)

**Link(s) to work**:

* [Interent Speedometer](https://codepen.io/sankhax/pen/WWGwVV)
---


### Day 3: April 08, Monday
 
**Today's Progress**: finished the second excise of wesbos's javascript30 course. I created a css javascript clock. 

**Thoughts**:

* I have been a front-end developer for a while now, but since today I haven't used 2D Transforms directly. It was
a pleasant experience to use them. 

**Useful link(s)**:
   [2D transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)

**Link(s) to work**:

* [JSS + CSS Clock](https://codepen.io/sankhax/pen/vMyoPE)
---

### Day 4: April 09, Tuesday
 
**Today's Progress**: release a new version of gatsby web site astronomers.lk. Update the content of the website. Change the duration
of the [react slick carousel](http://kenwheeler.github.io/slick/) at the top of the page.

**Thoughts**:

* I realise site doesn't have twitter meta tags set up. work for another day. & need to set up contributors to the website.

**Useful link(s)**:
   [react slick carousel](http://kenwheeler.github.io/slick/)

**Link(s) to work**:

* [astronomers.lk](http://astronomers.lk)
---


### Day 5: April 10, Wednesday
 
**Today's Progress**: worked on @Ionicframework 4 project file upload functionality. struggled to get the size and content length of the file via typescript.

**Thoughts**:
* Encounter a problem in typescrpit where I can't send data out from a function. via it's parent scope. had to investigate the problem.
---


### Day 6: April 11, Thusday
 
**Today's Progress**: Picked up the [@css_battle](https://cssbattle.dev) completed the first three challenges.

**Thoughts**:
* centering a `div` vertically and horizontally is always a tricky deal. here is how I did it this time,

```css
div{
    margin:auto auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  } 
  ```

**Useful link(s)**:
   [CSS Battle](https://cssbattle.dev/play/3)

---

### Day 7: April 12, Friday
 
**Today's Progress**: Pworked on my gatsby site http://sankha.lk  to move blog post into separate repository rather than keeping it on the same code base.

**Thoughts**:
* doing not so well on this, since I lack experience in gatsby and graphql hard to figure this out on my own, so I asked a stackoverflow
question, still no response. :( 


**Useful link(s)**:
   [Stackoverflow question](https://stackoverflow.com/questions/55663260/how-to-retrieve-markdown-from-remote-git-repository-in-gatsby)

---

### Day 8: April 13, Saturday
 
**Today's Progress**: I released another version of astronomers.lk website. :)  Finished the "Contributors" section and added the twitter meta tags. 

**Thoughts**:

* Added the Twitter meta tags, astronomers.lk need a form to get the users feedback. Alternatively, we need to integrate it with some chatting application. Facebook has a way to integrate messenger into a website need to check that out. 

* need to read more about git version control workflows [this article](https://nvie.com/posts/a-successful-git-branching-model/) 
could be a very good start. 

**Useful link(s)**:
   
   [Stackoverflow question](https://stackoverflow.com/questions/55663260/how-to-retrieve-markdown-from-remote-git-repository-in-gatsby)

---

### Day 9: April 14, Sunday
 
**Today's Progress**: Researched about what are the best APIs available for Natural Language Processing. google's dialogflow seems like a really nice interrogatable platform which uses all google's available tools. 

**Thoughts**:

* Dialogflow seems like nice way to get start.
* IBM Wotson provide more detailed analasis.
 

**Link(s) to work**:

* [Link to trello board](https://trello.com/b/JQB1LHg1/asksankha)

---


### Day 10: April 15, Monday
 
**Today's Progress**: Had my first experience with css variables, what are they called it these days, Custom properties?  The fact that you can scope them like a common css property is fantastic.

**Thoughts**:

* It nice way to access the css.
* need to learn better use cases for this, feels like this isn't going to be very useful. 

**Link(s) to work**:

* [CSS Variables Excercise](https://codepen.io/sankhax/pen/Lveyex)

---

### Day 11: April 16, Tuesday

**Today's Progress**: Watched Adam Wathan' [Utility-First CSS with Tailwind CSS](https://youtu.be/BeZbMx9y1FE) where he explain all ins and outs of tailwind css. 

**Thoughts**:

* ability to componatize css with `@apply` is great.
* Tailwind css is nice, if you are doing rapid prototyping.
* cssstats is a great simple tool you can use to profile your css. 

**Useful link(s)**:

* [CSS Stats](https://cssstats.com/)

---

### Day 12: April 17, Wednesday

**Today's Progress**: Watched Adam Wathan designing [netlify.com](netlify.com) and building [Refactoring UI](https://refactoringui.com/) with his tailerwind css on a youtube live stream.

**Thoughts**:

* If you want to make your html clean it's not that great solution, specially if you are working with lot of conditions statements in the dom like `ng-if` in angular.
* I should polish my knowledge of css flex box.

**Useful link(s)**:

* [Rebuilding Netlify](https://youtu.be/_JhTaENzfZQ)
* [SVG OMG SVG Optimizer](https://jakearchibald.github.io/svgomg/)
---

### Day 13: April 18, Thursday
 
**Today's Progress**: Ionicframework is a great platform until your application stop building because of some weird cordova bug.  

**Thoughts**:
* never use ionic repair command when you are encounter a bug. It takes for ever to complete. 
* Encouter some crazy cordova bugs.  

```bash
ionic cordova platform rm android
ionic cordova platform add android
ionic cordova prepare android
ionic cordova run android
```

**Useful link(s)**:

* [Ionic Cordova](https://ionicframework.com/docs/cli/commands/cordova-run)
---

### Day 14: April 19, Friday

**Today's Progress**: Learned about how to use @gatsbyjs as a PWA( Progressive web app builder). had a problem with site cache not reloading after a new website build. problem solved with giving an option to reload the website when there is a new service worker update.

**Thoughts**:

* I don't like asking user for refresh the page, or click on a alart to update the service worker so that we can refresh the page.

* It's not tested it, if you want to make a gatsby site in to PWA you can use `gatsby-plugin-offline` to do it.

**Useful link(s)**:

* [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/?=gatsby-plugin-offline)

---

### Day 15: April 20, Saturday
 
**Today's Progress**: Gatsby PWA with service worker `gatsby-plugin-offline` still have sevior issues. The service workers did not refresh after using 

```javascript
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
```

. This did not work. I had to replace the `onServiceWOrkerUpadteReady` with `onServiceWorkerUpdateFound`.

```javascript
exports.onServiceWorkerUpdateFound = () => {
     const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
};
```

**Thoughts**:

* This led me to a very interesting and annoying problem, `window.confrim` works in the `gatsby build` environment but not after deployment. That course a serious issue where user cannot click on anything on the screen because I suspect that `window.confirm` is on top of everything, but It is not showing. 

* finally decided to remove the `gatsby-plugin-offline` and clear the service workers by using, `gatsby-plugin-remove-serviceworker`. It solves the issue still I am not totally sure it will clear out all the service workers in my user's devices.

**Useful link(s)**:

* [how to know whether service worker is updated or not](https://stackoverflow.com/questions/48171517/how-to-know-if-service-worker-was-updated-in-gatsby-plugin-offline)

---

### Day 16: April 21, Sunday

**Today's Progress**: Synced my `vscode` setting to github gist using
[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync). now I can use those setting any machine I want.

**Thoughts**:

* Nice and easy very user friendly plugin.

**Useful link(s)**:

* [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
* [My VSCode Settings](https://gist.github.com/sankhaKarunasekara/f2e14c4bfeb1822b3b0e4a6a93b42b6e)

---

### Day 17: April 28, Sunday

 **Today's Progress**: Array Cardio with @wesbos. cool little wrap-up of map, filter, reduce, sort.

**Thoughts**:

* sort method is still bit confusing.
* with the arrow functions you return what ever after the =>, if you use curly braces 
you need to explicitly return the object you want to return.

```javascript
   return (
      state.map((one) =>
         oneTodo( one, action)
      )
   );
```

is equal to:

```javascript
    case 'toggleTodo' :
      return (
         state.map((one) => {
            return oneTodo( one, action )
         })
      );
```

**Useful link(s)**:

* [curly brackets in arrow functions](https://stackoverflow.com/questions/35440265/curly-brackets-in-arrow-functions/35440297#35440297)

**Link(s) to work**:

* [Day 17 array cardio](https://github.com/sankhaKarunasekara/100-days-of-code/tree/master/days/Day_17__2019-04-28)

---

### Day 18: May 01, WednesDay 

 **Today's Progress**: Write a simple script to delete all pending facebook requests.

**Thoughts**:
* you can't do this on web version, facebook blocks. javascript clicks.

```javascript
/*
1) go to: https://m.facebook.com/friends/center/requests/outgoing/#friends_center_main
2) scroll down: load all the pending requests
2) open: Developer Tools (shotcut: Ctrl+Shift+i) 
3) type : below 2 line in the console 
4) press: Enter
*/

var buttons = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _2b4n _56bt');
[...buttons].slice(0,100).forEach(item=>item.click());

// Note: if you got more than 100 you have to run this few times while changing the slices

```

### Day 19: May 11, Saturday

 **Today's Progress**: Add banner at the top of astronomers.lk website. update the All Sri Lanka asteroids search Campaign Page.  

**Thoughts**:

* need to add [disqus comments](https://disqus.com/) to astronomers.lk.

**Link(s) to work**:

* [Day 19 astronomers.lk](https://www.astronomers.lk/ASASC2019)

---

### Day 20: May 12, Sunday

 **Today's Progress**: add comment section to astronomers.lk website.

**Thoughts**:
if you are looking for a quick way to add comments to your website,  @disqus is very slick and easy solution. Add disqus comments plugin to http://astronomers.lk  website.

**Link(s) to work**:
* [Day 20 astronomers.lk](https://www.astronomers.lk/ASASC2019)

---
