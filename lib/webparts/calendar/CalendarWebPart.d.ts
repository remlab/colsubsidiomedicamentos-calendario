import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
export interface ICalendarWebPartProps {
    title: string;
    siteUrl: string;
    list: string;
    eventStartDate: IDateTimeFieldValue;
    eventEndDate: IDateTimeFieldValue;
    errorMessage: string;
}
export default class CalendarWebPart extends BaseClientSideWebPart<ICalendarWebPartProps> {
    private lists;
    private listsDropdownDisabled;
    private spService;
    private errorMessage;
    constructor();
    render(): void;
    onInit(): Promise<void>;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    /**
     *
     * @protected
     * @memberof CalendarWebPart
     */
    protected onPropertyPaneConfigurationStart(): Promise<void>;
    /**
     *
     * @private
     * @returns {Promise<IPropertyPaneDropdownOption[]>}
     * @memberof CalendarWebPart
     */
    private loadLists;
    /**
     *
     *
     * @private
     * @param {string} date
     * @returns
     * @memberof CalendarWebPart
     */
    private onEventStartDateValidation;
    /**
     *
     * @private
     * @param {string} date
     * @returns
     * @memberof CalendarWebPart
     */
    private onEventEndDateValidation;
    /**
     *
     * @private
     * @param {string} value
     * @returns {Promise<string>}
     * @memberof CalendarWebPart
     */
    private onSiteUrlGetErrorMessage;
    /**
     *
     * @protected
     * @param {string} propertyPath
     * @param {string} oldValue
     * @param {string} newValue
     * @memberof CalendarWebPart
     */
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: string, newValue: string): Promise<void>;
    /**
     *
     * @protected
     * @returns {IPropertyPaneConfiguration}
     * @memberof CalendarWebPart
     */
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CalendarWebPart.d.ts.map