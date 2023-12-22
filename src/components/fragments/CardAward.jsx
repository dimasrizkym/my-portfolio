const CardAward = (props) => {
  const {title, issuer, issueDate} = props
  return (
    <>
      <h4>{title}</h4>
      <p>issued by {issuer} · {issueDate} </p>
    </>
  )
}

export default CardAward