import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}))

type Props = {
  open: boolean
  handleClose: any
}

const GameCreateDialog: FC<Props> = ({ open, handleClose }) => {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm()

  const createGame = (values: any) => {
    console.log(values)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Box display="flex" alignItems="center">
            <Typography className={classes.title}>ゲームを作る</Typography>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="ゲーム名"
            type="text"
            fullWidth
            inputRef={register({
              required: { value: true, message: 'required!' },
            })}
            error={!!errors?.name}
            helperText={errors?.name?.message}
          />
          <TextField
            margin="dense"
            name="password"
            label="あいことば"
            type="text"
            fullWidth
            inputRef={register({
              required: { value: true, message: 'required!' },
            })}
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit(createGame)} color="primary">
            作成
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export { GameCreateDialog }
