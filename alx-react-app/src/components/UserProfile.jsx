function UserProfile(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "20px", display: "inline-block", marginTop: "20px" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
