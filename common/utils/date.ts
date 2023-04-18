export function FormatDate(dateTime: number) {
    let now = new Date();
    let date = new Date(dateTime);
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDay = now.getDate();
    let nowHour = now.getHours();
    let nowMinute = now.getMinutes();
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDay = date.getDate();
    let dateHour = date.getHours();
    let dateMinute = date.getMinutes();
    let YearDiff = nowYear - dateYear;
    let MonthDiff = nowMonth - dateMonth;
    let DayDiff = nowDay - dateDay;
    let HourDiff = nowHour - dateHour;
    let MinuteDiff = nowMinute - dateMinute;
    if(1 <= YearDiff) return `More than a year`;
    else if(1 <= MonthDiff) return `More than a month`;
    else if(1 <= DayDiff) return `${DayDiff} days ago`;
    else if(1 <= HourDiff) return `${HourDiff} hour ago`;
    else if(1 <= MinuteDiff) return `${MinuteDiff} minute ago`;
    return `now`;
}