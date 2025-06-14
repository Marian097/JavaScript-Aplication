type CarProps = {
    brand:string, 
    id: number,
}

export default function Car(props : CarProps) {
  return (
    <li>{props.id} = I am a {props.brand}</li>
  )
}
