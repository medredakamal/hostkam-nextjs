import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      {/* Intro */}
      <section
        id="section-intro"
        className="relative w-full h-full md:min-h-screen bg-cover bg-left md:bg-center md:flex md:flex-col md:justify-center z-10"
        style={{
          backgroundImage: `url("/home_intro.jpg")`,
        }}
      >
        <div className="container mx-auto">
          <div className="middle-text w-full px-4 py-5 md:w-[40vw] md:ml-auto md:p-0">
            <h1 className="font-medium mb-3">{t("intro_title")}</h1>
            {`Because we know that even the most powerful technology needs the
            best specialists. This is why we provide permanent specialized
            telephone technical support, among other things.`}
            <div className="mb-3">
              <br />
              {`Call our technical support team on 01 02 03 04 05.`}
            </div>
            <button className="bg-black text-white py-3 px-5">
              {`Get help now`}
            </button>
          </div>
        </div>
      </section>

      {/* Sections (Hosting) */}
      <section id="section-txtimage2" className="mt-3">
        <div className="box md:flex md:flex-row items-center justify-center container mx-auto p-4">
          <div className="elem-image md:mr-4">
            <div className="mt-3"></div>

            <div className="w-full h-full md:mr-3">
              <Image
                src="/home_hosting.jpg"
                alt="Hosting"
                className="rounded-md"
                objectFit="cover"
                width="550px"
                height="375px"
              />
            </div>
          </div>
          <div className="elem-content max-w-full sm:max-w-sm xl:max-w-lg">
            <h2 className="text-left text-2xl mb-2 pt-4">{`Hosting`}</h2>
            <h3 className="text-left text-3xl m-0 p-0">
              {`Fast, secure and available`}
            </h3>
            <p className="py-3">
              {`Already have a website? Give him the accommodation he deserves.
              With unprecedented load times, a guaranteed 99.9% uptime, and
              expert technical support, your site can't ask for more.`}
            </p>
            <button className="bg-white text-black border-2 border-black mt-3 py-3 px-5">
              {`View Web Hosting Plans`}
            </button>
          </div>
        </div>
      </section>

      {/* Sections (Professional Email) */}
      <section id="section-txtimage2" className="mt-5">
        <div className="box md:flex md:flex-row-reverse items-center justify-center container mx-auto p-4">
          <div className="elem-image md:ml-4">
            <div className="mt-3"></div>

            <div className="w-full h-full md:ml-3">
              <Image
                src="/home_email.jpg"
                alt="Professional Email"
                className="rounded-md"
                objectFit="cover"
                width="550px"
                height="375px"
              />
            </div>
          </div>
          <div className="elem-content max-w-full sm:max-w-sm xl:max-w-lg">
            <h2 className="text-left text-2xl mb-2 pt-4">{`Professional Email`}</h2>
            <h3 className="text-left text-3xl m-0 p-0">
              {`Build on your success`}
            </h3>
            <p className="py-3">
              {`Everyone has an email address, but that doesn't mean all email s
              are created equal. Customers are nine times more likely to choose
              a company that has a professional email address like
              you@ludlow.biz.`}
            </p>
            <button className="bg-white text-black border-2 border-black mt-3 py-3 px-5">
              {`Check email plans`}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="section-faq" className="my-3">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-center text-3xl mb-4 pt-4">
              <span>
                {`Millions of customers trust our domains and web hosting to
                publish their ideas online`}
              </span>
            </h1>
            <h2 className="text-center">
              <span>{`Frequently Asked Questions`}</span>
            </h2>

            <div className="my-5 py-4">
              <div
                tabIndex="0"
                className="collapse w-auto border rounded-box border-base-300 collapse-arrow mb-2"
              >
                <div className="collapse-title text-xl font-medium">
                  {`How does HostKam help small business owners succeed?`}
                </div>
                <div className="collapse-content">
                  <p>
                    {`HostKam offers more than just a platform to build your
                    website. We offer everything you need to create an effective
                    and memorable online presence. You already have a site ? We
                    offer hosting plans that ensure its speed, security and
                    online availability. Our professional email helps you create
                    a professional image, while our online marketing tools help
                    entrepreneurs get started online with a well-researched
                    (SEO) website. HostKam is an all-in-one solution provider
                    for getting your idea online, backed by expert technical
                    support personalized by HostKam Guides.`}
                  </p>
                </div>
              </div>

              <div
                tabIndex="0"
                className="collapse w-auto border rounded-box border-base-300 collapse-arrow mb-2"
              >
                <div className="collapse-title text-xl font-medium">
                  {`Why do I need a website for my business?`}
                </div>
                <div className="collapse-content">
                  <p>
                    {`Even small local businesses that only work within a limited
                    radius need a site. The Internet is the primary destination
                    for consumers looking for a product or service. A website
                    helps every business: to promote and sell their products and
                    services; connect with new customers (and retain existing
                    customers); to enhance their credibility; to compete with
                    larger companies; control their brand and keep their
                    marketing campaign up to date. Even better, a website is
                    much easier and more affordable than you might think.
                    HostKam offers a full suite of online tools for building
                    websites, as well as hosting, email, and marketing options
                    to grow your business on the Internet.`}
                  </p>
                </div>
              </div>

              <div
                tabIndex="0"
                className="collapse w-auto border rounded-box border-base-300 collapse-arrow mb-2"
              >
                <div className="collapse-title text-xl font-medium">
                  {`Why do I need professional email?`}
                </div>
                <div className="collapse-content">
                  <p>
                    {`There are many reasons to switch from your free email to
                    domain email, but here are the top 3: Customers are much
                    more likely to trust a business address, such as
                    contact@kamal.me rather than kamal@notmail.com. Professional
                    Email offers world-class security with state-of-the-art
                    anti-spam and anti-virus filters. Personalized email
                    addresses help you promote your business better. Every time
                    you send an email, you give your web address to existing and
                    potential customers, which encourages them to visit your
                    website.`}
                  </p>
                </div>
              </div>

              <div
                tabIndex="0"
                className="collapse w-auto border rounded-box border-base-300 collapse-arrow mb-2"
              >
                <div className="collapse-title text-xl font-medium">
                  {`Why Get a HostKam Domain Name?`}
                </div>
                <div className="collapse-content">
                  <p>
                    {`HostKam is the largest and most trusted domain registrar in
                    the world. It empowers people like you to come up with
                    creative ideas for online success. It's easy to buy a domain
                    name with our domain finder and domain name generator. With
                    these tools, you will find the perfect website address for
                    your business.`}
                  </p>
                </div>
              </div>

              <div
                tabIndex="0"
                className="collapse w-auto border rounded-box border-base-300 collapse-arrow mb-2"
              >
                <div className="collapse-title text-xl font-medium">
                  {`Why Use HostKam Website Builder?`}
                </div>
                <div className="collapse-content">
                  <p>
                    {`Because it's a quick and easy way to create a website that
                    you and your customers will love. Just type in your idea or
                    industry and HostKam Website Builder will offer you several
                    ready-to-use, professionally designed templates. From there,
                    all you have to do is add your texts and images, and you can
                    quickly launch your site. And with dozens of features, from
                    online appointment scheduling to a full-featured e-commerce
                    system, Website Builder can meet the needs of your business
                    today and as it grows.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
