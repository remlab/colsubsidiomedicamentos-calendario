import * as moment from 'moment';
export function toLocaleLongDateString(date) {
    return moment(date).format('LL');
}
export function toLocaleShortDateString(date) {
    return moment(date).format('ll');
}
//# sourceMappingURL=dateUtils.js.map