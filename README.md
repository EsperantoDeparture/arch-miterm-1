# Arch-midterm

Design and Implementation:

The application was made using Loopback 4, a NodeJS framework to create APIs, and SQLite as the Database.

Requierments:
1. Store a HASH in an SQLite database received as a POST in /chain 
2. Display in a HTML (View) the information on screen every time you request /chain using GET
3. Return the last HASH when a GET request is made to /chain/last
4. Return the list in Json every time requested /api/v1/chain using GET
5. Deploy the application using Docker


How to use:

Once the app is running go to http://localhost:3000/explorer/ to open the Loopback explorer when you'll find the requierements asked for the app, so you can start by using the POST to create your first hash, click on "Try it out" and send the hash WITHOUT id and click Execute

To see the last 5 hashes created go to http://localhost:3000/chain
To see the last hash created go to http://localhost:3000/chain/last

How to run:

```bash
# Install dependencies
npm i
#and later
npm run build
# Run migrations, the first time
# the API is executed to generate the 
# datbase and every time a model is changed
npm run migrate
# Start the application
npm run start
```

With docker:

```bash
docker build -t arch1mt .
docker run -p 3000:3000 -d arch1mt
```


[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)