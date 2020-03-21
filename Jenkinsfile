def cicdProjectNamespace = "af-connect-cicd"
def template = "./infrastructure/openshift/template.yml"
def applicationName = "af-connect-demo"

pipeline {
    agent any

    stages {
        stage('preamble') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            echo "Using project: ${openshift.project()}"
                        }
                    }
                }
            }
        }
        stage('Create Application Template') {
            when {
                expression {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            return !openshift.selector("template", "${applicationName}").exists();
                        }
                    }
                }
            }
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            openshift.newApp(template, "-p APPLICATION_NAME=${applicationName}")
                        }
                    }
                }
            }
        }
        stage('Build Image') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            def builds = openshift.selector("bc", applicationName).related('builds')
                            timeout(5) { 
                                builds.untilEach(1) {
                                    return (it.object().status.phase == "Complete")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}