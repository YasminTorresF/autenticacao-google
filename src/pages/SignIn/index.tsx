import {useState} from 'react';
import {GoogleLogo} from 'phosphor-react';
import './styles.scss'

import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import {auth} from '../../services/firebase';

export function SignIn(){
   const [user, setUser] = useState<User>({} as User)


   function handleGoogleSigIn(){
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
      .then((result) => {
         setUser(result.user);
         console.log(result);
      })
      .catch((error) => {
         console.log(error);
      })


   }

    return(
       <div className="container">
         <div className='user'>
           {user.photoURL &&<img src={user.photoURL} alt= 'foto do usuário' />}
           <strong>{user.displayName}</strong>
           <small>{user.email}</small>
         </div>


          <h1>Acesse sua conta</h1>
          <span>
            utilizando autenticação social, por exemplo, autenticação com o Google você <br/>
            facilita a vida do usuário, permitindo utiliar sua aplicação sem fazer cadastro.
         </span>

         <button type="button" className="button" onClick={handleGoogleSigIn}>
            <GoogleLogo/>
            Entrar com o Google
         </button>

       </div>
     
        
    );
}