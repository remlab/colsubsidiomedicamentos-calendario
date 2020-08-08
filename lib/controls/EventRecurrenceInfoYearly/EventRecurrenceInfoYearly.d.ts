import * as React from 'react';
import { IEventRecurrenceInfoYearlyProps } from './IEventRecurrenceInfoYearlyProps';
import { IEventRecurrenceInfoYearlyState } from './IEventRecurrenceInfoYearlyState';
/**
 *
 *
 * @export
 * @class EventRecurrenceInfoDaily
 * @extends {React.Component<IEventRecurrenceInfoYearlyProps, IEventRecurrenceInfoYearlyState>}
 */
export declare class EventRecurrenceInfoYearly extends React.Component<IEventRecurrenceInfoYearlyProps, IEventRecurrenceInfoYearlyState> {
    private spService;
    constructor(props: any);
    /**
     *
     *
     * @private
     * @param {Date} date
     * @memberof EventRecurrenceInfoDaily
     */
    private onStartDateChange;
    /**
     *
     *
     * @private
     * @param {Date} date
     * @memberof EventRecurrenceInfoDaily
     */
    private onEndDateChange;
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {string} value
     * @memberof EventRecurrenceInfoDaily
     */
    private onDayOfMonthChange;
    private onMonthChange;
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {string} value
     * @memberof EventRecurrenceInfoDaily
     */
    private onNumberOfOcurrencesChange;
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {IChoiceGroupOption} option
     * @memberof EventRecurrenceInfoDaily
     */
    private onDataRangeOptionChange;
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {IChoiceGroupOption} option
     * @memberof EventRecurrenceInfoYearly
     */
    private onPaternChange;
    componentDidMount(): Promise<void>;
    componentWillMount(): Promise<void>;
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoYearly
     */
    private onWeekOrderMonthChange;
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoYearly
     */
    private onYearlyByDayMonthChange;
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoYearly
     */
    private onSelectedWeekDayChange;
    componentDidUpdate(prevProps: IEventRecurrenceInfoYearlyProps, prevState: IEventRecurrenceInfoYearlyState): Promise<void>;
    /**
     *
     *
     * @private
     * @memberof EventRecurrenceInfoYearly
     */
    private load;
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} ev
     * @memberof EventRecurrenceInfoYearly
     */
    private onApplyRecurrence;
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} ev
     * @memberof EventRecurrenceInfoDaily
     */
    private applyRecurrence;
    /**
     *
     *
     * @returns {React.ReactElement<IEventRecurrenceInfoDailyProps>}
     * @memberof EventRecurrenceInfoDaily
     */
    render(): React.ReactElement<IEventRecurrenceInfoYearlyProps>;
}
//# sourceMappingURL=EventRecurrenceInfoYearly.d.ts.map