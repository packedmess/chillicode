#!/bin/sh

# Update project on server
git pull &&
npm ci &&
rm -rf .next &&
npm run app:build &&
npm run app:start-pm2
