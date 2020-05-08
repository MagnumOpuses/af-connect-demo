def cicdProjectNamespace = "af-connect-cicd"
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
                            return !openshift.selector("bc", "${applicationName}").exists();
                        }
                    }
                }
            }
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            openshift.newApp("--template=af-connect-demo")
                        }
                    }
                }
            }
        }
        stage('Change Source Ref to Stage') {
            steps {
                script {
                    openshift.withCluster() {
                        def p = openshift.selector('bc/af-connect-demo').object()
                        p.spec.source.git.ref = 'master'
                        openshift.apply(p)
                    }
                }
                script {
                    openshift.withCluster() {
                        def imageTag = openshift.selector('templates/af-connect-demo').object()
                        def tag = imageTag.parameters[0].value
                        echo "image tag:pre-release:${tag}"
                    }
                }
            }
        } 
        /*
        stage('Build Image') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            openshift.selector("bc", "${applicationName}").startBuild("--wait=true")
                        }
                    }
                }
            }
        }

        stage('Tag Image') {
            steps {
                script {
                    sh "oc tag ${applicationName}:latest ${applicationName}:stage-${BUILD_NUMBER}"
                    
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            openshift.tag("${applicationName}:latest", "${applicationName}:dev-${BUILD_NUMBER}")
                        }
                    }
                    
                }
            }
        }
        */
        
    }
}