import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

import "../globals.css";

const PrivacyPolicy = () => {
  return (
    <div className="w-[60vw] flex flex-col justify-start items-center my-10">
      <h1 className="font-poppins lg:text-5xl mb-14 w-full text-center font-bold">
        Privacy Policy
      </h1>
      <h2 className="text-primary w-full text-left lg:text-2xl mb-4">
        SMART TURKEY TOUR PRIVACY POLICY
      </h2>
      <p>
        When you use our services, you’re trusting us with your information. We
        understand this is a big responsibility and work hard to protect your
        information and put you in control. This Privacy Policy is meant to help
        you understand what information we collect, why we collect it, and how
        you can update, manage, export, and delete your information.
        {/* Privacy Checkup Looking to change your privacy settings? Take the Privacy
        Checkup Effective January 15, 2024 | Archived versions | Download PDF */}
      </p>
      <br />
      <p className="text-left w-full">
        {" "}
        We build a range of services that help millions of people daily to
        explore and interact with the world in new ways.
      </p>
      <br />
      <ul className="text-left w-full">Our services include:</ul>
      <li className="text-left w-full">
        Google apps, sites, and devices, like Search, YouTube, and Google Home.
      </li>
      <li className="text-left w-full">Platforms like the Chrome browser and Android operating system. </li>
      <li className="text-left w-full">
        Products that are integrated into third-party apps and sites, like ads,
        analytics, and embedded Google Maps.
      </li>
      <br />
      <p>
        You can use our services in a variety of ways to manage your privacy.
        For example, you can sign up for a Google Account if you want to create
        and manage content like emails and photos, or see more relevant search
        results. And you can use many Google services when you’re signed out or
        without creating an account at all, like searching on Google or watching
        YouTube videos. You can also choose to browse the web in a private mode,
        like Chrome Incognito mode. And across our services, you can adjust your
        privacy settings to control what we collect and how your information is
        used.
      </p>
      <br />
      <p>
        {" "}
        To help explain things as clearly as possible, we’ve added examples,
        explanatory videos, and definitions for key terms. And if you have any
        questions about this Privacy Policy, you can contact us.{" "}
      </p>
      <br />
      <h3 className="text-left w-full">INFORMATION GOOGLE COLLECTS </h3>
      <br />
      <p className="text-left w-full">
        {" "}
        We want you to understand the types of information we collect as you use
        our services.
      </p>
      <br />
      <p>
        {" "}
        We collect information to provide better services to all our users —
        from figuring out basic stuff like which language you speak, to more
        complex things like which ads you’ll find most useful, the people who
        matter most to you online, or which YouTube videos you might like. The
        information Google collects, and how that information is used, depends
        on how you use our services and how you manage your privacy controls.
      </p>
      <br />
      <p>
        When you’re not signed in to a Google Account, we store the information
        we collect with unique identifiers tied to the browser, application, or
        device you’re using. This allows us to do things like maintain your
        preferences across browsing sessions, such as your preferred language or
        whether to show you more relevant search results or ads based on your
        activity.
      </p>
      <br />
      <p>
        {" "}
        When you’re signed in, we also collect information that we store with
        your Google Account, which we treat as personal information.{" "}
      </p>
      <br />
      <h3>Things you create or provide to us</h3>
      <br />
      <p>
        {" "}
        When you create a Google Account, you provide us with personal
        information that includes your name and a password. You can also choose
        to add a phone number or payment information to your account. Even if
        you aren’t signed in to a Google Account, you might choose to provide us
        with information — like an email address to communicate with Google or
        receive updates about our services.{" "}
      </p>
      <br />
      <p>
        We also collect the content you create, upload, or receive from others
        when using our services. This includes things like email you write and
        receive, photos and videos you save, docs and spreadsheets you create,
        and comments you make on YouTube
      </p>
      <br />
    </div>
  );
};

export default PrivacyPolicy;
