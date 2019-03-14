**RGBA**

RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.

An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

```css
#p1 {background-color:rgba(255,0,0,0.3);} /*red*/
#p2 {background-color:rgba(0,255,0,0.3);} /*green*/
#p3 {background-color:rgba(0,0,255,0.3);} /*blue*/
```

**HSLA**

HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color.

An HSLA color value is specified with: hsla(hue, saturation, lightness, alpha), where the alpha parameter defines the opacity. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

An HSL color value is specified with: hsl(hue, saturation, lightness).

1. Hue is a degree on the color wheel (from 0 to 360):
    1. 0 (or 360) is red
    2. 120 is green
    3. 240 is blue
2. Saturation is a percentage value: 100% is the full color.
3. Lightness is also a percentage; 0% is dark (black) and 100% is white.

```css
#p1 {background-color:hsla(120,100%,50%,0.3);}
```

