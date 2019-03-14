## CSS 2D Transforms

In this chapter you will learn about the following 2D transformation methods:

- translate()
- rotate()
- scale()
- skewX()
- skewY()
- matrix()

### translate
The translate() method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).
```css
div {
  -ms-transform: translate(50px, 100px); /* IE 9 */
  -webkit-transform: translate(50px, 100px); /* Safari */
  transform: translate(50px, 100px);
}
```

### rotate
The rotate() method rotates an element clockwise or counter-clockwise according to a given degree.Using negative values will rotate the element counter-clockwise.

```css
div {
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari */
  transform: rotate(20deg);
}
```

### scale
The scale() method increases or decreases the size of an element (according to the parameters given for the width and height).

```css
div {
  -ms-transform: scale(2, 3); /* IE 9 */
  -webkit-transform: scale(2, 3); /* Safari */
  transform: scale(2, 3);
}
```

### skew
The skew() method skews/tilts an element along the X and Y-axis by the given angles.

```css
div {
  -ms-transform: skew(20deg, 10deg); /* IE 9 */
  -webkit-transform: skew(20deg, 10deg); /* Safari */
  transform: skew(20deg, 10deg);
}
```

### skewX and skewY
The skewX()/skewY() method skews/tilts an element along the X-axis/Y-axis by the given angle.

```css
div {
  -ms-transform: skewX(20deg); /* IE 9 */
  -webkit-transform: skewX(20deg); /* Safari */
  transform: skewX(20deg);
}

div {
  -ms-transform: skewY(20deg); /* IE 9 */
  -webkit-transform: skewY(20deg); /* Safari */
  transform: skewY(20deg);
}
```

## CSS 3D Transforms

CSS allows you to format your elements using 3D transformations.

- rotateX()
- rotateY()
- rotateZ()

```css
#myDiv {
  -webkit-transform: rotateZ(90deg); /* Safari */
  transform: rotateZ(90deg);
}
#myDiv {
  -webkit-transform: rotateZ(90deg); /* Safari */
  transform: rotateY(90deg);
}
#myDiv {
  -webkit-transform: rotateZ(90deg); /* Safari */
  transform: rotateX(90deg);
}
```

Function |	Description
--- | ---
matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) |	Defines a 3D transformation, using a 4x4matrix of 16 values
translate3d(x,y,z) |	Defines a 3D translation
translateX(x) |	Defines a 3D translation, using only the value for the X-axis
translateY(y) |	Defines a 3D translation, using only the value for the Y-axis
translateZ(z) |	Defines a 3D translation, using only the value for the Z-axis
scale3d(x,y,z) |	Defines a 3D scale transformation
scaleX(x) |	Defines a 3D scale transformation by giving a value for the X-axis
scaleY(y) |	Defines a 3D scale transformation by giving a value for the Y-axis
scaleZ(z) |	Defines a 3D scale transformation by giving a value for the Z-axis
rotate3d(x,y,z,angle) |	Defines a 3D rotation
rotateX(angle) |	Defines a 3D rotation along the X-axis
rotateY(angle) |	Defines a 3D rotation along the Y-axis
rotateZ(angle) |	Defines a 3D rotation along the Z-axis
perspective(n) |	Defines a perspective view for a 3D transformed element

