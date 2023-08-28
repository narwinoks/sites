import React, { useMemo } from "react";
import data from "../../_data/data.json";
import { Link } from "react-router-dom";

const ContactLink = () => {
  const contact = useMemo(() => data.contact, []);
  return (
    <section>
      <div className="py-5">
        <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Experience</h1>
        <p>
          You can reach me out via email at:
          <a
            className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky underline"
            href={`mailto:${contact.email}`}
          >
            {contact.email}{" "}
          </a>
          or via socials below:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <strong className="mr-1">GitHub</strong>-
            <Link
              to={contact.github}
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
            >
              {contact.github}
            </Link>
          </li>
          <li>
            <strong className="mr-1">LinkedIn</strong>-
            <Link
              to={contact.linkedin}
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
            >
              {contact.linkedin}
            </Link>
          </li>
          <li>
            <strong className="mr-1">Telegram</strong>-
            <Link
              to={contact.telegram}
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
            >
              {contact.telegram}
            </Link>
          </li>
          <li>
            <strong className="mr-1">Instagram</strong>-
            <Link
              to={contact.instagram}
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
            >
              {contact.instagram}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactLink;
