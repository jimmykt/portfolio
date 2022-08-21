import "./ContactPage.scss";

function ContactPage() {
  return (
    <div className="ContactPage">
      <form className="ContactPage__form" action="">
        <input
          className="input ContactPage__name"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="input ContactPage__email"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="input ContactPage__subject"
          type="subject"
          name="subject"
          id="subject"
          placeholder="subject"
        />

        <textarea className="input ContactPage__messageBody"></textarea>
        <button className="ContactPage__sendButton">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
