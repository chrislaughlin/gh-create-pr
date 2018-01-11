const START = ':';
const END = '.git';
const URL = 'https://github.com/';
const REMOTES_CMD = 'git remotes';
const BRANCH_NAME = 'git branch | grep \\* | cut -d \' \' -f2';
const PUSH_BRANCH = 'git push -u origin';

module.exports = {
    START,
    END,
    URL,
    REMOTES_CMD,
    BRANCH_NAME,
    PUSH_BRANCH
};
