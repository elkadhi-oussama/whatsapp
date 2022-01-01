import React from 'react'
import AccountProvider from './components/context/AccountProvider';
import Messenger from './components/Messenger';
import TemplateProvider from './template/TemplateProvider';
import UserProvider from './components/context/UserProvider';

function App() {
  return (
   <div>
     <TemplateProvider>
       <UserProvider>
     <AccountProvider>
     <Messenger/>
     </AccountProvider>
     </UserProvider>
     </TemplateProvider>
   </div>
  );
}

export default App;
