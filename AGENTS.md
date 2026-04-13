# wb-dirac.github.io Agent Instructions

## Development
- Preview locally: `jekyll serve -w` (or `rake preview`)
- Creates new post: `rake post title="My Post"`
- Creates new page: `rake page name="about.md"`
- Switch themes: `rake theme:switch name="theme-name"`
- Install theme: `rake theme:install git="repo-url"`

## Structure
- Content: `_posts/` (Markdown files)
- Configuration: `_config.yml`
- Layouts: `_layouts/`
- Includes: `_includes/`
- Assets: `/assets/`
- Google site verification: meta tag in index.html head

## Deployment
- GitHub Pages: Push to `main` branch
- Production URL: https://wb-dirac.github.io (set in _config.yml)