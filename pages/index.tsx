import React, { FC } from 'react'
import Layout from '@/components/layout'
import { Box, Button, Container } from '@material-ui/core'
import { Contacts, Create } from '@material-ui/icons'
import { GameCreateDialog } from 'components/GameCreateDialog'

const Home: FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box my={2}>
          <Button
            startIcon={<Create />}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={handleClickOpen}
          >
            ゲームを作る
          </Button>
        </Box>
        <Box my={2}>
          <Button
            startIcon={<Contacts />}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            ゲームに入る
          </Button>
        </Box>
        <GameCreateDialog open={open} handleClose={handleClose} />
      </Container>
    </Layout>
  )
}

export default Home
