# SonarQube Implementation

This project demonstrates how to set up and use SonarQube with a Node.js application to scan code for issues and fetch analysis results programmatically.

## Installation

Run the following command to install the necessary dependencies:

```bash
npm install
```

## Start SonarQube Server

Ensure you have Docker installed. Start the SonarQube server using the following command:

```bash
docker-compose up
```

## Setup SonarQube Project

1. Open your browser and go to the SonarQube interface:
   ```
   http://localhost:9000/
   ```

2. Log in using the default credentials:
   - **Login**: `admin`
   - **Password**: `admin`vcZ

3. Create a new project:
   - Click on **"Create Project"**.
   - Enter the project name and click **"Next"**.

4. Generate a token:
   - Follow the prompts to generate a token.
   - Copy the token for later use.

![SonarQube Project Setup Screenshot](static/Screenshot 2024-12-16 at 1.11.41 PM.png)

## Run Code Scan

Run the following command to scan your code using SonarQube:

```bash
node sonar-scanner.js
```

After the scan is complete, go back to the SonarQube portal and verify the analysis results.

![SonarQube Analysis Results Screenshot](static/Screenshot 2024-12-16 at 1.02.28 PM.png)

## Fetch Issues Programmatically

To fetch issues from SonarQube, run the following command:

```bash
node fetchSonarIssues.js
```

This will retrieve the issues detected by SonarQube and display the results in the console. Example response:

```json
[
  {
    "key": "AZPOYQKlvG35F0yTySKV",
    "rule": "javascript:S125",
    "severity": "MAJOR",
    "component": "sonarqube-nodejs-project:src/app.js",
    "project": "sonarqube-nodejs-project",
    "line": 9,
    "hash": "4f9a1dd71ef1b781862469267ee70c17",
    "textRange": {
      "startLine": 9,
      "endLine": 9,
      "startOffset": 0,
      "endOffset": 27
    },
    "flows": [],
    "status": "OPEN",
    "message": "Remove this commented out code.",
    "effort": "5min",
    "debt": "5min",
    "author": "",
    "tags": [
      "unused"
    ],
    "creationDate": "2024-12-16T07:30:43+0000",
    "updateDate": "2024-12-16T07:30:43+0000",
    "type": "CODE_SMELL",
    "scope": "MAIN",
    "quickFixAvailable": true,
    "messageFormattings": []
  },
]
```

![Fetch Issues Response Screenshot](static/Screenshot 2024-12-16 at 1.03.46 PM.png)

## Notes
- Ensure the SonarQube server is running before scanning or fetching issues.
