## Introduction

With CSS you can add shadow to text and to elements.**It creates a replica of the text just behind it and moves horizontaly, veticaly as specified by the user. It alos gives it the color and opacity as specified**.
In this chapter you will learn about the following properties:

- text-shadow
- box-shadow

### Text Shadow

```css
text-shadow: move-hoirzontal move-vertical color opacity

text-shadow: 2px 2px 5px red;
```

You can also give comma separated multiple text shadow

```css
text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
```

### Box Shadow
The CSS box-shadow property applies shadow to elements.Just like text-shadow but on a box or element.

In its simplest use, you only specify the horizontal shadow and the vertical shadow:
```css
box-shadow: move-hoirzontal move-vertical color opacity

box-shadow: 10px 10px 5px grey;

box-shadow: 10px 10px 5px grey, 15px 10px 5px grey; /*Multiple box-shadow*/
```
