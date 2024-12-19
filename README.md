# Deploy

```bash
yarn deploy sravanam 34.159.248.160

rsync --progress -azh ./ecosystem.config.js -e "ssh -i /home/rrd/.ssh/sravanamGCI" sravanam@34.159.248.160:/var/www/jaccoter.1108.cc/ecosystem.config.js

rsync --progress -azh ./data/krisnavolgy.sqlite3 -e "ssh -i /home/rrd/.ssh/sravanamGCI" sravanam@34.159.248.160:/var/www/jaccoter.1108.cc/data/krisnavolgy.sqlite3
```

## Start on production

As user sravanam from /var/www/jaccoter.1108.cc

```bash
pm2 ls
pm2 start ecosystem.config.js
```

## Move to 1108 server

1. Google analytics
2. Download from sravanam - database, images
3. Database
   - purge orders
   - generate secure user passes
4. Create ssh key for nvd user
5. Update ecosystem.config.js PORT 3005
6. Make database dump, on server file backup, off server dump, and files
7. Set up krisnavolgy.hu for reverse proxy
8. Change deploy script to deploy to 1108 server and to auto restart pm2
9. Deploy
