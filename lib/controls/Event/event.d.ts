import * as React from 'react';
import { IEventProps } from './IEventProps';
import { IEventState } from './IEventState';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export declare class Event extends React.Component<IEventProps, IEventState> {
    private spService;
    private attendees;
    private latitude;
    private longitude;
    private returnedRecurrenceInfo;
    private categoryDropdownOption;
    constructor(props: any);
    /**
     *  Hide Panel
     *
     * @private
     * @memberof Event
     */
    private hidePanel;
    /**
     *  Save Event to a list
     * @private
     * @memberof Event
     */
    private onSave;
    /**
     *
     * @param {*} error
     * @param {*} errorInfo
     * @memberof Event
     */
    componentDidCatch(error: any, errorInfo: any): void;
    /**
     *
     *
     * @private
     * @param {number} [eventId]
     * @memberof Event
     */
    private renderEventData;
    /**
     *
     *
     * @memberof Event
     */
    componentDidMount(): Promise<void>;
    /**
     * @private
     * @memberof Event
     */
    private onStartChangeHour;
    /**
     * @private
     * @memberof Event
     */
    private onEndChangeHour;
    /**
     * @private
     * @memberof Event
     */
    private onStartChangeMin;
    /**
     * @private
     * @param {any[]} items
     * @memberof Event
     */
    private getPeoplePickerItems;
    /**
     *
     * @private
     * @param {*} editorState
     * @memberof Event
     */
    private onEditorStateChange;
    /**
     *
     * @private
     * @param {string} value
     * @returns {string}
     * @memberof Event
     */
    private onGetErrorMessageTitle;
    /**
     *
     * @private
     * @memberof Event
     */
    private onEndChangeMin;
    /**
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof Event
     */
    private onCategoryChanged;
    /**
     *
     * @private
     * @param {React.MouseEvent<HTMLDivElement>} event
     * @memberof Event
     */
    private onDelete;
    /**
     *
     * @private
     * @param {React.MouseEvent<HTMLDivElement>} event
     * @memberof Event
     */
    private closeDialog;
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLDivElement>} ev
     * @memberof Event
     */
    private confirmDelete;
    /**
     * @private
     * @returns
     * @memberof Event
     */
    private onRenderFooterContent;
    /**
     *
     * @private
     * @param {Date} newDate
     * @memberof Event
     */
    private onSelectDateStart;
    /**
     * @private
     * @param {Date} newDate
     * @memberof Event
     */
    private onSelectDateEnd;
    /**
     *
     * @private
     * @param {ICoordinates} coordinates
     * @memberof Event
     */
    private onUpdateCoordinates;
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} ev
     * @memberof Event
     */
    private onEditRecurrence;
    /**
     *
     *
     * @private
     * @param {string} rule
     * @memberof Event
     */
    private parseDailyRule;
    /**
     *
     *
     * @private
     * @param { string } rule
     * @memberof Event
     */
    private parseWeeklyRule;
    /**
     *
     *
     * @private
     * @param { string } rule
     * @memberof Event
     */
    private parseMonthlyRule;
    /**
     *
     * @private
     * @param { string } rule
     * @memberof Event
     */
    private parseMonthlyByDayRule;
    /**
     *
     * @private
     * @param rule
     * @memberof Event
     */
    private parseYearlyRule;
    /**
     *
     *
     * @private
     * @param rule
     * @memberof Event
     */
    private parseYearlyByDayRule;
    /**
     *
     *
     * @private
     * @param {string} recurrenceData
     * @memberof Event
     */
    private returnExceptionRecurrenceInfo;
    /**
     *
     *
     * @param {Date} startDate
     * @param {string} recurrenceData
     * @memberof Event
     */
    returnRecurrenceInfo(startDate: Date, recurrenceData: string): Promise<void>;
    /**
     *
     *
     * @returns {React.ReactElement<IEventProps>}
     * @memberof Event
     */
    render(): React.ReactElement<IEventProps>;
}
//# sourceMappingURL=event.d.ts.map