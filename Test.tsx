interface props {
    text: number
}

export default function (props:props) {
    return <div><div>{props.text} </div><div>{Math.random()}</div></div>
}