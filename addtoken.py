import os
import re
import subprocess

# Retrieve the session token (classical GitHub token)
session = os.getenv("config")

if session:
    # Regex pattern to match the URL in the .git/config file
    url_pattern = re.compile(r"url\s*=\s*https://(.*?@)?(.*)")

    with open(".git/config", "r+") as config_file:
        config_data = config_file.read()

        # Find the URL and insert the token before the hostname
        def replace_url(match):
            prefix, hostname = match.groups()
            return f"url = https://{session}@{hostname}"

        modified_data = url_pattern.sub(replace_url, config_data)

        # Write the modified data back to the file
        config_file.seek(0)
        config_file.write(modified_data)
        config_file.truncate()

    print("GitHub token inserted successfully!")

    # Execute git pull
    subprocess.run(["git", "pull"])
    #print(session)

    # Remove the token from the URL
    with open(".git/config", "r+") as config_file:
        config_data = config_file.read()

        def remove_token(match):
            prefix, hostname = match.groups()
            return f"url = https://{hostname}" 

        modified_data = url_pattern.sub(remove_token, config_data)

        config_file.seek(0)
        config_file.write(modified_data)
        config_file.truncate()

    print("Token removed from .git/config.")
else:
    print("Error: Session token not found in the environment.")