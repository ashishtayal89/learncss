


This is an example of creating a custom loader:

```html
<!DOCTYPE html>
<html>
<head>
<style>
@-webkit-keyframes square-spin {
  25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
            transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
            transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
            transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
            transform: perspective(100px) rotateX(0) rotateY(0); } }

div {
  width: 100px;
  height: 100px;
  background-color: blue;
  word-wrap: break-word;
}

#myDiv {
	animation-name: square-spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
</style>
</head>
<body>

<div id="myDiv">
</div>

</body>
</html>
```

