


export const enDate2FaDate = dateString => {
    let date = new Date(dateString);
    
    let time = enNum2FaNum(date.toLocaleTimeString());
    time = time.search(/\W+pm/i) !== -1 ?time.replace('PM', 'بعد از ظهر'):time.replace('AM', 'صبح')

    return `${date.toLocaleDateString('fa-IR')} - ${time}`;
}


const enNum2FaNum = num => num.replace(
    /([0-9])/g,
    value => '۰۱۲۳۴۵۶۷۸۹'.charAt(value)
);