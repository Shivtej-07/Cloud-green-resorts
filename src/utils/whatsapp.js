import { siteConfig } from "../data/siteConfig";

/**
 * Builds a direct WhatsApp chat URL with encoded prefilled message
 * @param {Object} details - booking or enquiry details
 * @returns {string} wa.me URL
 */
export function buildWhatsAppLink(details = {}) {
  const phone = siteConfig.contact.whatsapp;
  
  if (!details || Object.keys(details).length === 0) {
    const defaultText = `Hello Cloudgreen Resort & Spa! I would like to inquire about room availability and tariffs.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
  }

  const {
    name,
    phone: guestPhone,
    email,
    roomType,
    checkIn,
    checkOut,
    guests,
    roomsCount = 1,
    specialRequests,
    source = "Website Booking Form"
  } = details;

  let message = `🌿 *NEW BOOKING ENQUIRY - CLOUDGREEN RESORT & SPA*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  if (name) message += `👤 *Guest Name:* ${name}\n`;
  if (guestPhone) message += `📞 *Phone:* ${guestPhone}\n`;
  if (email) message += `✉️ *Email:* ${email}\n`;
  if (roomType) message += `🛏️ *Room Type:* ${roomType}\n`;
  if (checkIn) message += `📅 *Check-in Date:* ${checkIn}\n`;
  if (checkOut) message += `📅 *Check-out Date:* ${checkOut}\n`;
  if (guests) message += `👥 *Number of Guests:* ${guests}\n`;
  if (roomsCount) message += `🚪 *Rooms Required:* ${roomsCount}\n`;
  if (specialRequests) message += `💬 *Special Requests / Notes:* ${specialRequests}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Source: ${source} via Cloudgreen Resort Website_`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick WhatsApp link for a specific room
 */
export function buildRoomEnquiryLink(roomName, price) {
  const phone = siteConfig.contact.whatsapp;
  const text = `Hello Cloudgreen Resort! I am interested in booking the *${roomName}* (approx ₹${price}/night). Please let me know room availability and best package offers.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Quick WhatsApp link for spa services
 */
export function buildSpaEnquiryLink(serviceName, price) {
  const phone = siteConfig.contact.whatsapp;
  const text = `Hello Cloudgreen Wellness Spa! I would like to book a session for *${serviceName}* (₹${price}). Please share available appointment slots.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
