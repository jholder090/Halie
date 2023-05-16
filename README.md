# An e-commerce application for purchasing natural skin care products

## Currently, I am working on an image carousel for the home page. This application will eventually be deployed for my friend's business!

### Other technologies utilized:
+ Tailwind CSS styling
+ React.js
+ Redux Toolkit for state storage
+ Node for server runtime environment
+ Express for backend architecture
+ RESTful API principles
+ PostgreSQL for User, Product and Cart data table storage
+ Sequelize for my Object Relational Mapper to database
+ Axios for backend data retrieval to frontend


# Application Start-Up

## Creating a new repository
1. Create a new, empty directory in the terminal of your local machine.
2. Initialize empty repository with ```git init``` command.
3. Add this repo to your machine with one of the following methods (REMEMBER to put in your ACTUAL NAME for this repo):
+ HTTPS method: ```git remote add "YOUR_REPO_NAME_HERE" https://github.com/jholder090/TempleRose.git```
+ SSH method: ```git remote add "YOUR_REPO_NAME_HERE" git@github.com:jholder090/TempleRose.git```
4. ```git fetch "YOUR_REPO_NAME_HERE"```
5. ```git merge "YOUR_REPO_NAME_HERE"/main```
6. ```git branch -m master main```

## Starting up and customizing the application
1. Update the project name and description in `package.json`.
2. Command `npm install` to install all project dependencies.
3. Create a .env file in the root directory of the project and add required keys

**IMPORTANT: For the application to render as it currently stands, you must do one of two things:
1. Procure your own Stripe Publishable Key and Stripe Secret API Key for the application to render. Please visit stripe.com to get your own keys.
2. Go to the file /client/App.js and comment out lines 17-32,38-39,43-44. This will effectively remove the Stripe API from the application for temporary purposes.**

4. Create two postgres databases ("YOUR_REPO_NAME_HERE" should match the `name`
  parameter in `package.json`):
* These commands will create both your **development** and **test** databases

```
createdb "YOUR_REPO_NAME_HERE"
createdb "YOUR_REPO_NAME_HERE"-test
```
5. Command ```npm run seed``` to seed starter data to your database.
6. Type ```npm run start:dev``` to start the server and get the application up and running.
7. ```npm run start:dev:seed``` will start the server and seed the database at the same time.

<!-- ## Fork and Clone the Repository

1. Click "Fork" in the upper-right corner of this page.
2. Add your personal details to the forked repo and click "Create Fork".
3. Once the forking process is complete, click the green "Code" button in the upper-right area of your forked repo.
4. Choose to clone with HTTPS or SSH method.
5. Open a terminal on your local machine and navigate to the directory where you want to clone this repo.
6. Copy the following code to the command line (remember to put in your actual username):
+ For HTTPS:
  ```git clone https://github.com/"YOUR-USERNAME-HERE"/TempleRose.git```
+ For SSH:
  ```git clone git@github.com:"YOUR-USERNAME-HERE"/TempleRose.git```
7. You will now have your own version of this repository. PLEASE NOTE that you may not have write access to the original repo. You can make changes on your forked version, however. -->

