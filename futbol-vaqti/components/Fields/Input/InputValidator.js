export default function InputValidator(label, value, validators, setError) {
  const {
    // Required or not
    required,

    // Length of entered text or number
    maxLength,

    // Number of decimals
    step,

    // Type of input
    type,
  } = validators;

  let errCount = 0;

  if (!value && required) {
    setError(`${label} field is required`);
    errCount++;
  }

  if (value && String(value).length > maxLength) {
    setError(`Length of ${label} shouldn't be higher than ${maxLength}`);
    errCount++;
  }

  if (errCount == 0) {
    setError("");
  }

  return;
}
