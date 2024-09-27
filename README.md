# Repro for issue 7759

## Versions

firebase-tools: v13.20.0<br>
platform: macOS

## Steps to reproduce

1. Run `cd functions`
2. Run `npm i`
3. Run `firebase deploy --project PROJECT_ID`
   - Output:

```
=== Deploying to 'PROJECT_IDÏ'...

i  deploying functions
i  functions: preparing codebase default for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  artifactregistry: required API artifactregistry.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
⚠  functions: package.json indicates an outdated version of firebase-functions. Please upgrade using npm install --save firebase-functions@latest in your functions directory.
⚠  functions: Please note that there will be breaking changes when you upgrade.
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8335

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
✔  extensions: required API firebaseextensions.googleapis.com is enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged /Users/<PATH>/issues/7759/functions (61.53 KB) for uploading
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
✔  functions: required API run.googleapis.com is enabled
✔  functions: required API eventarc.googleapis.com is enabled
✔  functions: required API pubsub.googleapis.com is enabled
✔  functions: required API storage.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
✔  functions: functions folder uploaded successfully
i  functions: creating Node.js 18 (2nd Gen) function analytics-reportGtmEvent(us-central1)...
✔  functions[analytics-reportGtmEvent(us-central1)] Successful create operation.
Function URL (analytics-reportGtmEvent(us-central1)): <CLOUD_RUN_URL>
i  functions: cleaning up build files...

✔  Deploy complete!
```
