#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn generate

# navigate into built
cd dist/static

# deploy to a custom domain
echo 'beestripes.studio' > CNAME

git init
git add -A
git commit -m 'deploy'

# tag a release
# git tag

# push
git push -f git@github.com:beestripes/beestripes-website.git master:gh-pages

cd -
