# Website der Fachschaft Geoinformatik Münster

We are no longer allowed to use wordpress. Therefore, I built this site using next.js.

## Dynamic Content

Even though it is built using next.js, there is a way to include content dynamically, as there is a way to control certain aspects of the site dynamically.

- Blogposts ("news") can be added by adding a simple html file to `./content/gi/news-articles`
- Job Postings can be added by adding a simple html file to `./content/gi/jobs`
- Other dynamic stuff is controlled via JSON in `./content/gi/page-content`

## Development

This app uses next.js framework and App-Router. Routes inside the side are given by the directory structure within `./src/app`. Page content is then defined inside the `page.js` file.

First, clone this repository.

```bash
git clone 
```

Next, install dependencies

```bash
npm install
```

Then, run the development server.

```bash
npm run dev
```

Changes to the site are then visible in real-time in the browser ander `localhost:3000`

## Testing

Test what has been changed by creating a production build

```bash
npm run lint
```

If your code has any Errors or warnings, they will then be shown in the console. Fix them in the Source files and run this command again, until the process passes without Errors or Warnings.

```bash
npm run start
```

If everything is okay, you can Deploy.

## Deployment

This app is best deployed via Docker. A Dockerfile is provided, as well as a prebuilt package.

## Pipeline

Pushes and Merges on Main will automatically create a new Package. (TODO)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
