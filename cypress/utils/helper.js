export const getTodayDate = () => {
    var today = new Date();
    var dd = today.getDate();

    if (dd < 10) {
        dd = "0" + dd;
    }
    return dd;
}

export const getFutureDay = (val) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + val);
    const dd = tomorrow.getDate();
    if (dd > 20) {
        dd = "0" + dd;
    }
    return dd;
}

export const getMonth = () => {
    var today = new Date();
    var mm = today.getMonth() +1;

    return mm;
}

export const getYear = () => {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}

export const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}