# Pre-requisites
- Make sure you have Node and NPM installed on your computer.
- Refer to this link if you haven't yet: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac

# Setup
- Clone the repo with SSH: `git clone git@github.com:yapalexnabua/time-tracker.git` or HTTPS: `git clone https://github.com/yapalexnabua/time-tracker.git` although I believe GitHub doesn't allow cloning via HTTPS anymore. In case you encounter an error when cloning via HTTPS, refer to this link: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account to setup an SSH key with GitHub.
- Open your terminal and run the following command: `cd server && npm install` to change directories into your `server` folder and install the server dependencies
- Rename the `.env.example` file in the `server` folder to `.env` either manually or by running this command on your terminal: `cp .env.example .env ` while still on the `server` folder
- Copy the MongoDB Connection String from: https://docs.google.com/document/d/1EG5E_uEzbdEJalW_DGmwNnHxM1YRtivFn5-6XTuGSJE/edit?usp=sharing. Note: I would have used a secret link instead but those are for one-time use only so to be safe in case there is more than one person that will be checking my work, I used Google Docs instead.
- Paste the connection string as the value for `DATABASE_URL` in your `.env` file.
- Run `npm run serve` while still on the `server` folder
- Next, open another tab on your terminal and change directories into the `client` folder and install the client dependencies with `cd ../client && npm install`. Note that this is only if you are still in the `server` folder. The command will change slightly if you are in the root folder: `cd client && npm install`.
- While still in the `client` folder, rename the `.env.example` file to `.env` either manually or by running `cp .env.example .env`
- While still in the `client` folder, run `npm run dev`
- You should now be able to open the app on your browser by visiting http://localhost:5173/