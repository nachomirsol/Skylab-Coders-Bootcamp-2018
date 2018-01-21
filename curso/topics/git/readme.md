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


##### Other to update forked repo from original repo:
```bash
git remote add upstream https://github.com/original/proyecto.git(url del proyecto original de donde has hecho fork)
```
```bash
git fetch upstream
```
##### Working in local:

First we create the repo in github. Then we make a git init in the folder where we want to have the repo.
We can have a good directory structure.

For every change we make in our directories or files we can do git add . in order to put everything at the staging area.
If whole things are at the staging area we can do git commit -m 'comment about the changes'

```bash
So at the end we had:
1- git init for the .git file at the repo
2- git add <folder name/file name> or git add .
3- git commit -m 'comment'
```

##### Remote:
If we have commited all changes at local, we can send it to remote by doing git push url.
But if it is the first time you make push, you have to link your url remote with your local:
git remote add origin https://github.com/username/myproject.git
then, git push origin master

```bash
So at the end we had:
1- git remote add origin https://github.com/username/myproject.git - in order to link local with repo
2- git push origin master - to send local commited changes to remote
```

##### Forks
When you like the repository of someone or you just have to work in it you can have it in your github or in your local.
To copy the repository of someone you have to make a fork. When you do it you have it at your remote github account.
To bring it to local you have to clone the forked repo.

```bash
1- Fork the repository you want in github to have it in your remote
2- git clone url - to clone the repository from your github to local.
```
http://aprendegit.com/fork-de-repositorios-para-que-sirve/

##### Fork update
http://community.logicalbricks.com/node/217





