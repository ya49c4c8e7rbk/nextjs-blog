import FirebaseAuth from '@/components/FirebaseAuth'

export default function Auth(): React.ReactElement {
  return (
    <div>
      <p>Sign in</p>
      <div>
        <FirebaseAuth />
      </div>
    </div>
  )
}
