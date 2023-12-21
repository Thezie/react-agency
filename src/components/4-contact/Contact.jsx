import "./contact.css";
import Lottie from "lottie-react";
import { useEffect } from "react";
import contact from "../../animations/contact.json";
import done from "../../animations/done.json";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xwkgelrg");
  return (
    <section className="contact padded-section">
      <h2 className="title">
        <span className="icon-envelop"></span>Contact us
      </h2>
      <p className="description">
        Contact us fo more information! let's work together to create something
        amazing.
      </p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form
          onSubmit={handleSubmit}
          className="flex"
          style={{ flexDirection: "column" }}
        >
          <div className="flex">
            <label htmlFor="email">Email Address : </label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex message" style={{ marginTop: "2rem" }}>
            <label htmlFor="message">Your message : </label>
            <textarea name="message" id="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="sent">
              <Lottie
                animationData={done}
                loop={false}
                style={{ height: 55 }}
              />
              Your message has been sent succesfully ! Thank you.
            </p>
          )}
        </form>
        <div className="contact-animation">
          <Lottie style={{ height: 350 }} animationData={contact} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
