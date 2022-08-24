import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../utils/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authUserHandler = (userData) => {
    setIsAuthenticating(true);
    login(userData);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin in user..."/>
  }

  return <AuthContent isLogin onAuthenticate={authUserHandler}/>;
}

export default LoginScreen;
