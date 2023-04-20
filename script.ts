import { MendixPlatformClient } from "mendixplatformsdk";

const appId = 'APP_ID';
const branch = "BRANCH_NAME";
const commitMessage = "Deleted excluded documents";

async function main() {
    const client = new MendixPlatformClient();

    const app = client.getApp(appId);
    const workingCopy = await app.createTemporaryWorkingCopy(branch);
    const model = await workingCopy.openModel();

    const documentInterfaceList = model.allDocuments();

    // Load each document and check if it is excluded
    for (const document of documentInterfaceList) {
        await document.load();
        if (document.excluded) {
            console.log(`${document.name} is excluded, deleting document`);
            document.delete();
        } else {
          //  console.log(`${document.name} is not excluded`);
        }
    }
    await model.flushChanges();

    await workingCopy.commitToRepository(branch, { commitMessage: commitMessage });

}

main().catch(console.error);