# Quad-Explorer

**A Voxel-Centric Autonomous Quadruped 3D Exploration System in Large Dynamic Environments**

[Project website](https://zhechen003.github.io/Quad-Explorer/)

This repository currently hosts the project website and six real-world experiment videos. The exploration source code will be added in a future release.

## Website

The website is in `website/`. GitHub Actions publishes only this directory to GitHub Pages when it changes on `main`.

To preview locally, run the following command from the repository root and open <http://localhost:8000>:

```bash
python3 -m http.server 8000 --directory website
```

Edit `website/index.html` for page content, `website/style.css` for styling, and `website/script.js` for video playback behavior. Videos are in `website/video/`, and images are in `website/assets/`.
