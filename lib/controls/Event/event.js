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
import styles from './Event.module.scss';
import * as strings from 'CalendarWebPartStrings';
import * as moment from 'moment';
import { parseString } from 'xml2js';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Panel, PanelType, TextField, Label } from 'office-ui-fabric-react';
import { DatePicker, Dropdown, DefaultButton, PrimaryButton, MessageBar, MessageBarType, Spinner, SpinnerSize, Dialog, DialogType, DialogFooter, Toggle } from 'office-ui-fabric-react';
import { IPanelModelEnum } from './IPanelModeEnum';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import spservices from '../../services/spservices';
import { Map } from "@pnp/spfx-controls-react/lib/Map";
import { EventRecurrenceInfo } from '../../controls/EventRecurrenceInfo/EventRecurrenceInfo';
import { getGUID } from '@pnp/common';
import { toLocaleShortDateString } from '../../utils/dateUtils';
var format = require('string-format');
var DayPickerStrings = {
    months: [strings.January, strings.February, strings.March, strings.April, strings.May, strings.June, strings.July, strings.August, strings.September, strings.October, strings.November, strings.December],
    shortMonths: [strings.Jan, strings.Feb, strings.Mar, strings.Apr, strings.May, strings.Jun, strings.Jul, strings.Aug, strings.Sep, strings.Oct, strings.Nov, strings.Dez],
    days: [strings.Sunday, strings.Monday, strings.Tuesday, strings.Wednesday, strings.Thursday, strings.Friday, strings.Saturday],
    shortDays: [strings.ShortDay_S, strings.ShortDay_M, strings.ShortDay_T, strings.ShortDay_W, strings.ShortDay_Thursday, strings.ShortDay_Friday, strings.ShortDay_Sunday],
    goToToday: strings.GoToDay,
    prevMonthAriaLabel: strings.PrevMonth,
    nextMonthAriaLabel: strings.NextMonth,
    prevYearAriaLabel: strings.PrevYear,
    nextYearAriaLabel: strings.NextYear,
    closeButtonAriaLabel: strings.CloseDate,
    isRequiredErrorMessage: strings.IsRequired,
    invalidInputErrorMessage: strings.InvalidDateFormat,
};
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(props) {
        var _this = _super.call(this, props) || this;
        _this.spService = null;
        _this.attendees = [];
        _this.latitude = 41.1931819;
        _this.longitude = -8.4897452;
        _this.returnedRecurrenceInfo = undefined;
        _this.categoryDropdownOption = [];
        /**
         * @private
         * @memberof Event
         */
        _this.onStartChangeHour = function (ev, item) {
            _this.setState({ startSelectedHour: item });
        };
        /**
         * @private
         * @memberof Event
         */
        _this.onEndChangeHour = function (ev, item) {
            _this.setState({ endSelectedHour: item });
        };
        /**
         * @private
         * @memberof Event
         */
        _this.onStartChangeMin = function (ev, item) {
            _this.setState({ startSelectedMin: item });
        };
        /* geolocation is available */
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
        else {
            /* geolocation IS NOT available */
            console.log('browser Geolocation is not available');
        }
        // Initialize Map coordinates
        _this.state = {
            showPanel: false,
            eventData: _this.props.event,
            startSelectedHour: { key: '09', text: '00' },
            startSelectedMin: { key: '00', text: '00' },
            endSelectedHour: { key: '18', text: '00' },
            endSelectedMin: { key: '00', text: '00' },
            editorState: EditorState.createEmpty(),
            selectedUsers: [],
            locationLatitude: _this.latitude,
            locationLongitude: _this.longitude,
            hasError: false,
            errorMessage: '',
            disableButton: true,
            isSaving: false,
            displayDialog: false,
            isloading: false,
            siteRegionalSettings: undefined,
            recurrenceSeriesEdited: false,
            showRecurrenceSeriesInfo: false,
            newRecurrenceEvent: false,
            recurrenceAction: 'display',
            userPermissions: { hasPermissionAdd: false, hasPermissionDelete: false, hasPermissionEdit: false, hasPermissionView: false },
        };
        // local copia of props
        _this.onStartChangeHour = _this.onStartChangeHour.bind(_this);
        _this.onStartChangeMin = _this.onStartChangeMin.bind(_this);
        _this.onEndChangeHour = _this.onEndChangeHour.bind(_this);
        _this.onEndChangeMin = _this.onEndChangeMin.bind(_this);
        _this.onEditorStateChange = _this.onEditorStateChange.bind(_this);
        _this.onRenderFooterContent = _this.onRenderFooterContent.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        _this.onSelectDateEnd = _this.onSelectDateEnd.bind(_this);
        _this.onSelectDateStart = _this.onSelectDateStart.bind(_this);
        _this.onUpdateCoordinates = _this.onUpdateCoordinates.bind(_this);
        _this.onGetErrorMessageTitle = _this.onGetErrorMessageTitle.bind(_this);
        _this.getPeoplePickerItems = _this.getPeoplePickerItems.bind(_this);
        _this.hidePanel = _this.hidePanel.bind(_this);
        _this.onDelete = _this.onDelete.bind(_this);
        _this.closeDialog = _this.closeDialog.bind(_this);
        _this.confirmDelete = _this.confirmDelete.bind(_this);
        _this.onCategoryChanged = _this.onCategoryChanged.bind(_this);
        _this.onEditRecurrence = _this.onEditRecurrence.bind(_this);
        _this.returnRecurrenceInfo = _this.returnRecurrenceInfo.bind(_this);
        _this.spService = new spservices(_this.props.context);
        return _this;
    }
    /**
     *  Hide Panel
     *
     * @private
     * @memberof Event
     */
    Event.prototype.hidePanel = function () {
        this.props.onDissmissPanel(false);
    };
    /**
     *  Save Event to a list
     * @private
     * @memberof Event
     */
    Event.prototype.onSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var eventData, panelMode, startDate, endDate, _a, startTime, startDateTime, start, endTime, endDateTime, end, locationInfo, _i, _b, user, userInfo, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        eventData = this.state.eventData;
                        panelMode = this.props.panelMode;
                        startDate = null;
                        endDate = null;
                        eventData.fRecurrence = false;
                        if (!(this.state.recurrenceSeriesEdited || this.state.newRecurrenceEvent)) return [3 /*break*/, 1];
                        eventData.RecurrenceData = this.returnedRecurrenceInfo.recurrenceData;
                        startDate = "" + moment(this.returnedRecurrenceInfo.eventDate).format('YYYY/MM/DD');
                        endDate = "" + moment(this.returnedRecurrenceInfo.endDate).format('YYYY/MM/DD');
                        if (eventData.EventType == "0" && this.state.newRecurrenceEvent) {
                            eventData.EventType = "1";
                            eventData.fRecurrence = true;
                            eventData.UID = getGUID();
                        }
                        if (eventData.EventType == "1" && this.state.recurrenceSeriesEdited) {
                            eventData.fRecurrence = true;
                            eventData.UID = getGUID();
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.state.eventData.EventType == '1')) return [3 /*break*/, 3];
                        eventData.RecurrenceID = eventData.EventDate.toString();
                        eventData.MasterSeriesItemID = eventData.ID.toString();
                        eventData.EventType = "4";
                        eventData.fRecurrence = true;
                        eventData.UID = getGUID();
                        panelMode = IPanelModelEnum.add;
                        _a = eventData;
                        return [4 /*yield*/, this.returnExceptionRecurrenceInfo(eventData.RecurrenceData)];
                    case 2:
                        _a.RecurrenceData = _d.sent();
                        _d.label = 3;
                    case 3:
                        startDate = "" + moment(this.state.startDate).format('YYYY/MM/DD');
                        endDate = "" + moment(this.state.endDate).format('YYYY/MM/DD');
                        _d.label = 4;
                    case 4:
                        startTime = this.state.startSelectedHour.key + ":" + this.state.startSelectedMin.key;
                        startDateTime = startDate + " " + startTime;
                        start = moment(startDateTime, 'YYYY/MM/DD HH:mm').toLocaleString();
                        eventData.EventDate = new Date(start);
                        endTime = this.state.endSelectedHour.key + ":" + this.state.endSelectedMin.key;
                        endDateTime = endDate + " " + endTime;
                        end = moment(endDateTime, 'YYYY/MM/DD HH:mm').toLocaleString();
                        eventData.EndDate = new Date(end);
                        // get Geolocation
                        eventData.geolocation = { Latitude: this.latitude, Longitude: this.longitude };
                        return [4 /*yield*/, this.spService.getGeoLactionName(this.latitude, this.longitude)];
                    case 5:
                        locationInfo = _d.sent();
                        eventData.location = locationInfo ? locationInfo.display_name : 'N/A';
                        // get Attendees
                        if (!eventData.attendes) { //vinitialize if no attendees
                            eventData.attendes = [];
                        }
                        // Get Descript from RichText Compoment
                        eventData.Description = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 17, , 18]);
                        _i = 0, _b = this.attendees;
                        _d.label = 7;
                    case 7:
                        if (!(_i < _b.length)) return [3 /*break*/, 10];
                        user = _b[_i];
                        return [4 /*yield*/, this.spService.getUserByLoginName(user.id, this.props.siteUrl)];
                    case 8:
                        userInfo = _d.sent();
                        eventData.attendes.push(Number(userInfo.Id));
                        _d.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 7];
                    case 10:
                        this.setState({ isSaving: true });
                        _c = panelMode;
                        switch (_c) {
                            case IPanelModelEnum.edit: return [3 /*break*/, 11];
                            case IPanelModelEnum.add: return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 15];
                    case 11: return [4 /*yield*/, this.spService.updateEvent(eventData, this.props.siteUrl, this.props.listId)];
                    case 12:
                        _d.sent();
                        return [3 /*break*/, 16];
                    case 13: return [4 /*yield*/, this.spService.addEvent(eventData, this.props.siteUrl, this.props.listId)];
                    case 14:
                        _d.sent();
                        return [3 /*break*/, 16];
                    case 15: return [3 /*break*/, 16];
                    case 16:
                        this.setState({ isSaving: false });
                        this.props.onDissmissPanel(true);
                        return [3 /*break*/, 18];
                    case 17:
                        error_1 = _d.sent();
                        this.setState({ hasError: true, errorMessage: error_1.message, isSaving: false });
                        return [3 /*break*/, 18];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param {*} error
     * @param {*} errorInfo
     * @memberof Event
     */
    Event.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ hasError: true, errorMessage: errorInfo.message });
    };
    /**
     *
     *
     * @private
     * @param {number} [eventId]
     * @memberof Event
     */
    Event.prototype.renderEventData = function (eventId) {
        return __awaiter(this, void 0, void 0, function () {
            var event, _a, editorState, siteRegionalSettings, userListPermissions, _b, startHour, startMin, endHour, endMin, html, contentBlock, contentState, attendees, selectedUsers, _i, attendees_1, userId, user, recurrenceInfo, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.setState({ isloading: true });
                        if (!!eventId) return [3 /*break*/, 1];
                        _a = this.props.event;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.spService.getEvent(this.props.siteUrl, this.props.listId, eventId)];
                    case 2:
                        _a = _d.sent();
                        _d.label = 3;
                    case 3:
                        event = _a;
                        return [4 /*yield*/, this.spService.getSiteRegionalSettingsTimeZone(this.props.siteUrl)];
                    case 4:
                        siteRegionalSettings = _d.sent();
                        return [4 /*yield*/, this.spService.getUserPermissions(this.props.siteUrl, this.props.listId)];
                    case 5:
                        userListPermissions = _d.sent();
                        // Load Categories
                        _b = this;
                        return [4 /*yield*/, this.spService.getChoiceFieldOptions(this.props.siteUrl, this.props.listId, 'Category')];
                    case 6:
                        // Load Categories
                        _b.categoryDropdownOption = _d.sent();
                        if (!(this.props.panelMode == IPanelModelEnum.edit && event)) return [3 /*break*/, 14];
                        startHour = moment(event.EventDate).format('HH').toString();
                        startMin = moment(event.EventDate).format('mm').toString();
                        endHour = moment(event.EndDate).format('HH').toString();
                        endMin = moment(event.EndDate).format('mm').toString();
                        html = event.Description;
                        contentBlock = htmlToDraft(html);
                        if (contentBlock) {
                            contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                            editorState = EditorState.createWithContent(contentState);
                        }
                        attendees = event.attendes;
                        selectedUsers = [];
                        if (!(attendees && attendees.length > 0)) return [3 /*break*/, 10];
                        _i = 0, attendees_1 = attendees;
                        _d.label = 7;
                    case 7:
                        if (!(_i < attendees_1.length)) return [3 /*break*/, 10];
                        userId = attendees_1[_i];
                        return [4 /*yield*/, this.spService.getUserById(userId, this.props.siteUrl)];
                    case 8:
                        user = _d.sent();
                        if (user) {
                            selectedUsers.push(user.UserPrincipalName);
                        }
                        _d.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 7];
                    case 10:
                        // Has geolocation ?
                        this.latitude = event.geolocation && event.geolocation.Latitude ? event.geolocation.Latitude : this.latitude;
                        this.longitude = event.geolocation && event.geolocation.Longitude ? event.geolocation.Longitude : this.longitude;
                        event.geolocation.Latitude = this.latitude;
                        event.geolocation.Longitude = this.longitude;
                        if (!(event.EventType === "4" && event.MasterSeriesItemID !== "")) return [3 /*break*/, 11];
                        _c = event.RecurrenceData;
                        return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, this.returnExceptionRecurrenceInfo(event.RecurrenceData)];
                    case 12:
                        _c = _d.sent();
                        _d.label = 13;
                    case 13:
                        recurrenceInfo = _c;
                        // Update Component Data
                        this.setState({
                            eventData: event,
                            startDate: event.EventDate,
                            endDate: event.EndDate,
                            startSelectedHour: { key: startHour, text: startHour },
                            startSelectedMin: { key: startMin, text: startMin },
                            endSelectedHour: { key: endHour, text: endHour },
                            endSelectedMin: { key: endMin, text: endMin },
                            editorState: editorState,
                            selectedUsers: selectedUsers,
                            userPermissions: userListPermissions,
                            isloading: false,
                            siteRegionalSettings: siteRegionalSettings,
                            locationLatitude: this.latitude,
                            locationLongitude: this.longitude,
                            recurrenceDescription: recurrenceInfo
                        });
                        return [3 /*break*/, 15];
                    case 14:
                        editorState = EditorState.createEmpty();
                        this.setState({
                            startDate: this.props.startDate ? this.props.startDate : new Date(),
                            endDate: this.props.endDate ? this.props.endDate : new Date(),
                            editorState: editorState,
                            userPermissions: userListPermissions,
                            isloading: false,
                            siteRegionalSettings: siteRegionalSettings,
                            eventData: __assign({}, event, { EventType: "0" }),
                        });
                        _d.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * @memberof Event
     */
    Event.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.renderEventData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {any[]} items
     * @memberof Event
     */
    Event.prototype.getPeoplePickerItems = function (items) {
        this.attendees = [];
        this.attendees = items;
    };
    /**
     *
     * @private
     * @param {*} editorState
     * @memberof Event
     */
    Event.prototype.onEditorStateChange = function (editorState) {
        this.setState({
            editorState: editorState,
        });
    };
    /**
     *
     * @private
     * @param {string} value
     * @returns {string}
     * @memberof Event
     */
    Event.prototype.onGetErrorMessageTitle = function (value) {
        var returnMessage = '';
        if (value.length === 0) {
            returnMessage = strings.EventTitleErrorMessage;
        }
        else {
            this.setState({ eventData: __assign({}, this.state.eventData, { title: value }), disableButton: false, errorMessage: '' });
        }
        return returnMessage;
    };
    /**
     *
     * @private
     * @memberof Event
     */
    Event.prototype.onEndChangeMin = function (ev, item) {
        this.setState({ endSelectedMin: item });
    };
    /**
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof Event
     */
    Event.prototype.onCategoryChanged = function (ev, item) {
        this.setState({ eventData: __assign({}, this.state.eventData, { Category: item.text }) });
    };
    /**
     *
     * @private
     * @param {React.MouseEvent<HTMLDivElement>} event
     * @memberof Event
     */
    Event.prototype.onDelete = function (ev) {
        ev.preventDefault();
        this.setState({ displayDialog: true });
    };
    /**
     *
     * @private
     * @param {React.MouseEvent<HTMLDivElement>} event
     * @memberof Event
     */
    Event.prototype.closeDialog = function (ev) {
        ev.preventDefault();
        this.setState({ displayDialog: false });
    };
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLDivElement>} ev
     * @memberof Event
     */
    Event.prototype.confirmDelete = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ev.preventDefault();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        this.setState({ isDeleting: true });
                        _a = this.props.panelMode;
                        switch (_a) {
                            case IPanelModelEnum.edit: return [3 /*break*/, 2];
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.spService.deleteEvent(this.state.eventData, this.props.siteUrl, this.props.listId, this.state.recurrenceSeriesEdited)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4: return [3 /*break*/, 5];
                    case 5:
                        this.setState({ isDeleting: false });
                        this.props.onDissmissPanel(true);
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        this.setState({ hasError: true, errorMessage: error_2.message, isDeleting: false, displayDialog: false });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @returns
     * @memberof Event
     */
    Event.prototype.onRenderFooterContent = function () {
        return (React.createElement("div", null,
            React.createElement(DefaultButton, { onClick: this.hidePanel, style: { marginBottom: '15px', float: 'right' } }, strings.CancelButtonLabel),
            this.props.panelMode == IPanelModelEnum.edit && this.state.userPermissions.hasPermissionDelete && (React.createElement(DefaultButton, { onClick: this.onDelete, style: { marginBottom: '15px', marginRight: '8px', float: 'right' } }, strings.DeleteButtonLabel)),
            (this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit) &&
                React.createElement(PrimaryButton, { disabled: this.state.disableButton, onClick: this.onSave, style: { marginBottom: '15px', marginRight: '8px', float: 'right' } }, strings.SaveButtonLabel),
            this.state.isSaving &&
                React.createElement(Spinner, { size: SpinnerSize.medium, style: { marginBottom: '15px', marginRight: '8px', float: 'right' } })));
    };
    /**
     *
     * @private
     * @param {Date} newDate
     * @memberof Event
     */
    Event.prototype.onSelectDateStart = function (newDate) {
        this.setState({ startDate: newDate });
    };
    /**
     * @private
     * @param {Date} newDate
     * @memberof Event
     */
    Event.prototype.onSelectDateEnd = function (newDate) {
        this.setState({ endDate: newDate });
    };
    /**
     *
     * @private
     * @param {ICoordinates} coordinates
     * @memberof Event
     */
    Event.prototype.onUpdateCoordinates = function (coordinates) {
        return __awaiter(this, void 0, void 0, function () {
            var locationInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.latitude = coordinates.latitude;
                        this.longitude = coordinates.longitude;
                        return [4 /*yield*/, this.spService.getGeoLactionName(this.latitude, this.longitude)];
                    case 1:
                        locationInfo = _a.sent();
                        this.setState({ eventData: __assign({}, this.state.eventData, { location: locationInfo.display_name }) });
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
     * @memberof Event
     */
    Event.prototype.onEditRecurrence = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.preventDefault();
                        // EventType = 4 Recurrence Exception
                        return [4 /*yield*/, this.renderEventData(this.state.eventData.EventType == '4' ? Number(this.state.eventData.MasterSeriesItemID) : this.state.eventData.Id)];
                    case 1:
                        // EventType = 4 Recurrence Exception
                        _a.sent();
                        this.setState({ showRecurrenceSeriesInfo: true, recurrenceSeriesEdited: true });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * @private
     * @param {string} rule
     * @memberof Event
     */
    Event.prototype.parseDailyRule = function (rule) {
        var keys = Object.keys(rule);
        if (keys.indexOf("weekday") !== -1 && rule["weekday"] === "TRUE")
            return format("{} {}", format(strings.everyFormat, 1), strings.weekDayLabel);
        if (keys.indexOf("dayFrequency") !== -1) {
            var dayFrequency = parseInt(rule["dayFrequency"]);
            var frequencyFormat = dayFrequency === 1 ? strings.everyFormat : dayFrequency === 2 ? strings.everySecondFormat : strings.everyNthFormat;
            return format("{} {}", format(frequencyFormat, dayFrequency), strings.dayLable);
        }
        return "Invalid recurrence format";
    };
    /**
     *
     *
     * @private
     * @param { string } rule
     * @memberof Event
     */
    Event.prototype.parseWeeklyRule = function (rule) {
        var frequency = parseInt(rule["weekFrequency"]);
        var keys = Object.keys(rule);
        var dayMap = {
            "mo": strings.Monday,
            "tu": strings.Tuesday,
            "we": strings.Wednesday,
            "th": strings.Thursday,
            "fr": strings.Friday,
            "sa": strings.Saturday,
            "su": strings.Sunday
        };
        var days = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            days.push(dayMap[key]);
        }
        return format("{}{} {} {}", frequency === 1 ? format(strings.everyFormat, frequency) : frequency === 2 ? format(strings.everySecondFormat, frequency) : format(strings.everyNthFormat, frequency), strings.weekLabel, strings.onLabel, days.join(", "));
    };
    /**
     *
     *
     * @private
     * @param { string } rule
     * @memberof Event
     */
    Event.prototype.parseMonthlyRule = function (rule) {
        var frequency = parseInt(rule["monthFrequency"]);
        var day = parseInt(rule["day"]);
        return format("{}{} {}", frequency === 1 ? format(strings.everyFormat, frequency) : frequency === 2 ? format(strings.everySecondFormat, frequency) : format(strings.everyNthFormat, frequency), strings.monthLabel, format(strings.onTheDayFormat, day));
    };
    /**
     *
     * @private
     * @param { string } rule
     * @memberof Event
     */
    Event.prototype.parseMonthlyByDayRule = function (rule) {
        var keys = Object.keys(rule);
        var dayTypeMap = {
            "day": strings.weekDayLabel,
            "weekend_day": strings.weekEndDay,
            "mo": strings.Monday,
            "tu": strings.Tuesday,
            "we": strings.Wednesday,
            "th": strings.Thursday,
            "fr": strings.Friday,
            "sa": strings.Saturday,
            "su": strings.Sunday
        };
        var orderType = {
            "first": strings.firstLabel,
            "second": strings.secondLabel,
            "third": strings.thirdLabel,
            "fourth": strings.fourthLabel,
            "last": strings.lastLabel
        };
        var order;
        var dayType;
        var frequencyFormat;
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            switch (key) {
                case "monthFrequency":
                    var frequency = parseInt(rule[key]);
                    switch (frequency) {
                        case 1:
                            frequencyFormat = format(strings.everyFormat, frequency);
                            break;
                        case 2:
                            frequencyFormat = format(strings.everySecondFormat, frequency);
                            break;
                        default:
                            frequencyFormat = format(strings.everyNthFormat, frequency);
                            break;
                    }
                    break;
                case "weekDayOfMonth":
                    order = orderType[rule[key]];
                    break;
                default:
                    dayType = dayTypeMap[rule[key]];
                    break;
            }
        }
        return format("{} {} {} {} {}{}", frequencyFormat, strings.monthLabel.toLowerCase(), strings.onTheLabel, order, dayType, strings.theSuffix);
    };
    /**
     *
     * @private
     * @param rule
     * @memberof Event
     */
    Event.prototype.parseYearlyRule = function (rule) {
        var keys = Object.keys(rule);
        var months = DayPickerStrings.months;
        var frequencyString;
        var month;
        var day;
        for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
            var key = keys_3[_i];
            switch (key) {
                case "yearFrequency":
                    var frequency = parseInt(rule[key]);
                    var frequencyFormat = frequency == 1 ? strings.everyFormat : frequency == 2 ? strings.everySecondFormat : strings.everyNthFormat;
                    frequencyString = format(frequencyFormat, frequency);
                    break;
                case "month":
                    month = months[parseInt(rule[key]) - 1];
                    break;
                case "day":
                    day = rule[key];
                    break;
            }
        }
        return format("{} {} {}", frequencyString, strings.yearLabel, format(strings.theNthOfMonthFormat, month, day));
    };
    /**
     *
     *
     * @private
     * @param rule
     * @memberof Event
     */
    Event.prototype.parseYearlyByDayRule = function (rule) {
        var keys = Object.keys(rule);
        var months = DayPickerStrings.months;
        var orderMap = {
            "first": strings.firstLabel,
            "second": strings.secondLabel,
            "third": strings.thirdLabel,
            "fourth": strings.fourthLabel,
            "last": strings.lastLabel
        };
        var dayTypeMap = {
            "day": strings.weekDayLabel,
            "weekend_day": strings.weekEndDay,
            "mo": strings.Monday,
            "tu": strings.Tuesday,
            "we": strings.Wednesday,
            "th": strings.Thursday,
            "fr": strings.Friday,
            "sa": strings.Saturday,
            "su": strings.Sunday
        };
        var frequencyString;
        var month;
        var order;
        var dayTypeString;
        for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
            var key = keys_4[_i];
            switch (key) {
                case "yearFrequency":
                    var frequency = parseInt(rule[key]);
                    var frequencyFormat = frequency === 1 ? strings.everyFormat : frequency === 2 ? strings.everySecondFormat : strings.everyNthFormat;
                    frequencyString = format(frequencyFormat, frequency);
                    break;
                case "weekDayOfMonth":
                    order = orderMap[rule[key]];
                    break;
                case "month":
                    month = months[parseInt(rule[key]) - 1];
                    break;
                default:
                    dayTypeString = dayTypeMap[rule[key]];
                    break;
            }
            return format("{} {} {}", frequencyString, strings.yearLabel, format(strings.onTheDayTypeFormat, order, dayTypeString.toLowerCase(), strings.theSuffix));
        }
    };
    /**
     *
     *
     * @private
     * @param {string} recurrenceData
     * @memberof Event
     */
    Event.prototype.returnExceptionRecurrenceInfo = function (recurrenceData) {
        return __awaiter(this, void 0, void 0, function () {
            var promise, recurrenceInfo, keys, recurrenceTypes, _i, keys_5, key, rule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve, reject) {
                            parseString(recurrenceData, function (err, result) {
                                if (err) {
                                    reject(err);
                                }
                                resolve(result);
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        recurrenceInfo = _a.sent();
                        if (recurrenceInfo != null) {
                            keys = Object.keys(recurrenceInfo.recurrence.rule[0].repeat[0]);
                            recurrenceTypes = ["daily", "weekly", "monthly", "monthlyByDay", "yearly", "yearlyByDay"];
                            for (_i = 0, keys_5 = keys; _i < keys_5.length; _i++) {
                                key = keys_5[_i];
                                rule = recurrenceInfo.recurrence.rule[0].repeat[0][key][0]['$'];
                                switch (recurrenceTypes.indexOf(key)) {
                                    case 0:
                                        return [2 /*return*/, this.parseDailyRule(rule)];
                                        break;
                                    case 1:
                                        return [2 /*return*/, this.parseWeeklyRule(rule)];
                                        break;
                                    case 2:
                                        return [2 /*return*/, this.parseMonthlyRule(rule)];
                                        break;
                                    case 3:
                                        return [2 /*return*/, this.parseMonthlyByDayRule(rule)];
                                        break;
                                    case 4:
                                        return [2 /*return*/, this.parseYearlyRule(rule)];
                                        break;
                                    case 5:
                                        return [2 /*return*/, this.parseYearlyByDayRule(rule)];
                                        break;
                                    default:
                                        continue;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * @param {Date} startDate
     * @param {string} recurrenceData
     * @memberof Event
     */
    Event.prototype.returnRecurrenceInfo = function (startDate, recurrenceData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.returnedRecurrenceInfo = { recurrenceData: recurrenceData, eventDate: startDate, endDate: moment().add(20, 'years').toDate() };
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     *
     * @returns {React.ReactElement<IEventProps>}
     * @memberof Event
     */
    Event.prototype.render = function () {
        var _this = this;
        var editorState = this.state.editorState;
        return (React.createElement("div", null,
            React.createElement(Panel, { isOpen: this.props.showPanel, onDismiss: this.hidePanel, type: PanelType.medium, headerText: strings.EventPanelTitle, isFooterAtBottom: true, onRenderFooterContent: this.onRenderFooterContent },
                React.createElement("div", { style: { width: '100%' } },
                    this.state.hasError &&
                        React.createElement(MessageBar, { messageBarType: MessageBarType.error }, this.state.errorMessage),
                    this.state.isloading && (React.createElement(Spinner, { size: SpinnerSize.large })),
                    !this.state.isloading &&
                        React.createElement("div", null,
                            (this.state.eventData && (this.state.eventData.EventType !== "0" && this.state.showRecurrenceSeriesInfo !== true)) ?
                                React.createElement("div", null,
                                    React.createElement("h2", { style: { display: 'inline-block', verticalAlign: 'top' } }, strings.recurrenceEventLabel),
                                    this.state.recurrenceDescription ? React.createElement("span", { style: { display: 'block' } }, this.state.recurrenceDescription) : null,
                                    React.createElement(DefaultButton, { style: { display: 'inline-block', marginLeft: '330px', verticalAlign: 'top', width: 'auto' }, iconProps: { iconName: 'RecurringEvent' }, allowDisabledFocus: true, onClick: this.onEditRecurrence }, strings.editRecurrenceSeries))
                                : '',
                            React.createElement("div", { style: { marginTop: 10 } },
                                React.createElement(TextField, { label: strings.EventTitleLabel, value: this.state.eventData ? this.state.eventData.title : '', onGetErrorMessage: this.onGetErrorMessageTitle, deferredValidationTime: 500, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true })),
                            React.createElement("div", null,
                                React.createElement(Dropdown, { label: strings.CategoryLabel, selectedKey: this.state.eventData && this.state.eventData.Category ? this.state.eventData.Category : '', onChange: this.onCategoryChanged, options: this.categoryDropdownOption, placeholder: strings.CategoryPlaceHolder, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true })),
                            React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', paddingRight: 10 } },
                                React.createElement(DatePicker, { isRequired: false, strings: DayPickerStrings, placeholder: strings.StartDatePlaceHolder, ariaLabel: strings.StartDatePlaceHolder, allowTextInput: true, value: this.state.startDate, label: strings.StartDateLabel, onSelectDate: this.onSelectDateStart, formatDate: toLocaleShortDateString, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true, hidden: this.state.showRecurrenceSeriesInfo })),
                            React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', paddingRight: 10 } },
                                React.createElement(Dropdown, { selectedKey: this.state.startSelectedHour.key, onChange: this.onStartChangeHour, label: strings.StartHourLabel, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true, options: [
                                        { key: '00', text: '00' },
                                        { key: '01', text: '01' },
                                        { key: '02', text: '02' },
                                        { key: '03', text: '03' },
                                        { key: '04', text: '04' },
                                        { key: '05', text: '05' },
                                        { key: '06', text: '06' },
                                        { key: '07', text: '07' },
                                        { key: '08', text: '08' },
                                        { key: '09', text: '09' },
                                        { key: '10', text: '10' },
                                        { key: '11', text: '11' },
                                        { key: '12', text: '12' },
                                        { key: '13', text: '13' },
                                        { key: '14', text: '14' },
                                        { key: '15', text: '15' },
                                        { key: '16', text: '16' },
                                        { key: '17', text: '17' },
                                        { key: '18', text: '18' },
                                        { key: '19', text: '19' },
                                        { key: '20', text: '20' },
                                        { key: '21', text: '21' },
                                        { key: '22', text: '22' },
                                        { key: '23', text: '23' }
                                    ] })),
                            React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', } },
                                React.createElement(Dropdown, { label: strings.StartMinLabel, selectedKey: this.state.startSelectedMin.key, onChange: this.onStartChangeMin, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true, options: [
                                        { key: '00', text: '00' },
                                        { key: '05', text: '05' },
                                        { key: '10', text: '10' },
                                        { key: '15', text: '15' },
                                        { key: '20', text: '20' },
                                        { key: '25', text: '25' },
                                        { key: '30', text: '30' },
                                        { key: '35', text: '35' },
                                        { key: '40', text: '40' },
                                        { key: '45', text: '45' },
                                        { key: '50', text: '50' },
                                        { key: '55', text: '55' }
                                    ] })),
                            React.createElement("br", null),
                            React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', paddingRight: 10 } },
                                React.createElement(DatePicker, { isRequired: false, strings: DayPickerStrings, placeholder: strings.EndDatePlaceHolder, ariaLabel: strings.EndDatePlaceHolder, allowTextInput: true, value: this.state.endDate, label: strings.EndDateLabel, onSelectDate: this.onSelectDateEnd, formatDate: toLocaleShortDateString, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true, hidden: this.state.showRecurrenceSeriesInfo })),
                            React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', paddingRight: 10 } },
                                React.createElement(Dropdown, { selectedKey: this.state.endSelectedHour.key, onChange: this.onEndChangeHour, label: strings.EndHourLabel, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true, options: [
                                        { key: '00', text: '00' },
                                        { key: '01', text: '01' },
                                        { key: '02', text: '02' },
                                        { key: '03', text: '03' },
                                        { key: '04', text: '04' },
                                        { key: '05', text: '05' },
                                        { key: '06', text: '06' },
                                        { key: '07', text: '07' },
                                        { key: '08', text: '08' },
                                        { key: '09', text: '09' },
                                        { key: '10', text: '10' },
                                        { key: '11', text: '11' },
                                        { key: '12', text: '12' },
                                        { key: '13', text: '13' },
                                        { key: '14', text: '14' },
                                        { key: '15', text: '15' },
                                        { key: '16', text: '16' },
                                        { key: '17', text: '17' },
                                        { key: '18', text: '18' },
                                        { key: '19', text: '19' },
                                        { key: '20', text: '20' },
                                        { key: '21', text: '21' },
                                        { key: '22', text: '22' },
                                        { key: '23', text: '23' }
                                    ] })),
                            React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', } },
                                React.createElement(Dropdown, { label: strings.EndMinLabel, selectedKey: this.state.endSelectedMin.key, onChange: this.onEndChangeMin, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true, options: [
                                        { key: '00', text: '00' },
                                        { key: '05', text: '05' },
                                        { key: '10', text: '10' },
                                        { key: '15', text: '15' },
                                        { key: '20', text: '20' },
                                        { key: '25', text: '25' },
                                        { key: '30', text: '30' },
                                        { key: '35', text: '35' },
                                        { key: '40', text: '40' },
                                        { key: '45', text: '45' },
                                        { key: '50', text: '50' },
                                        { key: '55', text: '55' },
                                        { key: '59', text: '59' }
                                    ] })),
                            React.createElement(Label, null, this.state.siteRegionalSettings ? this.state.siteRegionalSettings.Description : ''),
                            React.createElement("br", null),
                            this.state.eventData && (this.state.eventData.EventType == "0") ?
                                React.createElement("div", { style: { display: 'inline-block', verticalAlign: 'top', width: '200px' } },
                                    React.createElement(Toggle, { defaultChecked: false, inlineLabel: true, label: strings.ifRecurrenceLabel, onText: strings.onLabel, offText: strings.offLabel, onChange: function (ev, checked) {
                                            ev.preventDefault();
                                            _this.setState({ showRecurrenceSeriesInfo: checked, newRecurrenceEvent: checked });
                                        } }))
                                :
                                    '',
                            this.state.showRecurrenceSeriesInfo && (React.createElement(EventRecurrenceInfo, { context: this.props.context, display: true, recurrenceData: this.state.eventData.RecurrenceData, startDate: this.state.startDate, siteUrl: this.props.siteUrl, returnRecurrenceData: this.returnRecurrenceInfo })),
                            React.createElement(Label, null,
                                " ",
                                strings.eventDescriptionLabel),
                            React.createElement("div", { className: styles.description },
                                React.createElement(Editor, { editorState: editorState, onEditorStateChange: this.onEditorStateChange, ReadOnly: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true })),
                            React.createElement("div", null,
                                React.createElement(PeoplePicker, { webAbsoluteUrl: this.props.siteUrl, context: this.props.context, titleText: strings.AttendeesLabel, principalTypes: [PrincipalType.User], resolveDelay: 1000, showtooltip: true, selectedItems: this.getPeoplePickerItems, personSelectionLimit: 10, defaultSelectedUsers: this.state.selectedUsers, disabled: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? false : true })),
                            React.createElement("div", null,
                                React.createElement(TextField, { value: this.state.eventData && this.state.eventData.location ? this.state.eventData.location : '', label: strings.LocationTextLabel, readOnly: true, multiline: true })),
                            React.createElement("div", null,
                                React.createElement(Map, { titleText: strings.LocationLabel, coordinates: { latitude: this.state.locationLatitude, longitude: this.state.locationLongitude }, enableSearch: this.state.userPermissions.hasPermissionAdd || this.state.userPermissions.hasPermissionEdit ? true : false, onUpdateCoordinates: this.onUpdateCoordinates })))),
                this.state.displayDialog &&
                    React.createElement("div", null,
                        React.createElement(Dialog, { hidden: !this.state.displayDialog, dialogContentProps: {
                                type: DialogType.normal,
                                title: strings.DialogConfirmDeleteTitle,
                                showCloseButton: false
                            }, modalProps: {
                                isBlocking: true,
                                styles: { main: { maxWidth: 450 } }
                            } },
                            React.createElement(Label, null, strings.ConfirmeDeleteMessage),
                            this.state.isDeleting &&
                                React.createElement(Spinner, { size: SpinnerSize.medium, ariaLabel: strings.SpinnerDeletingLabel }),
                            React.createElement(DialogFooter, null,
                                React.createElement(PrimaryButton, { onClick: this.confirmDelete, text: strings.DialogConfirmDeleteLabel, disabled: this.state.isDeleting }),
                                React.createElement(DefaultButton, { onClick: this.closeDialog, text: strings.DialogCloseButtonLabel })))))));
    };
    return Event;
}(React.Component));
export { Event };
//# sourceMappingURL=event.js.map