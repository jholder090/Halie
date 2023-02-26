# BOILERPLATE START-UP

## START _ IMPORTANT _

```
1. Don't FORK OR CLONE
2. Create empty repo on local machine command line
    -- mkdir "name"
    -- cd "name"
    -- git init
3) git remote add "name" git@github.com:aguilana/boilerplate.git
4) git fetch "name"
5) git merge "name"/main
6) git branch -m master main
```

## GITHUB REPO

Create an empty github repo and then add from local machine and you should be all set.

### TO START:

1. npm install (or yarn) to install all dependencies
2. change the name of the package.json to whatever name you want
3. createdb in postgres to whatever you name the package.json
4. for testing can create a 'createdb "name"-test' as well
5. Sync and Seed by running npm run seed
6. npm run start:dev to get started and will run on local host 5000

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

#Happy Coding
