"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Coffee, Sparkles, Utensils, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Experience", id: "experience" },
        { name: "Menu", id: "menu" },
        { name: "Location", id: "location" },
      ]}
      brandName="Mugshot Cafe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{ variant: "plain" }}
      logoText="Mugshot Cafe"
      description="You don’t find Mugshot. You get hooked on it. Hidden in Nyali, loved by locals, obsessed over daily."
      buttons={[
        { text: "View Menu", href: "#menu" },
        { text: "Get Directions", href: "#location" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/coffee-cup-wooden-table-with-gradient-photo-style_53876-14314.jpg"
      imageAlt="Mugshot Cafe aesthetic interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="experience" data-section="experience">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Everyone Comes Back"
      metrics={[
        { icon: Coffee, label: "The Coffee", value: "Expertly Brewed" },
        { icon: Sparkles, label: "The Vibe", value: "Cozy Aesthetic" },
        { icon: Utensils, label: "The Food", value: "Daily Favorites" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Spanish Latte", price: "KSh 450", imageSrc: "http://img.b2bpic.net/free-photo/easter-coffee-decorations-still-life_23-2150244118.jpg", imageAlt: "Spanish Latte" },
        { id: "p2", name: "Almond Croissant", price: "KSh 300", imageSrc: "http://img.b2bpic.net/free-photo/plate-with-chicken-salad-near-napkin_23-2147765420.jpg", imageAlt: "Almond Croissant" },
        { id: "p3", name: "Shakshuka", price: "KSh 850", imageSrc: "http://img.b2bpic.net/free-photo/omelette-french-fries-wooden-board-grunge-painted-desk_23-2148113638.jpg", imageAlt: "Shakshuka" },
        { id: "p4", name: "Signature Fries", price: "KSh 400", imageSrc: "http://img.b2bpic.net/free-photo/round-plate-with-fresh-croissants-healthy-macadamia-nuts_114579-36695.jpg", imageAlt: "Signature Fries" },
        { id: "p5", name: "House Mocktail", price: "KSh 550", imageSrc: "http://img.b2bpic.net/free-photo/ginger-cocktail-with-ice-table_140725-2413.jpg", imageAlt: "House Mocktail" },
        { id: "p6", name: "Daily Pastry", price: "KSh 350", imageSrc: "http://img.b2bpic.net/free-photo/pork-chop-chicken-steak_74190-592.jpg", imageAlt: "Daily Pastry" },
      ]}
      title="Signature Picks"
      description="What you’ll probably order (and love). Crafted for flavor."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="I come here almost every day for the coffee and vibe. Hidden cutesy gem, and the best fries in Mombasa."
      rating={5}
      author="Sarah M., Regular Local"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/people-cheering-with-their-cups-tea_23-2148693090.jpg", alt: "Sarah" },
        { src: "http://img.b2bpic.net/free-photo/multicultural-friends-laughing-together-medium-shot_23-2148422484.jpg", alt: "Michael" },
        { src: "http://img.b2bpic.net/free-photo/portrait-pretty-girl-with-long-hair-sittting-table-terrace-cafe-she-wears-white-dress-with-bare-shoulders-red-lipstick-she-has-fun-front-camera_197531-24908.jpg", alt: "Emily" },
        { src: "http://img.b2bpic.net/free-photo/young-beautiful-businesswoman-discussing-work-issues-with-colleagues-by-video-call-using-laptop-coffee-break-courtyard-cafe_574295-3003.jpg", alt: "David" },
        { src: "http://img.b2bpic.net/free-photo/couple-drinking-beverage-cafe-together_53876-26419.jpg", alt: "Jane" },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="location" data-section="location">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Prime Location", description: "Located right on Links Road, easy to access from all corners of Nyali.", imageSrc: "http://img.b2bpic.net/free-photo/pretty-girl_1157-7129.jpg" },
        { title: "Flexible Hours", description: "Early morning coffee to late night cravings, we've got you covered.", imageSrc: "http://img.b2bpic.net/free-photo/waitress-serving-coffee_23-2147985019.jpg" },
        { title: "Seamless Service", description: "Dine-in, quick takeaway, or delivery to your doorstep.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-table-holding-fresh-juice-bottle_23-2148784272.jpg" },
      ]}
      title="Easy to Find. Hard to Leave."
      description="Nyali, Links Road. Open Daily 7:00 AM – 11:00 PM. Dine-in, Takeaway, and Delivery."
      gridVariant="three-columns-all-equal-width"
    />
  </div>

  <div id="insta" data-section="insta">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={["@mugshot_insta", "@mugshot_life", "@nyali_coffee", "@mombasa_eats", "@daily_mugshot", "@latte_art_co", "@mugshot_ritual"]}
      title="Built for your camera"
      description="Loved in real life. Tag us for a feature."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Stay Hooked"
      title="Your new favorite spot is waiting"
      description="Join our ritual. Get exclusive updates, weekly specials, and a first look at our new brews."
      buttons={[
        { text: "Get In Touch", href: "#contact" }
      ]}
      background={{ variant: "plain" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
        logoText="Mugshot Cafe"
        copyrightText="© 2024 Mugshot Cafe. Built in Mombasa."
        socialLinks={[
          { icon: Instagram, href: "#", ariaLabel: "Instagram" },
          { icon: Facebook, href: "#", ariaLabel: "Facebook" },
          { icon: Phone, href: "tel:0700000000", ariaLabel: "Phone" },
          { icon: MapPin, href: "#", ariaLabel: "Location" }
        ]}
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
