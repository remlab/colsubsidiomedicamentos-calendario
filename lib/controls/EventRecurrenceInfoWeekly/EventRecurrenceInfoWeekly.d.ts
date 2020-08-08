import * as React from 'react';
import { IEventRecurrenceInfoWeeklyProps } from './IEventRecurrenceInfoWeeklyProps';
import { IEventRecurrenceInfoWeeklyState } from './IEventRecurrenceInfoWeeklyState';
/**
 *
 *
 * @export
 * @class EventRecurrenceInfoDaily
 * @extends {React.Component<IEventRecurrenceInfoWeeklyProps, IEventRecurrenceInfoWeeklyState>}
 */
export declare class EventRecurrenceInfoWeekly extends React.Component<IEventRecurrenceInfoWeeklyProps, IEventRecurrenceInfoWeeklyState> {
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
    private onNumberOfWeeksChange;
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
    private onPaternChange;
    componentWillMount(): Promise<void>;
    componentDidUpdate(prevProps: IEventRecurrenceInfoWeeklyProps, prevState: IEventRecurrenceInfoWeeklyState): Promise<void>;
    private load;
    private onApplyRecurrence;
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} ev
     * @memberof EventRecurrenceInfoDaily
     */
    private applyRecurrence;
    private onCheckboxSundayChange;
    private onCheckboxMondayChange;
    private onCheckboxTuesdayChange;
    private onCheckboxWednesdayChange;
    private onCheckboxThursdayChange;
    private onCheckboxFridayChange;
    private onCheckboxSaturdayChange;
    /**
     *
     *
     * @returns {React.ReactElement<IEventRecurrenceInfoWeeklyProps>}
     * @memberof EventRecurrenceInfoWeekly
     */
    render(): React.ReactElement<IEventRecurrenceInfoWeeklyProps>;
}
//# sourceMappingURL=EventRecurrenceInfoWeekly.d.ts.map