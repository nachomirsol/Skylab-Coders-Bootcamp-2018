# SKYLAB CODERS BOOTCAMP 2018

## day 1 - cli terminal

# CONSOLE
 
 ### Useful commands
 
 How to see path to working directory:
 
 ```bash
 $ pwd
 ```
 
 How to list files in directory:
 
 ```bash
 $ ls
 ```
 
 How to list file in list mode:
 
 ```bash
 $ ls -l
 ```
 
 How to list hidden files:
 
 ```bash
 $ ls -a
 ```
 
 How to change directory:
 
 ```bash
 $ cd
 ```
 
 How to create a directory:
 
 ```bash
 $ mkdir
 ```
 
 How to open the present folder:
 
 ```bash
 open .
 ```
 
 How to create an empty file:
 
 ```bash
 $ touch <file>
 ```
 
 How to create a file with content in one command:
 
 ```bash
 $ echo "<content with spaces>" > helloworld.txt
 ```
 
 How to edit a file text:
 
 ```bash
 nano <file>
 ```
 
 How to see the content of a text file:
 
 ```bash
 $ cat <file>
 ```
 
 or with less:
 
 ```bash
 $ less <file>
 ```
 
 How to remove a file:
 
 ```bash
 $ rm <file>
 ```
 
 How to remove a directory recursively
 :
 
 ```bash
 $ rm -r <directory>
 ```
 
 How to copy a file:
 
 ```bash
 $ cp <from-file> <to-file>
 ```
 
 How to copy a directory:
 
 ```bash
 $ cp -r <from-file> <to-file>
 ```
 
 How to move or rename a file or directory(only rename):
 
 ```bash
 $ mv <from-file-or-directory> <to-file-or-directory>
 ```
 
 How to move a directory with content:
 
 ```bash
 $ mv -r <from-directory> <to-directory>
 ```
 
 How to clear console:
 
 ```bash
 $ clear
 ```
 
 How to see commands history:
 
 ```bash
  $ history
  ```
  
 +How to see all process run:
 +
 +```bash
 +$ ps -ax
 +```
 +
 +How to filter process shows:
 +
 +```bash
 +$ ps -ax | grep <filter> //filter example: node
 +```
 +
 +How to kill a proces by his PID(process ID):
 +
 +```bash
 +$ kill -9 <PID>
 +```