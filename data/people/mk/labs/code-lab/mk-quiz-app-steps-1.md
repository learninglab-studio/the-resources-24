---
tags: mk, next, codelab
---

# mk-next-steps-20230802


## high-level steps

- terminal basics
- git basics
- js basics
    - take 5-6 hrs to learn the basics of the js language, this codeacademy link will help you learn
        - variables
        - data types: strings, integers, floats, objects, arrays, etc
        - functions
        - loops
        - conditionals
        - etc
- start your next app here? (or before js? or after react?)
- react basics
- styling
- building the app (steps for this are below)
    - delete most things
    - folder structure
    - a second page
    - components in this file
    - components in another file


## start up your Next.js app

In terminal, navigate to your Development folder. From its parent folder (probably your Home folder), that would be
```
cd Development
``` 

Then start up a [Next.js](https://nextjs.org/) app with

```
npx create-next-app@latest personality-quiz
```

Say "yes" to everything except "customize default import alias." You don't have to use Typescript (or the other things) if you don't want to, but we'll at least encourage people to try Typescript, the app router, and TailwindCSS out this year, so it doesn't hurt to say yes to them.

You can call it anything you'd like, but whatever you enter there will show up as a folder containing your starter NextJS app. So change directories into it
```
cd personality-quiz
```
open it in vs code
```
code .
```
This command will open the current directory in vs code (make sure you were in the app rather than the Development folder). Once it's open, go back to the terminal command and hit `command` and `T` together to open up a new tab in the root of your app. In either of the two tabs, type the following to start the development server.
```
npm run dev
```
Once you do this, you should be able to go to [localhost:3000](http://localhost:3000/).

To add to github, create the repo and then:

```
git remote add origin https://github.com/learninglab-studio/quiz-for-emmy.git
git branch -M main
git push -u origin main
```

## simplifying the next app

- let's delete nearly everything in the `/src/app/page.tsx` file, simplifying the page dramatically.
    ```
    import Head from "next/head"

    export default function Page() {
      return (
        <div className="p-4">
          <Head>
            <title>LL Personality Quiz</title>
            <meta name="description" content="A place to try out scrollytelling with code." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="min-h-screen py-16 flex flex-col justify-center items-center">
            <h1 className="text-7xl font-black">
              personality quiz
            </h1>
          </main>
          <footer className="flex py-8 border-t justify-center items-center">
            <span>notes will go here</span>
          </footer>
        </div>
      )
    }
    ```
- Inside the `<title>` tags you can put the title of your site/page, this will show up in the browser tab (among other places) as the title of your page
- Put a simple title for your project between the `<h1>` tags

### create a new page with a simple Airtable fetch

- to create a new page, create a new folder in the `/src/app` folder and put a `page.tsx` or `page.js` file in it, like `/src/app/airtable-test/page.js`. Inside export a simple react component and your page shoud work.
- here's a very simple test of the airtable api you can use to make sure your API key is working 
    ```
    import Airtable from "airtable"

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

    async function getData() {
        try {
          const records = await base('Questions').select().all();
          return records;
        } catch (error) {
          throw new Error('Failed to fetch data from Airtable');
        }
      }

    export default async function Page() {
        const data = await getData()
        return (
            <div>
                <h1 className="font-black text-4xl">test quiz</h1>
                {data.map((record) => { return (
                    <>
                      <h3 className="font-bold">{record.id}</h3>
                      <pre>{JSON.stringify(record, null, 4)}</pre>
                    </>)} 
                )}
            </div>
        )
    }
    ```
- (be sure to put credentials in a `.env.local` file at the root of your project)
    ```
    AIRTABLE_API_KEY=XXXXXXXXXXXXXXXXXXXXX
    AIRTABLE_BASE_ID=XXXXXXXXXXXXXXXXXXXX
    ```
- this should work if you have values for the Table and fields that match your base
- 

### dynamic routes






### styles

Right now there are two style sheets having effects on our main page. The `/styles/globals.css` is imported in our `_app.js` file. There's not much here, but let's get rid of the dark-mode handler. Delete the following:

```
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
```

### creating some folders

Next up, let's create some folders for our code. This can get complicated, and things have changed a bit in the last year. Here's a [a good post](https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure) we referenced when using the old routing system. We're still looking for a good article on the new system. 

All of the code we write will go on the `/src` folder and the pages will all go in `/src/app`, but we'll also create some additional folders:
- we'll create a folder called `/src/components` for our react components
- we'll create a folder called `/src/lib` for all of the tools that aren't really single react components, but which we'll want to use across our app's components and pages (like utilities for getting data from API's for instance)
- (optional) if you want to use the old system, create a `/src/pages` folder, where you can put pages that follow the logic of Next prior to Next 13.
- then let's create a folder outside of `/src` for our markdown docs (like blog posts, if the app we're building will have a blog, or maybe just notes to ourselves we take while developing). You can call it anything you want, but we'll call it `/markdown` in this doc just so we remember what sorts of files it has in it.

#### the old way (Pages router)
- we put all of our pages and API routes in `/pages` 
- we'll be writing other code too: sometimes components that will go in our pages, sometimes utilities that will help us get data from external APIs, generate pages dynamically, etc. etc. And we'll put thiSo in the root of the project, let's create a folder called `/src` and then, within that folder, one called `components` and at least one other another called `lib`. We'll put all of our react components in `components` and we'll put a lot of our other logic in `lib`. We could add a folder called `utils` for really little bits of code we might want to use across this app (and potentially even other apps) that are less connected to the logic of THIS app.

## creating a first component and second page

Let's now create our first react component.

In the `/src/components` folder, create a new file called `my-first-component`.




