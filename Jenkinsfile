pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Test') {
      steps {
	echo 'Szervasz'
	sh 'echo myCustomEnvVar = $myCustomEnvVar'
      }
    }
  }
}
