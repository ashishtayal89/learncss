CSS defines two types of gradients:

- Linear Gradients (goes down/up/left/right/diagonally)
- Radial Gradients (defined by their center)

**Linear Gradients**
To create a linear gradient you must define at least two color stops. Color stops are the colors you want to render smooth transitions among. You can also set a starting point and a direction (or an angle) along with the gradient effect


1. linear-gradient(direction, color-stop1, color-stop2, ...);
```css
#grad {
  background-image: linear-gradient(to right, red , yellow);
}
#grad {
  background-image: linear-gradient(to bottom right, red, yellow);
}
```

2. background-image: linear-gradient(angle, color-stop1, color-stop2);

```css
#grad {
  background-image: linear-gradient(-90deg, red, yellow);
}
#grad {
  background-image: linear-gradient(red, yellow, green);
}
```

3. background-image: repeating-linear-gradient(angle/direction, color-stop1, color-stop2);

```css
#grad {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}
```

**Radial Gradient**

A radial gradient is defined by its center.
To create a radial gradient you must also define at least two color stops.

1. background-image: radial-gradient(shape size at position, start-color, ..., last-color);

```css
#grad {
  background-image: radial-gradient(red, yellow, green);
}
#grad {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}

```