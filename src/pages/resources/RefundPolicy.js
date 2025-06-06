import React from "react";
import "../../partials/_resources.scss";
import Footer from "../../components/footer/footer";

const RefundPolicy = () => {
  return (
    <div className="resources-page refund-policy">
      <div className="resources-content">
        <div className="content-section">
          <div className="policy-content">
            <p className="policy-title">
              <strong>Please read our refund policy before purchasing tickets.</strong>
            </p>
            <p>
              The Lazaridis Students' Society reserves the right to cancel and
              refund any orders made through the online store or in-person for
              our events. While order and ticket cancellations are rare, these
              may occur for reasons including event cancellations, and other
              operational issues that may arise. In such cases, attendees will
              be entitled to a full refund. The LazSoc will contact you via
              e-mail in the rare event that we are forced to cancel your order.
            </p>

            <p>
              At the time of purchase, you will be notified via e-mail with all
              the necessary details regarding your event. Further information
              will follow closer to the event date, and it will be sent to the
              same e-mail address provided by you.
            </p>

            <p>
              Please note no refunds will be processed 24 hours before the start
              of the event other than the rare occasion of an event
              cancellation.
            </p>

            <p>
              <strong>Event Tickets:</strong>
            </p>
            <p>
              Please be advised that should a student choose not to attend an
              event for which they have purchased a ticket, LazSoc will not be
              able to refund the cost of the ticket under any circumstance
              within 24 hours of the event unless stated otherwise. Further,
              event tickets are NOT transferable or re-assignable to other
              individuals unless noted. In other words, the attempted secondary
              sale of event tickets is prohibited, and attendees not on the
              guest list will not be allowed into the venue.
            </p>

              <b><p>
                  To request for a refund, please fill this {' '} <a href="https://forms.gle/1BRV9Xfv7d3C57Gr8"> form </a> </p> out, for any further questions about our policies, please contact us at{' '}
                  <a href="mailto:info@lazsoc.ca">info@lazsoc.ca</a>.
              </p></b>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
