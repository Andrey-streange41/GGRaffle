import './IconButton.scss';


interface ComponentProps {
    icon: JSX.Element
    iconClassName?: string
    onClick?: (...v: any) => any
    chart?:boolean
  }

const IconButton = (props:ComponentProps) => {
    return (
        <div className='icon-button'>
            {props.icon}
            {props.chart?<span className="count">33</span>:null}
        </div>
    )
}

export default IconButton