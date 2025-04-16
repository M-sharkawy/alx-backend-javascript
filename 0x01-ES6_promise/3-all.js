import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([upres, usrres]) => {
      console.log(`${upres.body} ${usrres.firstName} ${usrres.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
