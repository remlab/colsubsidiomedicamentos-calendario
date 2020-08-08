import { DisplayMode } from '@microsoft/sp-core-library';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
export interface ICalendarProps {
    title: string;
    description: string;
    siteUrl: string;
    list: string;
    displayMode: DisplayMode;
    updateProperty: (value: string) => void;
    context: WebPartContext;
    eventStartDate: IDateTimeFieldValue;
    eventEndDate: IDateTimeFieldValue;
}
//# sourceMappingURL=ICalendarProps.d.ts.map