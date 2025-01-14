import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises).then((results) =>
    results.map((result) => {
      return {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      };
    }),
  );
}
