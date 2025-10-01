pipeline {
    agent any
    
    stages {
        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker compose build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker compose up -d'
            }
        }
    }
}
