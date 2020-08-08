import * as React from 'react';
import { IEventRecurrenceInfoDailyProps } from './IEventRecurrenceInfoDailyProps';
import { IEventRecurrenceInfoDailyState } from './IEventRecurrenceInfoDailyState';
/**
 *
 *
 * @export
 * @class EventRecurrenceInfoDaily
 * @extends {React.Component<IEventRecurrenceInfoDailyProps, IEventRecurrenceInfoDailyState>}
 */
export declare class EventRecurrenceInfoDaily extends React.Component<IEventRecurrenceInfoDailyProps, IEventRecurrenceInfoDailyState> {
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
    private onNumberOfDaysChange;
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
    private onPatternChange;
    componentWillMount(): Promise<void>;
    componentDidUpdate(prevProps: IEventRecurrenceInfoDailyProps, prevState: IEventRecurrenceInfoDailyState): Promise<void>;
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
    /**
     *
     *
     * @returns {React.ReactElement<IEventRecurrenceInfoDailyProps>}
     * @memberof EventRecurrenceInfoDaily
     */
    render(): React.ReactElement<IEventRecurrenceInfoDailyProps>;
}
//# sourceMappingURL=EventRecurrenceInfoDaily.d.ts.map