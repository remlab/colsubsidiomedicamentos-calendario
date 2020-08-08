// João Mendes
// March 2019
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
import { sp, Web, PermissionKind } from '@pnp/sp';
import { graph, } from "@pnp/graph";
import * as $ from 'jquery';
import * as moment from 'moment';
import parseRecurrentEvent from './parseRecurrentEvent';
// Class Services
var spservices = /** @class */ (function () {
    function spservices(context) {
        this.context = context;
        // Setuo Context to PnPjs and MSGraph
        sp.setup({
            spfxContext: this.context
        });
        graph.setup({
            spfxContext: this.context
        });
        // Init
        this.onInit();
    }
    // OnInit Function
    spservices.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     * @private
     * @param {string} siteUrl
     * @returns {Promise<number>}
     * @memberof spservices
     */
    spservices.prototype.getSiteTimeZoneHours = function (siteUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var numberHours, siteTimeZoneBias, siteTimeZoneDaylightBias, currentDateTimeOffSet, siteRegionalSettings, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numberHours = 0;
                        currentDateTimeOffSet = new Date().getTimezoneOffset() / 60;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getSiteRegionalSettingsTimeZone(siteUrl)];
                    case 2:
                        siteRegionalSettings = _a.sent();
                        // Calculate  hour to current site
                        siteTimeZoneBias = siteRegionalSettings.Information.Bias;
                        siteTimeZoneDaylightBias = siteRegionalSettings.Information.DaylightBias;
                        // Formula to calculate the number of  hours need to get UTC Date.
                        // numberHours = (siteTimeZoneBias / 60) + (siteTimeZoneDaylightBias / 60) - currentDateTimeOffSet;
                        if (siteTimeZoneBias >= 0) {
                            numberHours = ((siteTimeZoneBias / 60) - currentDateTimeOffSet) + siteTimeZoneDaylightBias / 60;
                        }
                        else {
                            numberHours = ((siteTimeZoneBias / 60) - currentDateTimeOffSet);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 4: return [2 /*return*/, numberHours];
                }
            });
        });
    };
    /**
     *
     * @param {IEventData} newEvent
     * @param {string} siteUrl
     * @param {string} listId
     * @returns
     * @memberof spservices
     */
    spservices.prototype.addEvent = function (newEvent, siteUrl, listId) {
        return __awaiter(this, void 0, void 0, function () {
            var results, web, siteTimeZoneHours, _a, _b, _c, _d, error_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        results = null;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, , 8]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, this.getSiteTimeZoneHours(siteUrl)];
                    case 2:
                        siteTimeZoneHours = _e.sent();
                        _b = (_a = web.lists.getById(listId).items).add;
                        _c = {
                            Title: newEvent.title,
                            Description: newEvent.Description,
                            Geolocation: newEvent.geolocation,
                            ParticipantsPickerId: { results: newEvent.attendes },
                            EventDate: new Date(moment(newEvent.EventDate).add(siteTimeZoneHours, 'hours').toISOString()),
                            EndDate: new Date(moment(newEvent.EndDate).add(siteTimeZoneHours, 'hours').toISOString()),
                            Location: newEvent.location,
                            fAllDayEvent: false,
                            fRecurrence: newEvent.fRecurrence,
                            Category: newEvent.Category,
                            EventType: newEvent.EventType,
                            UID: newEvent.UID
                        };
                        if (!newEvent.RecurrenceData) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.deCodeHtmlEntities(newEvent.RecurrenceData)];
                    case 3:
                        _d = _e.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _d = "";
                        _e.label = 5;
                    case 5: return [4 /*yield*/, _b.apply(_a, [(_c.RecurrenceData = _d,
                                _c.MasterSeriesItemID = newEvent.MasterSeriesItemID,
                                _c.RecurrenceID = newEvent.RecurrenceID ? moment(newEvent.RecurrenceID).add(siteTimeZoneHours, 'hours').toISOString() : undefined,
                                _c)])];
                    case 6:
                        results = _e.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _e.sent();
                        return [2 /*return*/, Promise.reject(error_2)];
                    case 8: return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     *
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @param {number} eventId
     * @returns {Promise<IEventData>}
     * @memberof spservices
     */
    spservices.prototype.getEvent = function (siteUrl, listId, eventId) {
        return __awaiter(this, void 0, void 0, function () {
            var returnEvent, siteTimeZoneHours, web, event_1, _a, _b, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        returnEvent = undefined;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.getSiteTimeZoneHours(siteUrl)];
                    case 2:
                        siteTimeZoneHours = _c.sent();
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.lists.getById(listId).items.usingCaching().getById(eventId)
                                .select("RecurrenceID", "MasterSeriesItemID", "Id", "ID", "ParticipantsPickerId", "EventType", "Title", "Description", "EventDate", "EndDate", "Location", "Author/SipAddress", "Author/Title", "Geolocation", "fAllDayEvent", "fRecurrence", "RecurrenceData", "RecurrenceData", "Duration", "Category", "UID")
                                .expand("Author")
                                .get()];
                    case 3:
                        event_1 = _c.sent();
                        _a = {
                            Id: event_1.ID,
                            ID: event_1.ID,
                            EventType: event_1.EventType
                        };
                        return [4 /*yield*/, this.deCodeHtmlEntities(event_1.Title)];
                    case 4:
                        _a.title = _c.sent(),
                            _a.Description = event_1.Description ? event_1.Description : '',
                            _a.EventDate = new Date(moment(event_1.EventDate).subtract((siteTimeZoneHours), 'hour').toISOString()),
                            _a.EndDate = new Date(moment(event_1.EndDate).subtract(siteTimeZoneHours, 'hour').toISOString()),
                            _a.location = event_1.Location,
                            _a.ownerEmail = event_1.Author.SipAddress,
                            _a.ownerPhoto = "",
                            _a.ownerInitial = '',
                            _a.color = '',
                            _a.ownerName = event_1.Author.Title,
                            _a.attendes = event_1.ParticipantsPickerId,
                            _a.fAllDayEvent = false,
                            _a.geolocation = { Longitude: event_1.Geolocation ? event_1.Geolocation.Longitude : 0, Latitude: event_1.Geolocation ? event_1.Geolocation.Latitude : 0 },
                            _a.Category = event_1.Category,
                            _a.Duration = event_1.Duration,
                            _a.UID = event_1.UID;
                        if (!event_1.RecurrenceData) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deCodeHtmlEntities(event_1.RecurrenceData)];
                    case 5:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _b = "";
                        _c.label = 7;
                    case 7:
                        returnEvent = (_a.RecurrenceData = _b,
                            _a.fRecurrence = event_1.fRecurrence,
                            _a.RecurrenceID = event_1.RecurrenceID,
                            _a.MasterSeriesItemID = event_1.MasterSeriesItemID,
                            _a);
                        return [3 /*break*/, 9];
                    case 8:
                        error_3 = _c.sent();
                        return [2 /*return*/, Promise.reject(error_3)];
                    case 9: return [2 /*return*/, returnEvent];
                }
            });
        });
    };
    /**
     *
     * @param {IEventData} newEvent
     * @param {string} siteUrl
     * @param {string} listId
     * @returns
     * @memberof spservices
     */
    spservices.prototype.updateEvent = function (updateEvent, siteUrl, listId) {
        return __awaiter(this, void 0, void 0, function () {
            var results, siteTimeZoneHours, web, newItem, _a, _b, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        results = null;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 9, , 10]);
                        if (!(updateEvent.EventType.toString() == "1")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.deleteRecurrenceExceptions(updateEvent, siteUrl, listId)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, this.getSiteTimeZoneHours(siteUrl)];
                    case 4:
                        siteTimeZoneHours = _c.sent();
                        web = new Web(siteUrl);
                        _a = {
                            Title: updateEvent.title,
                            Description: updateEvent.Description,
                            Geolocation: updateEvent.geolocation,
                            ParticipantsPickerId: { results: updateEvent.attendes },
                            EventDate: new Date(moment(updateEvent.EventDate).add(siteTimeZoneHours, 'hours').toISOString()),
                            EndDate: new Date(moment(updateEvent.EndDate).add(siteTimeZoneHours, 'hours').toISOString()),
                            Location: updateEvent.location,
                            fAllDayEvent: false,
                            fRecurrence: updateEvent.fRecurrence,
                            Category: updateEvent.Category
                        };
                        if (!updateEvent.RecurrenceData) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deCodeHtmlEntities(updateEvent.RecurrenceData)];
                    case 5:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _b = "";
                        _c.label = 7;
                    case 7:
                        newItem = (_a.RecurrenceData = _b,
                            _a.EventType = updateEvent.EventType,
                            _a);
                        if (updateEvent.UID) {
                            newItem.UID = updateEvent.UID;
                        }
                        if (updateEvent.MasterSeriesItemID) {
                            newItem.MasterSeriesItemID = updateEvent.MasterSeriesItemID;
                        }
                        return [4 /*yield*/, web.lists.getById(listId).items.getById(updateEvent.Id).update(newItem)];
                    case 8:
                        results = _c.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        error_4 = _c.sent();
                        return [2 /*return*/, Promise.reject(error_4)];
                    case 10: return [2 /*return*/, results];
                }
            });
        });
    };
    spservices.prototype.deleteRecurrenceExceptions = function (event, siteUrl, listId) {
        return __awaiter(this, void 0, void 0, function () {
            var results, web, _i, results_1, recurrenceException, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.lists.getById(listId).items
                                .select('Id')
                                .filter("EventType eq '3' or EventType eq '4' and MasterSeriesItemID eq '" + event.Id + "' ")
                                .get()];
                    case 2:
                        results = _a.sent();
                        if (!(results && results.length > 0)) return [3 /*break*/, 6];
                        _i = 0, results_1 = results;
                        _a.label = 3;
                    case 3:
                        if (!(_i < results_1.length)) return [3 /*break*/, 6];
                        recurrenceException = results_1[_i];
                        return [4 /*yield*/, web.lists.getById(listId).items.getById(recurrenceException.Id).delete()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_5)];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param {IEventData} event
     * @param {string} siteUrl
     * @param {string} listId
     * @returns
     * @memberof spservices
     */
    spservices.prototype.deleteEvent = function (event, siteUrl, listId, recurrenceSeriesEdited) {
        return __awaiter(this, void 0, void 0, function () {
            var results, web, _a, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        results = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 13, , 14]);
                        web = new Web(siteUrl);
                        _a = event.EventType.toString();
                        switch (_a) {
                            case '4': return [3 /*break*/, 2];
                            case '1': return [3 /*break*/, 4];
                            case '0': return [3 /*break*/, 10];
                        }
                        return [3 /*break*/, 12];
                    case 2: return [4 /*yield*/, web.lists.getById(listId).items.getById(event.Id).update({
                            Title: "Delete: " + event.title,
                            EventType: '3',
                        })];
                    case 3:
                        results = _b.sent();
                        return [3 /*break*/, 12];
                    case 4:
                        if (!recurrenceSeriesEdited) return [3 /*break*/, 7];
                        // delete execptions if exists before delete recurrence event
                        return [4 /*yield*/, this.deleteRecurrenceExceptions(event, siteUrl, listId)];
                    case 5:
                        // delete execptions if exists before delete recurrence event
                        _b.sent();
                        return [4 /*yield*/, web.lists.getById(listId).items.getById(event.Id).delete()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        // delete a single recurrence Exception.  add new entry with eventtype 3
                        event.RecurrenceID = event.EventDate.toString();
                        event.MasterSeriesItemID = event.ID.toString();
                        event.fRecurrence = true;
                        event.EventType = '3';
                        return [4 /*yield*/, this.addEvent(event, siteUrl, listId)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10: // normal Event
                    return [4 /*yield*/, web.lists.getById(listId).items.getById(event.Id).delete()];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        error_6 = _b.sent();
                        return [2 /*return*/, Promise.reject(error_6)];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param {number} userId
     * @param {string} siteUrl
     * @returns {Promise<SiteUser>}
     * @memberof spservices
     */
    spservices.prototype.getUserById = function (userId, siteUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var results, web, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = null;
                        if (!userId && !siteUrl) {
                            return [2 /*return*/, null];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.siteUsers.getById(userId).get()];
                    case 2:
                        results = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_7)];
                    case 4: return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     *
     *
     * @param {string} loginName
     * @param {string} siteUrl
     * @returns {Promise<SiteUser>}
     * @memberof spservices
     */
    spservices.prototype.getUserByLoginName = function (loginName, siteUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var results, web, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = null;
                        if (!loginName && !siteUrl) {
                            return [2 /*return*/, null];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.ensureUser(loginName)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, web.siteUsers.getByLoginName(loginName).get()];
                    case 3:
                        results = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_8 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_8)];
                    case 5: return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     *
     * @param {string} loginName
     * @returns
     * @memberof spservices
     */
    spservices.prototype.getUserProfilePictureUrl = function (loginName) {
        return __awaiter(this, void 0, void 0, function () {
            var results, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, sp.profiles.usingCaching().getPropertiesFor(loginName)];
                    case 2:
                        results = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_9 = _a.sent();
                        results = null;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, results.PictureUrl];
                }
            });
        });
    };
    /**
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @returns {Promise<IUserPermissions>}
     * @memberof spservices
     */
    spservices.prototype.getUserPermissions = function (siteUrl, listId) {
        return __awaiter(this, void 0, void 0, function () {
            var hasPermissionAdd, hasPermissionEdit, hasPermissionDelete, hasPermissionView, userPermissions, web, userEffectivePermissions, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasPermissionAdd = false;
                        hasPermissionEdit = false;
                        hasPermissionDelete = false;
                        hasPermissionView = false;
                        userPermissions = undefined;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.lists.getById(listId).effectiveBasePermissions.get()];
                    case 2:
                        userEffectivePermissions = _a.sent();
                        // ...
                        hasPermissionAdd = sp.web.lists.getById(listId).hasPermissions(userEffectivePermissions, PermissionKind.AddListItems);
                        hasPermissionDelete = sp.web.lists.getById(listId).hasPermissions(userEffectivePermissions, PermissionKind.DeleteListItems);
                        hasPermissionEdit = sp.web.lists.getById(listId).hasPermissions(userEffectivePermissions, PermissionKind.EditListItems);
                        hasPermissionView = sp.web.lists.getById(listId).hasPermissions(userEffectivePermissions, PermissionKind.ViewListItems);
                        userPermissions = { hasPermissionAdd: hasPermissionAdd, hasPermissionEdit: hasPermissionEdit, hasPermissionDelete: hasPermissionDelete, hasPermissionView: hasPermissionView };
                        return [3 /*break*/, 4];
                    case 3:
                        error_10 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_10)];
                    case 4: return [2 /*return*/, userPermissions];
                }
            });
        });
    };
    /**
     *
     * @param {string} siteUrl
     * @returns
     * @memberof spservices
     */
    spservices.prototype.getSiteLists = function (siteUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var results, web, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = [];
                        if (!siteUrl) {
                            return [2 /*return*/, []];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.lists.select("Title", "ID").filter('BaseTemplate eq 106').get()];
                    case 2:
                        results = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_11 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_11)];
                    case 4: return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     *
     * @private
     * @returns
     * @memberof spservices
     */
    spservices.prototype.colorGenerate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hexValues, newColor, i, x, y;
            return __generator(this, function (_a) {
                hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
                newColor = "#";
                for (i = 0; i < 6; i++) {
                    x = Math.round(Math.random() * 14);
                    y = hexValues[x];
                    newColor += y;
                }
                return [2 /*return*/, newColor];
            });
        });
    };
    /**
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @param {string} fieldInternalName
     * @returns {Promise<{ key: string, text: string }[]>}
     * @memberof spservices
     */
    spservices.prototype.getChoiceFieldOptions = function (siteUrl, listId, fieldInternalName) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldOptions, web, results, _i, _a, option, error_12;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fieldOptions = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.lists.getById(listId)
                                .fields
                                .getByInternalNameOrTitle(fieldInternalName)
                                .select("Title", "InternalName", "Choices")
                                .get()];
                    case 2:
                        results = _b.sent();
                        if (results && results.Choices.length > 0) {
                            for (_i = 0, _a = results.Choices; _i < _a.length; _i++) {
                                option = _a[_i];
                                fieldOptions.push({
                                    key: option,
                                    text: option
                                });
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_12 = _b.sent();
                        return [2 /*return*/, Promise.reject(error_12)];
                    case 4: return [2 /*return*/, fieldOptions];
                }
            });
        });
    };
    /**
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @param {Date} eventStartDate
     * @param {Date} eventEndDate
     * @returns {Promise< IEventData[]>}
     * @memberof spservices
     */
    spservices.prototype.getEvents = function (siteUrl, listId, eventStartDate, eventEndDate) {
        return __awaiter(this, void 0, void 0, function () {
            var events, siteTimeZoneHours, categoryDropdownOption, categoryColor, _i, categoryDropdownOption_1, cat, _a, _b, _c, web, results, event_2, _d, _e, initialsArray, initials, userPictureUrl, attendees, first, last, geo, geolocation, CategoryColorValue, _f, _g, attendee, _h, _j, _k, _l, parseEvt, error_13;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        events = [];
                        if (!siteUrl) {
                            return [2 /*return*/, []];
                        }
                        _m.label = 1;
                    case 1:
                        _m.trys.push([1, 18, , 19]);
                        return [4 /*yield*/, this.getSiteTimeZoneHours(siteUrl)];
                    case 2:
                        siteTimeZoneHours = _m.sent();
                        return [4 /*yield*/, this.getChoiceFieldOptions(siteUrl, listId, 'Category')];
                    case 3:
                        categoryDropdownOption = _m.sent();
                        categoryColor = [];
                        _i = 0, categoryDropdownOption_1 = categoryDropdownOption;
                        _m.label = 4;
                    case 4:
                        if (!(_i < categoryDropdownOption_1.length)) return [3 /*break*/, 7];
                        cat = categoryDropdownOption_1[_i];
                        _b = (_a = categoryColor).push;
                        _c = { category: cat.text };
                        return [4 /*yield*/, this.colorGenerate()];
                    case 5:
                        _b.apply(_a, [(_c.color = _m.sent(), _c)]);
                        _m.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.lists.getById(listId).usingCaching().renderListDataAsStream({
                                DatesInUtc: true,
                                ViewXml: "<View><ViewFields><FieldRef Name='RecurrenceData'/><FieldRef Name='Duration'/><FieldRef Name='Author'/><FieldRef Name='Category'/><FieldRef Name='Description'/><FieldRef Name='ParticipantsPicker'/><FieldRef Name='Geolocation'/><FieldRef Name='ID'/><FieldRef Name='EndDate'/><FieldRef Name='EventDate'/><FieldRef Name='ID'/><FieldRef Name='Location'/><FieldRef Name='Title'/><FieldRef Name='fAllDayEvent'/><FieldRef Name='EventType'/><FieldRef Name='UID' /><FieldRef Name='fRecurrence' /></ViewFields>\n          <Query>\n          <Where>\n            <And>\n              <Geq>\n                <FieldRef Name='EventDate' />\n                <Value IncludeTimeValue='false' Type='DateTime'>" + moment(eventStartDate).format('YYYY-MM-DD') + "</Value>\n              </Geq>\n              <Leq>\n                <FieldRef Name='EventDate' />\n                <Value IncludeTimeValue='false' Type='DateTime'>" + moment(eventEndDate).format('YYYY-MM-DD') + "</Value>\n              </Leq>\n              </And>\n          </Where>\n          </Query>\n          <RowLimit Paged=\"FALSE\">2000</RowLimit>\n          </View>"
                            })];
                    case 8:
                        results = _m.sent();
                        if (!(results && results.Row.length > 0)) return [3 /*break*/, 17];
                        event_2 = '';
                        _d = 0, _e = results.Row;
                        _m.label = 9;
                    case 9:
                        if (!(_d < _e.length)) return [3 /*break*/, 16];
                        event_2 = _e[_d];
                        initialsArray = event_2.Author[0].title.split(' ');
                        initials = initialsArray[0].charAt(0) + initialsArray[initialsArray.length - 1].charAt(0);
                        return [4 /*yield*/, this.getUserProfilePictureUrl("i:0#.f|membership|" + event_2.Author[0].email)];
                    case 10:
                        userPictureUrl = _m.sent();
                        attendees = [];
                        first = event_2.Geolocation.indexOf('(') + 1;
                        last = event_2.Geolocation.indexOf(')');
                        geo = event_2.Geolocation.substring(first, last);
                        geolocation = geo.split(' ');
                        CategoryColorValue = categoryColor.filter(function (value) {
                            return value.category == event_2.Category;
                        });
                        for (_f = 0, _g = event_2.ParticipantsPicker; _f < _g.length; _f++) {
                            attendee = _g[_f];
                            attendees.push(parseInt(attendee.id));
                        }
                        _j = (_h = events).push;
                        _k = {
                            Id: event_2.ID,
                            ID: event_2.ID,
                            EventType: event_2.EventType
                        };
                        return [4 /*yield*/, this.deCodeHtmlEntities(event_2.Title)];
                    case 11:
                        _k.title = _m.sent(),
                            _k.Description = event_2.Description,
                            _k.EventDate = new Date(moment(event_2.EventDate).subtract((siteTimeZoneHours), 'hour').toISOString()),
                            _k.EndDate = new Date(moment(event_2.EndDate).subtract(siteTimeZoneHours, 'hour').toISOString()),
                            _k.location = event_2.Location,
                            _k.ownerEmail = event_2.Author[0].email,
                            _k.ownerPhoto = userPictureUrl ?
                                "https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=" + event_2.Author[0].email + "&UA=0&size=HR96x96" : '',
                            _k.ownerInitial = initials,
                            _k.color = CategoryColorValue.length > 0 ? CategoryColorValue[0].color : '#1a75ff',
                            _k.ownerName = event_2.Author[0].title,
                            _k.attendes = attendees,
                            _k.fAllDayEvent = false,
                            _k.geolocation = { Longitude: parseFloat(geolocation[0]), Latitude: parseFloat(geolocation[1]) },
                            _k.Category = event_2.Category,
                            _k.Duration = event_2.Duration;
                        if (!event_2.RecurrenceData) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.deCodeHtmlEntities(event_2.RecurrenceData)];
                    case 12:
                        _l = _m.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        _l = "";
                        _m.label = 14;
                    case 14:
                        _j.apply(_h, [(_k.RecurrenceData = _l,
                                _k.fRecurrence = event_2.fRecurrence,
                                _k.RecurrenceID = event_2.RecurrenceID ? moment(event_2.RecurrenceID).subtract(siteTimeZoneHours, 'hour').toISOString() : undefined,
                                _k.MasterSeriesItemID = event_2.MasterSeriesItemID,
                                _k.UID = event_2.UID.replace("{", "").replace("}", ""),
                                _k)]);
                        _m.label = 15;
                    case 15:
                        _d++;
                        return [3 /*break*/, 9];
                    case 16:
                        parseEvt = new parseRecurrentEvent();
                        events = parseEvt.parseEvents(events, null, null);
                        _m.label = 17;
                    case 17: 
                    // Return Data
                    return [2 /*return*/, events];
                    case 18:
                        error_13 = _m.sent();
                        console.dir(error_13);
                        return [2 /*return*/, Promise.reject(error_13)];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @private
     * @param {string} siteUrl
     * @returns
     * @memberof spservices
     */
    spservices.prototype.getSiteRegionalSettingsTimeZone = function (siteUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var regionalSettings, web, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        web = new Web(siteUrl);
                        return [4 /*yield*/, web.regionalSettings.timeZone.usingCaching().get()];
                    case 1:
                        regionalSettings = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_14 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_14)];
                    case 3: return [2 /*return*/, regionalSettings];
                }
            });
        });
    };
    /**
     * @param {string} webUrl
     * @param {string} siteDesignId
     * @returns
     * @memberof spservices
     */
    spservices.prototype.getGeoLactionName = function (latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, results, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        apiUrl = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude + "&zoom=18&addressdetails=1";
                        return [4 /*yield*/, $.ajax({
                                url: apiUrl,
                                type: 'GET',
                                dataType: 'json',
                                headers: {
                                    'content-type': 'application/json;charset=utf-8',
                                    'accept': 'application/json;odata=nometadata',
                                }
                            })];
                    case 1:
                        results = _a.sent();
                        if (results) {
                            return [2 /*return*/, results];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_15 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_15)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    spservices.prototype.enCodeHtmlEntities = function (string) {
        return __awaiter(this, void 0, void 0, function () {
            var HtmlEntitiesMap, entityMap, key, entity, regex;
            return __generator(this, function (_a) {
                HtmlEntitiesMap = {
                    "'": "&apos;",
                    "<": "&lt;",
                    ">": "&gt;",
                    " ": "&nbsp;",
                    "¡": "&iexcl;",
                    "¢": "&cent;",
                    "£": "&pound;",
                    "¤": "&curren;",
                    "¥": "&yen;",
                    "¦": "&brvbar;",
                    "§": "&sect;",
                    "¨": "&uml;",
                    "©": "&copy;",
                    "ª": "&ordf;",
                    "«": "&laquo;",
                    "¬": "&not;",
                    "®": "&reg;",
                    "¯": "&macr;",
                    "°": "&deg;",
                    "±": "&plusmn;",
                    "²": "&sup2;",
                    "³": "&sup3;",
                    "´": "&acute;",
                    "µ": "&micro;",
                    "¶": "&para;",
                    "·": "&middot;",
                    "¸": "&cedil;",
                    "¹": "&sup1;",
                    "º": "&ordm;",
                    "»": "&raquo;",
                    "¼": "&frac14;",
                    "½": "&frac12;",
                    "¾": "&frac34;",
                    "¿": "&iquest;",
                    "À": "&Agrave;",
                    "Á": "&Aacute;",
                    "Â": "&Acirc;",
                    "Ã": "&Atilde;",
                    "Ä": "&Auml;",
                    "Å": "&Aring;",
                    "Æ": "&AElig;",
                    "Ç": "&Ccedil;",
                    "È": "&Egrave;",
                    "É": "&Eacute;",
                    "Ê": "&Ecirc;",
                    "Ë": "&Euml;",
                    "Ì": "&Igrave;",
                    "Í": "&Iacute;",
                    "Î": "&Icirc;",
                    "Ï": "&Iuml;",
                    "Ð": "&ETH;",
                    "Ñ": "&Ntilde;",
                    "Ò": "&Ograve;",
                    "Ó": "&Oacute;",
                    "Ô": "&Ocirc;",
                    "Õ": "&Otilde;",
                    "Ö": "&Ouml;",
                    "×": "&times;",
                    "Ø": "&Oslash;",
                    "Ù": "&Ugrave;",
                    "Ú": "&Uacute;",
                    "Û": "&Ucirc;",
                    "Ü": "&Uuml;",
                    "Ý": "&Yacute;",
                    "Þ": "&THORN;",
                    "ß": "&szlig;",
                    "à": "&agrave;",
                    "á": "&aacute;",
                    "â": "&acirc;",
                    "ã": "&atilde;",
                    "ä": "&auml;",
                    "å": "&aring;",
                    "æ": "&aelig;",
                    "ç": "&ccedil;",
                    "è": "&egrave;",
                    "é": "&eacute;",
                    "ê": "&ecirc;",
                    "ë": "&euml;",
                    "ì": "&igrave;",
                    "í": "&iacute;",
                    "î": "&icirc;",
                    "ï": "&iuml;",
                    "ð": "&eth;",
                    "ñ": "&ntilde;",
                    "ò": "&ograve;",
                    "ó": "&oacute;",
                    "ô": "&ocirc;",
                    "õ": "&otilde;",
                    "ö": "&ouml;",
                    "÷": "&divide;",
                    "ø": "&oslash;",
                    "ù": "&ugrave;",
                    "ú": "&uacute;",
                    "û": "&ucirc;",
                    "ü": "&uuml;",
                    "ý": "&yacute;",
                    "þ": "&thorn;",
                    "ÿ": "&yuml;",
                    "Œ": "&OElig;",
                    "œ": "&oelig;",
                    "Š": "&Scaron;",
                    "š": "&scaron;",
                    "Ÿ": "&Yuml;",
                    "ƒ": "&fnof;",
                    "ˆ": "&circ;",
                    "˜": "&tilde;",
                    "Α": "&Alpha;",
                    "Β": "&Beta;",
                    "Γ": "&Gamma;",
                    "Δ": "&Delta;",
                    "Ε": "&Epsilon;",
                    "Ζ": "&Zeta;",
                    "Η": "&Eta;",
                    "Θ": "&Theta;",
                    "Ι": "&Iota;",
                    "Κ": "&Kappa;",
                    "Λ": "&Lambda;",
                    "Μ": "&Mu;",
                    "Ν": "&Nu;",
                    "Ξ": "&Xi;",
                    "Ο": "&Omicron;",
                    "Π": "&Pi;",
                    "Ρ": "&Rho;",
                    "Σ": "&Sigma;",
                    "Τ": "&Tau;",
                    "Υ": "&Upsilon;",
                    "Φ": "&Phi;",
                    "Χ": "&Chi;",
                    "Ψ": "&Psi;",
                    "Ω": "&Omega;",
                    "α": "&alpha;",
                    "β": "&beta;",
                    "γ": "&gamma;",
                    "δ": "&delta;",
                    "ε": "&epsilon;",
                    "ζ": "&zeta;",
                    "η": "&eta;",
                    "θ": "&theta;",
                    "ι": "&iota;",
                    "κ": "&kappa;",
                    "λ": "&lambda;",
                    "μ": "&mu;",
                    "ν": "&nu;",
                    "ξ": "&xi;",
                    "ο": "&omicron;",
                    "π": "&pi;",
                    "ρ": "&rho;",
                    "ς": "&sigmaf;",
                    "σ": "&sigma;",
                    "τ": "&tau;",
                    "υ": "&upsilon;",
                    "φ": "&phi;",
                    "χ": "&chi;",
                    "ψ": "&psi;",
                    "ω": "&omega;",
                    "ϑ": "&thetasym;",
                    "ϒ": "&Upsih;",
                    "ϖ": "&piv;",
                    "–": "&ndash;",
                    "—": "&mdash;",
                    "‘": "&lsquo;",
                    "’": "&rsquo;",
                    "‚": "&sbquo;",
                    "“": "&ldquo;",
                    "”": "&rdquo;",
                    "„": "&bdquo;",
                    "†": "&dagger;",
                    "‡": "&Dagger;",
                    "•": "&bull;",
                    "…": "&hellip;",
                    "‰": "&permil;",
                    "′": "&prime;",
                    "″": "&Prime;",
                    "‹": "&lsaquo;",
                    "›": "&rsaquo;",
                    "‾": "&oline;",
                    "⁄": "&frasl;",
                    "€": "&euro;",
                    "ℑ": "&image;",
                    "℘": "&weierp;",
                    "ℜ": "&real;",
                    "™": "&trade;",
                    "ℵ": "&alefsym;",
                    "←": "&larr;",
                    "↑": "&uarr;",
                    "→": "&rarr;",
                    "↓": "&darr;",
                    "↔": "&harr;",
                    "↵": "&crarr;",
                    "⇐": "&lArr;",
                    "⇑": "&UArr;",
                    "⇒": "&rArr;",
                    "⇓": "&dArr;",
                    "⇔": "&hArr;",
                    "∀": "&forall;",
                    "∂": "&part;",
                    "∃": "&exist;",
                    "∅": "&empty;",
                    "∇": "&nabla;",
                    "∈": "&isin;",
                    "∉": "&notin;",
                    "∋": "&ni;",
                    "∏": "&prod;",
                    "∑": "&sum;",
                    "−": "&minus;",
                    "∗": "&lowast;",
                    "√": "&radic;",
                    "∝": "&prop;",
                    "∞": "&infin;",
                    "∠": "&ang;",
                    "∧": "&and;",
                    "∨": "&or;",
                    "∩": "&cap;",
                    "∪": "&cup;",
                    "∫": "&int;",
                    "∴": "&there4;",
                    "∼": "&sim;",
                    "≅": "&cong;",
                    "≈": "&asymp;",
                    "≠": "&ne;",
                    "≡": "&equiv;",
                    "≤": "&le;",
                    "≥": "&ge;",
                    "⊂": "&sub;",
                    "⊃": "&sup;",
                    "⊄": "&nsub;",
                    "⊆": "&sube;",
                    "⊇": "&supe;",
                    "⊕": "&oplus;",
                    "⊗": "&otimes;",
                    "⊥": "&perp;",
                    "⋅": "&sdot;",
                    "⌈": "&lceil;",
                    "⌉": "&rceil;",
                    "⌊": "&lfloor;",
                    "⌋": "&rfloor;",
                    "⟨": "&lang;",
                    "⟩": "&rang;",
                    "◊": "&loz;",
                    "♠": "&spades;",
                    "♣": "&clubs;",
                    "♥": "&hearts;",
                    "♦": "&diams;"
                };
                entityMap = HtmlEntitiesMap;
                string = string.replace(/&/g, '&amp;');
                string = string.replace(/"/g, '&quot;');
                for (key in entityMap) {
                    entity = entityMap[key];
                    regex = new RegExp(key, 'g');
                    string = string.replace(regex, entity);
                }
                return [2 /*return*/, string];
            });
        });
    };
    spservices.prototype.deCodeHtmlEntities = function (string) {
        return __awaiter(this, void 0, void 0, function () {
            var HtmlEntitiesMap, entityMap, key, entity, regex;
            return __generator(this, function (_a) {
                HtmlEntitiesMap = {
                    "'": "&#39;",
                    "<": "&lt;",
                    ">": "&gt;",
                    " ": "&nbsp;",
                    "¡": "&iexcl;",
                    "¢": "&cent;",
                    "£": "&pound;",
                    "¤": "&curren;",
                    "¥": "&yen;",
                    "¦": "&brvbar;",
                    "§": "&sect;",
                    "¨": "&uml;",
                    "©": "&copy;",
                    "ª": "&ordf;",
                    "«": "&laquo;",
                    "¬": "&not;",
                    "®": "&reg;",
                    "¯": "&macr;",
                    "°": "&deg;",
                    "±": "&plusmn;",
                    "²": "&sup2;",
                    "³": "&sup3;",
                    "´": "&acute;",
                    "µ": "&micro;",
                    "¶": "&para;",
                    "·": "&middot;",
                    "¸": "&cedil;",
                    "¹": "&sup1;",
                    "º": "&ordm;",
                    "»": "&raquo;",
                    "¼": "&frac14;",
                    "½": "&frac12;",
                    "¾": "&frac34;",
                    "¿": "&iquest;",
                    "À": "&Agrave;",
                    "Á": "&Aacute;",
                    "Â": "&Acirc;",
                    "Ã": "&Atilde;",
                    "Ä": "&Auml;",
                    "Å": "&Aring;",
                    "Æ": "&AElig;",
                    "Ç": "&Ccedil;",
                    "È": "&Egrave;",
                    "É": "&Eacute;",
                    "Ê": "&Ecirc;",
                    "Ë": "&Euml;",
                    "Ì": "&Igrave;",
                    "Í": "&Iacute;",
                    "Î": "&Icirc;",
                    "Ï": "&Iuml;",
                    "Ð": "&ETH;",
                    "Ñ": "&Ntilde;",
                    "Ò": "&Ograve;",
                    "Ó": "&Oacute;",
                    "Ô": "&Ocirc;",
                    "Õ": "&Otilde;",
                    "Ö": "&Ouml;",
                    "×": "&times;",
                    "Ø": "&Oslash;",
                    "Ù": "&Ugrave;",
                    "Ú": "&Uacute;",
                    "Û": "&Ucirc;",
                    "Ü": "&Uuml;",
                    "Ý": "&Yacute;",
                    "Þ": "&THORN;",
                    "ß": "&szlig;",
                    "à": "&agrave;",
                    "á": "&aacute;",
                    "â": "&acirc;",
                    "ã": "&atilde;",
                    "ä": "&auml;",
                    "å": "&aring;",
                    "æ": "&aelig;",
                    "ç": "&ccedil;",
                    "è": "&egrave;",
                    "é": "&eacute;",
                    "ê": "&ecirc;",
                    "ë": "&euml;",
                    "ì": "&igrave;",
                    "í": "&iacute;",
                    "î": "&icirc;",
                    "ï": "&iuml;",
                    "ð": "&eth;",
                    "ñ": "&ntilde;",
                    "ò": "&ograve;",
                    "ó": "&oacute;",
                    "ô": "&ocirc;",
                    "õ": "&otilde;",
                    "ö": "&ouml;",
                    "÷": "&divide;",
                    "ø": "&oslash;",
                    "ù": "&ugrave;",
                    "ú": "&uacute;",
                    "û": "&ucirc;",
                    "ü": "&uuml;",
                    "ý": "&yacute;",
                    "þ": "&thorn;",
                    "ÿ": "&yuml;",
                    "Œ": "&OElig;",
                    "œ": "&oelig;",
                    "Š": "&Scaron;",
                    "š": "&scaron;",
                    "Ÿ": "&Yuml;",
                    "ƒ": "&fnof;",
                    "ˆ": "&circ;",
                    "˜": "&tilde;",
                    "Α": "&Alpha;",
                    "Β": "&Beta;",
                    "Γ": "&Gamma;",
                    "Δ": "&Delta;",
                    "Ε": "&Epsilon;",
                    "Ζ": "&Zeta;",
                    "Η": "&Eta;",
                    "Θ": "&Theta;",
                    "Ι": "&Iota;",
                    "Κ": "&Kappa;",
                    "Λ": "&Lambda;",
                    "Μ": "&Mu;",
                    "Ν": "&Nu;",
                    "Ξ": "&Xi;",
                    "Ο": "&Omicron;",
                    "Π": "&Pi;",
                    "Ρ": "&Rho;",
                    "Σ": "&Sigma;",
                    "Τ": "&Tau;",
                    "Υ": "&Upsilon;",
                    "Φ": "&Phi;",
                    "Χ": "&Chi;",
                    "Ψ": "&Psi;",
                    "Ω": "&Omega;",
                    "α": "&alpha;",
                    "β": "&beta;",
                    "γ": "&gamma;",
                    "δ": "&delta;",
                    "ε": "&epsilon;",
                    "ζ": "&zeta;",
                    "η": "&eta;",
                    "θ": "&theta;",
                    "ι": "&iota;",
                    "κ": "&kappa;",
                    "λ": "&lambda;",
                    "μ": "&mu;",
                    "ν": "&nu;",
                    "ξ": "&xi;",
                    "ο": "&omicron;",
                    "π": "&pi;",
                    "ρ": "&rho;",
                    "ς": "&sigmaf;",
                    "σ": "&sigma;",
                    "τ": "&tau;",
                    "υ": "&upsilon;",
                    "φ": "&phi;",
                    "χ": "&chi;",
                    "ψ": "&psi;",
                    "ω": "&omega;",
                    "ϑ": "&thetasym;",
                    "ϒ": "&Upsih;",
                    "ϖ": "&piv;",
                    "–": "&ndash;",
                    "—": "&mdash;",
                    "‘": "&lsquo;",
                    "’": "&rsquo;",
                    "‚": "&sbquo;",
                    "“": "&ldquo;",
                    "”": "&rdquo;",
                    "„": "&bdquo;",
                    "†": "&dagger;",
                    "‡": "&Dagger;",
                    "•": "&bull;",
                    "…": "&hellip;",
                    "‰": "&permil;",
                    "′": "&prime;",
                    "″": "&Prime;",
                    "‹": "&lsaquo;",
                    "›": "&rsaquo;",
                    "‾": "&oline;",
                    "⁄": "&frasl;",
                    "€": "&euro;",
                    "ℑ": "&image;",
                    "℘": "&weierp;",
                    "ℜ": "&real;",
                    "™": "&trade;",
                    "ℵ": "&alefsym;",
                    "←": "&larr;",
                    "↑": "&uarr;",
                    "→": "&rarr;",
                    "↓": "&darr;",
                    "↔": "&harr;",
                    "↵": "&crarr;",
                    "⇐": "&lArr;",
                    "⇑": "&UArr;",
                    "⇒": "&rArr;",
                    "⇓": "&dArr;",
                    "⇔": "&hArr;",
                    "∀": "&forall;",
                    "∂": "&part;",
                    "∃": "&exist;",
                    "∅": "&empty;",
                    "∇": "&nabla;",
                    "∈": "&isin;",
                    "∉": "&notin;",
                    "∋": "&ni;",
                    "∏": "&prod;",
                    "∑": "&sum;",
                    "−": "&minus;",
                    "∗": "&lowast;",
                    "√": "&radic;",
                    "∝": "&prop;",
                    "∞": "&infin;",
                    "∠": "&ang;",
                    "∧": "&and;",
                    "∨": "&or;",
                    "∩": "&cap;",
                    "∪": "&cup;",
                    "∫": "&int;",
                    "∴": "&there4;",
                    "∼": "&sim;",
                    "≅": "&cong;",
                    "≈": "&asymp;",
                    "≠": "&ne;",
                    "≡": "&equiv;",
                    "≤": "&le;",
                    "≥": "&ge;",
                    "⊂": "&sub;",
                    "⊃": "&sup;",
                    "⊄": "&nsub;",
                    "⊆": "&sube;",
                    "⊇": "&supe;",
                    "⊕": "&oplus;",
                    "⊗": "&otimes;",
                    "⊥": "&perp;",
                    "⋅": "&sdot;",
                    "⌈": "&lceil;",
                    "⌉": "&rceil;",
                    "⌊": "&lfloor;",
                    "⌋": "&rfloor;",
                    "⟨": "&lang;",
                    "⟩": "&rang;",
                    "◊": "&loz;",
                    "♠": "&spades;",
                    "♣": "&clubs;",
                    "♥": "&hearts;",
                    "♦": "&diams;"
                };
                entityMap = HtmlEntitiesMap;
                for (key in entityMap) {
                    entity = entityMap[key];
                    regex = new RegExp(entity, 'g');
                    string = string.replace(regex, key);
                }
                string = string.replace(/&quot;/g, '"');
                string = string.replace(/&amp;/g, '&');
                return [2 /*return*/, string];
            });
        });
    };
    return spservices;
}());
export default spservices;
//# sourceMappingURL=spservices.js.map