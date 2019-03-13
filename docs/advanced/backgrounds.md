## Introduction

<li>background-size
<li>background-origin
<li>background-clip



### Background Image
CSS allows you to add multiple background images for an element, through the background-image property.The different background images are separated by commas,and the images are stacked on top of each other, where the first image is closest to the viewer.

```css
#example1 {
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
}

#example1 {
  background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}

```

**background-size**

The CSS background-size property allows you to specify the size of background images.

The size can be specified in lengths, percentages, or by using one of the two keywords: **contain or cover**.

```css
#example1 {
  border: 1px solid black;
  background:url(img_flwr.gif);
  background-size: 100px 80px;
  background-repeat: no-repeat;
  padding:15px;
}

#example2 {
  border: 1px solid black;
  background:url(img_flwr.gif);
  background-repeat: no-repeat;
  padding:15px;
}

#div1 {
  background: url(img_flower.jpg);
  background-size: contain;
  background-repeat: no-repeat;
}
#div2 {
  background: url(img_flower.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

#example1 {
  background: url(img_tree.gif) left top no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
  background-size: 50px, 130px, auto;
}

```

**background-origin**

The CSS background-origin property specifies where the background image is positioned.

The property takes three different values:

<li>border-box - the background image starts from the upper left corner of the border
<li>padding-box - (default) the background image starts from the upper left corner of the padding edge
<li>content-box - the background image starts from the upper left corner of the content

```css
#example1 {
  border: 10px solid black;
  padding: 35px;
  background: url(img_flwr.gif);
  background-repeat: no-repeat;
  background-origin: content-box;
}
```

**background-clip**

The CSS background-clip property specifies the painting area of the background.

The property takes three different values:

<li>border-box - (default) the background is painted to the outside edge of the border
<li>padding-box - the background is painted to the outside edge of the padding
<li>content-box - the background is painted within the content box

```css
#example1 {
  border: 10px dotted black;
  padding: 35px;
  background: yellow;
  background-clip: content-box;
}
```

