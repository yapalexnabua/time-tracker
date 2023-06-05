# Pre-requisites
- Make sure you have Node and NPM installed on your computer.
- Refer to this link if you haven't yet: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac

# Setup
- cd into the `server` folder and run `npm install`
- Rename the `.env.example` file to `.env` either manually or by running this command on your terminal: `cp .env.example .env ` while still on the the `server` folder
- Copy the MongoDB Connection String from: https://docs.google.com/document/d/1EG5E_uEzbdEJalW_DGmwNnHxM1YRtivFn5-6XTuGSJE/edit?usp=sharing. Note: I would have used a secret link instead but those are for one-time use only so to be safe in case there is more than one person that will be checking my work, I used Google Docs instead.
- Paste the connection string as the value for `DATABASE_URL` in your `.env` file.
- Run `npm run serve`
- Next, cd into the `client` folder and run `npm install`
- While still in the `client` folder, rename the `.env.example` file to `.env` either manually or by running `cp .env.example .env`
- Run `npm run dev`
- You should now be able to open the app on your browser by visiting http://localhost:5173/