import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../utils/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authUserHandler = async (userData) => {
    setIsAuthenticating(true);
    try {
      const token = await login(userData);
      authCtx.login(token);
    } catch (error) {
      Alert.alert("Login failed", "Could not log you in. Please check your credentials")
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin in user..."/>
  }

  return <AuthContent isLogin onAuthenticate={authUserHandler}/>;
}

export default LoginScreen;
