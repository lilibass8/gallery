# The Glow Gallery

An immersive first-person gallery corridor. **Scroll to walk forward** through the exhibition; click framed artworks on the walls to enter About, Projects, Services, Team, and Contact.

## Experience

- Cinematic entrance, then a 3D hallway with warm lighting and perspective depth
- Scroll-driven camera — progress bar tracks how far you’ve walked
- Frames alternate left/right with abstract SVG artwork in every frame
- Smooth transitions into content “rooms” with glassmorphism UI
- Warm interior palette (ivory, beige, sage, taupe, olive)

## Quick start

```bash
npx serve .
```

Open the URL shown (e.g. `http://localhost:3000`).

## Structure

```
gallery/
├── index.html
├── assets/art/          # SVG placeholder artworks
├── css/
│   ├── main.css
│   ├── gallery.css      # Corridor 3D & scroll walk
│   └── pages.css
└── js/
    ├── corridor.js      # Scroll → camera movement
    └── app.js           # Entrance, routing, pages
```

## Color palette

| Name            | Hex       |
|-----------------|-----------|
| Warm Ivory      | `#F8F5F0` |
| Light Beige     | `#E7DDD1` |
| Sand Brown      | `#D8C6B2` |
| Soft Olive Green| `#B8C4A8` |
| Sage Green      | `#A9B59C` |
| Warm Taupe      | `#B7A293` |
| Deep Olive Accent | `#6E7B63` |

## Accessibility

- Skip link, keyboard focus on frames, `prefers-reduced-motion` shows a stacked frame list without scroll-walk

## License

MIT
