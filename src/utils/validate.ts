interface Props {
  min: string | undefined;
  max: string | undefined;
}

export const validateRNG = (values: Props): string[] => {
  const errors: string[] = [];

  if (values.min === '' || values.min === undefined) errors.push('Please specify a min value!');
  if (values.max === '' || values.max === undefined) errors.push('Please specify a max value!');

  if (isNaN(Number(values.min))) errors.push('Min value must be a number!');
  if (isNaN(Number(values.max))) errors.push('Max value must be a number!');

  if (errors.length !== 0) return errors;

  if (Number(values.min) >= Number(values.max)) {
    errors.push('Max value must be greater than min value!');
  }

  return errors;
};

export const validateCountdown = (values: Props): string[] => {
  const errors: string[] = [];

  if (values.min === '' || values.min === undefined) errors.push('Please specify a min value!');
  if (values.max === '' || values.max === undefined) errors.push('Please specify a max value!');

  if (isNaN(Number(values.min))) errors.push('Min value must be a number!');
  if (isNaN(Number(values.max))) errors.push('Max value must be a number!');

  if (errors.length !== 0) return errors;

  if (Number(values.min) >= Number(values.max)) {
    errors.push('Max value must be greater than min value!');
  }

  if (Number(values.max) >= 10800) {
    errors.push('Max value must be less than 3 hours or 10800 seconds!');
  }

  return errors;
};
