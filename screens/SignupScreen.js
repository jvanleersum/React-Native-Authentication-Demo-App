import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';

function SignupScreen({navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signUpHandler = async (userData) => {
    setIsAuthenticating(true)
    try {
      await createUser(userData);
      setIsAuthenticating(false)
    } catch (error) {
      Alert.alert("Authentication failed", "Could not create user. Please check your credentials")
    }
  }

  if (isAuthenticating) {
    console.log(isAuthenticating)
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
