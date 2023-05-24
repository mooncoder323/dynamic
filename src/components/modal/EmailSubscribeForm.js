import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

export default function EmailSubscribeForm() {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_NEWSLATTER;

  return (
    <>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
    </>
  );
}
