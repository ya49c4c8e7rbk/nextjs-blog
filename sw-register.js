import React, { PureComponent } from 'react'

class SWRegister extends PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          console.log('service worker registration successful')
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }
  render() {
    return <></>
  }
}

export default SWRegister
