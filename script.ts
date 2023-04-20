// Import the Mendix Platform SDK client
import { MendixPlatformClient } from "mendixplatformsdk";

// Define the app ID, branch name, and commit message
const appId = 'APP_ID';
const branch = "BRANCH_NAME";
const commitMessage = "Deleted excluded documents";

// Define the main async function
async function main() {
    // Create a new instance of the MendixPlatformClient
    const client = new MendixPlatformClient();

    // Retrieve the app with the given app ID
    const app = client.getApp(appId);

    // Create a temporary working copy of the app on the given branch
    const workingCopy = await app.createTemporaryWorkingCopy(branch);

    // Open the model in the working copy
    const model = await workingCopy.openModel();

    // Get a list of all documents in the model
    const documentInterfaceList = model.allDocuments();

    // Load each document and check if it is excluded
    for (const document of documentInterfaceList) {
        await document.load();
        if (document.excluded) {
            // If the document is excluded, log a message and delete it
            console.log(`${document.name} is excluded, deleting document`);
            document.delete();
        } else {
            // If the document is not excluded, log a message
            //console.log(`${document.name} is not excluded`);
        }
    }

    // Flush any changes made to the model
    await model.flushChanges();

    // Commit the changes to the repository with the given commit message
    await workingCopy.commitToRepository(branch, { commitMessage: commitMessage });
}

// Call the main function and catch any errors
main().catch(console.error);