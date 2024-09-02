import React from "react"

import allix from "@/our-team/profile-pics/allix.png"
import amanda from "@/our-team/profile-pics/amanda.jpg"
import ashley from "@/our-team/profile-pics/Ashley.jpg"
import beth from "@/our-team/profile-pics/beth.png"
import emmalb from "@/our-team/profile-pics/emma.jpeg"
import emmah from "@/our-team/profile-pics/emmaH.jpg"
import jade from "@/our-team/profile-pics/jade.png"
import kate from "@/our-team/profile-pics/kate.jpg"
import kavita from "@/our-team/profile-pics/kavita.jpg"
import lauren from "@/our-team/profile-pics/lauren.JPG"
import lia from "@/our-team/profile-pics/lia.png"
import lilyana from "@/our-team/profile-pics/lilyana.png"
import madeleine from "@/our-team/profile-pics/Madeleine.jpeg"
import maria from "@/our-team/profile-pics/maria.jpeg"
import navya from "@/our-team/profile-pics/navya.jpg"
import pheobe from "@/our-team/profile-pics/pheobe.png"
import renee from "@/our-team/profile-pics/renee.png"
import saanvi from "@/our-team/profile-pics/saanvi.JPG"
import sari from "@/our-team/profile-pics/sari.png"
import teagan from "@/our-team/profile-pics/teagan.png"

import emptyprofile from "@/public/assets/emptyprofile.png" //use as temp filler photo

// use place photo for Annika Tran, Keely McSpurren, Alyssa Zhao, Rena Hajjar, Kaleigh Feder

const profiles = [
  {src: {jade}, alt: 'Jade Warren, Co-Chair', name: 'Jade Warren', role: 'Co-Chair'},
  {src: {maria}, alt: 'Maria Kobilaski, Co-Chair', name: 'Maria Kobilaski', role: 'Co-Chair'},
  {src: {allix}, alt: 'Allix Fletcher, Finance', name: 'Allix Fletcher', role: 'Finance'},
  {src: {amanda}, alt: 'Amanda Li, Graphic Designer', name: 'Amanda Li', role: 'Graphic Designer'},
  {src: {ashley}, alt: 'Ashley Van Rooyen, Community Coordinator', name: 'Ashley Van Rooyen', role: 'Community Coordinator'},
  {src: {navya}, alt: 'Navya Bajwa, Community Coordinator', name: 'Navya Bajwa', role: 'Community Coordinator'},
  {src: {lilyana}, alt: 'Lilyana Boraniev, Community Coordinator', name: 'Lilyana Boraniev', role: 'Community Coordinator'},
  {src: {beth}, alt: 'Beth Armstrong, Mentorship Director', name: 'Beth Armstrong', role: 'Mentorship Director'},
  {src: {madeleine}, alt: 'Madeleine Domantay, Mentorship Coordinator', name: 'Madeleine Domantay', role: 'Mentorship Coordinator'},
  {src: {kate}, alt: 'Kate Ram, Mentorship Coordinator', name: 'Kate Ram', role: 'Mentorship Coordinator'},
  {src: {lauren}, alt: 'Lauren Lidhar, Mentorship Coordinator', name: 'Lauren Lidhar', role: 'Mentorship Coordinator'},
  {src: {emmalb}, alt: 'Emma Leitch-Blais, Marketing Coordinator', name: 'Emma Leitch-Blais', role: 'Marketing Coordinator'},
  {src: {emptyprofile}, alt: 'Alyssa Zhao, Marketing Coordinator', name: 'Alyssa Zhao', role: 'Marketing Coordinator'},
  {src: {emptyprofile}, alt: 'Kaleigh Feder, Web Developer', name: 'Kaleigh Feder', role: 'Web Developer'},
  {src: {kavita}, alt: 'Kavita Thomas, Web Developer', name: 'Kavita Thomas', role: 'Web Developer'},
  {src: {lia}, alt: 'Lia Silver, Operations', name: 'Lia Silver', role: 'Operations'},
  {src: {pheobe}, alt: 'Phoebe Starnio, Community Director', name: 'Phoebe Starnio', role: 'Community Director'},
  {src: {renee}, alt: 'Renee Kim, Marketing Director', name: 'Renee Kim', role: 'Marketing Director'},
  {src: {saanvi}, alt: 'Saanvi Bakshi, HackHer Coordinator', name: 'Saanvi Bakshi', role: 'HackHer Coordinator'},
  {src: {sari}, alt: 'Sari Pagurek Van Mossal, HackHer Coordinator', name: 'Sari Pagurek Van Mossal', role: 'HackHer Coordinator'},
  {src: {teagan}, alt: 'Teagan Wright, HackHer Coordinator', name: 'Teagan Wright', role: 'HackHer Coordinator'},
  {src: {emptyprofile}, alt: 'Annika Tran, Sponsorships Coordinator', name: 'Annika Tran', role: 'Sponsorships Coordinator'},
  {src: {emptyprofile}, alt: 'Keely McSpurren, Senior Advisor', name: 'Keely McSpurren', role: 'Senior Advisor'},
  {src: {emptyprofile}, alt: 'Rena Hajjar, HackHer Coordinator', name: 'Rena Hajjar', role: 'HackHer Coordinator'},
]