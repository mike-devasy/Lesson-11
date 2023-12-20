export function isCorrespondToFilter(driver, filterObj) {
  for (const props in filterObj) {
    const filterExpRange = driver.exp >= filterObj.expStart && driver.exp <= filterObj.expEnd;
    if (props === 'name' && filterObj[props] && !driver[props].toLowerCase().includes(filterObj[props].toLowerCase())) {
      return false;
    } else if (props !== 'name' && filterObj[props] && (driver[props] !== filterObj[props] && !filterExpRange)) {
      return false;
    }
  }
  return true;
}