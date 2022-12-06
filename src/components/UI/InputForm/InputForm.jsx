


const InputForm = ({ name, touched, config, type, error, title }) => (<>
    <label htmlFor={name}>{title} <span className='span-error'>{touched && error}</span></label>
    <input type={type || 'text'} {... config(name)} style={touched && error?{borderBottom: '2px solid #ff9191'}:{}}/>
</>);

export default InputForm;