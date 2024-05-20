if [[ ! `npm list -g npm-check-updates` =~ .*"npm-check-updates".* ]]; then
    npm i -g npm-check-updates
fi
if [ -f "package.json" ]; then
    rm package-lock.json
    npx npm-check-updates -u
    npm i
fi
