import React from 'react';
import FooterList from './FooterList';
import Link from 'next/link';
import { Container } from '@mui/material';
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="bg-deep-dusk text-slate-200 text-sm mt-16">
      <div>
        <Container>
          <div className="flex flex-col md:flex-row justify-beetween pt-16 pb-8">
            <FooterList>
              <div className="w-full md:w-4/5 mb-6 md:mb-0">
                <h2 className="text-base mb-2">
                  PARKING<b>BOOKING</b>
                </h2>{' '}
                <p className="mb-2">
                  Join us in transforming urban mobility – because finding the perfect parking space
                  should be as easy as a tap away!"
                </p>
                <p className="mb-2">
                  32 Arlington Street, Boston, MA 02116 Call: +48 123-345-678 (9:00-17:00) Email:
                  parkingbooking@gmail.com
                </p>
              </div>
            </FooterList>

            <FooterList>
              <h3 className="text-base mb-2 font-bold">Information</h3>
              <Link href="/about" className="mr-auto">
                About us
              </Link>{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
              <Link href="#">FAQ</Link>
              <h3 className="text-base mb-2 font-bold ">Follow Us</h3>
              <div className="flex gap-2">
                <Link href="#">
                  <AiFillLinkedin size={24} />
                </Link>
                <Link href="#">
                  <AiFillInstagram size={24} />
                </Link>
                <Link href="#">
                  <MdFacebook size={24} />
                </Link>

                <Link href="#">
                  <AiFillYoutube size={24} />
                </Link>
              </div>
            </FooterList>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
