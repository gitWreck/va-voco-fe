"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChartLine,
  faComments,
} from "@fortawesome/free-solid-svg-icons";


export const services = [
    {
      key: "executive",
      title: "Executive Assistance",
      desc: "Email & calendar management, scheduling, research, and reports.",
      icon: faUserTie,
    },
    {
      key: "marketing",
      title: "Marketing Support",
      desc: "Social media management, content creation, analytics, and campaigns.",
      icon: faChartLine,
    },
    {
      key: "customer",
      title: "Customer Support",
      desc: "Chat, email, ticketing, and order follow-ups.",
      icon: faComments,
    },
  ];