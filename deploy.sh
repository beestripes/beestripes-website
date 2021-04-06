#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn generate

# navigate into the build directory
cd dist/static

# if you are deploying to a custom domain
# echo 'beestripes.studio' > CNAME

#git init
#git add -A
#git commit -m 'deploy'
# git tag

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:beestripes/beestripes-website.git main:gh-pages

cd -
