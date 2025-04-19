# skill-wanderer-landing-page

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Nuxt](https://img.shields.io/badge/Nuxt.js-v3-00C58E.svg)](https://nuxtjs.org/)
[![Status](https://img.shields.io/badge/Status-In%20Development-blue.svg)]()

## Overview

This repository contains the code for the main landing page of [skill-wanderer.com](https://skill-wanderer.com). It serves as the central navigation hub for the Skill Wanderer ecosystem, directing users to our various platforms:

- **Blog**: Educational articles and resources
- **Dojo**: Free, mission-driven educational platform with optional premium support
- **Hub** *(Planned)*: Community learning environment

The Skill Wanderer platform is dedicated to making quality education accessible to everyone, regardless of financial means.

## Technology Stack

This project is built with:

- **[Nuxt.js](https://nuxtjs.org/)**: Vue-based framework for server-side rendering, static site generation, and more
- **[Vue.js](https://vuejs.org/)**: Progressive JavaScript framework
- **[TailwindCSS](https://tailwindcss.com/)** (if used): Utility-first CSS framework

Nuxt.js was chosen for its excellent SEO capabilities, static site generation options, and to explore Vue.js ecosystem after extensive experience with React and Angular frameworks.

## Project Structure

```
skill-wanderer-landing-page/
├── assets/            # Uncompiled assets (CSS, images, fonts)
├── components/        # Vue components
├── layouts/           # Page layouts
├── pages/             # Application views and routes
├── plugins/           # JavaScript plugins
├── public/            # Static files served at root level
├── server/            # Server-side logic (if applicable)
├── nuxt.config.ts     # Nuxt.js configuration
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration (if applicable)
└── README.md          # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or later recommended)
- npm (v7+) or [yarn](https://yarnpkg.com/) (v1.22+)

## Installation

```bash
# Clone the repository
git clone https://github.com/JimmyYouhei/skill-wanderer-landing-page.git

# Navigate to project directory
cd skill-wanderer-landing-page

# Install dependencies
npm install
# or
yarn install
```

## Running Locally

```bash
# Start development server
npm run dev
# or
yarn dev
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
# Generate static project
npm run build
# or
yarn build

# Launch production server (if not a static site)
npm run start
# or
yarn start
```

For a fully static site:

```bash
npm run generate
# or
yarn generate
```



## Key Features

- Main navigation hub for the Skill Wanderer ecosystem
- Direct links to blog, dojo, and future hub platforms
- Platform mission and values presentation
- Responsive design for all device types
- Quick overview of what each subdomain offers

## Links

- **Main Site**: [skill-wanderer.com](https://skill-wanderer.com) (this project)
- **Blog**: [blog.skill-wanderer.com](https://blog.skill-wanderer.com)
- **Dojo**: [dojo.skill-wanderer.com](https://dojo.skill-wanderer.com)
- **Hub** *(Planned)*: [hub.skill-wanderer.com](https://hub.skill-wanderer.com)

## Contributing

Interested in contributing to the Skill Wanderer landing page? Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For detailed guidance, please refer to our [CONTRIBUTING.md](./CONTRIBUTING.md) file (if available).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

**Note for Contributors**: This project represents our first exploration of the Vue.js/Nuxt.js ecosystem after extensive work with React.js and Angular. Clear documentation for new components and features is greatly appreciated!