import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IEventData } from './IEventData';
import { SiteUser } from "@pnp/sp/src/siteusers";
import { IUserPermissions } from './IUserPermissions';
export default class spservices {
    private context;
    constructor(context: WebPartContext);
    private onInit;
    /**
     *
     * @private
     * @param {string} siteUrl
     * @returns {Promise<number>}
     * @memberof spservices
     */
    getSiteTimeZoneHours(siteUrl: string): Promise<number>;
    /**
     *
     * @param {IEventData} newEvent
     * @param {string} siteUrl
     * @param {string} listId
     * @returns
     * @memberof spservices
     */
    addEvent(newEvent: IEventData, siteUrl: string, listId: string): Promise<any>;
    /**
     *
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @param {number} eventId
     * @returns {Promise<IEventData>}
     * @memberof spservices
     */
    getEvent(siteUrl: string, listId: string, eventId: number): Promise<IEventData>;
    /**
     *
     * @param {IEventData} newEvent
     * @param {string} siteUrl
     * @param {string} listId
     * @returns
     * @memberof spservices
     */
    updateEvent(updateEvent: IEventData, siteUrl: string, listId: string): Promise<any>;
    deleteRecurrenceExceptions(event: IEventData, siteUrl: string, listId: string): Promise<any>;
    /**
     *
     * @param {IEventData} event
     * @param {string} siteUrl
     * @param {string} listId
     * @returns
     * @memberof spservices
     */
    deleteEvent(event: IEventData, siteUrl: string, listId: string, recurrenceSeriesEdited: boolean): Promise<any>;
    /**
     *
     * @param {number} userId
     * @param {string} siteUrl
     * @returns {Promise<SiteUser>}
     * @memberof spservices
     */
    getUserById(userId: number, siteUrl: string): Promise<SiteUser>;
    /**
     *
     *
     * @param {string} loginName
     * @param {string} siteUrl
     * @returns {Promise<SiteUser>}
     * @memberof spservices
     */
    getUserByLoginName(loginName: string, siteUrl: string): Promise<SiteUser>;
    /**
     *
     * @param {string} loginName
     * @returns
     * @memberof spservices
     */
    getUserProfilePictureUrl(loginName: string): Promise<any>;
    /**
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @returns {Promise<IUserPermissions>}
     * @memberof spservices
     */
    getUserPermissions(siteUrl: string, listId: string): Promise<IUserPermissions>;
    /**
     *
     * @param {string} siteUrl
     * @returns
     * @memberof spservices
     */
    getSiteLists(siteUrl: string): Promise<any>;
    /**
     *
     * @private
     * @returns
     * @memberof spservices
     */
    colorGenerate(): Promise<string>;
    /**
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @param {string} fieldInternalName
     * @returns {Promise<{ key: string, text: string }[]>}
     * @memberof spservices
     */
    getChoiceFieldOptions(siteUrl: string, listId: string, fieldInternalName: string): Promise<{
        key: string;
        text: string;
    }[]>;
    /**
     *
     * @param {string} siteUrl
     * @param {string} listId
     * @param {Date} eventStartDate
     * @param {Date} eventEndDate
     * @returns {Promise< IEventData[]>}
     * @memberof spservices
     */
    getEvents(siteUrl: string, listId: string, eventStartDate: Date, eventEndDate: Date): Promise<IEventData[]>;
    /**
     *
     * @private
     * @param {string} siteUrl
     * @returns
     * @memberof spservices
     */
    getSiteRegionalSettingsTimeZone(siteUrl: string): Promise<any>;
    /**
     * @param {string} webUrl
     * @param {string} siteDesignId
     * @returns
     * @memberof spservices
     */
    getGeoLactionName(latitude: number, longitude: number): Promise<any>;
    enCodeHtmlEntities(string: string): Promise<string>;
    deCodeHtmlEntities(string: string): Promise<string>;
}
//# sourceMappingURL=spservices.d.ts.map