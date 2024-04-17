import "animate.css";
import { SectionHeadings } from "../../SharedComponets/SectionHeadings";

export const FAQ = () => {
  return (
    <div className="bg-[#192137] p-4 my-10">
      <SectionHeadings
        heading="Frequently asked questions"
        subheading="Find answers to commonly asked questions about our luxury properties, services, and purchasing process below. If you have any further inquiries, don't hesitate to contact our knowledgeable team for assistance."
      />
      <div className="my-16 space-y-1">
        <div className="collapse collapse-plus bg-[#192137] animate__animated animate__slideInDown  animate__delay-3s">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there financing options available for purchasing luxury
            properties?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we work with reputable financial institutions that offer
              financing options tailored to the purchase of luxury real estate.
              Our team can provide assistance and guidance throughout the
              financing process.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#192137] animate__animated animate__slideInDown  animate__delay-2s">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do you offer property management services for luxury homeowners?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer comprehensive property management services for
              luxury homeowners who require assistance in maintaining and
              managing their properties. Our services can be customized to meet
              the unique needs of each homeowner.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#192137]  animate__slideInDown animate__animated animate__delay-1s">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How long does it typically take to complete the purchase of a luxury
            property?
          </div>
          <div className="collapse-content">
            <p>
              The timeline for purchasing a luxury property can vary depending
              on factors such as financing arrangements, property inspections,
              and legal processes. Our team will work diligently to facilitate a
              smooth and efficient purchase process for our clients.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#192137]  animate__slideInDown animate__animated">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any additional costs or fees associated with purchasing a
            luxury property?
          </div>
          <div className="collapse-content">
            <p>
              In addition to the purchase price of the property, buyers should
              consider additional costs such as property taxes, maintenance fees
              (for condos or resorts), and closing costs. Our team can provide
              transparency regarding all associated costs during the purchasing
              process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
