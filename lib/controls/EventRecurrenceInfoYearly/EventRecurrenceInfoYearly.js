var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import * as strings from 'CalendarWebPartStrings';
import * as moment from 'moment';
import { parseString } from "xml2js";
import { ChoiceGroup, Dropdown, Label, MaskedTextField } from 'office-ui-fabric-react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import { toLocaleShortDateString } from '../../utils/dateUtils';
import spservices from '../../services/spservices';
var DayPickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker'
};
/**
 *
 *
 * @export
 * @class EventRecurrenceInfoDaily
 * @extends {React.Component<IEventRecurrenceInfoYearlyProps, IEventRecurrenceInfoYearlyState>}
 */
var EventRecurrenceInfoYearly = /** @class */ (function (_super) {
    __extends(EventRecurrenceInfoYearly, _super);
    function EventRecurrenceInfoYearly(props) {
        var _this = _super.call(this, props) || this;
        _this.spService = null;
        _this.onPaternChange = _this.onPaternChange.bind(_this);
        _this.state = {
            selectedKey: 'daily',
            selectPatern: 'yearly',
            startDate: _this.props.startDate ? _this.props.startDate : moment().toDate(),
            endDate: moment().endOf('month').toDate(),
            numberOcurrences: '1',
            disableDayOfMonth: false,
            disableNumberOcurrences: true,
            selectdateRangeOption: 'noDate',
            disableEndDate: true,
            selectedRecurrenceRule: 'yearly',
            dayOfMonth: _this.props.startDate ? moment(_this.props.startDate).format('D') : moment().format('D'),
            isLoading: false,
            errorMessageDayOfMonth: '',
            selectedWeekOrderMonth: 'first',
            selectedWeekDay: 'day',
            selectedMonth: moment().format('M'),
            selectedYearlyByDayMonth: moment().format('M'),
        };
        //
        _this.onDayOfMonthChange = _this.onDayOfMonthChange.bind(_this);
        _this.onNumberOfOcurrencesChange = _this.onNumberOfOcurrencesChange.bind(_this);
        _this.onDataRangeOptionChange = _this.onDataRangeOptionChange.bind(_this);
        _this.onEndDateChange = _this.onEndDateChange.bind(_this);
        _this.onStartDateChange = _this.onStartDateChange.bind(_this);
        _this.onApplyRecurrence = _this.onApplyRecurrence.bind(_this);
        _this.onYearlyByDayMonthChange = _this.onYearlyByDayMonthChange.bind(_this);
        _this.onSelectedWeekDayChange = _this.onSelectedWeekDayChange.bind(_this);
        _this.onWeekOrderMonthChange = _this.onWeekOrderMonthChange.bind(_this);
        _this.onMonthChange = _this.onMonthChange.bind(_this);
        _this.spService = new spservices(_this.props.context);
        return _this;
    }
    /**
     *
     *
     * @private
     * @param {Date} date
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoYearly.prototype.onStartDateChange = function (date) {
        this.setState({ startDate: date });
        this.applyRecurrence();
    };
    /**
     *
     *
     * @private
     * @param {Date} date
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoYearly.prototype.onEndDateChange = function (date) {
        this.setState({ endDate: date });
        this.applyRecurrence();
    };
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {string} value
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoYearly.prototype.onDayOfMonthChange = function (ev, value) {
        var _this = this;
        ev.preventDefault();
        setTimeout(function () {
            var errorMessage = '';
            if (Number(value.trim()) < 1 || Number(value.trim()) > 31) {
                value = '1 ';
                errorMessage = 'Allowed values 1 to 31';
            }
            _this.setState({ dayOfMonth: value, errorMessageDayOfMonth: errorMessage });
            _this.applyRecurrence();
        }, 3000);
    };
    EventRecurrenceInfoYearly.prototype.onMonthChange = function (ev, item) {
        this.setState({ selectedMonth: item.key });
        this.applyRecurrence();
    };
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {string} value
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoYearly.prototype.onNumberOfOcurrencesChange = function (ev, value) {
        ev.preventDefault();
        this.setState({ numberOcurrences: value });
        this.applyRecurrence();
    };
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {IChoiceGroupOption} option
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoYearly.prototype.onDataRangeOptionChange = function (ev, option) {
        ev.preventDefault();
        this.setState({
            selectdateRangeOption: option.key,
            disableNumberOcurrences: option.key == 'endAfter' ? false : true,
            disableEndDate: option.key == 'endDate' ? false : true,
        });
        this.applyRecurrence();
    };
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {IChoiceGroupOption} option
     * @memberof EventRecurrenceInfoYearly
     */
    EventRecurrenceInfoYearly.prototype.onPaternChange = function (ev, option) {
        ev.preventDefault();
        this.setState({
            selectPatern: option.key,
            disableDayOfMonth: option.key == 'yearly' ? false : true,
        });
        this.applyRecurrence();
    };
    EventRecurrenceInfoYearly.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    EventRecurrenceInfoYearly.prototype.componentWillMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoYearly
     */
    EventRecurrenceInfoYearly.prototype.onWeekOrderMonthChange = function (ev, item) {
        this.setState({ selectedWeekOrderMonth: item.key.toString() });
        this.applyRecurrence();
    };
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoYearly
     */
    EventRecurrenceInfoYearly.prototype.onYearlyByDayMonthChange = function (ev, item) {
        this.setState({ selectedYearlyByDayMonth: item.key });
        this.applyRecurrence();
    };
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoYearly
     */
    EventRecurrenceInfoYearly.prototype.onSelectedWeekDayChange = function (ev, item) {
        this.setState({ selectedWeekDay: item.key.toString() });
        this.applyRecurrence();
    };
    EventRecurrenceInfoYearly.prototype.componentDidUpdate = function (prevProps, prevState) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     *
     * @private
     * @memberof EventRecurrenceInfoYearly
     */
    EventRecurrenceInfoYearly.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patern, dateRange, yearlyPatern, yearlyByDayPatern, recurrenceRule, weekDay, selectDateRangeOption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        patern = {};
                        dateRange = {};
                        yearlyPatern = {};
                        yearlyByDayPatern = {};
                        if (this.props.recurrenceData) {
                            parseString(this.props.recurrenceData, { explicitArray: false }, function (error, result) {
                                if (result.recurrence.rule.repeat) {
                                    patern = result.recurrence.rule.repeat;
                                }
                                //
                                if (result.recurrence.rule.repeatForever) {
                                    dateRange = { repeatForever: result.recurrence.rule.repeatForever };
                                }
                                if (result.recurrence.rule.repeatInstances) {
                                    dateRange = { repeatInstances: result.recurrence.rule.repeatInstances };
                                }
                                if (result.recurrence.rule.windowEnd) {
                                    dateRange = { windowEnd: result.recurrence.rule.windowEnd };
                                }
                            });
                            // yearly Patern
                            if (patern.yearly) {
                                recurrenceRule = 'yearly';
                                if (patern.yearly.$.yearFrequency && patern.yearly.$.day) {
                                    yearlyPatern = { yearFrequency: patern.yearly.$.yearFrequency, day: patern.yearly.$.day, month: patern.yearly.$.month };
                                }
                            }
                            // yearlyByDay Patern
                            if (patern.yearlyByDay) {
                                recurrenceRule = 'yearly';
                                weekDay = 'day';
                                if (patern.yearlyByDay.$.su)
                                    weekDay = 'sunday';
                                if (patern.yearlyByDay.$.mo)
                                    weekDay = 'monday';
                                if (patern.yearlyByDay.$.tu)
                                    weekDay = 'tuesday';
                                if (patern.yearlyByDay.$.we)
                                    weekDay = 'wednesday';
                                if (patern.yearlyByDay.$.th)
                                    weekDay = 'thursday';
                                if (patern.yearlyByDay.$.fr)
                                    weekDay = 'friday';
                                if (patern.yearlyByDay.$.sa)
                                    weekDay = 'saturday';
                                if (patern.yearlyByDay.$.day)
                                    weekDay = 'day';
                                if (patern.yearlyByDay.$.weekday)
                                    weekDay = 'weekday';
                                if (patern.yearlyByDay.$.weekend_day)
                                    weekDay = 'weekdendday';
                                yearlyByDayPatern = {
                                    yearFrequency: patern.yearlyByDay.$.yearFrequency,
                                    weekdayOfMonth: patern.yearlyByDay.$.weekdayOfMonth,
                                    weekDay: weekDay,
                                    month: patern.yearlyByDay.$.month,
                                };
                            }
                            selectDateRangeOption = 'noDate';
                            if (dateRange.repeatForever) {
                                selectDateRangeOption = 'noDate';
                            }
                            else if (dateRange.repeatInstances) {
                                selectDateRangeOption = 'endAfter';
                            }
                            else if (dateRange.windowEnd) {
                                selectDateRangeOption = 'endDate';
                            }
                            // weekday patern
                            this.setState({
                                selectedRecurrenceRule: recurrenceRule,
                                selectPatern: patern.yearly ? 'yearly' : 'yearlyByDay',
                                dayOfMonth: yearlyPatern.day ? yearlyPatern.day : '1',
                                selectedMonth: yearlyPatern.month ? yearlyPatern.month : moment().month(),
                                selectedYearlyByDayMonth: yearlyByDayPatern.month ? yearlyByDayPatern.month : moment().format('M'),
                                selectedWeekOrderMonth: yearlyByDayPatern.weekdayOfMonth ? yearlyByDayPatern.weekdayOfMonth : 'first',
                                selectedWeekDay: yearlyByDayPatern.weekDay ? yearlyByDayPatern.weekDay : 'day',
                                disableDayOfMonth: patern.yearly ? false : true,
                                selectdateRangeOption: selectDateRangeOption,
                                numberOcurrences: dateRange.repeatInstances ? dateRange.repeatInstances : '10',
                                disableNumberOcurrences: dateRange.repeatInstances ? false : true,
                                endDate: dateRange.windowEnd ? new Date(moment(dateRange.windowEnd).format('YYYY/MM/DD')) : this.state.endDate,
                                disableEndDate: dateRange.windowEnd ? false : true,
                                isLoading: false,
                            });
                        }
                        return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} ev
     * @memberof EventRecurrenceInfoYearly
     */
    EventRecurrenceInfoYearly.prototype.onApplyRecurrence = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} ev
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoYearly.prototype.applyRecurrence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var siteTimeZoneHours, eventDate, endDate, selectDateRangeOption, recurrencePatern, recurrenceXML;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spService.getSiteTimeZoneHours(this.props.siteUrl)];
                    case 1:
                        siteTimeZoneHours = _a.sent();
                        eventDate = new Date(moment(this.state.startDate).add(siteTimeZoneHours, 'hours').toISOString());
                        endDate = moment(this.state.endDate).add(siteTimeZoneHours, 'hours').toISOString();
                        switch (this.state.selectdateRangeOption) {
                            case 'noDate':
                                selectDateRangeOption = "<repeatForever>FALSE</repeatForever>";
                                break;
                            case 'endAfter':
                                selectDateRangeOption = "<repeatInstances>" + this.state.numberOcurrences + "</repeatInstances>";
                                break;
                            case 'endDate':
                                selectDateRangeOption = "<windowEnd>" + endDate + "</windowEnd>";
                                break;
                            default:
                                break;
                        }
                        recurrencePatern = '';
                        if (this.state.selectPatern == 'yearly') {
                            recurrencePatern = "<yearly  yearFrequency=\"1\" day=\"" + this.state.dayOfMonth + "\" month=\"" + this.state.selectedMonth + "\" /></repeat>" + selectDateRangeOption + "</rule></recurrence>";
                        }
                        if (this.state.selectPatern == 'yearlyByDay') {
                            recurrencePatern = "<yearlyByDay weekdayOfMonth=\"" + this.state.selectedWeekOrderMonth + "\"  month=\"" + this.state.selectedYearlyByDayMonth + "\"";
                            switch (this.state.selectedWeekDay) {
                                case 'day':
                                    recurrencePatern = recurrencePatern + "day=\"TRUE\"";
                                    break;
                                case 'weekday':
                                    recurrencePatern = recurrencePatern + "weekday=\"TRUE\"";
                                    break;
                                case 'weekendday':
                                    recurrencePatern = recurrencePatern + "weekend_day=\"TRUE\"";
                                    break;
                                case 'sunday':
                                    recurrencePatern = recurrencePatern + "su=\"TRUE\"";
                                    break;
                                case 'monday':
                                    recurrencePatern = recurrencePatern + "mo=\"TRUE\"";
                                    break;
                                case 'tuesday':
                                    recurrencePatern = recurrencePatern + "tu=\"TRUE\"";
                                    break;
                                case 'wednesday':
                                    recurrencePatern = recurrencePatern + "we=\"TRUE\"";
                                    break;
                                case 'thursday':
                                    recurrencePatern = recurrencePatern + "th=\"TRUE\"";
                                    break;
                                case 'friday':
                                    recurrencePatern = recurrencePatern + "fr=\"TRUE\"";
                                    break;
                                case 'saturday':
                                    recurrencePatern = recurrencePatern + "sa=\"TRUE\"";
                                    break;
                                default:
                                    break;
                            }
                            recurrencePatern = recurrencePatern + (" yearFrequency=\"1\" /></repeat>" + selectDateRangeOption + "</rule></recurrence>");
                        }
                        recurrenceXML = "<recurrence><rule><firstDayOfWeek>su</firstDayOfWeek><repeat>" + recurrencePatern;
                        this.props.returnRecurrenceData(this.state.startDate, recurrenceXML);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * @returns {React.ReactElement<IEventRecurrenceInfoDailyProps>}
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoYearly.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("div", null,
            React.createElement("div", { style: { display: 'inline-block', float: 'right', paddingTop: '10px', height: '40px' } }),
            React.createElement("div", { style: { width: '100%', paddingTop: '10px' } },
                React.createElement(Label, null, strings.PaternLabel),
                React.createElement(ChoiceGroup, { selectedKey: this.state.selectPatern, options: [
                        {
                            key: 'yearly',
                            text: strings.every,
                            ariaLabel: strings.every,
                            onRenderField: function (props, render) {
                                return (React.createElement("div", null,
                                    render(props),
                                    React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', width: '100px', paddingLeft: '10px' } },
                                        React.createElement(Dropdown, { selectedKey: _this.state.selectedMonth, onChange: _this.onMonthChange, disabled: _this.state.disableDayOfMonth, options: [
                                                { key: '1', text: strings.January },
                                                { key: '2', text: strings.February },
                                                { key: '3', text: strings.March },
                                                { key: '4', text: strings.April },
                                                { key: '5', text: strings.May },
                                                { key: '6', text: strings.June },
                                                { key: '7', text: strings.July },
                                                { key: '8', text: strings.August },
                                                { key: '9', text: strings.September },
                                                { key: '10', text: strings.October },
                                                { key: '11', text: strings.November },
                                                { key: '12', text: strings.December },
                                            ] })),
                                    React.createElement(MaskedTextField, { styles: { root: { display: 'inline-block', verticalAlign: 'top', width: '100px', paddingLeft: '10px' } }, mask: "99", maskChar: ' ', disabled: _this.state.disableDayOfMonth, value: _this.state.dayOfMonth, errorMessage: _this.state.errorMessageDayOfMonth, onChange: _this.onDayOfMonthChange })));
                            }
                        },
                        {
                            key: 'yearlyByDay',
                            text: strings.theLabel,
                            onRenderField: function (props, render) {
                                return (React.createElement("div", null,
                                    render(props),
                                    React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', width: '80px', paddingLeft: '10px' } },
                                        React.createElement(Dropdown, { selectedKey: _this.state.selectedWeekOrderMonth, onChange: _this.onWeekOrderMonthChange, disabled: !_this.state.disableDayOfMonth, options: [
                                                { key: 'first', text: strings.firstLabel },
                                                { key: 'second', text: strings.secondLabel },
                                                { key: 'third', text: strings.thirdLabel },
                                                { key: 'fourth', text: strings.fourthLabel },
                                                { key: 'last', text: strings.lastLabel },
                                            ] })),
                                    React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', width: '100px', paddingLeft: '5px' } },
                                        React.createElement(Dropdown, { selectedKey: _this.state.selectedWeekDay, disabled: !_this.state.disableDayOfMonth, onChange: _this.onSelectedWeekDayChange, options: [
                                                { key: 'day', text: strings.dayLable },
                                                { key: 'weekday', text: strings.weekDayLabel },
                                                { key: 'weekendday', text: strings.weekEndDay },
                                                { key: 'sunday', text: strings.Sunday },
                                                { key: 'monday', text: strings.Monday },
                                                { key: 'tuesday', text: strings.Tuesday },
                                                { key: 'wednesday', text: strings.Wednesday },
                                                { key: 'thursday', text: strings.Thursday },
                                                { key: 'friday', text: strings.Friday },
                                                { key: 'saturday', text: strings.Saturday },
                                            ] })),
                                    React.createElement(Label, { styles: { root: { display: 'inline-block', verticalAlign: 'top', width: '30px', paddingLeft: '10px' } } },
                                        strings.ofMonthLabel,
                                        " "),
                                    React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', width: '100px', paddingLeft: '5px' } },
                                        React.createElement(Dropdown, { selectedKey: _this.state.selectedYearlyByDayMonth, onChange: _this.onYearlyByDayMonthChange, disabled: !_this.state.disableDayOfMonth, options: [
                                                { key: '1', text: strings.January },
                                                { key: '2', text: strings.February },
                                                { key: '3', text: strings.March },
                                                { key: '4', text: strings.April },
                                                { key: '5', text: strings.May },
                                                { key: '6', text: strings.June },
                                                { key: '7', text: strings.July },
                                                { key: '8', text: strings.August },
                                                { key: '9', text: strings.September },
                                                { key: '10', text: strings.October },
                                                { key: '11', text: strings.November },
                                                { key: '12', text: strings.December },
                                            ] }))));
                            }
                        }
                    ], onChange: this.onPaternChange, required: true })),
            React.createElement("div", { style: { paddingTop: '22px' } },
                React.createElement(Label, null, strings.dateRangeLabel),
                React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', paddingRight: '35px', paddingTop: '10px' } },
                    React.createElement(DatePicker, { firstDayOfWeek: DayOfWeek.Sunday, strings: DayPickerStrings, placeholder: strings.StartDatePlaceHolder, ariaLabel: strings.StartDatePlaceHolder, label: strings.StartDateLabel, value: this.state.startDate, onSelectDate: this.onStartDateChange, formatDate: toLocaleShortDateString })),
                React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', paddingTop: '10px' } },
                    React.createElement(ChoiceGroup, { selectedKey: this.state.selectdateRangeOption, onChange: this.onDataRangeOptionChange, options: [
                            {
                                key: 'noDate',
                                text: strings.noEndDate,
                            },
                            {
                                key: 'endDate',
                                text: strings.EndByLabel,
                                onRenderField: function (props, render) {
                                    return (React.createElement("div", null,
                                        render(props),
                                        React.createElement(DatePicker, { firstDayOfWeek: DayOfWeek.Sunday, strings: DayPickerStrings, placeholder: strings.StartDatePlaceHolder, ariaLabel: strings.StartDatePlaceHolder, style: { display: 'inline-block', verticalAlign: 'top', paddingLeft: '22px', }, onSelectDate: _this.onEndDateChange, formatDate: toLocaleShortDateString, value: _this.state.endDate, disabled: _this.state.disableEndDate })));
                                }
                            },
                            {
                                key: 'endAfter',
                                text: strings.EndAfterLabel,
                                onRenderField: function (props, render) {
                                    return (React.createElement("div", null,
                                        render(props),
                                        React.createElement(MaskedTextField, { styles: { root: { display: 'inline-block', verticalAlign: 'top', width: '100px', paddingLeft: '10px' } }, mask: "999", maskChar: ' ', value: _this.state.numberOcurrences, disabled: _this.state.disableNumberOcurrences, onChange: _this.onNumberOfOcurrencesChange }),
                                        React.createElement(Label, { styles: { root: { display: 'inline-block', verticalAlign: 'top', paddingLeft: '10px' } } }, strings.OcurrencesLabel)));
                                }
                            },
                        ], required: true }))))));
    };
    return EventRecurrenceInfoYearly;
}(React.Component));
export { EventRecurrenceInfoYearly };
//# sourceMappingURL=EventRecurrenceInfoYearly.js.map