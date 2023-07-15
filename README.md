# kararizzardi.com

My personal website. Built using Typescript, Next.js, MUI, Docker, and Nginx

## If you're interested in running the project yourself:

### Prerequisites

1. Clone this repository

2. Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. This project uses Docker Compose; Docker Desktop includes Docker Compose as part of the installation.

### Development

First, run the development server in the root directory:

```bash
# Build and up dev in detached mode using docker compose v2
docker compose -f docker-compose.dev.yml up -d --build

# To check on the containers (next-app and nginx)
docker ps
```

Open [http://localhost](http://localhost) with your browser to see the magic.

You can start editing the site by modifying the files within `next-app/src/`. The pages auto-update as you edit the files.

To spin down the Docker containers:

```bash
docker compose -f docker-compose.dev.yml down
```

### Production

First, run the production server in the root directory:

```bash
# Build and up prod in detached mode using docker compose v2
docker compose -f docker-compose.prod.yml up -d --build

# To check on the containers (next-app and nginx)
docker ps
```

Open [http://localhost](http://localhost) to see the magic.

To spin down the Docker containers:

```bash
docker compose -f docker-compose.prod.yml down
```

## Other Docker commands I have found useful

```bash
# Stop all running containers (note: docker compose down is preferred)
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Wipe Docker clean to free space
docker system prune -af --volumes
```
