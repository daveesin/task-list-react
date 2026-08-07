function Button(props) {
    return(

        <button
            {...props}
            className="bg-slate-400 w-10 h-10 text-white rounded-md border-2 border-black hover:bg-slate-500"
        >
            {props.children}
        </button>

    )
}

export default Button;