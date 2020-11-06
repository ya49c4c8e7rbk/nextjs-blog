export interface IUserData {
  id: string
  email: string
  token: string
  displayName: string
  photoURL: string
}

export const mapUserData = (user): IUserData => {
  const { uid, email, xa, ya, displayName, photoURL } = user
  return {
    id: uid,
    email,
    token: xa || ya,
    displayName,
    photoURL,
  } as IUserData
}
