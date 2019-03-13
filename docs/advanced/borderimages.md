<p>
The border-image property takes the image and slices it into <b>nine sections</b>, like a <b>tic-tac-toe</b> board. It then places the corners at the corners, and the middle sections are repeated or stretched as you specify.

<b>Note: For border-image to work, the element also needs the border property set!</b>

<b>The property has three parts:</b>
<li>The image to use as the border
<li>Where to slice the image
<li>Define whether the middle sections should be repeated or stretched
</p>

```css
#borderimg {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 30 round;
}

#borderimg {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 30 stretch;
}

/*This places ths complete image(border.png) at the corner of the div given the below class.*/
#borderimg {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 100% stretch;
}
```

**Note : The browser take the value provided to slice the image like 30 in the above cases and uses it to measure the corner boxes of a tic-tac-toe. If we give it as 50% then the tic-tac-toe would look something like <b>+</b>. So only the corners of the border would be there and nothing at the top,right,bottom and left of the box.**
