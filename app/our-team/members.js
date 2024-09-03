import React from "react";

import allix from "qwic/public/profile-pics/allix.png";
import amanda from "qwic/public/profile-pics/amanda.jpg"
import ashley from "qwic/public/profile-pics/Ashley.jpg"
import beth from "qwic/public/profile-pics/beth.png"
import emmalb from "qwic/public/profile-pics/emma.jpeg"
import jade from "qwic/public/profile-pics/jade.png"
import kate from "qwic/public/profile-pics/kate.jpg"
import kavita from "qwic/public/profile-pics/kavita.jpg"
import lauren from "qwic/public/profile-pics/lauren.JPG"
import lia from "qwic/public/profile-pics/lia.png"
import lilyana from "qwic/public/profile-pics/lilyana.png"
import madeleine from "qwic/public/profile-pics/Madeleine.jpeg"
import maria from "qwic/public/profile-pics/maria.jpeg"
import navya from "qwic/public/profile-pics/navya.jpg"
import pheobe from "qwic/public/profile-pics/pheobe.png"
import renee from "qwic/public/profile-pics/renee.png"
import saanvi from "qwic/public/profile-pics/saanvi.JPG"
import sari from "qwic/public/profile-pics/sari.png"
import teagan from "qwic/public/profile-pics/teagan.png"
import emptyprofile from "qwic/public/profile-pics/emptyprofile.png" //use as temp filler photo

// use place photo for Annika Tran, Keely McSpurren, Alyssa Zhao, Rena Hajjar, Kaleigh Feder

const profiles = [
  {src: {maria}, alt: 'Maria Kobilaski, Co-Chair', name: 'Maria Kobilaski', role: 'Co-Chair'},
  {src: {jade}, alt: 'Jade Warren, Co-Chair', name: 'Jade Warren', role: 'Co-Chair'},
  {src: {pheobe}, alt: 'Phoebe Starnio, Vice-Chair of Community', name: 'Phoebe Starnio', role: 'Vice-Chair of Community'},
  {src: {navya}, alt: 'Navya Bajwa, Community Coordinator', name: 'Navya Bajwa', role: 'Community Coordinator'},
  {src: {lilyana}, alt: 'Lilyana Boraniev, Community Coordinator', name: 'Lilyana Boraniev', role: 'Community Coordinator'},
  {src: {ashley}, alt: 'Ashley Van Rooyen, Community Coordinator', name: 'Ashley Van Rooyen', role: 'Community Coordinator'},
  {src: {renee}, alt: 'Renee Kim, Vice-Chair of Marketin', name: 'Renee Kim', role: 'Vice-Chair of Marketing'},
  {src: {emmalb}, alt: 'Emma Leitch-Blais, Marketing Coordinator', name: 'Emma Leitch-Blais', role: 'Marketing Coordinator'},
  {src: {emptyprofile}, alt: 'Alyssa Zhao, Marketing Coordinator', name: 'Alyssa Zhao', role: 'Marketing Coordinator'},
  {src: {amanda}, alt: 'Amanda Li, Graphic Designer', name: 'Amanda Li', role: 'Graphic Designer'},
  {src: {emptyprofile}, alt: 'Kaleigh Feder, Web Developer', name: 'Kaleigh Feder', role: 'Web Developer'},
  {src: {kavita}, alt: 'Kavita Thomas, Web Developer', name: 'Kavita Thomas', role: 'Web Developer'},
  {src: {lia}, alt: 'Lia Silver, Vice-Chair of Operations', name: 'Lia Silver', role: 'Vice-Chair of Operations'},
  {src: {emptyprofile}, alt: 'Keely McSpurren, Senior Advisor', name: 'Keely McSpurren', role: 'Senior Advisor'},
  {src: {emptyprofile}, alt: 'Annika Tran, Sponsorships Coordinator', name: 'Annika Tran', role: 'Sponsorships Coordinator'},
  {src: {allix}, alt: 'Allix Fletcher, Finance Coordinator', name: 'Allix Fletcher', role: 'Finance Coordinator'},
  {src: {sari}, alt: 'Sari Pagurek Van Mossal, Vice-Chair of HackHer', name: 'Sari Pagurek Van Mossal', role: 'Vice-Chair of HackHer'},
  {src: {saanvi}, alt: 'Saanvi Bakshi, HackHer Coordinator', name: 'Saanvi Bakshi', role: 'HackHer Coordinator'},
  {src: {emptyprofile}, alt: 'Rena Hajjar, HackHer Coordinator', name: 'Rena Hajjar', role: 'HackHer Coordinator'},
  {src: {teagan}, alt: 'Teagan Wright, HackHer Coordinator', name: 'Teagan Wright', role: 'HackHer Coordinator'},
  {src: {beth}, alt: 'Beth Armstrong, Vice-Chair of Mentorship', name: 'Beth Armstrong', role: 'Vice-Chair of Mentorship'},
  {src: {madeleine}, alt: 'Madeleine Domantay, Mentorship Coordinator', name: 'Madeleine Domantay', role: 'Mentorship Coordinator'},
  {src: {kate}, alt: 'Kate Ram, Mentorship Coordinator', name: 'Kate Ram', role: 'Mentorship Coordinator'},
  {src: {lauren}, alt: 'Lauren Lidhar, Mentorship Coordinator', name: 'Lauren Lidhar', role: 'Mentorship Coordinator'}
];

