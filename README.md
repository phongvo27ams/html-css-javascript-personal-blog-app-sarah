# Create a new repository on the command line

echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/phongvo27ams/test.git
git push -u origin main

# Push an existing repository from the command line

git remote add origin https://github.com/phongvo27ams/test.git
git branch -M main
git push -u origin main

# Import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
