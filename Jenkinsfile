pipeline {
    agent any
    
stages {
        stage('Start') {
            steps {
                echo 'Build is starting'
            }
        }
        
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/WNJENGA/gallery', branch: 'master'
            }
        }
        
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }  
        
        stage('Install mocha'){
            steps {
                bat 'npm i mocha'
                
            }
        }
       
       stage('Tests'){
            steps {
                bat 'npm run test'
                
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'curl -X POST https://api.render.com/deploy/srv-cg26pp7dvk4ronvp29mg?key=sRXnTqRVeCI'
            }
        }
       
    stage('End') {
            steps {
                echo 'Build is finished'
                
            }
        }  
    }
           
 post
    {
        always
              {
                  slackSend channel: 'jenkins', message: "please find status of pipeline ${env.JOB_NAME} ${env.BUILD_NUMBER} ${env.BUILD_URL}"
        }
    }
}
