import os
from github import Github

# Retrieve the session token (classical GitHub token)
github_token = os.environ['config'] 

# Create a Github instance
g = Github(github_token)

# Get the user's repositories
user = g.get_user("mdewcm2024")

# Find the specific repository
repo = user.get_repo("1astud-site") 

# Get the local repository path
repo_path = "/home/runner/1astud-site"  # Replace with your actual local path

# Use GitPython to interact with the local repository
import git

# Open the local repository
repo = git.Repo(repo_path)

origin = repo.remote("origin")
origin.push(refspec='main:main')  # Push local main to remote main

print("Changes pushed successfully to mdewcm2024/1astud-site!")