# Skill-Wanderer Landing Page

A Nuxt.js application for the Skill-Wanderer landing page.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Docker

This project includes Docker support for containerized deployment.

### Building the Docker image locally

```bash
docker build -t skill-wanderer-landing-page .
```

### Building multi-architecture Docker images

To build Docker images for multiple architectures (arm64, amd64/x86_64):

```bash
# Create a new builder instance
docker buildx create --name multiarch-builder --use

# Bootstrap the builder
docker buildx inspect --bootstrap

# Build for multiple platforms
docker buildx build --platform linux/amd64,linux/arm64 -t skill-wanderer-landing-page --load .
```

For pushing to a registry:

```bash
# Replace with your registry/username
docker buildx build --platform linux/amd64,linux/arm64 -t username/skill-wanderer-landing-page:latest --push .
```

### Running the Docker container locally

```bash
docker run -p 3000:3000 skill-wanderer-landing-page
```

## CI/CD with GitHub Actions

This project uses GitHub Actions to automatically build and push Docker images to GitHub Container Registry (ghcr.io).

### Workflow Details

- The workflow runs on pushes to `main` or `master` branches, on tag pushes starting with `v`, and on pull requests to these branches.
- It builds multi-architecture Docker images for both AMD64 and ARM64 platforms using Docker Buildx.
- Images are automatically tagged based on branch name, PR number, version tags, and commit SHA.

### Using the Container Images

Once built and pushed, container images are available at:

```
ghcr.io/JimmyYouhei/skill-wanderer-landing-page:tag
```

Where `tag` is one of the automatically generated tags based on the workflow.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information about Nuxt.js deployments.

## Helm Chart

This project includes a Helm chart for deploying the application to Kubernetes.

### Helm Repository

The Helm chart is available in a Helm repository hosted on GitHub Pages. You can add the repository to your Helm installation with:

```bash
helm repo add skill-wanderer https://jimmyyouhei.github.io/skill-wanderer-landing-page/
helm repo update
```

To search for available chart versions:

```bash
helm search repo skill-wanderer
```

### Prerequisites

- Kubernetes cluster
- Helm 3.0+
- kubectl configured to communicate with your cluster

### Installing the Chart

To install the chart with the release name `my-release`:

```bash
helm install my-release ./charts/skill-wanderer
```

### Configuration

The following table lists the configurable parameters of the skill-wanderer chart and their default values.

| Parameter                | Description             | Default                    |
| ------------------------ | ----------------------- | -------------------------- |
| `replicaCount`           | Number of replicas      | `1`                        |
| `image.repository`       | Image repository        | `ghcr.io/JimmyYouhei/skill-wanderer-landing-page` |
| `image.pullPolicy`       | Image pull policy       | `IfNotPresent`             |
| `image.tag`              | Image tag               | `latest`                   |
| `service.type`           | Service type            | `ClusterIP`                |
| `service.port`           | Service port            | `80`                       |
| `service.targetPort`     | Target port             | `3000`                     |
| `ingress.enabled`        | Enable ingress          | `false`                    |
| `resources`              | CPU/Memory resource requests/limits | Check values.yaml for defaults |

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`.

For example:

```bash
helm install my-release ./charts/skill-wanderer --set replicaCount=2
```

Alternatively, a YAML file that specifies the values for the parameters can be provided while installing the chart:

```bash
helm install my-release ./charts/skill-wanderer -f values.yaml
```

### Upgrading the Chart

To upgrade the chart:

```bash
helm upgrade my-release ./charts/skill-wanderer
```

### Uninstalling the Chart

To uninstall/delete the deployment:

```bash
helm uninstall my-release
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information about Nuxt.js deployments.
