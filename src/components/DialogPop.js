import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

function DialogPop({ title, popTest, maxWidth, isOpen, closeDialog, children }) {
  return (    
    <Dialog open={isOpen} onClose={closeDialog} maxWidth={maxWidth}>
      <DialogTitle>
        <Typography variant="popTitle">{title}</Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeDialog}
        disableRipple
        sx={{
          position: "absolute",
          right: 32,
          top: 34,
          width: "28px",
          height: "28px",
          color: (theme) => theme.palette.grey[900],
        }}
      >
        <CloseIcon
          sx={{
            fontSize: "30px",
          }}
        />
      </IconButton>
      {children}
    </Dialog>
  );
}

export default DialogPop;
