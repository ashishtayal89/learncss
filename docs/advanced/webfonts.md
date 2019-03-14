
## The CSS @font-face Rule

Web fonts allow Web designers to use fonts that are not installed on the user's computer.

When you have found/bought the font you wish to use, just include the font file on your web server, and it will be automatically downloaded to the user when needed.

Your "own" fonts are defined within the CSS @font-face rule.

### Different Font Formats 

- TrueType Fonts (TTF)

TrueType is a font standard developed in the late 1980s, by Apple and Microsoft. TrueType is the most common font format for both the Mac OS and Microsoft Windows operating systems.

- OpenType Fonts (OTF)

OpenType is a format for scalable computer fonts. It was built on TrueType, and is a registered trademark of Microsoft. OpenType fonts are used commonly today on the major computer platforms.

- The Web Open Font Format (WOFF)

WOFF is a font format for use in web pages. It was developed in 2009, and is now a W3C Recommendation. WOFF is essentially OpenType or TrueType with compression and additional metadata. The goal is to support font distribution from a server to a client over a network with bandwidth constraints.

- The Web Open Font Format (WOFF 2.0)

TrueType/OpenType font that provides better compression than WOFF 1.0.

```css
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}

div {
  font-family: myFirstFont;
}
```

Descriptor |	Values	| Description
---| --- | ---
font-family |	name	| Required. Defines a name for the font
src	| URL	| Required. Defines the URL of the font file
font-stretch |	normal condensed ultra-condensed extra-condensed semi-condensed expanded semi-expanded extra-expanded ultra-expanded	 | Optional. Defines how the font should be stretched. Default is "normal"
unicode-range | unicode-range | Optional. Defines the range of UNICODE characters the font supports. Default is "U+0-10FFFF"
font-style |	normal italic oblique | Optional. Defines how the font should be styled. Default is "normal"
font-weight |	normal bold 100 | Optional. Defines the boldness of the font. Default is "normal"



