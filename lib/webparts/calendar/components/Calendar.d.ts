import * as React from 'react';
import { ICalendarProps } from './ICalendarProps';
import { ICalendarState } from './ICalendarState';
import 'react-big-calendar/lib/css/react-big-calendar.css';
/**
 * @export
 * @class Calendar
 * @extends {React.Component<ICalendarProps, ICalendarState>}
 */
export default class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    private spService;
    private userListPermissions;
    constructor(props: any);
    private onDocumentCardClick;
    /**
     * @private
     * @param {*} event
     * @memberof Calendar
     */
    private onSelectEvent;
    /**
     *
     * @private
     * @param {boolean} refresh
     * @memberof Calendar
     */
    private onDismissPanel;
    /**
     * @private
     * @memberof Calendar
     */
    private loadEvents;
    /**
     * @memberof Calendar
     */
    componentDidMount(): Promise<void>;
    /**
     *
     * @param {*} error
     * @param {*} errorInfo
     * @memberof Calendar
     */
    componentDidCatch(error: any, errorInfo: any): void;
    /**
     *
     *
     * @param {ICalendarProps} prevProps
     * @param {ICalendarState} prevState
     * @memberof Calendar
     */
    componentDidUpdate(prevProps: ICalendarProps, prevState: ICalendarState): Promise<void>;
    /**
     * @private
     * @param {*} { event }
     * @returns
     * @memberof Calendar
     */
    private renderEvent;
    /**
     *
     *
     * @private
     * @memberof Calendar
     */
    private onConfigure;
    /**
     * @param {*} { start, end }
     * @memberof Calendar
     */
    onSelectSlot({ start, end }: {
        start: any;
        end: any;
    }): Promise<void>;
    /**
     *
     * @param {*} event
     * @param {*} start
     * @param {*} end
     * @param {*} isSelected
     * @returns {*}
     * @memberof Calendar
     */
    eventStyleGetter(event: any, start: any, end: any, isSelected: any): any;
    /**
      *
      * @param {*} date
      * @memberof Calendar
      */
    dayPropGetter(date: Date): {
        className: string;
    };
    /**
     *
     * @returns {React.ReactElement<ICalendarProps>}
     * @memberof Calendar
     */
    render(): React.ReactElement<ICalendarProps>;
}
//# sourceMappingURL=Calendar.d.ts.map