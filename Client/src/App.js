

import Messenger from './components/messenger';
import {GoogleOAuthProvider} from "@react-oauth/google"
import AccountProvider from './context/Provider';
function App() {
  
  return (
    <GoogleOAuthProvider clientId={clientid}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
