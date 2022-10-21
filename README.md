# Next.js blog with comment section

This is a demo of how to add a simple comment section to blog post using [Next.js](https://nextjs.org), [Sanity.io](https://www.sanity.io), and [Vercel](https://vercel.com).


### Prerequisites

 - node.js 16.10

### Installation & Configuration

In the project folder:

```
npm install --legacy-peer-deps
```

Create a `.env` file with the following contents, filling the values
as appropriate:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=
SANITY_API_WRITE_TOKEN=
SANITY_PREVIEW_SECRET=

# For Studio
SANITY_STUDIO_API_PROJECT_ID=
SANITY_STUDIO_API_DATASET=
```

These environment variables specify the value that Next and Sanity will
use to pull data from the Sanity API. You can get or create the tokens, ids, and secrets from [manage.sanity.io](https://manage.sanity.io).


### Running the front-end

Once you have installed and configured the project, you can run 
the project as follows:

```bash
# Run the frontend
npm run dev

# Run the Studio
npm run start:sanity
```

The blog will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.
