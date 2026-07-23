import React, { useState } from "react";

function DB_connect() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputData = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setStatus({
      type: "",
      msg: "",
    });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "Form submitted successfully!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "failure",
          msg: result.message || "Submission Failed.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        msg: "Cannot connect to localhost.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Send Message</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <b>Name:</b>
        </label>
        <br />
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handleInputData}
          required
        />

        <br /><br />

        <label>
          <b>Email:</b>
        </label>
        <br />
        <input
          type="email"
          name="email"
          value={FormData.email}
          onChange={handleInputData}
          required
        />

        <br /><br />

        <label>
          <b>Message:</b>
        </label>
        <br />
        <textarea
          name="message"
          value={FormData.message}
          onChange={handleInputData}
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {status.msg && (
        <p
          style={{
            color:
              status.type === "success"
                ? "green"
                : status.type === "error"
                ? "red"
                : "orange",
          }}
        >
          {status.msg}
        </p>
      )}
    </div>
  );
}

export default DB_connect;