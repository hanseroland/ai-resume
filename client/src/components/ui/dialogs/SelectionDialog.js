// SummarySelectionDialog.js
import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import ResumeList from "../list/ResumeList";

const SelectionDialog = ({ open, textes, onClose, onSelect }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Sélectionnez un résumé</DialogTitle>
      <DialogContent dividers>
        <ResumeList textes={textes} onSelect={onSelect} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuler
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectionDialog;
