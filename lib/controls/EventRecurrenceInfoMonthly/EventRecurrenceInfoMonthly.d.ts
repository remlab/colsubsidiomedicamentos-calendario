import * as React from 'react';
import { IEventRecurrenceInfoMonthlyProps } from './IEventRecurrenceInfoMonthlyProps';
import { IEventRecurrenceInfoMonthlyState } from './IEventRecurrenceInfoMonthlyState';
/**
 *
 *
 * @export
 * @class EventRecurrenceInfoDaily
 * @extends {React.Component<IEventRecurrenceInfoMonthlyProps, IEventRecurrenceInfoMonthlyState>}
 */
export declare class EventRecurrenceInfoMonthly extends React.Component<IEventRecurrenceInfoMonthlyProps, IEventRecurrenceInfoMonthlyState> {
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
    /**
     *
     *
     * @private
     * @param {string} value
     * @returns
     * @memberof EventRecurrenceInfoMonthly
     */
    private onDayOfMonthGetErrorMessage;
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {string} value
     * @memberof EventRecurrenceInfoMonthly
     */
    private onEveryNumberOfMonthsChange;
    /**
     *
     *
     * @private
     * @param {React.SyntheticEvent<HTMLElement>} ev
     * @param {string} value
     * @memberof EventRecurrenceInfoMonthly
     */
    private onEveryNumberOfMonthsWeekDayChange;
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
     * @memberof EventRecurrenceInfoMonthly
     */
    private onPaternChange;
    componentWillMount(): Promise<void>;
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoMonthly
     */
    private onWeekOrderMonthChange;
    /**
     *
     *
     * @private
     * @param {React.FormEvent<HTMLDivElement>} ev
     * @param {IDropdownOption} item
     * @memberof EventRecurrenceInfoMonthly
     */
    private onSelectedWeekDayChange;
    componentDidUpdate(prevProps: IEventRecurrenceInfoMonthlyProps, prevState: IEventRecurrenceInfoMonthlyState): Promise<void>;
    /**
     *
     *
     * @private
     * @memberof EventRecurrenceInfoMonthly
     */
    private load;
    /**
     *
     *
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} ev
     * @memberof EventRecurrenceInfoMonthly
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
    render(): React.ReactElement<IEventRecurrenceInfoMonthlyProps>;
}
//# sourceMappingURL=EventRecurrenceInfoMonthly.d.ts.map