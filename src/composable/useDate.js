

function zeroPadding(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

export default function useDate() {
    const GetNowDateYYYYMMDD = () => {
        const now = new Date();
        const nowText = now.getFullYear() + '/' + zeroPadding((now.getMonth() + 1)) + '/' + zeroPadding(now.getDate());

        return nowText;
    };

    const GetNowDateTimeYYYYMMDDHHmm = () => {
        const now = new Date();
        const nowText = now.getFullYear() + '/' + zeroPadding((now.getMonth() + 1)) + '/' + zeroPadding(now.getDate()) + ' ' + zeroPadding(now.getHours()) + ":" + zeroPadding(now.getMinutes());

        return nowText;
    };

    const GetNowDateDDMMYYYY =  () => {
        const now = new Date();
        const nowText = zeroPadding(now.getDate()) + '/' + zeroPadding((now.getMonth() + 1)) + '/' + now.getFullYear();

        return nowText;
    };

    const GetNowDateTimeHHmmDDMMYYYY =  () => {
        const now = new Date();
        const nowText = zeroPadding(now.getHours()) + ":" + zeroPadding(now.getMinutes()) + ' ' + zeroPadding(now.getDate()) + '/' + zeroPadding((now.getMonth() + 1)) + '/' + now.getFullYear();

        return nowText;
    };

    const GetDateTimeDDMMYYYYHHmm =  () => {
        const now = new Date();
        const DateText = zeroPadding(now.getDate()) + '/' + zeroPadding((now.getMonth() + 1)) + '/' + zeroPadding(now.getFullYear()) + ' '+ zeroPadding(now.getHours()) + ":" + zeroPadding(now.getMinutes());
        return DateText;
    };

    const GetDateYYYYMMDD =  (date) => {
        const DateText = date.getFullYear() + '/' + zeroPadding((date.getMonth() + 1)) + '/' + zeroPadding(date.getDate());

        return DateText;
    };

    const GetDateTimeYYYYMMDDHHmm =  (date) => {
        const DateText = date.getFullYear() + '/' + zeroPadding((date.getMonth() + 1)) + '/' + zeroPadding(date.getDate()) + ' ' + zeroPadding(date.getHours()) + ":" + zeroPadding(date.getMinutes());

        return DateText;
    };

    const GetDateDDMMYYYY =  (date) => {
        const DateText = zeroPadding(date.getDate()) + '/' + zeroPadding((date.getMonth() + 1)) + '/' + date.getFullYear();

        return DateText;
    };

    const GetDateTimeHHmmDDMMYYYY =  (date) => {
        const DateText = zeroPadding(date.getHours()) + ":" + zeroPadding(date.getMinutes()) + ' ' + zeroPadding(date.getDate()) + '/' + zeroPadding((date.getMonth() + 1)) + '/' + date.getFullYear();

        return DateText;
    };

    const GetDateTimeDDMMHHmm =  (date) => {
        const DateText = zeroPadding(date.getDate()) + '/' + zeroPadding((date.getMonth() + 1)) +' '+ zeroPadding(date.getHours()) + ":" + zeroPadding(date.getMinutes());

        return DateText;
    };


    return {
        GetNowDateYYYYMMDD,
        GetNowDateTimeYYYYMMDDHHmm,
        GetNowDateDDMMYYYY,
        GetNowDateTimeHHmmDDMMYYYY,
        GetDateTimeDDMMYYYYHHmm,
        GetDateYYYYMMDD,
        GetDateTimeYYYYMMDDHHmm,
        GetDateDDMMYYYY,
        GetDateTimeHHmmDDMMYYYY,
        GetDateTimeDDMMHHmm
    };

}