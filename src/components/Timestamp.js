export function Timestamp(props) {
  const time = props.time;
  return (
    <>
      <span className="timestamp">{time}</span>
    </>
  );
}
