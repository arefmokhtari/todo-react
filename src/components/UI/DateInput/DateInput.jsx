// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import './DateInput.css';
import 'react-multi-date-picker/styles/colors/green.css';
import { InputField } from '../../../pages/DiscountCode/AddDiscountCode/AddDiscountCode.style';
import { InputTimeWallet } from './DateInput.style';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export const Input = ({ openCalendar, value, handleValueChange }) => (
    <InputField
        onFocus={openCalendar}
        value={value}
        onChange={handleValueChange}
        label='تاریخ انقضا'
        fullWidth
    />
);

export const InputWallet = ({ openCalendar, value, handleValueChange }) => (
    <InputTimeWallet
        onFocus={openCalendar}
        value={value}
        onChange={handleValueChange}
        label='از زمان'
    />
);

export const InputAtWallet = ({ openCalendar, value, handleValueChange }) => (
    <InputTimeWallet
        onFocus={openCalendar}
        value={value}
        onChange={handleValueChange}
        label='تا زمان'
    />
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const DateInput = ({error, helperText, ...props}) => (
    <DatePicker 
        {... props}
        calendar={persian}
        locale={persian_fa}
        format="YYYY-MM-DD"
        className='green'
    />
);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default DateInput;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //