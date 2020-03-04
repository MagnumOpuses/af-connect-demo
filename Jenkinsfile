pipeline {
  agent { docker 'node:10-alpine' }
    stages {
      stage('Example Build') {
        steps {
          sh 'mvn -B clean verify'
        }
      }
    }
}