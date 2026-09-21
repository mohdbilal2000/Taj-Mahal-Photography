# Photographs

The studio's own work. `lib/images.ts` maps each file to where it appears;
`lib/gallery.ts` lists the portfolio set in `gallery/` with alt text.

| File | Where it shows |
|------|----------------|
| `hero.jpg` | Homepage hero, full bleed |
| `sunrise.jpg` | Sunrise package card and page |
| `pre-wedding.jpg` | Couple & Pre-Wedding |
| `guided-photo-tour-small.jpg` | Guide + Photo, small group |
| `guided-photo-tour-large.jpg` | Guide + Photo, large group |
| `transport-guide.jpg` | Transport + Guide |
| `taj-agra-fort.jpg` | Heritage Trail |
| `full-day.jpg` | Full Day Agra |
| `sunrise-luxury-innova.jpg` | Luxury tour, Innova |
| `sunrise-luxury-urbania.jpg` | Luxury tour, Urbania |
| `gallery/01–18.jpg` | Portfolio page |

## Replacing one

Drop the new file in under the same name. Process it first so the page stays
fast — this is what the current set went through:

```js
sharp(src)
  .rotate()                                   // honour EXIF; one original needed it
  .resize({ width: 2000 })                    // 1200–1400 for cards
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(dest);
```

Landscape suits the cards. The hero wants its left third reasonably clear,
since the headline sits there.
