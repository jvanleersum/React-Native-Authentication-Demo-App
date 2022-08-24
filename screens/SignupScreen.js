import { useContext, useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
import AuthContext from '../store/auth-context';

function SignupScreen({navigation}) {
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async (userData) => {
    setIsAuthenticating(true)
    try {
      const token = await createUser(userData);
      authCtx.login(token);
    } catch (error) {
      Alert.alert("Authentication failed", "Could not create user. Please check your credentials")
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticating) {
    console.log(isAuthenticating)
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
