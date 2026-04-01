import type { INAVBARDATA, IUSEFULLINKS } from "../interfaces";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { v4 as uuid } from "uuid"

export const NAVBARDATA: INAVBARDATA[] = [
 {
  id: 1,
  title: "Home",
  path: "/",
 },
 {
  id: 2,
  title: "Software Engineering",
  path: "/software-engineering",
 },
 {
  id: 3,
  title: "Data Science",
  path: "/data-science",
 },
 {
  id: 4,
  title: "Technology",
  path: "/technology",
 },
 {
  id: 5,
  title: "Security",
  path: "/security",
 },
 {
  id: 6,
  title: "Management",
  path: "/management",
 },
 {
  id: 7,
  title: "Self-Help",
  path: "/self-Help",
 },
 {
  id: 8,
  title: "About us",
  path: "/about-us",
 },
 {
  id: 9,
  title: "Contact us",
  path: "/contact-us",
 },
]
export const FOOTERLINKS: INAVBARDATA[] = [
 {
  id: 1,
  title: "Home",
  path: "/"
 },
 {
  id: 2,
  title: "About us",
  path: "/about-us"
 },
 {
  id: 3,
  title: "Contact us",
  path: "/contact-us"
 }
]
export const USEFULLINKS: IUSEFULLINKS[] = [
 {
  id: 1,
  title: "Privacy Policy",
 },
 {
  id: 2,
  title: "Terms & Conditions",
 },
 {
  id: 3,
  title: "Refund and Returns Policy",
 }
]

export const SOCIALMEDIAICONS = [
 {
  id: uuid(),
  name: "facebook",
  icon: FaFacebookF,
  color: "#1877f2",
 },
 {
  id: uuid(),
  name: "x",
  icon: FaXTwitter,
  color: "#000000",
 },
 {
  id: uuid(),
  name: "instagram",
  icon: FaInstagram,
  color: "#c13584",
 },
 {
  id: uuid(),
  name: "youtube",
  icon: FaYoutube,
  color: "#ff0000",
 },
 {
  id: uuid(),
  name: "linkedin",
  icon: FaLinkedinIn,
  color: "#0a66c2",
 },
 {
  id: uuid(),
  name: "whatsapp",
  icon: FaWhatsapp,
  color: "#25d366",
 },
 {
  id: uuid(),
  name: "tiktok",
  icon: FaTiktok,
  color: "#000000",
 },
 {
  id: uuid(),
  name: "telegram",
  icon: FaTelegram,
  color: "#0088cc",
 },
]