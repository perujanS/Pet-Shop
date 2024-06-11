"use client";

import React from "react";
import styles from "./ShopProducts.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import style from "./PrivacyPolicy.module.scss";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container>
      <h4 className={`${style.heading} mt-5`}>Introduction</h4>
      <p className={style.para}>
        Welcome to Our Pet Shop. We are committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website, use our services,
        or purchase our products. Please read this privacy policy carefully. If
        you do not agree with the terms of this privacy policy, please do not
        access the site.
      </p>
      <p className={style.para}>Information We Collect</p>
      <p className={style.para}>
        We may collect information about you in a variety of ways. The
        information we may collect on the Site includes:
      </p>
      <h4 className={`${style.heading} `}> 1. Personal Data</h4>
      <p className={style.para}>
        - Personally identifiable information, such as your name, shipping
        address, email address, and telephone number, and demographic
        information, such as your age, gender, hometown, and interests, that you
        voluntarily give to us when you register with the Site or when you
        choose to participate in various activities related to the Site, such as
        online chat and message boards. - If you choose to share data about
        yourself via your profile, online chat, or other interactive areas of
        the Site, please be advised that all data you disclose in these areas is
        public and your data will be accessible to anyone who accesses the Site.
      </p>
      <p className={style.para}>
        - If you choose to share data about yourself via your profile, online
        chat, or other interactive areas of the Site, please be advised that all
        data you disclose in these areas is public and your data will be
        accessible to anyone who accesses the Site.
      </p>
      <h4 className={`${style.heading} `}> 2. Derivative Data</h4>
      <p className={style.para}>
        - Information our servers automatically collect when you access the
        Site, such as your IP address, your browser type, your operating system,
        your access times, and the pages you have viewed directly before and
        after accessing the Site.
      </p>
      <h4 className={`${style.heading} `}> 3. Financial Data</h4>
      <p className={style.para}>
        - Financial information, such as data related to your payment method
        (e.g., valid credit card number, card brand, expiration date) that we
        may collect when you purchase, order, return, exchange, or request
        information about our services from the Site. We store only very
        limited, if any, financial information that we collect. Otherwise, all
        financial information is stored by our payment processor, and you are
        encouraged to review their privacy policy and contact them directly for
        responses to your questions.
      </p>
      <h4 className={`${style.heading} `}> 4. Mobile Device Data </h4>
      <p className={style.para}>
        - Device information, such as your mobile device ID, model, and
        manufacturer, and information about the location of your device, if you
        access the Site from a mobile device.
      </p>
      <h4 className={`${style.heading} `}> Use of Your Information </h4>
      <p className={style.para}>
        Having accurate information about you permits us to provide you with a
        smooth, efficient, and customized experience. Specifically, we may use
        information collected about you via the Site to:
      </p>
      <li className={style.listItem}>- Create and manage your account.</li>
      <li className={style.listItem}>
        - Process your transactions and send you related information, including
        purchase confirmations and invoices.
      </li>
      <li className={style.listItem}>
        - Deliver the products and services you request.
      </li>
      <li className={style.listItem}>
        - Improve the operation of the Site and your customer experience.
      </li>
      <li className={style.listItem}>
        - Send you marketing and promotional communications.
      </li>
      <li className={style.listItem}>
        - Respond to your comments, questions, and requests and provide customer
        service.
      </li>
      <li className={style.listItem}>
        - Monitor and analyze usage and trends to improve your experience with
        the Site.
      </li>
      <li className={style.listItem}>- Notify you of updates to the Site.</li>
      <li className={style.listItem}>
        - Protect against fraudulent transactions, monitor against theft, and
        protect against criminal activity.
      </li>
      <h4 className={`${style.heading} mt-5 `}>
        {" "}
        Disclosure of Your Information
      </h4>
      <p className={style.para}>
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
      </p>
      <h4 className={`${style.heading} `}> 1. By Law or to Protect Rights </h4>
      <p className={style.para}>
        If we believe the release of information about you is necessary to
        respond to legal process, to investigate or remedy potential violations
        of our policies, or to protect the rights, property, and safety of
        others, we may share your information as permitted or required by any
        applicable law, rule, or regulation.
      </p>
      <h4 className={`${style.heading} `}>2. Third-Party Service Providers</h4>
      <p className={style.para}>
        - We may share your information with third parties that perform services
        for us or on our behalf, including payment processing, data analysis,
        email delivery, hosting services, customer service, and marketing
        assistance.
      </p>
      <h4 className={`${style.heading} `}>3. Business Transfers </h4>
      <p className={style.para}>
        - We may share or transfer your information in connection with, or
        during negotiations of, any merger, sale of company assets, financing,
        or acquisition of all or a portion of our business to another company.
      </p>
      <h4 className={`${style.heading} `}> 4. Affiliates </h4>
      <p className={style.para}>
        - We may share your information with our affiliates, in which case we
        will require those affiliates to honor this Privacy Policy. Affiliates
        include our parent company and any subsidiaries, joint venture partners,
        or other companies that we control or that are under common control with
        us.
      </p>
      <h4 className={`${style.heading} `}> 5. Marketing Communications </h4>
      <p className={style.para}>
        - With your consent, or with an opportunity for you to withdraw consent,
        we may share your information with third parties for marketing purposes,
        as permitted by law.
      </p>
      <h4 className={`${style.heading} `}> Security of Your Information </h4>
      <p className={style.para}>
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable, and no method of data transmission can be guaranteed
        against any interception or other type of misuse.
      </p>
      <h4 className={`${style.heading} `}> Policy for Children</h4>
      <p className={style.para}>
        We do not knowingly solicit information from or market to children under
        the age of 13. If we learn that we have collected personal information
        from a child under age 13 without verification of parental consent, we
        will delete that information as quickly as possible. If you believe we
        might have any information from or about a child under 13, please
        contact us.
      </p>
      <h4 className={`${style.heading} `}> Changes to This Privacy Policy </h4>
      <p className={style.para}>
        We may update this Privacy Policy from time to time in order to reflect
        changes to our practices or for other operational, legal, or regulatory
        reasons. We will notify you of any changes by posting the new Privacy
        Policy on our Site. You are advised to review this Privacy Policy
        periodically for any changes.
      </p>
    </Container>
  );
};
export default PrivacyPolicy;
