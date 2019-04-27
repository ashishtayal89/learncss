## CSS Transitions

CSS transitions allows you to change property values smoothly (from one value to another), over a given duration. This is generaly used when we change the properties of an element using some pseudo class.

Property |	Description
--- | ---
transition |	A shorthand property for setting the four transition properties into a single property
transition-delay |	Specifies a delay (in seconds) for the transition effect
transition-duration |	Specifies how many seconds or milliseconds a transition effect takes to complete
transition-property |	Specifies the name of the CSS property the transition effect is for
transition-timing-function |	Specifies the speed curve of the transition effect

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  /* For Safari 3.1 to 6.0 */
  -webkit-transition-property: width;
  -webkit-transition-duration: 2s;
  -webkit-transition-timing-function: linear;
  -webkit-transition-delay: 1s;
  /* Standard syntax */
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}

div:hover {
  width: 300px;
}
```
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  -webkit-transition: width 2s linear 1s; /* For Safari 3.1 to 6.0 */
  transition: width 2s linear 1s;
}

div:hover {
  width: 300px;
}
```
```css
div {

}
div {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: width, height, transform;
  transition-duration: 2s, 2s, 2s;
}

div:hover {
  width: 300px;
  height: 300px;
  -webkit-transform: rotate(180deg); /* Safari */
  transform: rotate(180deg);
}
```

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* Safari */
  transition: width 2s, height 2s, transform 2s;
}

div:hover {
  width: 300px;
  height: 300px;
  -webkit-transform: rotate(180deg); /* Safari */
  transform: rotate(180deg);
}
```

### transition-timing-function

- ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- linear - specifies a transition effect with the same speed from start to end
- ease-in - specifies a transition effect with a slow start
- ease-out - specifies a transition effect with a slow end
- ease-in-out - specifies a transition effect with a slow start and end
- cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function