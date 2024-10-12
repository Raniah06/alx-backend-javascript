export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = new Date().getFullYear();
  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
}
