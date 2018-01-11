//System Imports
const exec = require('child_process').exec;

//Project Imports
const constants = require('./constants');

const onPushBranch = (repoName, branchName) => (error) => {
    console.log('New PR ready to open:');
    console.log(constants.URL + repoName + '/compare/' + branchName + '?expand=1');
};

const onBranchName = (repoName) => (error, stdout) => {
    console.log('current branch: ', stdout);
    const branchName = stdout.trim();
    console.log("Creating PR");
    exec(constants.PUSH_BRANCH, onPushBranch(repoName, branchName))
};

const onRemotes = (error, stdout) => {
    const repoName = stdout.substring(
        stdout.indexOf(constants.START) + 1,
        stdout.indexOf(constants.END)
    );
    console.log(`link: ${constants.URL}${repoName}`);
    exec(constants.BRANCH_NAME, onBranchName(repoName))
};

module.exports = onRemotes;
