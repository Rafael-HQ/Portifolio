import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import {Particles} from "../ComponentsEspeciais/Particle"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    setStatus("Enviando...");

    emailjs
      .send(
        "service_gioeb6k",
        "template_1keeui9",
        formData,
        "pCjpqB2ZGykBejqzK"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar:", error);
          setLoading(false);
          setStatus("❌ Ocorreu um erro ao enviar. Tente novamente.");
        }
      );
  };

  return (
    <div className="contact-container" >
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        color="#ad34dd"
        refresh
      />

      <div className="contact-gradient"></div>

      <div className="contact-form-container" data-aos="fade-down" data-aos-duration="2000">
        <h2 className="contact-title">Contate-me</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-input-group">
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>

          <div className="contact-input-group">
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>

          <div className="contact-input-group">
            <textarea
              name="message"
              placeholder="Digite sua mensagem..."
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`contact-button ${loading ? "contact-button-disabled" : ""}`}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {status && (
          <p
            className={`contact-status ${status.startsWith("✅") ? "contact-status-success" : "contact-status-error"
              }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};