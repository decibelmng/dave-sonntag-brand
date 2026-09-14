import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeadingAccent from "./SectionHeadingAccent";

type Entry = {
  outlet: string;
  title: string;
  desc: string;
  year: string;
  href?: string;
  links?: { label: string; href: string }[];
};

const entries: Entry[] = [
  {
    outlet: "Washington Business Journal",
    title: "Largest Meeting and Event Planners",
    desc: "Ranked every year since 2019 — #17 in 2026.",
    year: "2019–2026",
  },
  {
    outlet: "The Telly Awards",
    title: "Five wins for the 2023 National Book Festival",
    desc: "Library of Congress — 2023 National Book Festival: Elliot Page on His Memoir \"Pageboy\".",
    year: "2024",
    links: [
      {
        label: "Gold — Social Responsibility",
        href: "https://www.tellyawards.com/winners/2024/non-broadcast/general-social-responsibility/2023-national-book-festival-elliot-page-on-his-memoir-pageboy/317229/",
      },
      {
        label: "Silver — Biography",
        href: "https://www.tellyawards.com/winners/2024/non-broadcast/general-biography/2023-national-book-festival-elliot-page-on-his-memoir-pageboy/318222",
      },
      {
        label: "Silver — Diversity, Equity & Inclusion",
        href: "https://www.tellyawards.com/winners/2024/non-broadcast/general-dei-diversity-equity-inclusion/2023-national-book-festival-elliot-page-on-his-memoir-pageboy/317862/",
      },
      {
        label: "Silver — Museums & Galleries",
        href: "https://www.tellyawards.com/winners/2024/non-broadcast/general-museums-galleries/2023-national-book-festival-elliot-page-on-his-memoir-pageboy/318021",
      },
      {
        label: "Silver — Social Issues",
        href: "https://www.tellyawards.com/winners/2024/non-broadcast/general-social-issues/2023-national-book-festival-elliot-page-on-his-memoir-pageboy/318120",
      },
    ],
  },
  {
    outlet: "Blue Ocean Global Technology",
    title: "Founder Interview",
    desc: "A conversation on building an event production firm for high-stakes clients.",
    year: "2024",
    href: "https://www.blueoceanglobaltech.com/interview/david-sonntag-founder-and-ceo-at-decibel-events/",
  },
  {
    outlet: "Trade Show News Network",
    title: "Decibel's UpCycling Initiative",
    desc: "How Decibel Events is combatting event textile waste.",
    year: "2019",
    href: "https://www.tsnn.com/news/how-decibel-event-management-combatting-event-textile-waste",
  },
  {
    outlet: "Wake Forest Magazine",
    title: "\"They Can Handle That\"",
    desc: "Feature profile on Dave's career in live event production.",
    year: "2017",
    href: "https://magazine.wfu.edu/2017/06/28/they-can-handle-that/",
  },
  {
    outlet: "Event Marketer",
    title: "Event Technology Awards",
    desc: "Silver, Best Audience Interaction.",
    year: "2014",
    href: "https://www.eventmarketer.com/article/event-technology-awards-2014/",
  },
  {
    outlet: "Peabody Awards",
    title: "Save Our History: Voices of Civil Rights",
    desc: "Peabody Award and News & Documentary Emmy for Outstanding Research, for the broadcast built on the 70-day AARP Voices of Civil Rights bus tour Dave produced. The tour created the nation's largest oral history archive of the civil rights movement, now housed at the Library of Congress.",
    year: "2005–2006",
    href: "https://peabodyawards.com/award-profile/save-our-history-voices-of-civil-rights/",
  },
];

const PressSection = () => {
  return (
    <section id="press" className="py-24 md:py-36 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Press &amp; Recognition</h2>
          <SectionHeadingAccent />
        </motion.div>

        <div className="divide-y divide-border/40 border-t border-b border-border/40">
          {entries.map((entry, i) => {
            const body = (
              <div className="py-6 md:py-7 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group">
                <span className="text-xs tracking-widest uppercase text-primary md:w-24 shrink-0">
                  {entry.year}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-1.5">
                    {entry.outlet}
                    {entry.href && (
                      <ExternalLink size={14} className="text-muted-foreground" strokeWidth={1.5} />
                    )}
                  </h3>
                  <p className="text-sm text-foreground/90 mt-0.5">{entry.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{entry.desc}</p>
                  {entry.links && entry.links.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                      {entry.links.map((l, n) => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-foreground hover:text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {l.label || `Award ${n + 1}`}
                            <ExternalLink size={12} strokeWidth={1.5} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );

            return (
              <motion.div
                key={entry.outlet + entry.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {entry.href ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-foreground/[0.03] transition-colors duration-300 px-2 -mx-2"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="px-2 -mx-2">{body}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
