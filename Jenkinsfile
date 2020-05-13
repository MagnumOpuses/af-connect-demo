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
                            openshift.newApp("--template=${applicationName}")
                        }
                    }
                }
            }
        }

        stage('Change Source Ref to Stage') {
            steps {
                script {
                    openshift.withCluster() {
                        def p = openshift.selector("bc/af-connect-demo").object()
                        p.spec.source.git.ref = 'stage'
                        openshift.apply(p)
                    }
                }
            }
        }
        
        // stage('Build Image') {
        //     steps {
        //         script {
        //             openshift.withCluster() {
        //                 openshift.withProject("${cicdProjectNamespace}") {
        //                     openshift.selector("bc", "${applicationName}").startBuild("--wait=true")
        //                 }
        //             }
        //         }
        //     }
        // }

        // stage('Tag Image') {
        //     steps {
        //         script {
        //             openshift.withCluster() {
        //                 openshift.withProject("${cicdProjectNamespace}") {
        //                     openshift.tag("${applicationName}:latest", "${applicationName}:build-${BUILD_NUMBER}")
        //                 }
        //             }
                    
        //         }
        //     }
        // }
    }
}