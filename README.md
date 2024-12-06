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
