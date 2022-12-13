

const InputForm = ({ config, touched, errors, isSubmitting }) => (
    <>
        <label htmlFor='title'>title <span className='span-error'>{ touched.title && errors.title}</span></label>
        <input type="text" {... config('title')}/>
        <label htmlFor='discription'>discription <span className='span-error'>{ touched.discription && errors.discription}</span></label>
        <input type="text" {... config('discription')}/>
    </>
);

export default InputForm;