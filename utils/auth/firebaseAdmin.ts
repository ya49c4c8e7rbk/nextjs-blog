import * as admin from 'firebase-admin'

export const verifyIdToken = (token) => {
  const firebasePrivateKey =
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDkt3UZY4/4NVIF\ntIQGXzGnCiVWhb8Zq01nHe59mKNBNg4U+Pop0qPPar/XTxhZjf6SjxtgjJe3z23f\nw2eYcKldDpCDzgvdZ4DtdLmyDAE7lX8UbglvTZZwHCOdY/2IA636rBnxFYmEWzEG\nWM5l2+y0Su0jM4rTJifaKHKYHQy9A/ubP0G3TnjyyPabZLIesIcWm4hSIZJmDxyD\n1XA5PukyZ45yTVdgL2Yd7KOAiqs5rHK0/Jlvsq7KS8YKOY+we7V8xeubBbEbA4t2\nPIBHx8GitQcxGVLuMW0kKq6cmv52thf6isSaRn20ufyN5lyhndeFaWohHA9YPpLb\nbW2CppMDAgMBAAECggEADcPKXo9mACUm9sSJCy0grhHnpcM0365pYSK/BXxxm6CA\nmaiGV1mfyQFLfGf8aiwoI9l/zbOIaf3BrUbZ7djriHf/U79lA87ErQXQxM0BW5Z0\nTt5BRegtSdMxULnObcImIidh0RpfuI4Yb25aAm1WKJLRBMS6vr+ihF5zNYGbqg0w\nwpX6V+3FE8v9TNGLeVkYj1ZCIAm30Y5souX/QU+4e2uTw/7ujfUcQbeltKEyxzO7\nRC0EwACR92n2y9Yt20As2jg1cfjfeUYx6JwvcPjHLNgEa/Mgx0FhHdVeLpxMoPlw\n4r8J2PD492MqddDCJYlaW1daxug0WDADP+soyqAxIQKBgQD8eT4js37NVTRsiWuW\neKKx0S+eWXeE7lQz2JbtGDugXGvntHCYFZxCkdKpp58bnxtGoEOt5Z+8En4e6xaH\noX8A/7nZNKfSxhKyfFvQEHEnvN0FpO9NHhZuBqdyMhGyrkA/WXUtTtz84WOqyBB3\nHK5fn/MbAWAcCk0LfHlevnGl0QKBgQDn6USfnHLNpCGf3Ww34GFID4/UHjCVvQHj\n0aqBQKzeri3c89F+8DI779q3t3lg+ca2+LrH+5lKmdj1bGozYzGBYdxct8Nt9T1i\nmepXyrLFM4k7iUJ4g84tIeUPeh8OZ1gkPrFQAPbcOlwHK/TfNE2t055wXVFSBykP\nOPGzcgmckwKBgQCx2V6Sm6DZWAoj4vHs/3HsPOWEcJWnCJQ8KXi37/gg0LoacJtY\nJvD6W+rAJBoKxRvbto22dCj/vS8m7IfkZzkmJP5wKY2HBoypOr0aZlqvmXVAwpzo\nACfgvcM6yFZ7PhB4D7ZhgkpdwRAKgABJR+T166C/B0sCtabsTnTY7uLz4QKBgFNU\nyZjEwafM61wjVyh40tvu45KnynNzuAMhqq/JCpT1Z3t2jPec3aAV3rSXE+FZvyKu\nG4eSi5F32LLPYxXV9cr03Bbg3TNcpNMSVVd4eWZMz2n6N01QpzwmasV170Tgs5ZK\nhLIntoyJ19mn3NR7WdI1MUBU98yO0B0tLAR73KJLAoGBAMXViWNd2MUqBj3iW0D8\nMfVvxzsGvevsrtUq0jrpAAOSg9ZdQqhIsNHjCRfFij45KNsxanKDbeiqXQYwmqDT\np9oHICnLtBSlE1ekjIaHPXe1ReZQ8nUABRZSdcpiNOgSQXs9tFAbgcNv7tjfrEMl\nhN711y0/aoDjZ8pfNHSinu08\n-----END PRIVATE KEY-----\n'

  if (!admin.apps.length) {
    // admin.initializeApp({
    //   credential: admin.credential.cert({
    //     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    //     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    //     // https://stackoverflow.com/a/41044630/1332513
    //     privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
    //   }),
    //   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    // })
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: 'katilo-nextjs-dev',
        clientEmail:
          'firebase-adminsdk-nz2ui@katilo-nextjs-dev.iam.gserviceaccount.com',
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
      databaseURL: 'https://katilo-nextjs-dev.firebaseio.com',
    })
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error
    })
}
