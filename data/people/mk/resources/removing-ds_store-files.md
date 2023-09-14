```
# Find and remove any .DS_Store files
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch

# Add the changes to the staging area
git add .gitignore

# Commit the changes
git commit -m "Remove .DS_Store from repository and ignore in future"

```
then in the gitignore file

```
**/.DS_Store
```