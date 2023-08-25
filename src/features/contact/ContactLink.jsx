import React from "react";

const ContactLink = () => {
  return (
    <section>
      <div className="py-5">
        <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Experience</h1>
        <p>
          You can reach me out via email at:
          <a
            className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky underline"
            href="mailto:hi@hendraaagil.dev"
          >
            hi@hendraaagil.dev{" "}
          </a>
          or via socials below:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <strong className="mr-1">GitHub</strong>-
            <a
              href="https://github.com/hendraaagil"
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/hendraaagil
            </a>
          </li>
          <li>
            <strong className="mr-1">LinkedIn</strong>-
            <a
              href="https://linkedin.com/in/hendraaagil"
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://linkedin.com/in/hendraaagil
            </a>
          </li>
          <li>
            <strong className="mr-1">Telegram</strong>-
            <a
              href="https://t.me/hendraaagil"
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://t.me/hendraaagil
            </a>
          </li>
          <li>
            <strong className="mr-1">Twitter</strong>-
            <a
              href="https://twitter.com/hendraaagil"
              className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky ml-1 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://twitter.com/hendraaagil
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactLink;
