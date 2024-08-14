class makeYearsArray {
  getYearsArray = (setState): void => {
    const yearList = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 2015; i--) {
      yearList.push({ Name: i, Id: i });
    }
    setState(yearList);
  };
}
module.exports = new makeYearsArray();
