import { styled } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import InfoIcon from "@mui/icons-material/Info";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button, IconButton, TextField } from "@mui/material";
import { Add, MoreHoriz } from "@mui/icons-material";
import { useTextField } from "./hooks/useTextfield";
import { useExpanded } from "./hooks/useExpanded";
import OperandAutocomplete from "./components/Automcomplete";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowRightIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(() => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function App() {
  const {
    isTextField,
    showTextField,
    value,
    changeTextFieldValue,
    hideTextField,
  } = useTextField();

  const { expanded, handleExpand } = useExpanded();

  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeTextFieldValue(e.target.value);
  };
  const handleChange =
    (panel: string) => (_: unknown, newExpanded: boolean) => {
      handleExpand(panel, newExpanded);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <Typography component={"div"}>
          <Typography
            component="div"
            sx={{
              display: "flex",
              background: "#dee0e3",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              p: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component={"div"}
              display={"flex"}
              alignItems={"center"}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              ></AccordionSummary>
              {!isTextField && (
                <Typography
                  fontWeight={"bold"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    showTextField();
                  }}
                >
                  {value}
                </Typography>
              )}
            </Typography>
            {isTextField && (
              <TextField
                id="standard-basic"
                variant="standard"
                fullWidth
                autoFocus
                defaultValue={value}
                onChange={(e) => {
                  handleTextFieldChange(e);
                }}
                onBlur={() => {
                  hideTextField();
                }}
              />
            )}
            <Typography
              component={"div"}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton>
                <InfoIcon sx={{ color: "#acb5c1" }} />
              </IconButton>
              <IconButton>
                <MoreHoriz sx={{ color: "#acb5c1" }} />
              </IconButton>
            </Typography>
          </Typography>
          <Typography sx={{ p: 2, ml: 5 }} fontWeight={"bold"} variant="h4">
            0
          </Typography>
        </Typography>
        <AccordionDetails>
          {/* <TextField
            fullWidth
            inputProps={{
              style: {
                height: "28px",
              },
            }}
            sx={{
              [`& fieldset`]: {
                borderRadius: "8px",
              },
            }}
          /> */}
          <OperandAutocomplete />
          <Button
            variant="text"
            startIcon={<Add />}
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            Add time segment
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
