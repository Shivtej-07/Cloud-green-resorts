import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Phone, Mail, User } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formDataCache, setFormDataCache] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data) => {
    setFormDataCache(data);
    setSubmitted(true);
    reset();
  };

  const handleWhatsAppForward = () => {
    if (!formDataCache) return;
    const url = buildWhatsAppLink({
      name: formDataCache.name,
      phone: formDataCache.phone,
      email: formDataCache.email,
      specialRequests: `${formDataCache.subject ? `[${formDataCache.subject}] ` : ''}${formDataCache.message}`,
      source: "Website Contact Page"
    });
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8 space-y-4"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-forest-950">
              Thank You! Message Received
            </h3>

            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              We have received your message. Our Metgutad front desk team will get in touch with you shortly via phone or email.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppForward}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Forward Message on WhatsApp</span>
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            
            {/* Full Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm font-medium transition-colors bg-cream-50 focus:bg-white focus:outline-none ${
                    errors.name ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-forest-800 focus:ring-2 focus:ring-forest-100'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="e.g. 09876543210"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+ ]{10,14}$/,
                        message: "Please enter a valid phone number"
                      }
                    })}
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm font-medium transition-colors bg-cream-50 focus:bg-white focus:outline-none ${
                      errors.phone ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-forest-800 focus:ring-2 focus:ring-forest-100'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone.message}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm font-medium transition-colors bg-cream-50 focus:bg-white focus:outline-none ${
                      errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-forest-800 focus:ring-2 focus:ring-forest-100'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Inquiry Topic
              </label>
              <select
                id="contact-subject"
                {...register("subject")}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none cursor-pointer"
              >
                <option value="Room Booking & Tariffs">Room Booking &amp; Tariffs</option>
                <option value="Spa Appointment Inquiry">Spa &amp; Wellness Appointment</option>
                <option value="Group / Corporate Outing">Group / Corporate / Family Reunion</option>
                <option value="Pet Stay Inquiries">Pet Policies &amp; Stay Arrangements</option>
                <option value="Directions & Sightseeing Info">Directions &amp; Sightseeing Info</option>
                <option value="General Query">Other General Query</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Message / Dates of Interest <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Tell us about your proposed dates, number of guests, or special questions..."
                {...register("message", {
                  required: "Please write a brief message",
                  minLength: { value: 10, message: "Message must be at least 10 characters" }
                })}
                className={`w-full p-4 rounded-2xl border text-sm font-medium transition-colors bg-cream-50 focus:bg-white focus:outline-none ${
                  errors.message ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-forest-800 focus:ring-2 focus:ring-forest-100'
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full justify-center shadow-lg"
              icon={Send}
            >
              {isSubmitting ? "Sending..." : "Submit Message to Front Desk"}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
