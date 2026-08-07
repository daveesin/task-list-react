function Title(props) {
    return(
        <h1 
            className="text-5xl text-yellow-500 font-bold p-10"
            {...props}
        >
            {props.children}
        </h1>
    );
}

export default Title;