#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn generate

# navigate into built
cd dist/static

# deploy to a custom domain
echo 'beestripes.io' > CNAME

git init
git add -A
git commit -m 'deploy'

# push
git push -f git@github.com:beestripes/beestripes-website.git master:gh-pages

cd -
