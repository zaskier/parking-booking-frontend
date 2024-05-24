import { Suspense } from "react";

import Link from "next/link";
import RootLayout from "../layout";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <h1 className="font-bold md:text-2xl">Privacy Policy</h1>
      <div>&nbsp;</div>
      We are committed to maintaining the accuracy, confidentiality, and
      security of your personally identifiable information ("Personal
      Information"). As part of this commitment, our privacy policy governs our
      actions as they relate to the collection, use and disclosure of Personal
      Information. Our privacy policy is based upon the values set by the
      Canadian Standards Association's Model Code for the Protection of Personal
      Information and Canada's&nbsp;Personal Information Protection&nbsp;and
      Electronic Documents Act.
      <br />
      <a className="font-bold ">1. Introduction</a>
      We are responsible for maintaining and protecting the Personal Information
      under our control. We have designated an individual or individuals who
      is/are responsible for compliance with our privacy policy.
      <br />
      <a className="font-bold ">2. Identifying Purposes</a>
      We collect, use and disclose Personal Information to provide you with the
      product or service you have requested and to offer you additional products
      and services we believe you might be interested in. The purposes for which
      we collect Personal Information will be identified before or at the time
      we collect the information. In certain circumstances, the purposes for
      which information is collected may be clear, and consent may be implied,
      such as where your name, address and payment information is provided as
      part of the order process.
      <br />
      <a className="font-bold ">3. Consent</a>
      Knowledge and consent are required for the collection, use or disclosure
      of Personal Information except where required or permitted by law.
      Providing us with your Personal Information is always your choice.
      However, your decision not to provide certain information may limit our
      ability to provide you with our products or services. We will not require
      you to consent to the collection, use, or disclosure of information as a
      condition to the supply of a product or service, except as required to be
      able to supply the product or service.
      <br />
      <a className="font-bold "> 4. Limiting Collection</a>
      The Personal Information collected will be limited to those details
      necessary for the purposes identified by us. With your consent, we may
      collect Personal Information from you in person, over the telephone or by
      corresponding with you via mail, facsimile, or the Internet.
      <br />
      <a className="font-bold "> 5. Limiting Use, Disclosure and Retention</a>
      Personal Information may only be used or disclosed for the purpose for
      which it was collected unless you have otherwise consented, or when it is
      required or permitted by law. Personal Information will only be retained
      for the period of time required to fulfil the purpose for which we
      collected it or as may be required by law.&nbsp;(If applicable, include a
      description of any parties&nbsp;with whom you may share Personal
      Information.)
      <br />
      <a className="font-bold "> 6. Accuracy</a>
      Personal Information will be maintained in as accurate, complete and
      up-to-date form as is necessary to fulfil the purposes for which it is to
      be used.
      <br />
      <a className="font-bold "> 7. Safeguarding Customer Information</a>
      Personal Information will be protected by security safeguards that are
      appropriate to the sensitivity level of the information. We take all
      reasonable precautions to protect your Personal Information from any loss
      or unauthorized use, access or disclosure.
      <br />
      <a className="font-bold "> 8. Openness</a>
      We will make information available to you about our policies and practices
      with respect to the management of your Personal Information.
      <br />
      <a className="font-bold "> 9. Customer Access</a>
      Upon request, you will be informed of the existence, use and disclosure of
      your Personal Information, and will be given access to it. You may verify
      the accuracy and completeness of your Personal Information, and may
      request that it be amended, if appropriate. However, in certain
      circumstances permitted by law, we will not disclose certain information
      to you. For example, we may not disclose information relating to you if
      other individuals are referenced or if there are legal, security or
      commercial proprietary restrictions.
      <br />
      <a className="font-bold ">
        {" "}
        10. Handling Customer Complaints and Suggestions
      </a>
      You may direct any questions or enquiries with respect to our privacy
      policy or our practices by
      <br />
      contacting: parkingbooking@gmail.com.
      <br />
      &nbsp;
      <h1 className="font-bold md:text-2xl"> Additional Information</h1>
      <br />
      <a className="font-bold "> Cookies</a>
      <br />A cookie is a small computer file or piece of information that may
      be stored in your computer's hard drive when you visit our websites. We
      may use cookies to improve our website&rsquo;s functionality and in some
      cases, to provide visitors with a customized online experience.
      <br />
      Cookies are widely used and most web browsers are configured initially to
      accept cookies automatically. You may change your Internet browser
      settings to prevent your computer from accepting cookies or to notify you
      when you receive a cookie so that you may decline its acceptance. Please
      note, however, if you disable cookies, you may not experience optimal
      performance of our website.
      <br />
      <br />
      <a className="font-bold "> Other Websites</a> <br />
      Our website may contain links to other third party sites that are not
      governed by this privacy policy. Although we endeavour to only link to
      sites with high privacy standards, our privacy policy will no longer apply
      once you leave our website. Additionally, we are not responsible for the
      privacy practices employed by third party websites. Therefore, we suggest
      that you examine the privacy statements of those sites to learn how your
      information may be collected, used, shared and disclosed.
    </main>
  );
}
