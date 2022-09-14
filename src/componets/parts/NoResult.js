import '../../assets/styles/css/parts/no-result.css'

function NoResult(props) {
  return <div className='message'>
    <span>{props.text}</span>
  </div>
}

export default NoResult