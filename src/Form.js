import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FormInputText } from "./components/form/FormInputText";
import { FormInputMultiCheckbox } from "./components/form/FormInputMultiCheckbox";
import { FormInputDropdown } from "./components/form/FormInputDropdown";
import { FormInputDate } from "./components/form/FormInputDate";
import { FormInputSlider } from "./components/form/FormInputSlider";
import { FormInputRadio } from "./components/form/FormInputRadio";

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};
export const Form = () => {
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6"> Form Demo</Typography>

      <FormInputText name="textValue" control={control} label="Text Input" />
      <FormInputRadio
        name={"radioValue"}
        control={control}
        label={"Radio Input"}
      />
      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />
      <FormInputDate name="dateValue" control={control} label="Date Input" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Checkbox Input"}
      />
      <FormInputSlider
        name={"sliderValue"}
        control={control}
        setValue={setValue}
        label={"Slider Input"}
      />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Reset{" "}
      </Button>
      <Link to="/">return</Link>
    </Paper>
  );
};
