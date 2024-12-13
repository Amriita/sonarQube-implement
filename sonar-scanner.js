const scanner = require('sonarqube-scanner').default;

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_c54c74e0132b080e38a50a0e0167c6b2276c8b96",
        options: {
            'sonar.projectName': 'sonarqube-nodejs-project',
            'sonar.projectDescription': 'Node.js project with SonarQube integration',
            'sonar.projectKey': 'sonarqube-nodejs-project',
            'sonar.projectVersion': '0.0.1',
            'sonar.sources': './src',
            'sonar.tests': './tests',
            'sonar.exclusions': '**/node_modules/**',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.login':'sqp_c54c74e0132b080e38a50a0e0167c6b2276c8b96',
            'sonar.cpd.minLines':'1'
        }
    },
    error => {
        if (error) {
            console.error(error);
        }
        process.exit();
    }
);
