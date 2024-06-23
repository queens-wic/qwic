## Technologies
### Frontend Technologies
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend Technologies
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

### Run the frontend locally
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Local database development w/ docker


For development, we will be using docker to First, ensure you have docker downloaded [download here](https://www.docker.com/products/docker-desktop/). 

We are utilizing docker-compose to for our postgreSQL database in local development to allow us to quickly spin-up a fully-configured database with a single command `docker compose up`. When we go through the process of deploying the website, this workflow will change.


## Helpful Links
- generating consistent commit messages [conventional commits vscode extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- setup tutorial video followed [(docker postgresql & nextjs)](https://www.youtube.com/watch?v=6UYkcOQUcZc)
- How do prisma and Next.js fit together? [explanation](https://www.prisma.io/nextjs)