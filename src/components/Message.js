export function Message(props) {
  const message = props.message;
  return (
    <>
      <p className="message">{message}</p>
    </>
  );
}
