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
import styles from './EventRecurrenceInfoWeekly.module.scss';
import * as strings from 'CalendarWebPartStrings';
import * as moment from 'moment';
import { parseString } from "xml2js";
import { ChoiceGroup, Label, MaskedTextField, Checkbox, } from 'office-ui-fabric-react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import { toLocaleShortDateString } from '../../utils/dateUtils';
import spservices from '../../services/spservices';
var DayPickerStrings = {
    months: [strings.January, strings.February, strings.March, strings.April, strings.May, strings.June, strings.July, strings.August, strings.September, strings.October, strings.November, strings.December],
    shortMonths: [strings.Jan, strings.Feb, strings.Mar, strings.Apr, strings.May, strings.Jun, strings.Jul, strings.Aug, strings.Sep, strings.Oct, strings.Nov, strings.Dez],
    days: [strings.Sunday, strings.Monday, strings.Tuesday, strings.Wednesday, strings.Thursday, strings.Friday, strings.Saturday],
    shortDays: [strings.ShortDay_Sunday, strings.ShortDay_M, strings.ShortDay_T, strings.ShortDay_W, strings.ShortDay_Thursday, strings.ShortDay_Friday, strings.ShortDay_S],
    goToToday: strings.GoToDay,
    prevMonthAriaLabel: strings.PrevMonth,
    nextMonthAriaLabel: strings.NextMonth,
    prevYearAriaLabel: strings.PrevYear,
    nextYearAriaLabel: strings.NextYear,
    closeButtonAriaLabel: strings.CloseDate
};
/**
 *
 *
 * @export
 * @class EventRecurrenceInfoDaily
 * @extends {React.Component<IEventRecurrenceInfoWeeklyProps, IEventRecurrenceInfoWeeklyState>}
 */
