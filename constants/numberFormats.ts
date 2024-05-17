const integerNumber = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}
const floatNumber = {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
}
const percentageStandard = {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}
const percentagePrecision = {
  style: 'percent',
  ...floatNumber,
}
const percentageInteger = {
  style: 'percent',
  ...integerNumber,
}
const currencyStandard = {
  style: 'currency',
}
const currencyPrecision = {
  ...currencyStandard,
  ...floatNumber,
}

export const numberFormats = {
  integerNumber,
  floatNumber,
  percentageStandard,
  percentagePrecision,
  percentageInteger,
  currencyStandard,
  currencyPrecision,
}
