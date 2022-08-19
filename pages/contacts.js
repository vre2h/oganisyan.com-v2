import Image from "next/image";
import { NextSeo } from "next-seo";
import cn from "classnames";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import confImg from "../assets/img/general/conf.jpg";
import { Locales } from "../helpers/locale.helpers";
import { ExternalLink } from "../components/Footer";

export default function Contacts() {
  const router = useRouter();

  return (
    <Layout pageUrl="/contacts">
      <NextSeo
        title="Contact Me – Vrezh Oganisyan"
        canonical="https://oganisyan.com/contacts"
        openGraph={{
          url: "https://oganisyan.com/contacts",
          title: "Contact Me – Vrezh Oganisyan",
          images: [
            {
              url: `https://oganisyan.com/images/seo-image.png`,
              alt: "Contact Me – Vrezh Oganisyan",
            },
          ],
        }}
      />
      <div
        className={cn(
          "flex flex-col justify-center items-start mx-auto mb-16",
          {
            "max-w-2xl": router.locale === Locales.am,
            "max-w-xl": router.locale === Locales.en,
          }
        )}
      >
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-10 text-black dark:text-white">
          Find Me
        </h1>

        <div className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-start flex-col space-y-4">
            <ExternalLink href="tel:37455709079">
              📱 Phone — +374 (55) 70 90 79
            </ExternalLink>
            <ExternalLink href="mailto: hovanisyan.vrezh@gmail.com">
              📧 Email — hovanisyan.vrezh@gmail.com
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/vre2h">
              🔵 LinkedIn — https://www.linkedin.com/in/vre2h
            </ExternalLink>
            <ExternalLink href="https://twitter.com/vre2h">
              🐦 Twitter — https://twitter.com/vre2h
            </ExternalLink>
            <ExternalLink href="https://t.me/vre2h">
              📨 Telegram — https://t.me/vre2h
            </ExternalLink>
            <ExternalLink href="https://facebook.com/vre2h">
              🔵 Facebook — https://facebook.com/vre2h
            </ExternalLink>
            <ExternalLink href="https://github.com/vre2h">
              🐙 GitHub — https://github.com/vre2h
            </ExternalLink>
          </div>
        </div>

        <div className="flex justify-center w-full my-8">
          <Image
            placeholder="blur"
            width="960"
            height="640"
            alt="Vrezh Oganisyan"
            src={confImg}
            priority
          />
        </div>
      </div>
    </Layout>
  );
}
