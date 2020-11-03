export interface IUserData {
  id: string
  email: string
  token: string
}

export const mapUserData = (user): IUserData => {
  const { uid, email, xa, ya } = user
  return {
    id: uid,
    email,
    token: xa || ya,
  } as IUserData
}
