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
*Added the Twitter meta tags, astronomers.lk need a form to get the users feedback. Alternatively, we need to integrate it with some chatting application. Facebook has a way to integrate messenger into a website need to check that out. 

*need to read more about git version control workflows [this article](https://nvie.com/posts/a-successful-git-branching-model/) 
could be a very good start. 

**Link(s) to work**:

* [astronomers.lk](http://astronomers.lk)
---

