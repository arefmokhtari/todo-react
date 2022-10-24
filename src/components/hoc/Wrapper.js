


const Wrapper = (component, className) => {
    return (props) => <div className={className}>
        {props.children}
    </div>;
}


export default Wrapper;