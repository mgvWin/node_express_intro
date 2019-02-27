#!/bin/bash

if [ -d /migrate_tmp ]; then
  rm -rf migrate_tmp;
fi

tsc --outDir ./migrate_tmp;

node -r dotenv/config node_modules/.bin/sequelize db:migrate:undo:all;
node -r dotenv/config node_modules/.bin/sequelize db:migrate;

node -r dotenv/config node_modules/.bin/sequelize db:seed:undo:all;
node -r dotenv/config node_modules/.bin/sequelize db:seed:all;

rm -rf migrate_tmp;