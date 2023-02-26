# BOILERPLATE START-UP

## START! ***IMPORTANT***

```
- Don't FORK OR CLONE
- Create empty repo on local machine command line
1) $ mkdir "name" // creates folder
2) $ cd "name"    // moves into folder
3) $ git init     // initializes git
4) $ git remote add "name" git@github.com:aguilana/boilerplate.git
5) $ git fetch "name"
6) $ git merge "name"/main
7) $ git branch -m master main
```

## GITHUB REPO

Create an empty github repo and then add from local machine and you should be all set.

### TO START:

1. npm install (or yarn) to install all dependencies
2. create a .env or .env.local file in the root directory and add your secrets, keys, etc.
3. change the name of the package.json to whatever name you want
4. createdb in postgres to whatever you name the package.json
5. for testing can create a 
```
$ createdb "name"-test 
```
6. Sync and Seed by running npm run seed
7. npm run start:dev to get started and will run on local host 5000

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)

## SETUP

As you will see this is setup to use the following:

```
1. React
2. Redux
3. Express
4. Sequelize
5. Postgres
6. Webpack
7. Babel
8. CSS Modules
9. TailwindCSS
10. .env files
```

## Happy Coding
