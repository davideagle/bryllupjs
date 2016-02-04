#!/usr/bin/bash
apt-get update
apt-get install git -y
apt-get install apache2 -y
apt-get install mongodb -y
apt-get install nodejs -y
apt-get install npm -y
git clone https://github.com/davideagle/startbootstrap-creative.git /var/www/html/bryllup
git clone https://github.com/davideagle/bryllupjs.git /opt/bryllupjs
cd /opt/bryllupjs/
npm install
npm install pm2 -g
ln -s /usr/bin/nodejs /usr/bin/node
pm2 start app.js
