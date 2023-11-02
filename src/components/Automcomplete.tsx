import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useSuggestionData } from "../hooks/useSuggestionData";

export default function Tags() {
  const { data, setData } = useSuggestionData();
  const {
    data: responseData,
    isLoading,
    isSuccess,
  } = useQuery("suggestions", async () => {
    const response = await fetch(
      "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete"
    );
    return response.json();
  });

  useEffect(() => {
    if (isSuccess) {
      setData(responseData);
    }
  }, [isSuccess, responseData, setData]);

  if (isLoading) {
    return <CircularProgress size={30} />;
  }
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={data}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          fullWidth
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      )}
    />
  );
}
