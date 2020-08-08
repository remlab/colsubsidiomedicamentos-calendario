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
import styles from './EventRecurrenceInfo.module.scss';
import * as strings from 'CalendarWebPartStrings';
import * as moment from 'moment';
import { ChoiceGroup, } from 'office-ui-fabric-react';
import { EventRecurrenceInfoDaily } from './../EventRecurrenceInfoDaily/EventRecurrenceInfoDaily';
import { EventRecurrenceInfoWeekly } from './../EventRecurrenceInfoWeekly/EventRecurrenceInfoWeekly';
import { EventRecurrenceInfoMonthly } from './../EventRecurrenceInfoMonthly/EventRecurrenceInfoMonthly';
import { EventRecurrenceInfoYearly } from './../EventRecurrenceInfoYearly/EventRecurrenceInfoYearly';
var EventRecurrenceInfo = /** @class */ (function (_super) {
    __extends(EventRecurrenceInfo, _super);
    function EventRecurrenceInfo(props) {
        var _this = _super.call(this, props) || this;
        _this._onRecurrenceFrequenceChange = _this._onRecurrenceFrequenceChange.bind(_this);
        _this.state = {
            selectedKey: 'daily',
            selectPatern: 'every',
            startDate: moment().toDate(),
            endDate: moment().endOf('month').toDate(),
            numberOcurrences: '1',
            numberOfDays: '1',
            disableNumberOfDays: false,
            disableNumberOcurrences: true,
            selectdateRangeOption: 'noDate',
            disableEndDate: true,
            selectedRecurrenceRule: 'daily',
        };
        return _this;
    }
    EventRecurrenceInfo.prototype._onRecurrenceFrequenceChange = function (ev, option) {
        this.setState({
            selectedRecurrenceRule: option.key
        });
    };
    /**
     *
     *
     * @memberof EventRecurrenceInfo
     */
    EventRecurrenceInfo.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.props.recurrenceData) {
                    if (this.props.recurrenceData.indexOf('<daily') != -1) {
                        this.setState({ selectedRecurrenceRule: 'daily' });
                    }
                    if (this.props.recurrenceData.indexOf('<weekly') != -1) {
                        this.setState({ selectedRecurrenceRule: 'weekly' });
                    }
                    if (this.props.recurrenceData.indexOf('<monthly') != -1) {
                        this.setState({ selectedRecurrenceRule: 'monthly' });
                    }
                    if (this.props.recurrenceData.indexOf('<monthlyByDay') != -1) {
                        this.setState({ selectedRecurrenceRule: 'monthly' });
                    }
                    if (this.props.recurrenceData.indexOf('<yearly') != -1) {
                        this.setState({ selectedRecurrenceRule: 'yearly' });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     *
     * @returns {React.ReactElement<IEventRecurrenceInfoProps>}
     * @memberof EventRecurrenceInfo
     */
    EventRecurrenceInfo.prototype.render = function () {
        return (React.createElement("div", { className: styles.divWrraper },
            React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top' } },
                React.createElement(ChoiceGroup, { label: strings.recurrenceInformationLabel, selectedKey: this.state.selectedRecurrenceRule, options: [
                        {
                            key: 'daily',
                            iconProps: { iconName: 'CalendarDay' },
                            text: strings.dailyLabel
                        },
                        {
                            key: 'weekly',
                            iconProps: { iconName: 'CalendarWeek' },
                            text: strings.weeklyLabel
                        },
                        {
                            key: 'monthly',
                            iconProps: { iconName: 'Calendar' },
                            text: strings.monthlyLabel,
                        },
                        {
                            key: 'yearly',
                            iconProps: { iconName: 'Calendar' },
                            text: strings.yearlyLabel,
                        }
                    ], onChange: this._onRecurrenceFrequenceChange })),
            this.state.selectedRecurrenceRule === 'daily' && (React.createElement(EventRecurrenceInfoDaily, { display: true, recurrenceData: this.props.recurrenceData, startDate: this.props.startDate, context: this.props.context, siteUrl: this.props.siteUrl, returnRecurrenceData: this.props.returnRecurrenceData })),
            this.state.selectedRecurrenceRule === 'weekly' && (React.createElement(EventRecurrenceInfoWeekly, { display: true, recurrenceData: this.props.recurrenceData, startDate: this.props.startDate, context: this.props.context, siteUrl: this.props.siteUrl, returnRecurrenceData: this.props.returnRecurrenceData })),
            this.state.selectedRecurrenceRule === 'monthly' && (React.createElement(EventRecurrenceInfoMonthly, { display: true, recurrenceData: this.props.recurrenceData, startDate: this.props.startDate, context: this.props.context, siteUrl: this.props.siteUrl, returnRecurrenceData: this.props.returnRecurrenceData })),
            this.state.selectedRecurrenceRule === 'yearly' && (React.createElement(EventRecurrenceInfoYearly, { display: true, recurrenceData: this.props.recurrenceData, startDate: this.props.startDate, context: this.props.context, siteUrl: this.props.siteUrl, returnRecurrenceData: this.props.returnRecurrenceData }))));
    };
    return EventRecurrenceInfo;
}(React.Component));
export { EventRecurrenceInfo };
//# sourceMappingURL=EventRecurrenceInfo.js.map