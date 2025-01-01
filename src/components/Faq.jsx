import faqBg from "../assets/faqBg.svg";

const Faq = () => {
  return (
    <div
      className="pt-[60px] sm:pt-[100px] pb-[60px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${faqBg})` }}
    >
      {/* FAQ Button */}
      <button className="border border-[#848EA033] rounded-[30px] px-[20px] py-[10px] text-[14px] text-[#004CD3] flex items-center justify-center w-[110px] mx-auto mb-[20px] sm:mb-[30px]">
        FAQs
      </button>

      {/* FAQ Container */}
      <div className="relative w-full sm:w-[70%] lg:w-[60%] bg-white  pt-4 pb-4 mt-8 shadow-xl ring-1 ring-gray-900/5 mx-auto rounded-lg">
        {/* FAQ Items */}
        <div className="grid divide-y divide-neutral-200">
          {/* FAQ Item */}
          <div className="py-5">
            <details className="group px-[30px]">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-800">
                <span> What is an AI Agent?</span>
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                An AI agent is a software system that understands language,
                learns from data, and takes actions automatically to achieve
                specific goals. In the hiring world, an AI agent can review
                resumes, interact with candidates, and provide recommendations,
                all without manual oversight. Key capabilities include:
              </p>
              <ul className="list-none mt-3 text-neutral-600">
                <li>
                  - Natural Language Processing to interpret resumes and
                  candidate responses
                </li>
                <li>
                  - Adaptive Learning to improve accuracy and efficiency over
                  time
                </li>
                <li>
                  - Task Automation to handle repetitive or time-consuming steps
                </li>
                <li>
                  - Data-Driven Insights for better predictions and decisions
                </li>
              </ul>
            </details>
          </div>
          <div className="py-5">
            <details className="group px-[30px]">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-800">
                <span>
                  {" "}
                  What are the Benefits of Using Recruito’s AI Agent?
                </span>
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                Recruito’s AI Agent streamlines hiring by automating resume
                screening, scheduling, and candidate evaluations. It saves time,
                improves candidate quality, reduces bias through data-driven
                decisions, and ensures a seamless recruitment process for
                businesses.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group px-[30px]">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-800">
                <span> Next Steps?</span>
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                Springerdata offers a variety of billing options, including
                monthly and annual subscription plans, as well as pay-as-you-go
                pricing for certain services. Payment is typically made through
                a credit card or other secure online payment method.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
