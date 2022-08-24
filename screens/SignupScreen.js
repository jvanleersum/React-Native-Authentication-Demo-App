import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'

function SignupScreen({navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signUpHandler = (userData) => {
    setIsAuthenticating(true)
    createUser(userData);
    setIsAuthenticating(false)
    // navigation.navigate('Welcome')
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
