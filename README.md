They say the best way to learn is to solve problems. I had a problem where I needed people to vote for the best painting in a [Paint and Sip](https://www.paintedpalaceparties.com/paint-and-sip-options) event. This project solves that problem by

1. Exporting all the paintings
1. Use a polling system to vote
1. Tally votes in a document-based database
1. Displaying the top selection(s)

Next.js is used for server side rendering. MongoDB is to used to persist data.

## Getting Started

Rename `.env.sample` to `.env.local` and update the environment variable. 

Then`, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
