export const formatNumber = (
  value: number | string,
  options?: Intl.NumberFormatOptions,
) => {
  const numberValue = typeof value === 'string' ? parseFloat(value) : value

  const numberLocale = locale.getBrowserLocale()

  return Intl.NumberFormat([numberLocale, 'en'], options).format(numberValue)
}

/**
 * Formats a numeric value into a currency string based on options provided and browser locale.
 * @param {number} value - The numeric value to be formatted.
 * @param {object} [options] - Additional formatting options.
 * @param {string} [options.code] - The currency code (e.g. 'EUR', 'USD'). Defaults to 'EUR'.
 * @param {boolean} [options.precision] - Whether to use the precision format or the standard format. Defaults to false.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (
  value: number | string,
  options: { code?: string; precision?: boolean } = {
    code: 'ZAR', // default value if not provided
    precision: false, // default value if not provided
  },
): string => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { code, precision } = options

  const numberValue = typeof value === 'string' ? parseFloat(value) : value

  const currencyLocale = locale.getBrowserLocale()
  const formatConfig = precision
    ? numberFormats.currencyPrecision
    : numberFormats.currencyStandard

  const configWithCurrency = {
    ...formatConfig,
    currency: code,
  }

  return new Intl.NumberFormat(
    [currencyLocale, 'en'],
    configWithCurrency,
  ).format(numberValue)
}

export default {
  formatCurrency,
  formatNumber,
}
