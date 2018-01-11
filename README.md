# :computer: Github create PR :computer:

Push a branch to a remote and get the PR create link. 

My daily workflow is to do feature or bug work on a branch from master. I always finish my work by pushing the branch to the remote. I then open the repo on github, click the compare button and start my PR. Why not automate some of this process. 

Github create PR will push the branch to your remote, build the compare link and return this to the termal. 

## Install

Install the package:
```
npm install gh-create-pr --save-dev
```

Add the script to your package.json
```
"scripts": {
    "pr": "gh-create-pr"
}
```

Then run this like any other npm comand
```
npm run pr
```

The output will be something like below:
```
link: https://github.com/chrislaughlin/gh-create-pr
current branch:  master

Creating PR
New PR ready to open:
https://github.com/chrislaughlin/gh-create-pr/compare/master?expand=1
```





