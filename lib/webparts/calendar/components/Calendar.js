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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import styles from './Calendar.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import * as strings from 'CalendarWebPartStrings';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// require('./calendar.css');
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer, Persona, PersonaSize, PersonaPresence, HoverCard, HoverCardType, DocumentCard, DocumentCardActivity, DocumentCardDetails, DocumentCardPreview, DocumentCardTitle, Icon, Spinner, SpinnerSize, MessageBar, MessageBarType, } from 'office-ui-fabric-react';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { DisplayMode } from '@microsoft/sp-core-library';
import spservices from '../../../services/spservices';
import { Event } from '../../../controls/Event/event';
import { IPanelModelEnum } from '../../../controls/Event/IPanelModeEnum';
import BlockTitle from '../../componentes/blockTitle/BlockTitle';
var localizer = BigCalendar.momentLocalizer(moment);
/**
 * @export
 * @class Calendar
 * @extends {React.Component<ICalendarProps, ICalendarState>}
 */
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.spService = null;
        _this.userListPermissions = undefined;
        _this.state = {
            showDialog: false,
            eventData: [],
            selectedEvent: undefined,
            isloading: true,
            hasError: false,
            errorMessage: '',
        };
        _this.onDismissPanel = _this.onDismissPanel.bind(_this);
        _this.onSelectEvent = _this.onSelectEvent.bind(_this);
        _this.onSelectSlot = _this.onSelectSlot.bind(_this);
        _this.spService = new spservices(_this.props.context);
        moment.locale(_this.props.context.pageContext.cultureInfo.currentUICultureName);
        return _this;
    }
    Calendar.prototype.onDocumentCardClick = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
    };
    /**
     * @private
     * @param {*} event
     * @memberof Calendar
     */
    Calendar.prototype.onSelectEvent = function (event) {
        this.setState({ showDialog: true, selectedEvent: event, panelMode: IPanelModelEnum.edit });
    };
    /**
     *
     * @private
     * @param {boolean} refresh
     * @memberof Calendar
     */
    Calendar.prototype.onDismissPanel = function (refresh) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ showDialog: false });
                        if (!(refresh === true)) return [3 /*break*/, 2];
                        this.setState({ isloading: true });
                        return [4 /*yield*/, this.loadEvents()];
                    case 1:
                        _a.sent();
                        this.setState({ isloading: false });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @memberof Calendar
     */
    Calendar.prototype.loadEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, eventsData, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        // Teste Properties
                        if (!this.props.list || !this.props.siteUrl || !this.props.eventStartDate.value || !this.props.eventEndDate.value)
                            return [2 /*return*/];
                        _a = this;
                        return [4 /*yield*/, this.spService.getUserPermissions(this.props.siteUrl, this.props.list)];
                    case 1:
                        _a.userListPermissions = _b.sent();
                        return [4 /*yield*/, this.spService.getEvents(escape(this.props.siteUrl), escape(this.props.list), this.props.eventStartDate.value, this.props.eventEndDate.value)];
                    case 2:
                        eventsData = _b.sent();
                        this.setState({ eventData: eventsData, hasError: false, errorMessage: "" });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.setState({ hasError: true, errorMessage: error_1.message, isloading: false });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @memberof Calendar
     */
    Calendar.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ isloading: true });
                        return [4 /*yield*/, this.loadEvents()];
                    case 1:
                        _a.sent();
                        this.setState({ isloading: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param {*} error
     * @param {*} errorInfo
     * @memberof Calendar
     */
    Calendar.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ hasError: true, errorMessage: errorInfo.componentStack });
    };
    /**
     *
     *
     * @param {ICalendarProps} prevProps
     * @param {ICalendarState} prevState
     * @memberof Calendar
     */
    Calendar.prototype.componentDidUpdate = function (prevProps, prevState) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.list || !this.props.siteUrl || !this.props.eventStartDate.value || !this.props.eventEndDate.value)
                            return [2 /*return*/];
                        if (!(prevProps.list !== this.props.list || this.props.eventStartDate.value !== prevProps.eventStartDate.value || this.props.eventEndDate.value !== prevProps.eventEndDate.value)) return [3 /*break*/, 2];
                        this.setState({ isloading: true });
                        return [4 /*yield*/, this.loadEvents()];
                    case 1:
                        _a.sent();
                        this.setState({ isloading: false });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {*} { event }
     * @returns
     * @memberof Calendar
     */
    Calendar.prototype.renderEvent = function (_a) {
        var event = _a.event;
        var previewEventIcon = {
            previewImages: [
                {
                    // previewImageSrc: event.ownerPhoto,
                    previewIconProps: { iconName: event.fRecurrence === '0' ? 'Calendar' : 'RecurringEvent', styles: { root: { color: event.color } }, className: styles.previewEventIcon },
                    height: 43,
                }
            ]
        };
        var EventInfo = {
            imageInitials: event.ownerInitial,
            imageUrl: event.ownerPhoto,
            text: event.title
        };
        /**
         * @returns {JSX.Element}
         */
        var onRenderPlainCard = function () {
            return (React.createElement("div", { className: styles.plainCard },
                React.createElement(DocumentCard, { className: styles.Documentcard },
                    React.createElement("div", null,
                        React.createElement(DocumentCardPreview, __assign({}, previewEventIcon))),
                    React.createElement(DocumentCardDetails, null,
                        React.createElement("div", { className: styles.DocumentCardDetails },
                            React.createElement(DocumentCardTitle, { title: event.title, shouldTruncate: true, className: styles.DocumentCardTitle, styles: { root: { color: event.color } } })),
                        moment(event.EventDate).format('YYYY/MM/DD') !== moment(event.EndDate).format('YYYY/MM/DD') ?
                            React.createElement("span", { className: styles.DocumentCardTitleTime },
                                moment(event.EventDate).format('dddd'),
                                " - ",
                                moment(event.EndDate).format('dddd'),
                                " ")
                            :
                                React.createElement("span", { className: styles.DocumentCardTitleTime },
                                    moment(event.EventDate).format('dddd'),
                                    " "),
                        React.createElement("span", { className: styles.DocumentCardTitleTime },
                            moment(event.EventDate).format('HH:mm'),
                            "H - ",
                            moment(event.EndDate).format('HH:mm'),
                            "H"),
                        React.createElement(Icon, { iconName: 'MapPin', className: styles.locationIcon, style: { color: event.color } }),
                        React.createElement(DocumentCardTitle, { title: "" + event.location, shouldTruncate: true, showAsSecondaryTitle: true, className: styles.location }),
                        React.createElement("div", { style: { marginTop: 20 } },
                            React.createElement(DocumentCardActivity, { activity: strings.EventOwnerLabel, people: [{ name: event.ownerName, profileImageSrc: event.ownerPhoto, initialsColor: event.color }] }))))));
        };
        return (React.createElement("div", { style: { height: 22 } },
            React.createElement(HoverCard, { cardDismissDelay: 300, type: HoverCardType.plain, plainCardProps: { onRenderPlainCard: onRenderPlainCard }, onCardHide: function () {
                } },
                React.createElement(Persona, __assign({}, EventInfo, { size: PersonaSize.size24, presence: PersonaPresence.none, coinSize: 22, initialsColor: event.color })))));
    };
    /**
     *
     *
     * @private
     * @memberof Calendar
     */
    Calendar.prototype.onConfigure = function () {
        // Context of the web part
        this.props.context.propertyPane.open();
    };
    /**
     * @param {*} { start, end }
     * @memberof Calendar
     */
    Calendar.prototype.onSelectSlot = function (_a) {
        var start = _a.start, end = _a.end;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (!this.userListPermissions.hasPermissionAdd)
                    return [2 /*return*/];
                this.setState({ showDialog: true, startDateSlot: start, endDateSlot: end, selectedEvent: undefined, panelMode: IPanelModelEnum.add });
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     * @param {*} event
     * @param {*} start
     * @param {*} end
     * @param {*} isSelected
     * @returns {*}
     * @memberof Calendar
     */
    Calendar.prototype.eventStyleGetter = function (event, start, end, isSelected) {
        var style = {
            backgroundColor: 'white',
            borderRadius: '0px',
            opacity: 1,
            color: event.color,
            borderWidth: '1.1px',
            borderStyle: 'solid',
            borderColor: event.color,
            borderLeftWidth: '6px',
            display: 'block'
        };
        return {
            style: style
        };
    };
    /**
      *
      * @param {*} date
      * @memberof Calendar
      */
    Calendar.prototype.dayPropGetter = function (date) {
        return {
            className: styles.dayPropGetter
        };
    };
    /**
     *
     * @returns {React.ReactElement<ICalendarProps>}
     * @memberof Calendar
     */
    Calendar.prototype.render = function () {
        return (React.createElement(Customizer, __assign({}, FluentCustomizations),
            React.createElement("div", { className: styles.calendar, style: { backgroundColor: 'white', padding: '20px' } },
                React.createElement(BlockTitle, { type: 'title__left' },
                    React.createElement("span", null, "Calendario de"),
                    " ",
                    React.createElement("strong", null, "Actividades")),
                (!this.props.list || !this.props.eventStartDate.value || !this.props.eventEndDate.value) ?
                    React.createElement(Placeholder, { iconName: 'Edit', iconText: strings.WebpartConfigIconText, description: strings.WebpartConfigDescription, buttonLabel: strings.WebPartConfigButtonLabel, hideButton: this.props.displayMode === DisplayMode.Read, onConfigure: this.onConfigure.bind(this) })
                    :
                        // test if has errors
                        this.state.hasError ?
                            React.createElement(MessageBar, { messageBarType: MessageBarType.error }, this.state.errorMessage)
                            :
                                // show Calendar
                                // Test if is loading Events
                                React.createElement("div", null, this.state.isloading ? React.createElement(Spinner, { size: SpinnerSize.large, label: strings.LoadingEventsLabel }) :
                                    React.createElement("div", { className: styles.container },
                                        React.createElement(BigCalendar, { dayPropGetter: this.dayPropGetter, localizer: localizer, selectable: true, events: this.state.eventData, startAccessor: "EventDate", endAccessor: "EndDate", eventPropGetter: this.eventStyleGetter, onSelectSlot: this.onSelectSlot, components: {
                                                event: this.renderEvent
                                            }, onSelectEvent: this.onSelectEvent, defaultDate: moment().startOf('day').toDate(), messages: {
                                                'today': strings.todayLabel,
                                                'previous': strings.previousLabel,
                                                'next': strings.nextLabel,
                                                'month': strings.monthLabel,
                                                'week': strings.weekLabel,
                                                'day': strings.dayLable,
                                                'showMore': function (total) { return "+" + total + " " + strings.showMore; }
                                            } }))),
                this.state.showDialog &&
                    React.createElement(Event, { event: this.state.selectedEvent, panelMode: this.state.panelMode, onDissmissPanel: this.onDismissPanel, showPanel: this.state.showDialog, startDate: this.state.startDateSlot, endDate: this.state.endDateSlot, context: this.props.context, siteUrl: this.props.siteUrl, listId: this.props.list }))));
    };
    return Calendar;
}(React.Component));
export default Calendar;
//# sourceMappingURL=Calendar.js.map