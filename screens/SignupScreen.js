import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'

function SignupScreen({navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signUpHandler = async (userData) => {
    setIsAuthenticating(true)
    await createUser(userData);
    setIsAuthenticating(false)
    // navigation.navigate('Welcome')
  }

  if (isAuthenticating) {
    console.log(isAuthenticating)
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
