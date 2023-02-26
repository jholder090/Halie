# BOILERPLATE START-UP

# START!
## FORK AND CLONE OPTION

To fork and clone a repository on GitHub, you can follow these steps:

1) Go to the repository on GitHub (THIS ONE :)).

2) Click on the "Fork" button in the upper right corner of the page. This will create a copy of the repository under your own account.

3) Once the forking process is complete, navigate to your own account on GitHub and find the forked repository.

4) Click on the "Code" button to get the repository URL. You can choose to clone using HTTPS or SSH.

5) Open a terminal on your local machine and navigate to the directory where you want to clone the repository.

6) Use the git clone command followed by the repository URL to clone the repository to your local machine. For example, if you are using HTTPS, the command would be:

Copy code
```
git clone https://github.com/your-username/forked-repo.git
```
7) Replace "your-username" with your GitHub username and "forked-repo" with the name of the forked repository.

9) Once the cloning process is complete, you will have a local copy of the forked repository on your machine. You can make changes to the code and push the changes back to your forked repository on GitHub using standard Git commands such as git add, git commit, and git push.

9) Note that when you fork a repository, you may not have write access to the original repository, so you may not be able to push changes directly to it. Instead, you can make changes to your forked repository and submit a pull request to the original repository owner for review and potential merge.

## THE NOT fork and clone option
```
- Don't FORK OR CLONE if you want to make this your own boilerplate! Then proceed
- Create empty repo on local machine command line
1) $ mkdir "name" 
2) $ cd "name"    
3) $ git init   
4) $ git remote add "name" git@github.com:aguilana/boilerplate.git
5) $ git fetch "name"
6) $ git merge "name"/main
7) $ git branch -m master main
```
step one creates an empty directory whereever you want located

step two you will then move into that directory

step three you will initialize git locally (once in the directory)

- you can then do a ls -la command in the dir to see if git init has occurred

step four you remote add this boilerplate

step five you fetch the name of your directory

step six you merge the files

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
