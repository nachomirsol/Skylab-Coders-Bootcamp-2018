# git

### Concepts
We mainly have 2 branches in workflow, master branch and develope branch, we work in paralel one for updates and commits so that when we reach a good version while making diferent commits, we move it to develope branch. After releasing and reviewed develope version we move it to master branch.

We have work directory, stage area (temp box example) and reposotory in local site. To move from work directory to stage git add,


### Useful Commands
How to initialize a local Git repository:

```bash
$ git init <repository-name>
```

How to init a bare repository:

```bash
$ git init --bare
```

How to clone a repository, from remote repo to local repo:

```bash
$ git clone <url>
```

How to check repositoty status:

```bash
$ git status
```

How to add changes to staging area:

```bash
$ git add <file-or-directory>
```

How to add all changes to staging area:

```bash
$ git add -A
```
How to remove changes from staging area:

```bash
git rm --cached <file-or-dorectory>
```

How to add changes from staging area to my local repository:

```bash
$ git commit -m "Add a comment to describe commit"
```

How to see a commit's log:

```bash
$ git log
```

How to uptdates changes to remote repository:

```bash
$ git push
```

How to update my local repository from remote repository:

```bash
$ git pull
```

How to return to a before version:

```bash
$ git chekcout <commit-code>
```

How to create a new branch:

```bash
$ git branch <name-new-branch>
```

How to create and change a new branch:

```bash
$ git checkout -b <name-new-branch>
```

How to see the branch working:

```bash
$ git branch
```

How to change branch:

```bash
$ git branch <name-branch>
```

How to merge my branch with another branch:

```bash
$ git merge <name-branch> 
```

How to delete branch:

```bash
$ git branch -d <name-branch>
```

How to see settings of the repository:

```bash
$ git config --list
```

### Working with a fork repo:

How to add remote upstream to pull a fork repo:

```bash
$ git remote add upstream <link-master-repo>
```

How to see remote links of my repo

```bash
$ git remote -v
```

##### 3 steps for update my fork-repo from master-repo:

How to bring the change's from master-repo to my-fork-repo-local:

```bash
$ git fetch upstream
```

How to merge(save) changes from upstream/masyrt yo my-fork-repo-local:

```bash
$ git merge upstream/master
```

Last step is make a git push, for save changes in my-fork-repo-master:

```bash
$ git push
```





