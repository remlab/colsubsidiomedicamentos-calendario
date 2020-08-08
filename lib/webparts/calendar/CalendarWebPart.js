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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField, PropertyPaneDropdown, PropertyPaneLabel } from '@microsoft/sp-property-pane';
import * as strings from 'CalendarWebPartStrings';
import Calendar from './components/Calendar';
import { PropertyFieldDateTimePicker, DateConvention } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
import spservices from '../../services/spservices';
import * as moment from 'moment';
var CalendarWebPart = /** @class */ (function (_super) {
    __extends(CalendarWebPart, _super);
    function CalendarWebPart() {
        var _this = _super.call(this) || this;
        _this.lists = [];
        _this.listsDropdownDisabled = true;
        _this.spService = null;
        return _this;
    }
    CalendarWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(Calendar, {
            title: this.properties.title,
            siteUrl: this.properties.siteUrl,
            list: this.properties.list,
            displayMode: this.displayMode,
            updateProperty: function (value) {
                _this.properties.title = value;
            },
            context: this.context,
            eventStartDate: this.properties.eventStartDate,
            eventEndDate: this.properties.eventEndDate,
        });
        ReactDom.render(element, this.domElement);
    };
    // onInit
    CalendarWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _lists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spService = new spservices(this.context);
                        this.properties.siteUrl = this.properties.siteUrl ? this.properties.siteUrl : this.context.pageContext.site.absoluteUrl;
                        if (!this.properties.eventStartDate) {
                            this.properties.eventStartDate = { value: moment().subtract(2, 'years').startOf('month').toDate(), displayValue: moment().format('ddd MMM MM YYYY') };
                        }
                        if (!this.properties.eventEndDate) {
                            this.properties.eventEndDate = { value: moment().add(20, 'years').endOf('month').toDate(), displayValue: moment().format('ddd MMM MM YYYY') };
                        }
                        if (!(this.properties.siteUrl && !this.properties.list)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadLists()];
                    case 1:
                        _lists = _a.sent();
                        if (_lists.length > 0) {
                            this.lists = _lists;
                            this.properties.list = this.lists[0].key.toString();
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    CalendarWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(CalendarWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @protected
     * @memberof CalendarWebPart
     */
    CalendarWebPart.prototype.onPropertyPaneConfigurationStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _lists, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.properties.siteUrl) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadLists()];
                    case 1:
                        _lists = _a.sent();
                        this.lists = _lists;
                        this.listsDropdownDisabled = false;
                        //  await this.loadFields(this.properties.siteUrl);
                        this.context.propertyPane.refresh();
                        return [3 /*break*/, 3];
                    case 2:
                        this.lists = [];
                        this.properties.list = '';
                        this.listsDropdownDisabled = false;
                        this.context.propertyPane.refresh();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @private
     * @returns {Promise<IPropertyPaneDropdownOption[]>}
     * @memberof CalendarWebPart
     */
    CalendarWebPart.prototype.loadLists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _lists, results, _i, results_1, list, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _lists = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.spService.getSiteLists(this.properties.siteUrl)];
                    case 2:
                        results = _a.sent();
                        for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                            list = results_1[_i];
                            _lists.push({ key: list.Id, text: list.Title });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.errorMessage = error_2.message + " -  please check if site url if valid.";
                        this.context.propertyPane.refresh();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, _lists];
                }
            });
        });
    };
    /**
     *
     *
     * @private
     * @param {string} date
     * @returns
     * @memberof CalendarWebPart
     */
    CalendarWebPart.prototype.onEventStartDateValidation = function (date) {
        if (date && this.properties.eventEndDate.value) {
            if (moment(date).isAfter(moment(this.properties.eventEndDate.value))) {
                return strings.SartDateValidationMessage;
            }
        }
        return '';
    };
    /**
     *
     * @private
     * @param {string} date
     * @returns
     * @memberof CalendarWebPart
     */
    CalendarWebPart.prototype.onEventEndDateValidation = function (date) {
        if (date && this.properties.eventEndDate.value) {
            if (moment(date).isBefore(moment(this.properties.eventStartDate.value))) {
                return strings.EnDateValidationMessage;
            }
        }
        return '';
    };
    /**
     *
     * @private
     * @param {string} value
     * @returns {Promise<string>}
     * @memberof CalendarWebPart
     */
    CalendarWebPart.prototype.onSiteUrlGetErrorMessage = function (value) {
        var returnValue = '';
        if (value) {
            returnValue = '';
        }
        else {
            var previousList = this.properties.list;
            var previousSiteUrl = this.properties.siteUrl;
            // reset selected item
            this.properties.list = undefined;
            this.properties.siteUrl = undefined;
            this.lists = [];
            this.listsDropdownDisabled = true;
            this.onPropertyPaneFieldChanged('list', previousList, this.properties.list);
            this.onPropertyPaneFieldChanged('siteUrl', previousSiteUrl, this.properties.siteUrl);
            this.context.propertyPane.refresh();
        }
        return returnValue;
    };
    /**
     *
     * @protected
     * @param {string} propertyPath
     * @param {string} oldValue
     * @param {string} newValue
     * @memberof CalendarWebPart
     */
    CalendarWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _oldValue, _lists, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        // reset any error
                        this.properties.errorMessage = undefined;
                        this.errorMessage = undefined;
                        this.context.propertyPane.refresh();
                        if (!(propertyPath === 'siteUrl' && newValue)) return [3 /*break*/, 2];
                        _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
                        _oldValue = this.properties.list;
                        this.onPropertyPaneFieldChanged('list', _oldValue, this.properties.list);
                        this.context.propertyPane.refresh();
                        return [4 /*yield*/, this.loadLists()];
                    case 1:
                        _lists = _a.sent();
                        this.lists = _lists;
                        this.listsDropdownDisabled = false;
                        this.properties.list = this.lists.length > 0 ? this.lists[0].key.toString() : undefined;
                        this.context.propertyPane.refresh();
                        this.render();
                        return [3 /*break*/, 3];
                    case 2:
                        _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        this.errorMessage = error_3.message + " -  please check if site url if valid.";
                        this.context.propertyPane.refresh();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @protected
     * @returns {IPropertyPaneConfiguration}
     * @memberof CalendarWebPart
     */
    CalendarWebPart.prototype.getPropertyPaneConfiguration = function () {
        // EndDate and Start Date defualt values
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('siteUrl', {
                                    label: strings.SiteUrlFieldLabel,
                                    onGetErrorMessage: this.onSiteUrlGetErrorMessage.bind(this),
                                    value: this.context.pageContext.site.absoluteUrl,
                                    deferredValidationTime: 1200,
                                }),
                                PropertyPaneDropdown('list', {
                                    label: strings.ListFieldLabel,
                                    options: this.lists,
                                    disabled: this.listsDropdownDisabled,
                                }),
                                PropertyPaneLabel('eventStartDate', {
                                    text: strings.eventSelectDatesLabel
                                }),
                                PropertyFieldDateTimePicker('eventStartDate', {
                                    label: 'From',
                                    initialDate: this.properties.eventStartDate,
                                    dateConvention: DateConvention.Date,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    onGetErrorMessage: this.onEventStartDateValidation,
                                    deferredValidationTime: 0,
                                    key: 'eventStartDateId'
                                }),
                                PropertyFieldDateTimePicker('eventEndDate', {
                                    label: 'to',
                                    initialDate: this.properties.eventEndDate,
                                    dateConvention: DateConvention.Date,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    onGetErrorMessage: this.onEventEndDateValidation,
                                    deferredValidationTime: 0,
                                    key: 'eventEndDateId'
                                }),
                                PropertyPaneLabel('errorMessage', {
                                    text: this.errorMessage,
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return CalendarWebPart;
}(BaseClientSideWebPart));
export default CalendarWebPart;
//# sourceMappingURL=CalendarWebPart.js.map