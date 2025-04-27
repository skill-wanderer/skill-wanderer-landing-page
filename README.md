# Skill-Wanderer Landing Page

[![CI/CD](https://github.com/JimmyYouhei/skill-wanderer-landing-page/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/JimmyYouhei/skill-wanderer-landing-page/actions/workflows/docker-publish.yml)

This repository contains the source code for the Skill-Wanderer landing page, a Nuxt.js application designed to introduce the Skill-Wanderer platform and its components (Blog, Dojo, Hub).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Development Server](#development-server)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
  - [Docker](#docker)
    - [Building Locally](#building-the-docker-image-locally)
    - [Multi-Architecture Builds](#building-multi-architecture-docker-images)
    - [Running Locally](#running-the-docker-container-locally)
  - [Helm (Kubernetes)](#helm-kubernetes)
    - [Prerequisites](#helm-prerequisites)
    - [Installation](#helm-installation)
    - [Configuration](#helm-configuration)
    - [Upgrading](#upgrading-the-chart)
    - [Uninstalling](#uninstalling-the-chart)
  - [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), or [bun](https://bun.sh/)
- [Docker](https://www.docker.com/) (for containerized deployment)
- [Helm](https://helm.sh/) (for Kubernetes deployment)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) (for Kubernetes deployment)

## Getting Started

### Installation

Clone the repository and install the dependencies using your preferred package manager:

```bash
git clone https://github.com/JimmyYouhei/skill-wanderer-landing-page.git
cd skill-wanderer-landing-page

# Choose one:
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development Server

Start the Nuxt.js development server. It will be available at `http://localhost:3000`.

```bash
# Choose one:
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun run dev
```

## Building for Production

Build the application for production deployment:

```bash
# Choose one:
npm run build
# or
pnpm build
# or
yarn build
# or
bun run build
```

To preview the production build locally:

```bash
# Choose one:
npm run preview
# or
pnpm preview
# or
yarn preview
# or
bun run preview
```

## Deployment

This application can be deployed using Docker containers or Helm charts for Kubernetes.

### Docker

This project includes Docker support for containerized deployment.

#### Building the Docker image locally

```bash
docker build -t skill-wanderer-landing-page .
```

#### Building multi-architecture Docker images

Use Docker Buildx to create images compatible with both `amd64` (x86_64) and `arm64` architectures.

```bash
# Ensure buildx builder is set up (run once)
# docker buildx create --name multiarch-builder --use
# docker buildx inspect --bootstrap

# Build for multiple platforms and load into local Docker images
docker buildx build --platform linux/amd64,linux/arm64 -t skill-wanderer-landing-page --load .

# Build and push to a container registry (replace <username> with your registry username)
# docker buildx build --platform linux/amd64,linux/arm64 -t <username>/skill-wanderer-landing-page:latest --push .
```

#### Running the Docker container locally

```bash
docker run -p 3000:3000 skill-wanderer-landing-page
```

### Helm (Kubernetes)

A Helm chart is provided in the `./charts/skill-wanderer` directory for easy deployment to Kubernetes clusters.

#### Helm Prerequisites

- Kubernetes cluster (v1.19+)
- Helm (v3.0+)
- `kubectl` configured for your cluster

#### Helm Installation

**Method 1: From Local Chart**

```bash
# Navigate to the repository root if you cloned it
helm install my-release ./charts/skill-wanderer
```

**Method 2: From Helm Repository (GitHub Pages)**

```bash
# Add the repository
helm repo add skill-wanderer https://jimmyyouhei.github.io/skill-wanderer-landing-page/
helm repo update

# Search for the chart
helm search repo skill-wanderer

# Install the chart
helm install my-release skill-wanderer/skill-wanderer
```

#### Helm Configuration

Customize the deployment by setting parameters during installation. Refer to `./charts/skill-wanderer/values.yaml` for all available options.

**Example using `--set`:**

```bash
helm install my-release skill-wanderer/skill-wanderer --set replicaCount=2 --set service.type=LoadBalancer
```

**Example using a custom `values.yaml` file:**

```bash
helm install my-release skill-wanderer/skill-wanderer -f my-custom-values.yaml
```

**Key Configuration Parameters:**

| Parameter                | Description                                  | Default                                      |
| ------------------------ | -------------------------------------------- | -------------------------------------------- |
| `replicaCount`           | Number of application pods                   | `1`                                          |
| `image.repository`       | Container image repository                   | `ghcr.io/jimmyyouhei/skill-wanderer-landing-page` |
| `image.pullPolicy`       | Image pull policy                            | `IfNotPresent`                               |
| `image.tag`              | Image tag (defaults to chart appVersion)     | `""` (uses Chart.yaml appVersion)            |
| `service.type`           | Kubernetes Service type                      | `ClusterIP`                                  |
| `service.port`           | Service port                                 | `80`                                         |
| `service.targetPort`     | Container port the service targets           | `3000`                                       |
| `ingress.enabled`        | Enable Kubernetes Ingress                    | `false`                                      |
| `ingress.className`      | Ingress Class name                           | `""`                                         |
| `ingress.hosts[0].host`  | Hostname for Ingress rule                    | `chart-example.local`                        |
| `ingress.hosts[0].paths` | Ingress paths                                | `[ { path: "/", pathType: "ImplementationSpecific" } ]` |
| `resources`              | Pod CPU/Memory requests/limits               | `{}` (No limits/requests set by default)     |

#### Upgrading the Chart

```bash
# Using local chart
helm upgrade my-release ./charts/skill-wanderer

# Using Helm repository
helm upgrade my-release skill-wanderer/skill-wanderer
```

#### Uninstalling the Chart

```bash
helm uninstall my-release
```

### CI/CD with GitHub Actions

This project utilizes GitHub Actions (`.github/workflows/docker-publish.yml`) for automated Docker image builds and pushes to the GitHub Container Registry (ghcr.io).

- **Triggers:** Pushes to `main`/`master`, tags starting with `v`, and pull requests targeting these branches.
- **Functionality:** Builds multi-architecture images (AMD64, ARM64) using Docker Buildx.
- **Registry:** Images are pushed to `ghcr.io/JimmyYouhei/skill-wanderer-landing-page`.
- **Tagging:** Images are tagged automatically based on branch, PR number, version tag, or commit SHA (e.g., `latest`, `v1.0.0`, `pr-123`).

You can pull these pre-built images for deployment.

## License

This project is licensed under the [MIT License](LICENSE).
