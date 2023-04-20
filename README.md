## Mendix Platform SDK Script

This script is designed to work with the Mendix Platform SDK and performs the following tasks:

- Retrieves an app with the given app ID
- Creates a temporary working copy of the app on the specified branch
- Opens the model in the working copy
- Deletes any excluded documents in the model
- Commits the changes to the repository with a specified commit message

To run the script, please follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Install the Mendix Platform SDK client by running `npm install mendixplatformsdk` in the project directory.
3. Replace the `APP_ID` and `BRANCH_NAME` variables in the script with your own values.
4. Replace the `commitMessage` variable with a commit message of your choice.
5. Save the script as `script.js`.
6. Run the script by entering `node script.js` in your command line interface.

That's it! The script should now be up and running. If you encounter any issues, please make sure that you have followed the above steps correctly and that you have the Mendix Platform SDK client installed.