var EventRecurrenceInfoWeekly = /** @class */ (function (_super) {
    __extends(EventRecurrenceInfoWeekly, _super);
    function EventRecurrenceInfoWeekly(props) {
        var _this = _super.call(this, props) || this;
        _this.spService = null;
        _this.onPaternChange = _this.onPaternChange.bind(_this);
        _this.state = {
            selectedKey: 'daily',
            selectPatern: 'every',
            startDate: _this.props.startDate ? _this.props.startDate : moment().toDate(),
            endDate: moment().endOf('month').toDate(),
            numberOcurrences: '10',
            numberOfWeeks: '1',
            disableNumberOfWeeks: false,
            disableNumberOcurrences: true,
            selectdateRangeOption: 'noDate',
            disableEndDate: true,
            weeklySunday: moment().weekday() === 0 ? true : false,
            weeklyMonday: moment().weekday() === 1 ? true : false,
            weekklyTuesday: moment().weekday() === 2 ? true : false,
            weekklyWednesday: moment().weekday() === 3 ? true : false,
            weekklyThursday: moment().weekday() === 4 ? true : false,
            weeklyFriday: moment().weekday() === 5 ? true : false,
            weeklySaturday: moment().weekday() === 6 ? true : false,
            isLoading: false,
            errorMessageNumberOfWeeks: '',
        };
        //
        _this.onNumberOfWeeksChange = _this.onNumberOfWeeksChange.bind(_this);
        _this.onNumberOfOcurrencesChange = _this.onNumberOfOcurrencesChange.bind(_this);
        _this.onDataRangeOptionChange = _this.onDataRangeOptionChange.bind(_this);
        _this.onEndDateChange = _this.onEndDateChange.bind(_this);
        _this.onStartDateChange = _this.onStartDateChange.bind(_this);
        _this.onApplyRecurrence = _this.onApplyRecurrence.bind(_this);
        _this.onCheckboxSundayChange = _this.onCheckboxSundayChange.bind(_this);
        _this.onCheckboxMondayChange = _this.onCheckboxMondayChange.bind(_this);
        _this.onCheckboxTuesdayChange = _this.onCheckboxTuesdayChange.bind(_this);
        _this.onCheckboxWednesdayChange = _this.onCheckboxWednesdayChange.bind(_this);
        _this.onCheckboxThursdayChange = _this.onCheckboxThursdayChange.bind(_this);
        _this.onCheckboxFridayChange = _this.onCheckboxFridayChange.bind(_this);
        _this.onCheckboxSaturdayChange = _this.onCheckboxSaturdayChange.bind(_this);
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
    EventRecurrenceInfoWeekly.prototype.onStartDateChange = function (date) {
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
    EventRecurrenceInfoWeekly.prototype.onEndDateChange = function (date) {
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
    EventRecurrenceInfoWeekly.prototype.onNumberOfWeeksChange = function (ev, value) {
        var _this = this;
        ev.preventDefault();
        setTimeout(function () {
            var errorMessage = '';
            if (Number(value.trim()) == 0 || Number(value.trim()) > 255) {
                value = '1  ';
                errorMessage = 'Allowed values 1 to 255';
            }
            _this.setState({ numberOfWeeks: value, errorMessageNumberOfWeeks: errorMessage });
            _this.applyRecurrence();
        }, 2000);
    };
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {string} value
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoWeekly.prototype.onNumberOfOcurrencesChange = function (ev, value) {
        var _this = this;
        ev.preventDefault();
        setTimeout(function () {
            _this.setState({ numberOcurrences: value.trim().length > 0 ? value : "10 " });
            _this.applyRecurrence();
        }, 2000);
    };
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {IChoiceGroupOption} option
     * @memberof EventRecurrenceInfoDaily
     */
    EventRecurrenceInfoWeekly.prototype.onDataRangeOptionChange = function (ev, option) {
        ev.preventDefault();
        this.setState({
            selectdateRangeOption: option.key,
            disableNumberOcurrences: option.key == 'endAfter' ? false : true,
            disableEndDate: option.key == 'endDate' ? false : true,
        });
        this.applyRecurrence();
    };
    EventRecurrenceInfoWeekly.prototype.onPaternChange = function (ev, option) {
        ev.preventDefault();
        this.setState({
            selectPatern: option.key,
            disableNumberOfWeeks: option.key == 'every' ? false : true,
        });
        this.applyRecurrence();
    };
    EventRecurrenceInfoWeekly.prototype.componentWillMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //  await this.load();
                    return [4 /*yield*/, this.load()];
                    case 1:
                        //  await this.load();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.componentDidUpdate = function (prevProps, prevState) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patern, dateRange, weeklyPatern, weeklysu, weeklymo, weeklytu, weeklywe, weeklyth, weeklyfr, weeklysa, selectDateRangeOption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        patern = {};
                        dateRange = {};
                        weeklyPatern = {};
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
                            // daily Patern
                            if (patern.weekly) {
                                weeklyPatern = patern.weekly.$.weekFrequency ? { weekFrequency: patern.weekly.$.weekFrequency } : { weekFrequency: 1 };
                                weeklysu = patern.weekly.$.su ? true : false;
                                weeklymo = patern.weekly.$.mo ? true : false;
                                weeklytu = patern.weekly.$.tu ? true : false;
                                weeklywe = patern.weekly.$.we ? true : false;
                                weeklyth = patern.weekly.$.th ? true : false;
                                weeklyfr = patern.weekly.$.fr ? true : false;
                                weeklysa = patern.weekly.$.sa ? true : false;
                                weeklyPatern = { su: weeklysu, mo: weeklymo, tu: weeklytu, we: weeklywe, th: weeklyth, fr: weeklyfr, sa: weeklysa };
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
                            console.log(selectDateRangeOption, new Date(moment(dateRange.windowEnd).format('YYYY/MM/DD')));
                            // weekday patern
                            this.setState({
                                weeklySunday: weeklyPatern.su,
                                weeklyMonday: weeklyPatern.mo,
                                weekklyTuesday: weeklyPatern.tu,
                                weekklyWednesday: weeklyPatern.we,
                                weekklyThursday: weeklyPatern.th,
                                weeklyFriday: weeklyPatern.fr,
                                weeklySaturday: weeklyPatern.sa,
                                selectPatern: weeklyPatern.weekFrequency,
                                numberOfWeeks: weeklyPatern.weekFrequency ? weeklyPatern.weekFrequency : '1',
                                selectdateRangeOption: selectDateRangeOption,
                                numberOcurrences: dateRange.repeatInstances ? dateRange.repeatInstances : '1',
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
    EventRecurrenceInfoWeekly.prototype.onApplyRecurrence = function (ev) {
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
    EventRecurrenceInfoWeekly.prototype.applyRecurrence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var siteTimeZoneHours, eventDate, endDate, selectDateRangeOption, weekdays, recurrenceXML;
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
                                selectDateRangeOption = "<repeatInstances>" + this.state.numberOcurrences.trim() + "</repeatInstances>";
                                break;
                            case 'endDate':
                                selectDateRangeOption = "<windowEnd>" + endDate + "</windowEnd>";
                                break;
                            default:
                                break;
                        }
                        weekdays = '';
                        if (this.state.weeklySunday) {
                            weekdays = 'su="TRUE" ';
                        }
                        if (this.state.weeklyMonday) {
                            weekdays = weekdays + " mo=\"TRUE\"";
                        }
                        if (this.state.weekklyTuesday) {
                            weekdays = weekdays + " tu=\"TRUE\"";
                        }
                        if (this.state.weekklyWednesday) {
                            weekdays = weekdays + " we=\"TRUE\"";
                        }
                        if (this.state.weekklyThursday) {
                            weekdays = weekdays + " th=\"TRUE\"";
                        }
                        if (this.state.weeklyFriday) {
                            weekdays = weekdays + " fr=\"TRUE\"";
                        }
                        if (this.state.weeklySaturday) {
                            weekdays = weekdays + " sa=\"TRUE\"";
                        }
                        recurrenceXML = "<recurrence><rule><firstDayOfWeek>su</firstDayOfWeek><repeat>" +
                            ("<weekly " + weekdays + " weekFrequency=\"" + this.state.numberOfWeeks.trim() + "\" /></repeat>" + selectDateRangeOption + "</rule></recurrence>");
                        console.log(recurrenceXML);
                        this.props.returnRecurrenceData(this.state.startDate, recurrenceXML);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.onCheckboxSundayChange = function (ev, isChecked) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ weeklySunday: isChecked });
                        return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.onCheckboxMondayChange = function (ev, isChecked) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ weeklyMonday: isChecked });
                        return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.onCheckboxTuesdayChange = function (ev, isChecked) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ weekklyTuesday: isChecked });
                        return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.onCheckboxWednesdayChange = function (ev, isChecked) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ weekklyWednesday: isChecked });
                        return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.onCheckboxThursdayChange = function (ev, isChecked) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ weekklyThursday: isChecked });
                        return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.onCheckboxFridayChange = function (ev, isChecked) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ weeklyFriday: isChecked });
                        return [4 /*yield*/, this.applyRecurrence()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRecurrenceInfoWeekly.prototype.onCheckboxSaturdayChange = function (ev, isChecked) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ weeklySaturday: isChecked });
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
     * @returns {React.ReactElement<IEventRecurrenceInfoWeeklyProps>}
     * @memberof EventRecurrenceInfoWeekly
     */
    EventRecurrenceInfoWeekly.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("div", null,
            React.createElement("div", { style: { display: 'inline-block', float: 'right', paddingTop: '10px', height: '40px' } }),
            React.createElement("div", { style: { width: '100%', paddingTop: '10px' } },
                React.createElement(Label, null, strings.PaternLabel),
                React.createElement("div", null,
                    React.createElement(Label, { styles: { root: { display: 'inline-block', verticalAlign: 'top', width: '40px' } } }, strings.every),
                    React.createElement(MaskedTextField, { styles: { root: { display: 'inline-block', verticalAlign: 'top', width: '100px', paddingLeft: '5px' } }, mask: "999", maskChar: ' ', errorMessage: this.state.errorMessageNumberOfWeeks, value: this.state.numberOfWeeks, onChange: this.onNumberOfWeeksChange }),
                    React.createElement(Label, { styles: { root: { display: 'inline-block', verticalAlign: 'top', width: '80px', paddingLeft: '10px' } } }, strings.WeeksOnLabel)),
                React.createElement("div", { style: { marginTop: '10px' } },
                    React.createElement(Checkbox, { label: "Sunday", className: styles.ckeckBoxInline, checked: this.state.weeklySunday, onChange: this.onCheckboxSundayChange }),
                    React.createElement(Checkbox, { label: "Monday", className: styles.ckeckBoxInline, checked: this.state.weeklyMonday, onChange: this.onCheckboxMondayChange }),
                    React.createElement(Checkbox, { label: "Tuesday", className: styles.ckeckBoxInline, checked: this.state.weekklyTuesday, onChange: this.onCheckboxTuesdayChange }),
                    React.createElement(Checkbox, { label: "Wednesday", className: styles.ckeckBoxInline, checked: this.state.weekklyWednesday, onChange: this.onCheckboxWednesdayChange })),
                React.createElement("div", { style: { marginTop: '10px' } },
                    React.createElement(Checkbox, { label: "Thursday", className: styles.ckeckBoxInline, checked: this.state.weekklyThursday, onChange: this.onCheckboxThursdayChange }),
                    React.createElement(Checkbox, { label: "Friday", className: styles.ckeckBoxInline, checked: this.state.weeklyFriday, onChange: this.onCheckboxFridayChange }),
                    React.createElement(Checkbox, { label: "Saturday", className: styles.ckeckBoxInline, checked: this.state.weeklySaturday, onChange: this.onCheckboxSaturdayChange }))),
            React.createElement("div", { style: { paddingTop: '22px' } },
                React.createElement(Label, null, strings.dateRangeLabel),
                React.createElement("div", { className: styles.dateRange },
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
    return EventRecurrenceInfoWeekly;
}(React.Component));
export { EventRecurrenceInfoWeekly };
//# sourceMappingURL=EventRecurrenceInfoWeekly.js.map