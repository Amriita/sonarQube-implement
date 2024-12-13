const axios = require('axios');
require('dotenv').config();

// Load environment variables
const { SONARQUBE_URL, SONARQUBE_TOKEN, COMPONENT_KEY } = process.env;

if (!SONARQUBE_URL || !SONARQUBE_TOKEN || !COMPONENT_KEY) {
  console.error('Missing environment variables. Please set SONARQUBE_URL, SONARQUBE_TOKEN, and COMPONENT_KEY in .env');
  process.exit(1);
}

// Fetch issues from SonarQube
async function fetchSonarQubeIssues() {
  try {
    const response = await axios.get(`${SONARQUBE_URL}/api/issues/search`, {
      params: {
        componentKeys: COMPONENT_KEY,
        statuses: 'OPEN',
        types: 'CODE_SMELL',
        severities: 'MINOR,MAJOR,CRITICAL,BLOCKER',
      },
      auth: {
        username: SONARQUBE_TOKEN,
        password: '', // Leave this empty for token-based authentication
      },
    });

    const issues = response.data.issues;

    console.log('Fetched issues:', JSON.stringify(issues, null, 2));

    return issues;
  } catch (error) {
    console.error('Error fetching issues from SonarQube:', error.message);
    process.exit(1);
  }
}

// Execute the function
fetchSonarQubeIssues();
