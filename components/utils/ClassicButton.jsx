const ClassicButton = ({text, bg, textc , onclick}) => {
    return (
        <button  onClick={onclick} className={"mr-8 text-xl   hover:scale-125 transition-all duration-300 px-4 py-2 rounded-3xl "+bg +" "+textc}> {text} </button>

    );
}

export default ClassicButton;