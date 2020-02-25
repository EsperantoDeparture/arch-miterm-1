# Arch-midterm

How to run:

```bash
# Install dependencies
npm i
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