function Contact({ name, phone, cell, image }) {
  const { first, last } = name;
  return (
    <div>
      <div>First name: {first}</div>
      <div>Last name: {last}</div>
    </div>
  );
}
export default Contact;
