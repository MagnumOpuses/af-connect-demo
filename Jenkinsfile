def stageProjectNamespace = "af-connect-stage"
def cicdProjectNamespace = "af-connect-cicd"
def bcFile = "./infrastructure/openshift/config/build-config.yml"
def dcFile = "./infrastructure/openshift/config/deployment-config.yml"
def artifactName = "af-connect-demo"
def gitRepo = 'https://github.com/MagnumOpuses/af-connect-demo.git'
def ref = "jenkins/deploy"

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
        stage('Create Image Builder') {
            when {
                expression {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            return !openshift.selector("bc", "${artifactName}").exists();
                        }
                    }
                }
            }
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            sh "oc create -f ${bcFile}"
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
                            sh "oc start-build ${artifactName} --follow"
                        }
                    }
                }
            }
        }
        stage('Deploy Image') {
            when {
                expression {
                    openshift.withCluster() {
                        openshift.withProject("${stageProjectNamespace}") {
                            return !openshift.selector("dc", "${artifactName}").exists();
                        }
                    }
                }
            }
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("${cicdProjectNamespace}") {
                            sh "oc create -f ${dcFile}"
                        }
                    }
                }
            }
        }
    }
}