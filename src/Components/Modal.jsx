import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../Redux/Slice/ModalSlice";
import { index } from "../Redux/Slice/DetailsIndex";
import { refresh } from "../Redux/Slice/Expaddition";
import { handleSelector } from "../Redux/Slice/IDselector";
import { skillrefresh } from "../Redux/Slice/KeySkillsAddition";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { visibilityChange } from "../Redux/Slice/PreviewVisibility";
import { handleImageSave } from "../Redux/Slice/ImageSave";

// style object for styling  the modal component.
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "200px",
  width: {
    xs: "280px",
    sm: "350px",
    md: "450px",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  borderRadius: "10px",
};

export default function BasicModal() {
  const navigate = useNavigate();
  const open = useSelector((state) => state.Modalhandler);
  const dispatch = useDispatch();

  //handle modal close as well as reset different redux state to allow user to make new resume
  const handleClose = () => {
    dispatch(index(1));
    dispatch(refresh());
    dispatch(handleSelector(null));
    dispatch(skillrefresh());
    navigate("/", { preventScrollReset: true });
    dispatch(handleModal(false));
    dispatch(visibilityChange(false));
    dispatch(handleImageSave(""));
  };

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Button
            variant="contained"
            onClick={() => handleClose()}
            sx={{ width: "80px", height: "80px", borderRadius: "50%" }}
          >
            <CheckIcon fontSize="large" />
          </Button>
          <Typography
            sx={{
              fontFamily: `"Poppins", 'sans-serif`,
            }}
          >
            Your Resume has been saved successfully. Click on above button to
            navigate to select new template.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
