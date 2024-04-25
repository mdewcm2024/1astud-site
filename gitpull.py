# pip install PyGithub GitPython
import os
from github import Github
import git

# Retrieve the session token (classical GitHub token)
github_token = os.environ['config'] 

# Create a Github instance
g = Github(github_token)

# Get the user's repositories
user = g.get_user("mdewcm2024")

# Find the specific repository
repo = user.get_repo("1astud-site") 

# Get the local repository path (replace with your actual path)
repo_path = "/home/runner/1astud-site"  

# Open the local repository using GitPython
repo = git.Repo(repo_path)

# Fetch the latest changes from the remote "origin"
origin = repo.remote("origin")
origin.fetch()

# Get the local and remote main branches
local_main_branch = repo.heads.main
remote_main_branch = origin.refs.main

# Merge the remote main branch into the local main branch (fast-forward)
local_main_branch.set_commit(remote_main_branch.commit)

print("Changes pulled successfully from mdewcm2024/1astud-site!")