# JB Creations

JB Creations is a creative media company focusing on photography, videography, video editing, reels, and media solutions for individuals, events, brands, and businesses.

## Features

- **Cinematic Intro Overlay:** An engaging welcome screen to grab users' attention.
- **Dynamic Content:** Site content and portfolio are loaded dynamically using `js/data.js` for easy updates.
- **Responsive Design:** Optimized for both desktop and mobile viewing.
- **Dark Theme UI:** A sleek, modern aesthetic tailored for creative professionals.
- **Interactive Portfolio & Modals:** Showcases high-quality images and video reels.

## Project Structure

```
├── assets/          # Images and other static assets
├── css/             # Stylesheets (style.css)
├── js/              # Javascript logic (main.js) and dynamic content (data.js)
├── index.html       # Main HTML page
├── .env             # Environment variables (e.g. for API keys if integrated)
└── README.md        # Project documentation
```

## Setup & Deployment

Since this is a static website, you can host it easily on platforms like GitHub Pages, Vercel, or Netlify.

1. Clone or download the repository.
2. Open `index.html` in any modern web browser or serve it via a local development server.
3. Update `js/data.js` to change text, packages, links, or team members.
4. Replace images in the `assets/` folder as needed.

## Configuration (.env)

The `.env` file is provided as a placeholder if you decide to add form integrations (e.g., EmailJS) or analytics later. Note that natively in a browser, `.env` files are not loaded automatically without a build step (like Vite or Webpack).

## License

All rights reserved by JB Creations.
